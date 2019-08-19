module.exports = {
  siteMetadata: {
    title: `HackSussex 2019`,
    description: `HackSussex 2019 Hackathon website`,
    author: `HackSussex Team`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
          resolve: `gatsby-plugin-typography`,
          options: {
              pathToConfigModule: `src/typography`,
          }
      },
      {
          resolve: `gatsby-plugin-manifest`,
          options: {
              name: `gatsby-starter-default`,
              short_name: `hs-2019`,
              start_url: `/`,
              background_color: `#FFFFFF`,
              icon: `src/images/hs-logo.png`,
          },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
