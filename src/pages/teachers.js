import React from 'react'
import { graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'
import Img from 'gatsby-image'
import Modal from 'react-modal'

export default ({ data }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false)

  const Baldin = {
    id: 'baldin',
    shortNameJP: `バルダン`,
    longNameEN: 'Jean-Michel Bardin',
    longNameJP: 'ジャン－ミッシェル・バルダン',
    language: 'フランス語',
    image: data.Baldin.fixed,
    comment: '<p>「果敢に、さらに果敢に、いつも果敢に。そうすれば、フランス語は話せます。」</p>',
    profile: '<p>長年、フランス語教育の経験を持つ優しい先生。<br />幼児童フランス語教育の経験・研究が豊富だが、大学でもフランス語の教鞭をとる。文学書の購読レッスンは中・上級受講者の賞賛が多い。<br />生物物理学博士。</p>'
  }
  const Albouy = {
    id: 'albouy',
    shortNameJP: `アルブイ`,
    longNameEN: 'Erick Albouy',
    longNameJP: 'エリック・アルブイ',
    language: 'フランス語',
    image: data.Albouy.fixed,
    comment: '<p>「フランス語を学ぶということは、男性名詞、女性名詞母音の優しさ、“R”の発音の難しさの世界に入ることです。特に自分で分かろうとする必要はありません。教えてもらい、進みなさい。そうすれば、全て、うまくいくでしょう。」</p>',
    profile: '<p>フランスのエスプリあふれる先生。長年にわたるフランス語教育の経験を持つ。児童から大人まで教える豊かな知識の持ち主。道元の「正法眼蔵」を長年掛けてフランス語に翻訳、Daisen社（ベルギー、2019年8月 URL: daisen-editions.eu）より出版。</p>'
  }

  let teachers = []
  teachers.push(Albouy)
  teachers.push(Baldin)

  function openModal (event) {
    setIsOpen(true)
    event.preventDefault()
    // hide the PortalModal that is NOT the one for the teacher clicked
    let modalPortalDivs = document.querySelectorAll(`div[class$="ModalPortal"]`)
    modalPortalDivs.forEach(div => {
      if (div.classList[0] === `${event.target.id}ModalPortal`) {
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

      <div id='main'>
        <div className='inner'>
          <div className='grid-wrapper'>
            {teachers.map(teacher => (
              <div className='col-4'>
                <Img fixed={teacher.image}
                  style={{ display: `block`, margin: `0 auto` }}
                  imgStyle={{ borderRadius: `100%` }} />
                <div style={{ textAlign: `center` }}>
                  <p>{`${teacher.shortNameJP}先生`}<br />
                    <small>{teacher.language}</small>
                  </p>
                </div>
                <div dangerouslySetInnerHTML={{ __html: teacher.comment }} />
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
                      <Img fixed={teacher.image}
                        style={{ display: `block`, margin: `0 auto` }}
                        imgStyle={{ borderRadius: `4%` }}
                      />
                      <p>
                        {teacher.language}
                      </p>
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
    allImageSharp(filter: {original: {src: {regex: "/teacher/"}}}) {
      edges {
        node {
          fixed(width: 130, 
            height: 130, 
            ) {
            ...GatsbyImageSharpFixed
          }
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
