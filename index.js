const express = require('express');
const app = express();
const path = require('path');

app.get('/',(request, response)=>{
  return response.json({
    evento: 'weslleson souza Silva',
    aluna: 'cris souza silva lindaa'
  });
});

app.listen(process.env.PORT || 3000);


