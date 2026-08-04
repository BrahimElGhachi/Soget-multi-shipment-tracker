// Import Node.js / Express modules using ES Modules (import / export)
import express from 'express'; // Web framework to build the API and handle routes
import helmet from 'helmet';   // Security middleware to protect the app by setting various HTTP headers
import morgan from 'morgan';   // Logging middleware to log HTTP requests in the console
import cors from 'cors';       // Middleware to enable Cross-Origin Resource Sharing (CORS)
import dotenv from 'dotenv';   // Module to load environment variables from the .env file

// Load environment variables defined in the .env file into process.env
dotenv.config();

// Initialize the Express application
const app = express();

// Define the server port: uses the one from .env, or defaults to 3000
const PORT = process.env.PORT || 3000;

// === MIDDLEWARES ===

// Automatically adds HTTP security headers (e.g., XSS protection, hides Express header)
app.use(helmet());

// Logs incoming HTTP requests in a concise and colorized format in the terminal (e.g., GET / 200 12ms)
app.use(morgan('dev'));

// Allows client applications (e.g., a React/Vue frontend) to communicate with this API
app.use(cors());

// Parses incoming requests with JSON payloads and makes data accessible via req.body
app.use(express.json());

// === ROUTES ===

// Health check endpoint: responds with a JSON message on root '/' to verify API status
app.get('/', (req, res) => {
  res.json({ message: 'Serveur opérationnel ✅' });
});

// === SERVER START ===

// Starts the HTTP server listening for connections on the specified port
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});