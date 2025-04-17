import { Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

router.get("/api/example", (context) => {
  context.response.body = { message: "Hello from the API!" };
});

export default router;