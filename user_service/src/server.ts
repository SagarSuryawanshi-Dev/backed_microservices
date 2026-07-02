import app from "./app.js";

const port = process.env.PORT || 4040;

async function startServer() {
  try {
    app.listen(port, () => {
      console.log(`User-Service is running on port ${port}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
    process.exit(1);
  }
}


startServer();