import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/mdPageLayout'
import BannerLanding from '../components/BannerLanding'

export default (data) => {
  const page = data.data.markdownRemark
  return (
    <Layout>
      <BannerLanding title={page.frontmatter.title} subTitle={page.frontmatter.subTitle} />
      <div className='main'>
        <section>
          <div className='inner' dangerouslySetInnerHTML={{ __html: page.html }} />
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        subTitle
        slug
      }
    }
  }
`
