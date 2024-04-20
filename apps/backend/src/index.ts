import express, { Express } from "express";
import dotenv from "dotenv";
import ping from "./routes/ping";
import applicationSubmit from "./routes/application-portal/submit";

dotenv.config();

const app: Express = express();
const port = process.env.PORT

app.use(express.json());

// ROUTES
// Common endpoints:
app.use('/', ping);

// Application Portal specific endpoints:
app.use('/application-portal', applicationSubmit)

app.listen(port, () => {
  console.log(`Server is running - http://localhost:${port}`);
});