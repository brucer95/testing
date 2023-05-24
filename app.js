const path = require("path");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "./views/home.html"));
});

app.listen(3050, () => {
	console.log("La aplicación está escuchando en el puerto 3050");
});
