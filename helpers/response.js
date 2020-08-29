module.exports = (res, obj) => {
  const { message, data = [], status } = obj;
  return res.status(status).json({ message, data });
};
