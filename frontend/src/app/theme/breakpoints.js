const sizes = {
  xs: 600,
  sm: 960,
  md: 1280,
  lg: 1920,
};

const above = {};
const below = {};
const between = {};

Object.keys(sizes).forEach((key) => {
  above[key] = `@media (min-width: ${sizes[key]}px)`;
});

Object.keys(sizes).forEach((key) => {
  below[key] = `@media (max-width: ${sizes[key] - 1}px)`;
});

Object.keys(sizes).forEach((key) => {
  between[key] = `@media (min-width: ${sizes[key]}px) and (max-width: ${sizes[key] - 1}px)`;
});

export { above, below, between };
