const jwt = require('jsonwebtoken');
require('dotenv').config();

const users = [

    {
        id: 1,
        username: "Napoleão",
        password: "senha123"
    },

    {
        id: 2,
        username: "Cabral",
        password: "senha321"
    }
]

const accessApi = (req, res) => {

    res.json({ message: 'Você acessou a api'});
}

const postLogin = (req, res) => {

    const { username, password } = req.body;

    const user = users.find(u => u.username === username && u.password === password);
    var token;

    if (user) {

        console.log(user);

        token = jwt.sign({id: user.id}, process.env.JWT_SECRET, 
            {expiresIn: process.env.JWT_EXPIRES_IN});

        res.json({token});
    }

    else {

        return res.status(401).json({ message: "Credenciais inválidas" });
    }
}

const getProtected = (req, res) => {

    res.json({ message: "Você acessou uma rota protegida!"})
}

module.exports = { accessApi, getProtected, postLogin };