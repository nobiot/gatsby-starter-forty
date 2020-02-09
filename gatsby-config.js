module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter - Forty V2',
    author: 'Hunter Chang',
    description: 'A Gatsby.js V2 Starter based on Forty by HTML5 UP'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png' // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `media`,
        path: `${__dirname}/static/media`
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-transformer-remark',
    `gatsby-plugin-modal-routing`,
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify-cms'
  ]
}
