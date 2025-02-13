"use client";
import { Badge } from "react-bootstrap";
import { useMediaQuery } from "../hooks";
interface Props {
  tags?: string[];
  status?: boolean[];
  className?: string;
  onClick?: (tag: string) => void;
}

const Tags: React.FC<Props> = ({
  tags = [],
  status = [],
  onClick,
  className,
}) => {
  const isMobile = useMediaQuery();
  const getColor = (index: number) => {
    if (status && status[index]) {
      return "bg-warning";
    }

    return className ? className : "bg-info";
  };
  return (
    <div
      className={`d-flex flex-wrap ${isMobile ? "justify-content-center" : ""}`}
    >
      {tags?.map((tag, index) => (
        <Badge
          key={index}
          className={` ${getColor(index)} text-dark me-2 mb-1`}
          onClick={() => onClick?.(tag)}
        >
          {tag.toLowerCase()}
        </Badge>
      ))}
    </div>
  );
};

export default Tags;
