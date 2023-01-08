const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get("/", function(req, res){
    res.render("pages/index")
})

app.listen(port, () => {console.log(`O servidor está rodando na porta ${port}`)});

