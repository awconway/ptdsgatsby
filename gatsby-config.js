module.exports = {
  siteMetadata: {
    title: `Pre-procedure fasting and thirst discomfort`,
    description: `Study overview`,
    author: `Aaron Conway`,
  },
  plugins: [
    {
    resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/*": [
            "cache-control: public, max-age=31536000, immutable"
              ]}, // option to add more headers. `Link` headers are transformed by the below criteria
      }
},
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/images`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-react-bootstrap`,
        short_name: `react-bootstrap`,
        start_url: `/`,
        background_color: `#20232a`,
        theme_color: `#20232a`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "BioRhyme",
              variants: ["300", "400", "500"],
            },
          ],
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /static/,
        },
      },
    },
  ],
}
