export const routes = {
  home: "/",
  experience: "/experience",
  projects: "/projects",
  education: "/education",
  blogs: "/blogs",
  contact: "/contact",
  about: "/about",
};

export const navLinks = [
  { href: routes.home, label: "Home", onClick: () => {} },
  { href: routes.about, label: "About" }, // Gives intro/context early
  { href: routes.experience, label: "Experience" }, // Shows real-world skills next
  { href: routes.education, label: "Education" }, // Then background/academics
  { href: routes.projects, label: "Projects" }, // Proof of work
  { href: routes.blogs, label: "Blogs" }, // Insightful writings last
];
