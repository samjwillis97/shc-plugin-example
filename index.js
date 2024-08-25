exports["pre-request-hooks"] = {
  auth: (ctx) => {
    console.log("Pre request hook init");
    console.log(ctx);
    return "";
  },
};

exports["template-handlers"] = {
  build: () => {
    return "http://localhost:3000";
  },
};
