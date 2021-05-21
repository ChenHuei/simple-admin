import { ItemValue } from "@/types/pages/add";
import { format } from "date-fns";

export const DEFAULT_VALUE: ItemValue = {
  id: 1,
  name: "",
  logo: "",
  status: {
    code: "",
    type: "",
  },
  date: format(new Date(), "yyyy/M/d"),
};
