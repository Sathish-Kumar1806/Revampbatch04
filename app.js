const express = require('express');
const dotenv = require('dotenv');

const env = process.argv[2] || "development";
dotenv.config({ path: `.env.${env}`});

const app = express();

function log(message){
	const time = new Date().toISOString();
	console.log(`[${time}] [${env.toUpperCase()}] ${message}`);
}

const Port = process.env.Port;
const App = process.env.App;

app.get('/', (req,res) => {
	res.send('hello world from '+ App);
});

app.get('/health' ,(req,res) =>{
	log("health check been called");
	res.status(200).json({
		status: "Up"
	});
});

app.listen(Port,() => {
	log("server is running on port" +  Port);
});
