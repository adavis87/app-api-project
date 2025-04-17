import { Application } from "https://deno.land/x/oak/mod.ts";
import exampleRouter from "./routes/example.ts";

const app = new Application();

// Register routes
app.use(exampleRouter.routes());
app.use(exampleRouter.allowedMethods());

console.log("Server running on http://localhost:8000");
await app.listen({ port: 8000 });