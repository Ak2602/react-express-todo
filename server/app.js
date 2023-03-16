import createError from "http-errors";
import express, { json, urlencoded } from "express";
import path from "path";
import { join } from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
import bodyParser from "body-parser";

import { indexRouter } from "./src/Router/index.js";
import { listRouter } from "./src/Router/listRoute.js";

// import usersRouter from "./routes/users.js";

const app = express();
export const port = process.env.port || 9000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// view engine setup
app.set("views", join(__dirname, "views"));
app.set("view engine", "jade");
app.use(cors());

app.use(logger("dev"));
app.use(json());
app.use(bodyParser.json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/", listRouter);

// app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// app.listen(port, function (err) {
//   if (err) throw err;
//   console.log(`Server running on ${port}`);
// });

export default app;
