import { IconType } from "react-icons";

interface Project {
  id?: string;
  title?: string;
  description: string;
  language: string;
  topics: string[];
  clone_url: string;
  live?: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

interface Blog {
  title: string;
  description: string;
  tag_list: string[];
  public_reactions_count: number;
  cover_image: string;
  canonical_url: string;
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

export interface Error {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export type { Project, Tag, TopicOption, LinkType, Blog };
