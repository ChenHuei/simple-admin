import { ListItem } from "../pages/list";

export interface Store {
  isAuthorization: boolean;
  orders: ListItem[];
}
