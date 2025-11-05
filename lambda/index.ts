import { Hono } from "hono";
import { handle } from "hono/aws-lambda";

const app = new Hono()
  .get("/", (c) => {
    return c.text("Hello, World!")
  })

export const handler = handle(app);
