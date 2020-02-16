import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'
import Img from 'gatsby-image'
import Modal from 'react-modal'

export default ({ data }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false)

  let teachers = []
  const teacherQueryResult = data.Teachers.edges.filter(edge => edge.node.parent.relativeDirectory === 'teachers')
  const teacherProfileImages = data.TeacherProfileImages.edges
  const teacherThumbImages = data.TeacherThumbImages.edges

  teacherQueryResult.forEach(teacher => {
    // teacher md contains the parent folder '/media/'
    // teacher image from sharpImage does not contain the folder; only the file name
    // so we need to remve the folder name in order to match the file name.
    // Assume there is no duplicate (except accident) so Array.find should be fine
    const profileImage = teacherProfileImages.find(image => image.node.parent.relativePath === teacher.node.frontmatter.image.replace('/media/', ''))
    const thumbImage = teacherThumbImages.find(image => image.node.parent.relativePath === teacher.node.frontmatter.image.replace('/media/', ''))
    const teacherProfile = {
      id: teacher.node.frontmatter.title,
      shortNameJP: teacher.node.frontmatter.shortNameJP,
      longNameEN: teacher.node.frontmatter.longNameEN,
      longNameJP: teacher.node.frontmatter.longNameJP,
      profileImage: profileImage.node.fluid,
      thumbImage: thumbImage.node.fixed,
      language: teacher.node.frontmatter.language,
      comment: teacher.node.frontmatter.comment,
      profile: teacher.node.html
    }
    teachers.push(teacherProfile)
  })

  function openModal (event) {
    setIsOpen(true)
    event.preventDefault()
    // hide the PortalModal that is NOT the one for the teacher clicked
    // Currently this is done via the "id". It's the titile = id of the markdown file.
    // This solution might be fragile...
    // Perhaps changing to the Japanese sirname is OK
    let modalPortalDivs = document.querySelectorAll(`div[class$="ModalPortal"]`)
    modalPortalDivs.forEach(div => {
      if (div.classList[0] === `${event.currentTarget.id}ModalPortal`) {
        div.style.visibility = 'visible' // this is necessary to "toggle" on and off
      } else {
        div.style.visibility = 'hidden'
      }
    })
  }

  function closeModal () {
    setIsOpen(false)
  }

  return (
    <Layout>
      <Helmet>
        <title>JLSの個性豊かな先生たち</title>
        <meta name='description' content='自由が丘ランゲージスクールの個性豊かな先生たち' />
      </Helmet>

      <BannerLanding title='JLSの個性豊かな先生たち' subTitle='先生たちの一言メッセージとプロフィール' />
      {/* TODO need to work on the alignment of text */}
      <div id='main'>
        <div className='inner'>
          <div className='grid-wrapper'>
            {teachers.map(teacher => (
              <div className='col-4' style={{ marginBottom: `4em` }}>
                <a id={teacher.id} href='#' onClick={openModal}>
                  <Img fixed={teacher.thumbImage}
                    style={{ display: `block`, margin: `0 auto` }}
                    imgStyle={{ borderRadius: `100%` }} />
                </a>
                <div style={{ textAlign: `center` }}>
                  <p>{`${teacher.shortNameJP}先生`}<br />
                    <small>{teacher.language}</small>
                  </p>
                </div>
                <div style={{ textAlign: `center` }}>
                  <p>
                    {teacher.comment}
                  </p>
                  <p>
                    <a
                      id={teacher.id}
                      href='#'
                      onClick={openModal}
                    >
                      {`${teacher.shortNameJP}先生`}のプロフィール
                    </a>
                  </p>

                </div>
                <Modal
                  isOpen={modalIsOpen}
                  //  onAfterOpen={afterOpenModal}
                  closeTimeoutMS={300}
                  onRequestClose={closeModal}
                  shouldCloseOnOverlayClick
                  className={'modalContent'}
                  overlayClassName={'modalOverlay'}
                  contentLabel={`${teacher.shortNameJP}先生`}
                  portalClassName={`${teacher.id}ModalPortal`}
                >
                  <h2>{teacher.longNameEN}<br />{teacher.longNameJP}先生</h2>
                  <div>
                    <p>
                      {teacher.language}
                    </p>
                    <Img fluid={teacher.profileImage}
                      style={{ display: `block`, margin: `2em auto` }}
                      imgStyle={{ borderRadius: `4px` }}
                    />
                    <div dangerouslySetInnerHTML={{ __html: teacher.profile }} />
                  </div>
                  <button onClick={closeModal}>プロフィールを閉じる</button>
                </Modal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    TeacherProfileImages: allImageSharp(filter: {original: {src: {regex: "/teacher/"}}}) {
      edges {
        node {
          fluid(
            maxWidth: 400, 
            maxHeight: 400, 
            traceSVG: {
              color: "rgba(212,212,255,0.1)"
            }
            ) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
          parent {
            ... on File {
              relativePath
            }
          }
        }
      }
    }
    TeacherThumbImages: allImageSharp(filter: {original: {src: {regex: "/teacher/"}}}) {
      edges {
        node {
          fixed(
            width: 150, 
            height: 150, 
            traceSVG: {
              color: "rgba(212,212,255,0.1)"
            }
            ) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
          parent {
            ... on File {
              relativePath
            }
          }
        }
      }
    }
    Teachers: allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            image
            language
            longNameEN
            longNameJP
            shortNameJP
            comment
          }
          parent {
            ... on File {
              relativeDirectory
            }
          }
          html
        }
      }
    }
  }
`
