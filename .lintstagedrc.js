module.exports = {
    // Run type-check on changes to TypeScript files
    "**/*.ts?(x)": () => "npm type-check",
    // Lint & Prettify TS and JS files
    "**/*.(ts|tsx|js)": (filenames) => [
        `npm lint . ${filenames.join(" ")}`,
        `npm prettier --write ${filenames.join(" ")}`,
    ],
};