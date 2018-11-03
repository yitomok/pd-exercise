export const ErrorsController = {
    errorHandler (err, req, res, next) {
        if (err.isJoi) {
            res.status(400).json({ message: err.message });
        } else {
            res.sendStatus(400);
        }
    },

    notFoundHandler (req, res) {
        res.sendStatus(404);
    }
}
