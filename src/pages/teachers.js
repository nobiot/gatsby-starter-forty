import React from 'react'
import { graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'
import Img from 'gatsby-image'
import Modal from 'react-modal'

export default ({ data }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false)

  let teachers = []
  const teacherQueryResult = data.Teachers.edges.filter(edge => edge.node.parent.relativeDirectory === 'teachers')
  const teacherImages = data.TeacherImages.edges

  teacherQueryResult.forEach(teacher => {
    // teacher md contains the parent folder '/media/'
    // teacher image from sharpImage does not contain the folder; only the file name
    // so we need to remve the folder name in order to match the file name.
    // Assume there is no duplicate (except accident) so Array.find should be fine
    const image = teacherImages.find(image => image.node.parent.relativePath === teacher.node.frontmatter.image.replace('/media/', ''))
    const teacherProfile = {
      id: teacher.node.frontmatter.title,
      shortNameJP: teacher.node.frontmatter.shortNameJP,
      longNameEN: teacher.node.frontmatter.longNameEN,
      longNameJP: teacher.node.frontmatter.longNameJP,
      image: image.node.fixed,
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
              <div className='col-4'>
                <a id={teacher.id} href='#' onClick={openModal}>
                  <Img fixed={teacher.image}
                    style={{ display: `block`, margin: `0 auto` }}
                    imgStyle={{ borderRadius: `100%` }} />
                </a>

                <div style={{ textAlign: `center` }}>
                  <p>{`${teacher.shortNameJP}先生`}<br />
                    <small>{teacher.language}</small>
                  </p>
                </div>
                <p>{teacher.comment}</p>
                <div style={{ textAlign: `center`, marginBottom: `10px` }}>
                  <Link
                    id={teacher.id}
                    to='#'
                    onClick={openModal}
                  >
                    {`${teacher.shortNameJP}先生`}のプロフィール
                  </Link>
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
                      <Img fixed={teacher.image}
                        style={{ display: `block`, margin: `0 auto` }}
                        imgStyle={{ borderRadius: `4%` }}
                      />

                      <div dangerouslySetInnerHTML={{ __html: teacher.profile }} />
                    </div>
                    <button onClick={closeModal}>close</button>
                  </Modal>
                </div>
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
    TeacherImages: allImageSharp(filter: {original: {src: {regex: "/teacher/"}}}) {
      edges {
        node {
          fixed(width: 150, 
            height: 150, 
            ) {
            ...GatsbyImageSharpFixed
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
    Baldin: imageSharp(original: {src: {regex: "/Baldin/"}}) {
      fixed(width: 130, height: 130) {
        ...GatsbyImageSharpFixed
      }
    }
    Albouy: imageSharp(original: {src: {regex: "/Albouy/"}}) {
      fixed(width: 130, height: 130) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`
