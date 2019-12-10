module.exports = async function(req, res) {
  const postBody = req.body.postBody;
  console.log("Create post object with text: " + postBody);

  const file = req.file("imageFile");

  const options = {
    adapter: require("skipper-better-s3"),
    key: "AKIAI2OGNYERYC6JSXBA",
    secret: "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",
    bucket: "my-fullstack-bucket-images",
    s3params: { ACL: "public-read" },
    onProgress: progress => sails.log.verbose("Upload progress:", progress)
  };

  file.upload(options, async (err, files) => {
    if (err) {
      console.log("error took place niggas");
      return res.serverError(err.toString());
    }

    const location = files[0].extra.Location;

    // //Waterline creation syntax
    const userId = req.session.userId;

    //  eslint-disable-next-line no-undef
    await Post.create({
      text: postBody,
      user: userId,
      imageUrl: location
    }).fetch();

    res.redirect("/post");
  });
};
