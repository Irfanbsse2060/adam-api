 const rejectRequest = (res,message="Missing required arguments") =>
{
    res.status(400).send({
        message
    });

}

 const internalServerError = (res, message = "Internal Server Error") => {
    res.status(500).send({
        message
    });
};

module.exports = {
    internalServerError

}