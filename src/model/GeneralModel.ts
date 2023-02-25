const BASE: string = import.meta.env.VITE_BASE;

export const ROUTE = {
  home: BASE + '/home',
  blog: BASE,
  notFound: BASE + '/*',
};
