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

export type { Project, Tag, TopicOption };
