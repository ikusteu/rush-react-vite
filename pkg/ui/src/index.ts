import Button from "./Button";
import SVGTest from "./SVGTest";

// Main CSS is imported here to signal the bundler the usage of Tailwind
// in order to generate a PostCSS built css file next to the bundle
import "./main.css";

export * from "./Button";

export { Button };
export { SVGTest };
