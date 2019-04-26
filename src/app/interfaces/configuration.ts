export interface Configuration {
  title: string;
  icon: string;
  inputs: { name?: string, type?: string, pattern?: string, require?: boolean, placeholder?: string }[];
  select?: { name?: string, type?: string, require?: boolean }[];
  url: string;
}

export interface Field {
  name: string;
  type: string;
  pattern?: string;
}
