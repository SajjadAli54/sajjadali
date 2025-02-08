import { IconType } from "react-icons";

interface Project {
  id: number;
  title: string;
  description: string;
  language: string;
  topics: string[];
  clone_url: string;
  live: string;
  image: string;
}

interface Tag {
  [key: string]: boolean;
}

interface TopicOption {
  value: string;
  label: string;
}

interface LinkType {
  label: IconType;
  url?: string;
  className?: string;
  onClick?: () => void;
}

export type { Project, Tag, TopicOption, LinkType };
