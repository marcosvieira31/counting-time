const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.set('view engine', 'ejs');

app.use(express.static('public'));

const autor = {
    name: "Marcos Vieira",
    email: "marcosnd.31@gmail.com",
    github: "github.com/marcosvieira31",
    ocupation: "Professor de Física e Desenvolvedor Front-end",
    city: "Novo Jardim",
    uf: "TO"
};

app.get("/", function(req, res){
    res.render("pages/index", {autor});
});

app.listen(port, () => {console.log(`O servidor está rodando na porta ${port}`)});

