module.exports = (res, obj) => {
  const { message, error, status } = obj;
  console.error(error);
  return res.status(status).json({ message });
};
