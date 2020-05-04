module.exports = {
  siteMetadata: {
    title: `YuFF‘s Gallery`,
    description: `Providing the most amazing photographs for free`,
    keywords:'yuff.ca, yuff,YuFF, yuandiWu, photography, fontend, react, react.js, edmonton, alberta, Photographer',
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'u6l0bk6htkzp',
        accessToken: 'OEMetw49mU201ZNgX04RMVOasK6L2CPyg-H7HvUY0yE'

      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        //icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
