const { CustomAPIError } = require("../errors/custom-error");
const errrorHandlerMiddleWare = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  }
  return res
    .status(500)
    .json({ msg: `Something went wrong, please try again.` });
};

module.exports = errrorHandlerMiddleWare;
