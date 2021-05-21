export interface Menu {
  title: string;
  link: string;
  isToggle: boolean;
  children?: Omit<Menu, "isToggle">[];
}
