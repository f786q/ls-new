import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}
import "./scripts/menu";
import "./scripts/skills";
import "./scripts/preview";
import "./scripts/reviews";



