module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
        transitionTimingFunction: {
            'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)'
        }
        }
    },
    plugins: [],
};
