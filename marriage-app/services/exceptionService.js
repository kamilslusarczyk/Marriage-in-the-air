HandleError = function (err, fn) {

    if (err) {
        if (fn)
            fn();

        return res.status(500).json({
            title: "An error occured",
            error: err
        })
    }
};
HandleNullValue = function (entity) {
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
    HandleRequest: function (err, fn, entity) {
        HandleError(err, fn);
        HandleNullValue(entity);
    }
}

module.exports = {
    MongoosHelper: MongoosHelper
}