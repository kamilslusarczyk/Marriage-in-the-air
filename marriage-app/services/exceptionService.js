HandleError = function (err, fn, res) {

    if (err) {
        if (fn)
            fn();

        return res.status(500).json({
            title: "An error occured",
            error: err
        })
    }
};
HandleNullValue = function (entity, res) {
    if (!entity) {
        return res.status(500).json({
            title: "Entity not found",
            error: {
                message: "Entity was not found in db"
            }
        })
    }
};

var MongoosHelper = {
    HandleRequest: function (err, fn, entity, res) {
        return HandleError(err, fn, res) ||
        HandleNullValue(entity, res);
    }
}

module.exports = {
    MongoosHelper: MongoosHelper
}