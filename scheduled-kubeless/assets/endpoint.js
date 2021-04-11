module.exports = {
  handler: async (event, context) => {
    const port = process.env.port;
    const data = await fetch(`host01:${port}`);
    console.log(port);
    console.log(data);
    return data;
  },
};
