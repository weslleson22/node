const express = require('express');
const app = express();
const path = require('path');

app.post('/users',(request, response)=>{
    
  return response.json({
    evento: 'weslleson souza Silva',
    aluna: 'cris souza silva '
  });
});

app.listen(process.env.PORT || 3000);