import type { Props } from "astro";
import IconSALaw from "@/assets/icons/IconSALaw.svg";
import IconLink from "@/assets/icons/IconLink.svg";
import IconMail from "@/assets/icons/IconMail.svg";
import IconGitHub from "@/assets/icons/IconGitHub.svg";
import IconInstagram from "@/assets/icons/IconInstagram.svg";
import IconBrandX from "@/assets/icons/IconBrandX.svg";
import IconLinkedin from "@/assets/icons/IconLinkedin.svg";
import IconWhatsapp from "@/assets/icons/IconWhatsapp.svg";
import IconFacebook from "@/assets/icons/IconFacebook.svg";
import IconTelegram from "@/assets/icons/IconTelegram.svg";
import IconPinterest from "@/assets/icons/IconPinterest.svg";
import { SITE } from "@/config";

interface Social {
  name: string;
  href: string;
  linkTitle: string;
  icon: (_props: Props) => Element;
}

export const SOCIALS: Social[] = [
  {
    name: "ASHS SA Law",
    href: "https://ashssa.github.io/laws/",
    linkTitle: `高師大附中自治法規共用系統`,
    icon: IconSALaw,
  },
  {
    name: "GitHub",
    href: "https://github.com/ashssa/laws-blog",
    linkTitle: `${SITE.title} on GitHub`,
    icon: IconGitHub,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ashs_sa/",
    linkTitle: `高師大附中學生會Instagram`,
    icon: IconInstagram,
  },
  // {
  //   name: "X",
  //   href: "https://x.com/username",
  //   linkTitle: `${SITE.title} on X`,
  //   icon: IconBrandX,
  // },
  // {
  //   name: "LinkedIn",
  //   href: "https://www.linkedin.com/in/username/",
  //   linkTitle: `${SITE.title} on LinkedIn`,
  //   icon: IconLinkedin,
  // },
  {
    name: "Website Link",
    href: "https://sites.google.com/stu.nknush.kh.edu.tw/ashssa/mac",
    linkTitle: `高師大附中學生會官方網站`,
    icon: IconLink,
  },
  {
    name: "Mail",
    href: "mailto:ashsmac+lawblog@gmail.com?subject=法規部落格｜聯絡我們&body=",
    linkTitle: `傳送Email到高師大附中學生會`,
    icon: IconMail,
  },
] as const;

export const SHARE_LINKS: Social[] = [
  {
    name: "WhatsApp",
    href: "https://wa.me/?text=",
    linkTitle: `Share this post via WhatsApp`,
    icon: IconWhatsapp,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/sharer.php?u=",
    linkTitle: `Share this post on Facebook`,
    icon: IconFacebook,
  },
  {
    name: "X",
    href: "https://x.com/intent/post?url=",
    linkTitle: `Share this post on X`,
    icon: IconBrandX,
  },
  {
    name: "Telegram",
    href: "https://t.me/share/url?url=",
    linkTitle: `Share this post via Telegram`,
    icon: IconTelegram,
  },
  {
    name: "Pinterest",
    href: "https://pinterest.com/pin/create/button/?url=",
    linkTitle: `Share this post on Pinterest`,
    icon: IconPinterest,
  },
  {
    name: "Mail",
    href: "mailto:?subject=好文分享：高師大附中學生會自治法規部落格&body=",
    linkTitle: `Share this post via email`,
    icon: IconMail,
  },
] as const;
