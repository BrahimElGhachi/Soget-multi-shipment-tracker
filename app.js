import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';

const app = express();
const PORT = 3000;

// Sécurise l'application en configurant divers en-têtes HTTP
app.use(helmet());

// Journalise (log) les requêtes HTTP reçues dans le terminal en mode 'dev' (colorisé et concis)
app.use(morgan('dev'));

// Active le CORS (Cross-Origin Resource Sharing) pour permettre à d'autres sites/applications d'appeler cette API
app.use(cors());

// Permet à Express de lire et de comprendre le format JSON reçu dans le corps (body) des requêtes
app.use(express.json());

// Route principale pour vérifier que le serveur fonctionne
app.get('/', (req, res) => {
  res.json({ message: 'Serveur opérationnel ✅' })
});

// Lance le serveur sur le port spécifié
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`)
});