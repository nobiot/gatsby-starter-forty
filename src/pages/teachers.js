import React from 'react'
import { graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'
import Img from 'gatsby-image'

export default ({ data }) => {
  const images = data.allImageSharp.edges
  const Baldin = data.Baldin.fixed
  const Albouy = data.Albouy.fixed

  console.log(`data: ${data}`)
  return (
    <Layout>
      <Helmet>
        <title>JLSの個性豊かな先生たち</title>
        <meta name='description' content='自由が丘ランゲージスクールの個性豊かな先生たち' />
      </Helmet>

      <BannerLanding title='JLSの個性豊かな先生たち' subTitle='先生たちの一言メッセージとプロフィール' />

      <div id='main'>
        <div className='inner'>
          <Img fixed={Baldin} />
          <Img fixed={Albouy} />
          <div class='grid-wrapper'>
            {images.map(image => (
              <div class='col-4'>
                <Img fixed={image.node.fixed} />
                <p>「フランス語を学ぶということは、男性名詞、女性名詞母音の優しさ、“R”の発音の難しさの世界に入ることです。特に自分で分かろうとする必要はありません。教えてもらい、進みなさい。そうすれば、全て、うまくいくでしょう。」</p>
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
            traceSVG: { color: "#A7DEF6" } ) {
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
