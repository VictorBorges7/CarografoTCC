import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
// import { faker } from "@faker-js/faker";

const app = express();
app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/pages/login.html"));
})

app.get("/cadastro", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/pages/registro.html"));
})

app.get("/pesquisa", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/pages/paginaPesquisa.html"));
})

app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/pages/paginaPrincipal.html"));
})

// Rodar servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});