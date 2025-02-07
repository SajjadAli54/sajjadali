import { IconType } from "react-icons";

interface BadgeProps {
  href: string;
  icon: IconType;
}

function Footer({ badges }: { badges: BadgeProps[] }) {
  return (
    <footer className="py-6">
      <div className="container mx-auto flex justify-center">
        <div className="flex flex-wrap justify-center gap-6">
          {badges.map((badge, index) => (
            <a key={index} href={badge.href} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition">
              <badge.icon size={30} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
