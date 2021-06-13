// STRING Normalize
const normString = (string) => {
  string = string
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  string = string.toLowerCase();

  string = string
    .replace(/œ/g, "oe")
    .replace(/æ/g, "ae")
    .replace(/[']/g, " ");

  return string;
};

export { normString };
