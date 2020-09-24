require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

console.log(process.env.NODE_ENV);

module.exports = {
  siteMetadata: {
    title: 'dev blog',
    description: 'gatsbyで作成したブログです',
    author: 'Engineer',
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GATSBY_CONTENTFUL_API_KEY,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        plugins: [],
      },
    },
  ],
};
