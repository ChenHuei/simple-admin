export interface StatusOption {
  code: number | "";
  type: string;
}

export interface ListItem {
  name: string;
  logo: string;
  status: StatusOption;
  date: string;
}
