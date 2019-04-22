 const rejectRequest = (res,message="Missing required arguments") =>
{
    res.status(400).send({
        message
    });

}

 const internalServerError = (res, statusCode=500,message = "Internal Server Error") => {
    if(statusCode===404)
        message='not found'

     else if(statusCode===400)
         message='bad Request'

    else if(statusCode===401)
        message='Un Authorized Request'




     res.status(statusCode).send({
        message
    });
};

module.exports = {
    internalServerError

}