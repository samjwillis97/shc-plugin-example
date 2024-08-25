exports["pre-request-hooks"] = {
  auth: (ctx) => {
    console.log("Pre request hook init");
    console.log(ctx);
    return "";
  },
};
