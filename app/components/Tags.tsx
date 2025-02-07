interface Props {
    tags?: string[];
    status?: boolean[];
    onClick?: (tag: string) => void;
}

const Tags: React.FC<Props> = ({ tags = [], status = [], onClick }) => {
    return (
        <div className="flex flex-wrap gap-2">
            {tags?.map((tag, index) => (
                <span
                    key={index}
                    className={`px-3 py-1 text-sm font-semibold rounded-md cursor-pointer transition
            ${status?.[index] ? "bg-yellow-500 text-white" : "bg-blue-500 text-white"}
            hover:bg-opacity-80`}
                    onClick={() => onClick?.(tag)}
                >
                    {tag}
                </span>
            ))}
        </div>
    );
};

export default Tags;
