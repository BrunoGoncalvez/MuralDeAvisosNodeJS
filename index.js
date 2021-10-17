const express = require("express");
const path = require("path");
const apiRouter = require("./Routes/api");
const app = express();
const PORT = 3000;


// Primeiro será chamado a rota "/api"
app.use("/api", apiRouter);


// __dirname = C:\Users\Bruno\Desktop\Projetos\FlexBox-Grid\Projeto-Mural-Node
// join irá juntar o __dirname com a pasta public --> __dirname\public
app.use(express.static(path.join(__dirname, "public")));


app.listen(PORT, () => {
    console.log("Servidor Rodando na PORTA: " + PORT);
});








