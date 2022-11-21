// Necesario apra el servidor
const express = require('express');
const app = express();
// Importar paquetes necesarios
const dialogflow = require('@google-cloud/dialogflow');
// Necesario para la sesion
const uuid = require('uuid');
// Necesario para guardar la informacion de la API en un .env
// este no se sube a github
require('dotenv').config();
//const express = require('express');
const CREDENTIALS = JSON.parse(process.env.CREDENTIALS)
const PROJECTID = CREDENTIALS.project_id;

// Configuracion para el cliente (autenticcacion)
const CONFIGURATION = {
    credentials: {
        private_key: CREDENTIALS['private_key'],
        client_email: CREDENTIALS['client_email']
    }
}

const getAnswer = async(textUser, projectId = PROJECTID)=> {
    // Identificador unico de sesion
    const sessionId = uuid.v4();
    const sessionClient = new dialogflow.SessionsClient(CONFIGURATION);
    const sessionPath = sessionClient.projectAgentSessionPath(
      projectId,
      sessionId
    );
  
    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          text: textUser,
          languageCode: 'es',
        },
      },
    };
  
    // Mandar consulta 
    // TODO: Eliminar
    const responses = await sessionClient.detectIntent(request);
    console.log('Detected intent');
    const result = responses[0].queryResult;
    console.log(`  Query: ${result.queryText}`);
    console.log(`  Response: ${result.fulfillmentText}`);
    if (result.intent) {
      console.log(`  Intent: ${result.intent.displayName}`);
    } else {
      console.log('  No intent matched.');
    }
    return {
        response: result.fulfillmentText
    };
  }




app.get("/api", async (request, response) => {
    let responseD = await getAnswer("correo tierras");
    response.json({"response": responseD.response});
})

app.listen(5000, ()=>{console.log("Servidor activo en el puerto 5000")})