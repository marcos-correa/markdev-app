// import express
const express = require('express');
// init express
const app = express();
// name folder dist to build
const appName = 'markdev-app';
// local build will generate files
const outputPath = `${__dirname}/dist/${appName}`;
// set build directory to serve angular content
app.use(express.json());
// redirect requisitions: 
app.get('/*',(req,res)=>{
  res.sendFile(`${outputPath}/index.html`);
});
// listen heroku port
app.listen(process.env.PORT);

