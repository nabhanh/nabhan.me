import type { SocialObjects } from "./types";

export const SITE = {
  website: "https://nabhanhanif.tech",
  author: "Sat Naing",
  desc: "My personal blog",
  title: "Nabhan Hanif",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/nabhanh",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/nabhanh",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:me@nabhanhanif.tech",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
];
