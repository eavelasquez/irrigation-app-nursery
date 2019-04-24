export interface Configuration {
  title: string;
  icon: string;
  inputs: { name?: string, type?: string, pattern?: string, require?: boolean, placeholder?: string }[];
  url: string;
}

export interface Field {
  name: string;
  type: string;
  pattern?: string;
}
