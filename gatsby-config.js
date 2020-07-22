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
      {
          resolve: 'gatsby-plugin-svgr',
          options: {
              prettier: true,          // use prettier to format JS code output (default)
              svgo: true,              // use svgo to optimize SVGs (default)
              svgoConfig: {
                  plugins: [
                      { removeViewBox: true }, // remove viewBox when possible (default)
                      { cleanupIDs: true },    // remove unused IDs and minify remaining IDs (default)
                  ],
              },
          },
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
      {
          resolve: `gatsby-plugin-purgecss`,
          options: {
              printRejected: true, // Print removed selectors and processed file names
              develop: true, // Enable while using `gatsby develop`
              // tailwind: true, // Enable tailwindcss support
              // whitelist: ['whitelist'], // Don't remove this selector
              // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
              // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
          }
      },
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
    // {
    //   resolve: "gatsby-plugin-react-svg",
    //   options: {
    //     rule: {
    //       include: /static/,
    //     },
    //   },
    // },
  ],
}
