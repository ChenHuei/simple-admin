export const isUrl = (str: string): boolean => {
  return new RegExp(
    /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\]\\.,;:\s@\\"]+\.)+[^<>()[\]\\.,;:\s@\\"]{2,})$/i
  ).test(str);
};

export const isNumber = (str: string | number): boolean => {
  return new RegExp(/^\d+$/).test(str.toString());
};
