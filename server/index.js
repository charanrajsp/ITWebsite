import express from "express";
import cors from "cors";
import chatRoutes from "./routes/chatRoutes.js"; // Import chatbot routes

const app = express();
app.use(cors(
  {
    origin:["*"],
    methods:['GET','POST'],
    credentials:true
     },
));
app.use(express.json());


app.use("/chat", chatRoutes); // Set up chatbot routes

// ✅ Default Route (Avoid "Cannot GET /" error)
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

const PORT =  4000; // Default to port 4000

app.listen(PORT);
