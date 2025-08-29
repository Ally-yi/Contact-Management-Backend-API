const { constants } = require("../constants");

const errorHandler = (err, req, res, next) => {
  // 如果响应已经发出，就不要再处理错误了
  if (res.headersSent) {
    return next(err);
  }

  const statusCode = res.statusCode && res.statusCode !== 200 ? res.statusCode : 500;

  res.status(statusCode).json({
    title: getTitle(statusCode),
    message: err.message,
    stackTrace: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

function getTitle(statusCode) {
  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      return "Validation Failed";
    case constants.NOT_FOUND:
      return "Not Found";
    case constants.UNAUTHORIZED:
      return "Unauthorized";
    case constants.FORBIDDEN:
      return "Forbidden";
    case constants.SERVER_ERROR:
    default:
      return "Server Error";
  }
}

module.exports = errorHandler;
