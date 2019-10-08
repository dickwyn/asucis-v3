module.exports = {
  siteMetadata: {
    title: `ASU Coalition of International Students`,
    description: `CIS is a student led organization that acts as a bridge to reflect the needs of international students to university administration. We aim to enhance international student experience, promote cultural diversity and inclusivity in ASU through events and service.`,
    author: `@dickwyn`,
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ["src/scss/App.scss"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/images`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ASU Coalition of International Students`,
        short_name: `ASUCIS`,
        start_url: `/`,
        background_color: `#FFF`,
        theme_color: `#000`,
        display: `standalone`,
        icon: `images/asucis-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `${process.env.GA_TRACKING_ID}`,
      },
    },
  ],
};
