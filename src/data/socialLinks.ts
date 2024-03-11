import {
  faGithub,
  faLinkedin,
  faTelegram,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Strings from "@/constants/strings";
import type { ISocialLinkItem } from "@/types";

const socialLinks: ISocialLinkItem[] = [
  {
    name: Strings.github,
    url: 'https://github.com/code-warrior200',
    icon: faGithub,
    text: Strings.githubUsername,
  },
  {
    name: Strings.linkedIn,
    url: 'https://www.linkedin.com/in/abdulrahman-sadiq-71110a1b1/',
    icon: faLinkedin,
    text: Strings.linkedInUsername,
  },
  {
    name: Strings.instagram,
    url: 'https://www.instagram.com/sir_successful?igsh=OGQ5ZDc2ODk2ZA==',
    icon: faInstagram,
    text: Strings.instagramUsername,
  },
  {
    name: Strings.twitter,
    url: 'https://x.com/ABDULRAHMAN0354?s=09',
    icon: faXTwitter,
    text: Strings.twitterUsername,
  }
];

export default socialLinks;
