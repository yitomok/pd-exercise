// Make express to handle Promise reject from async functions
const wrapAsyncFn = fn =>
    (req, res, next) => {
        fn(req, res, next).catch(next);
    };

export { wrapAsyncFn as default }
