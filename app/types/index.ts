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

interface Blogs {
  type_of: string;
  id: number;
  title: string;
  description: string;
  readable_publish_date: string;
  slug: string;
  path: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  collection_id?: string;
  published_timestamp: string;
  language: string;
  subforem_id?: number;
  positive_reactions_count: number;
  cover_image: string;
  social_image: string;
  canonical_url: string;
  created_at: string;
  edited_at?: string;
  crossposted_at?: string;
  published_at: string;
  last_comment_at: string;
  reading_time_minutes: number;
  tag_list: string[];
  tags: string;
  user: User;
}

interface Post {
  type_of: string;
  id: number;
  title: string;
  description: string;
  readable_publish_date: string;
  slug: string;
  path: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  collection_id?: number;
  published_timestamp: string;
  language: string;
  subforem_id: number;
  positive_reactions_count: number;
  cover_image: string;
  social_image: string;
  canonical_url: string;
  created_at: string;
  edited_at?: string;
  crossposted_at?: string;
  published_at: string;
  last_comment_at: string;
  reading_time_minutes: number;
  tag_list: string;
  tags: string[];
  body_html: string;
  body_markdown: string;
  user: User;
}

interface User {
  name: string;
  username: string;
  twitter_username?: string;
  github_username: string;
  user_id: number;
  website_url: string;
  profile_image: string;
  profile_image_90: string;
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

export type { Project, Tag, TopicOption, LinkType, Blogs as Blog, Post };
