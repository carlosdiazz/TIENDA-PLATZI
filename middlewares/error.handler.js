// Aqui pasaremos los middlewares que voy a usar para controlar los errorres

const logErrors = (err, req, res, next) => {
  console.log(err);
  next(err);
}

function validationErrorHandler (err,req,res,next) {
  if (err.message === "Validation error") {
    res.status(406).json({
      message: err.errors[0].message,
    });
  }
  next(err);
}


const boomErrorHandler = (err, req, res, next) => {

  if(err.isBoom){
    res.status(err.output.statusCode).json({
      statusCode: err.output.statusCode,
      error: err.output.payload.error,
      message: err.output.payload.message
    })
  }else{
    next(err);
  }
}

const errorHandler = (err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack
  })
}

module.exports = {logErrors, errorHandler, boomErrorHandler, validationErrorHandler};
