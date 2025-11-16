import {
  faGithub,
  faLinkedin,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
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
    url: 'https://www.linkedin.com/in/abdulrahman-sadiq-4054262b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    icon: faLinkedin,
    text: Strings.linkedInUsername,
  },
  {
    name: Strings.instagram,
    url: 'https://www.instagram.com/mr.extraordinary__?igsh=MXJ1dTZ3MjVzb2N0bg==',
    icon: faInstagram,
    text: Strings.instagramUsername,
  },
  {
    name: Strings.twitter,
    url: 'https://x.com/ABDULRAHMA27681?t=uU1Si2kSeHzJnbEYYkZfEg&s=09',
    icon: faXTwitter,
    text: Strings.twitterUsername,
  }
];

export default socialLinks;
