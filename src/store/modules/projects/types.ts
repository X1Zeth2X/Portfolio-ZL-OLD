interface Stack {
  name: string;
  icon: string;
  description: string;
}

interface Project {
  name: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  projectLink: string;

  // Summary of what I learned
  learned: string;
  learnSummary: string[];
  roles: string[];
  // Stack or the technologies, frameworks used etc.
  stack: Stack[];
}

export interface ProjectState {
  projects: Project[];
  currentView: Project | null;
  viewDialog: boolean;
}
