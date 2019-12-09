export interface DialogState {
  contact: boolean;
  project: boolean;
  selectedProject: Project | null;
}

export interface Project {
  name: string;
  image: any;
  desc: string;
  view: string;
  github: string;
  story: string;
  stack: string[];
}
