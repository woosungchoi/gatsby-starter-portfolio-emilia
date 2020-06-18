require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `우성짱`,
    // Default title of the page
    siteTitleAlt: `우성짱 - 포트폴리오 블로그`,
    // Can be used for e.g. JSONLD
    siteHeadline: `우성짱 - 포트폴리오 블로그`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://portfolio.woosung.vercel.app`,
    // Used for SEO
    siteDescription: `우성짱의 사진을 모아둔 포트폴리오 블로그입니다. 사진을 공유하며 경험을 나누고 싶습니다.`,
    // Will be set on the <html /> tag
    siteLanguage: `ko`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.png`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emilia`,
      // See the theme's README for all available options
      options: {
		    name: `Woosung`,
		    location:`South Korea`,
			formatString:`YYYY.MM.DD`,
			socialMedia: [
            {
              title: `Homepage`,
              href: `https://www.wsgvet.com`
			}
			]
	  },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `우성짱의 포트폴리오 블로그`,
        short_name: `우성짱`,
        description: `우성짱의 사진을 모아둔 포트폴리오 블로그입니다. 사진을 공유하며 경험을 나누고 싶습니다.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3182ce`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
  ],
}
