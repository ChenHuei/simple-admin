import { ListItem } from "@/types/pages";

export interface Status {
  status: string;
  key: string;
  value: number[];
}
export interface ListStatus extends Status {
  list: ListItem[];
}
