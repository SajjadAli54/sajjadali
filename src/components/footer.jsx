import React from "react";

const badges = [
  {
    href: "https://github.com/SajjadAli54/",
    src: "https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white",
    alt: "Github Badge",
  },
  {
    href: "https://www.linkedin.com/in/sajjad-ali-b428b6198/",
    src: "https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white",
    alt: "LinkedIn Badge",
  },
  {
    href: "https://www.youtube.com/channel/UCXfYIIBvk2e4H60BdKoznRA",
    src: "https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white",
    alt: "Youtube Badge",
  },
  {
    href: "https://dev.to/sajjadali54",
    src: "https://img.shields.io/badge/dev.to-0A0A0A?style=for-the-badge&logo=dev.to&logoColor=white",
    alt: "Sajjad Ali's DEV Profile",
  },
];

function Footer() {
  return (
    <footer className="py-3 bg-light">
      <div className="container text-center">
        <p className="mb-3">&copy; 2024 My Portfolio. All rights reserved.</p>
        <div className="row justify-content-center">
          {badges.map((badge, index) => (
            <div
              id="myBadges"
              key={index}
              className="col-3 col-sm-3 col-md-1 d-flex justify-content-center  mb-3"
            >
              <a href={badge.href} target="_blank" rel="noopener noreferrer">
                <img src={badge.src} alt={badge.alt} className="img-fluid" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
