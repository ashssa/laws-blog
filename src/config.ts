export const SITE = {
  website: "https://ashssa.github.io/laws-blog/", // replace this with your deployed domain
  author: "高師大附中學生會",
  profile: "https://www.instagram.com/ashs_sa/",
  desc: "高師大附中學生會自治法規共用系統：設計理念、使用說明、資訊與部落格",
  ashsTitleSlogan: "Blog",
  ashsTitleFull: "ASHS SA Law",
  title: "Blog - ASHS SA Law",
  ogImage: "https://ashssa.github.io/laws/img/Preview%203.png",
  lightAndDarkMode: true,
  postPerIndex: 5,
  postPerPage: 5,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://github.com/ashssa/laws-blog/edit/main/",
  },
  dynamicOgImage: false,
  dir: "ltr", // "rtl" | "auto"
  lang: "zh-TW", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Taipei", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
