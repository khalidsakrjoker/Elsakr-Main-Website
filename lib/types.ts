export interface ToolLinks {
  exe?: string;
  source?: string;
  github?: string;
  live?: string;
}

export interface Tool {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  features?: string[];
  useCases?: string[];
  howToUse?: string[];
  benefits?: string[];
  keywords?: string[];
  category?: string;
  version?: string;
  releaseDate?: string;
  image?: string;
  links: ToolLinks;
  tags?: string[];
}

export interface Project {
  id: number | string;
  title: string;
  description: string;
  image: string;
  link: string;
  tags?: string[];
}

export interface Client {
  name: string;
  logo: string;
  logoDark?: string;
  logoLight?: string;
  link: string;
}

export interface ContentWithTools {
  freeToolsDesktop?: Tool[];
  freeToolsWeb?: Tool[];
  projects?: Project[];
}
