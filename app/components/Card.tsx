import { FaHeart } from "react-icons/fa";
import Tags from "./Tags";

interface Link {
    label: string;
    url: string;
}

interface MyCardProps {
    image?: string;
    title: string;
    description?: string;
    links?: Link[];
    tags?: string[];
    reactions?: number;
}

const MyCard: React.FC<MyCardProps> = ({
    image = "https://via.placeholder.com/300",
    title,
    description,
    links = [],
    tags = [],
    reactions,
}) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">

            {/* Image Section */}
            <div className="relative">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-[150px] object-cover"
                />
            </div>

            {/* Title Section */}
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 text-center">{title}</h3>

                {/* Description */}
                {description && <p className="text-sm text-gray-600 text-center mt-2">{description}</p>}
            </div>

            {/* Tags Section */}
            {tags.length > 0 && (
                <div className="px-4 pb-2">
                    <Tags tags={tags} />
                </div>
            )}

            {/* Footer Section */}
            <div className="flex justify-between items-center px-4 py-3 border-t border-gray-200 bg-gray-50">
                <div className="flex items-center gap-2">
                    {reactions !== undefined && (
                        <a
                            href={links[0]?.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-gray-700 hover:text-red-600 transition"
                        >
                            <FaHeart className="mr-1" size={18} color="red" /> {reactions}
                        </a>
                    )}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                    {links.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-blue-600 hover:text-blue-800 transition"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyCard;
