import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaDev,
  FaEnvelope,
} from "react-icons/fa";

export const badges = [
  {
    href: "mailto:imsajjadali54@gmail.com",
    icon: FaEnvelope,
    className: "text-gray-700 hover:text-red-600 transition",
  },
  {
    href: "https://github.com/SajjadAli54/",
    src: "https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white",
    icon: FaGithub,
    alt: "Github Badge",
    className: "text-gray-700 hover:text-black transition",
  },
  {
    href: "https://www.linkedin.com/in/sajjad-ali-b428b6198/",
    src: "https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white",
    icon: FaLinkedin,
    alt: "LinkedIn Badge",
    className: "text-gray-700 hover:text-blue-600 transition",
  },
  {
    href: "https://www.youtube.com/channel/UCXfYIIBvk2e4H60BdKoznRA",
    src: "https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white",
    icon: FaYoutube,
    alt: "Youtube Badge",
    className: "text-gray-700 hover:text-red-500 transition",
  },
  {
    href: "https://dev.to/sajjadali54",
    src: "https://img.shields.io/badge/dev.to-0A0A0A?style=for-the-badge&logo=dev.to&logoColor=white",
    icon: FaDev,
    alt: "Sajjad Ali's DEV Profile",
    className: "text-gray-700 hover:text-black-200 transition",
  },
];
