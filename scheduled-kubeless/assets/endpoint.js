module.exports = {
  handler: async (event, context) => {
    console.log(`function called at ${new Date().toISOString}`);
    const response = await fetch('<IP_ADDRESS_HERE>:80');
    console.log(response);
    return response;
  },
};
