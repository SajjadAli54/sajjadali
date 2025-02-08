"use client";
import { Badge } from "react-bootstrap";
interface Props {
  tags?: string[];
  status?: boolean[];
  onClick?: (tag: string) => void;
}

const Tags: React.FC<Props> = ({ tags = [], status = [], onClick }) => {
  return (
    <div>
      {tags?.map((tag, index) => (
        <Badge
          key={index}
          className={`bg-info text-dark me-2 mb-1 ${
            status && status[index] && "bg-warning"
          }`}
          onClick={() => onClick?.(tag)}
        >
          {tag.toLowerCase()}
        </Badge>
      ))}
    </div>
  );
};

export default Tags;
