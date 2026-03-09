const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send(`
        <html>
        <head>
            <title>CI/CD Lab 7</title>
            <style>
                body{
                    font-family: Arial;
                    text-align:center;
                    margin-top:100px;
                    background:#f2f2f2;
                }
                h1{
                    color:#2c3e50;
                }
                p{
                    font-size:20px;
                }
            </style>
        </head>
        <body>
            <h1>CI/CD with Docker is Working 🚀</h1>
            <p>Lab Assignment 7 - Node Express Application</p>
        </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
