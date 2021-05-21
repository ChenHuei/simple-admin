export interface Status {
  status: string;
  key: string;
  value: number[];
}

export interface ListItem {
  name: string;
  logo: string;
  status: {
    code: number;
    type: string;
  };
  date: string;
}

export interface ListStatus extends Status {
  list: ListItem[];
}
