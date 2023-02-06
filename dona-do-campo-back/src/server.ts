import app, { init } from "./app.js";

const port = +process.env.PORT || 5000;

init().then(() => {
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}.`);
  });
});
