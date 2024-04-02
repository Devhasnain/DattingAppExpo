const ErrorHandler = (error, req, res) => {
  let statusCode = error?.statusCode ?? 500;
  return res.status(statusCode).json({
    msg: error?.message,
    success: false,
  });
};

const ResHandler = (data, req, res) => {
  return res.status(200).json({
    success: true,
    ...data,
  });
};

const getMessage = (arr)=>{
  let issue = arr?.issues[0];
  let msg = `Received ${issue?.received} for ${issue?.path[0]}.`;

  return {msg, issue};
}

export {
    ResHandler,
    ErrorHandler,
    getMessage
};
