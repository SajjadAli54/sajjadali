import { IconType } from "react-icons";


interface BadgeProps {
  href: string;
  icon: IconType;
  className: string
}

function Footer({ badges }: { badges: BadgeProps[] }) {
  return (
    <footer className="py-6">
      <div className="container mx-auto flex justify-center">
        <div className="flex flex-wrap justify-center gap-6">
          {badges.map((badge, index) => (
            <a key={index} href={badge.href} target="_blank" rel="noopener noreferrer" className={badge.className}>
              <badge.icon size={30} />
            </a>
          ))}
        </div>
      </div>
      {/* Copyright & Branding */}
      <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Sajjad Ali. All Rights Reserved.</p>

    </footer>
  );
}

export default Footer;
