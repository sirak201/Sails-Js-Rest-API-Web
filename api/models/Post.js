module.exports = {
  attributes: {
    text: {
      type: "string",
      required: true
    },

    imageUrl: {
      type: "string"
    },

    user: {
      model: "user"
    }
  }
};
