const express = require('express');
const routes = express.Router();

routes.get('/',(request, response)=>{
    const body = request.body;
    console.log(body);
    return response.json({
      evento: 'weslleson souza Silva',
      aluna: 'cris souza silva '
    });
  });

  module.exports = routes;