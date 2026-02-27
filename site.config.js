const CONFIG = {
  // profile setting (required)
  profile: {
    name: "kangking",
    image: "/kangking.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Software Engineer",
    bio: "Deep understanding, respect, and effective communication",
    email: "dlflq11@gmail.com",
    linkedin: "%ED%83%9C%EC%84%B1-%EA%B0%95-95b227336/",
    github: "kangkings",
    instagram: ""
  },
  projects: [
    {
      name: `SSaG`,
      href: "https://github.com/nbc-expert-6/SSaG",
    },
    {
      name: `Dealivery`,
      href: "https://github.com/beyond-sw-camp/be06-fin-SimKids-Dealivery",
    },
    {
      name: `Shoong-Logistics`,
      href: "https://github.com/nbc-expert-6/ShoongLogistics",
    },
    {
      name: `CDC(Oracle to Mysql)`,
      href: "https://github.com/DeepDamHwa/CDC_project",
    },
    {
      name: `Vroom-Vroom`,
      href: "https://github.com/nbc4-T-minjok/vroom-vroom",
    },
    {
      name: `0909`,
      href: "https://github.com/beyond-sw-camp/be06-2nd-4TREES-0909",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Dev-logs",
    description: "welcome to dev-log!",
    scheme: "system", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "https://kangking.vercel.app/",
  since: 2025, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  // revalidateTime: 21600 * 7, // revalidate time for [slug], index
  revalidateTime: 60, // revalidate time for [slug], index
}

module.exports = { CONFIG }
