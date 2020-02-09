import React from 'react'
import { graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'
import Img from 'gatsby-image'
import Modal from 'react-modal'

export default ({ data }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false)
  const customStyles = {
    content: {
      width: '70%',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#2a2f4a',
      zIndex: 9999
    }
  }
  const images = data.allImageSharp.edges
  const Baldin = data.Baldin.fixed
  const Albouy = data.Albouy.fixed

  function openModal (event) {
    setIsOpen(true)
    event.preventDefault()
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
          {/* <Img fixed={Baldin} />
          <Img fixed={Albouy} /> */}
          <div class='grid-wrapper'>
            {images.map(image => (
              <div class='col-4'>
                <Img fixed={image.node.fixed}
                  style={{ display: `block`, margin: `0 auto` }}
                  imgStyle={{ borderRadius: `100%` }} />
                <div style={{ textAlign: `center` }}>
                  <p>アルブイ先生 <br />
                    <small>フランス語</small>
                  </p>
                </div>
                <p>「フランス語を学ぶということは、男性名詞、女性名詞母音の優しさ、“R”の発音の難しさの世界に入ることです。特に自分で分かろうとする必要はありません。教えてもらい、進みなさい。そうすれば、全て、うまくいくでしょう。」</p>
              </div>
            ))}
            <div class='col-4'>
              <Img fixed={Albouy}
                style={{ display: `block`, margin: `0 auto` }}
                imgStyle={{ borderRadius: `100%` }}
              />
              <div style={{ textAlign: `center` }}>
                <p>アルブイ先生 <br />
                  <small>フランス語</small>
                </p>
              </div>
              <p>「フランス語を学ぶということは、男性名詞、女性名詞母音の優しさ、“R”の発音の難しさの世界に入ることです。特に自分で分かろうとする必要はありません。教えてもらい、進みなさい。そうすれば、全て、うまくいくでしょう。」</p>
              <div style={{ textAlign: `center` }}>
                <Link
                  to='teachers'
                  onClick={openModal}
                >
                  アルブイ先生のプロフィール
                </Link>
                <Modal
                  isOpen={modalIsOpen}
                  //  onAfterOpen={afterOpenModal}
                  onRequestClose={closeModal}
                  style={customStyles}
                  contentLabel='Example Modal'
                >

                  <h2>Erick Albouy <br /> エリック・アルブイ先生</h2>
                  <div>
                    <Img fixed={Albouy}
                      style={{ display: `block`, margin: `0 auto` }}
                      imgStyle={{ borderRadius: `4%` }}
                    />
                    <p>
                      フランス語
                    </p>
                    <p>
                      フランスのエスプリあふれる先生。長年にわたるフランス語教育の経験を持つ。児童から大人まで教える豊かな知識の持ち主。
                      道元の「正法眼蔵」を長年掛けてフランス語に翻訳、Daisen社（ベルギー、2019年8月 URL: daisen-editions.eu）より出版。
                    </p>
                  </div>
                  <button onClick={closeModal}>close</button>
                </Modal>
              </div>
            </div>
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
