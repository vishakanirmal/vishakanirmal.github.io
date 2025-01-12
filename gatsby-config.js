/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Vishaka Nirmal`,
    description: `Portfolio`,
    author: `@Vishaka Nirmal`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    // Image handling plugins
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    // Filesystem source plugins
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },

    // MDX support
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`], // Specifies the file extensions the plugin will process
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              withWebp: true,
              tracedSVG: true,
            },
          },
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              heading: `Table of Contents`,
              tight: true,
            },
          },
          {
            resolve: `gatsby-remark-static-images`,
          },
        ],
      },
    },

    // Markdown processing with Remark
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              withWebp: true,
              tracedSVG: true,
            },
          },
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              heading: `Table of Contents`,
              tight: true,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: `case-study-toc`,
              maintainCase: false,
              removeAccents: true,
              icon: false,
              isIconAfterHeader: false,
            },
          },
          {
            resolve: `gatsby-remark-static-images`,
          },
        ],
      },
    },

    // Google Fonts plugin
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Karla\:300,400,400i,700`,
        ],
        display: 'swap',
      },
    },

    // Google Analytics plugin
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `G-GL1V3HMV74`, // Replace with your tracking ID
        head: true, // Add the Google Analytics script in the <head> of your pages
        anonymize: true, // Anonymize IP addresses
      },
    },
  ],
}