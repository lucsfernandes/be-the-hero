const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();


// app.get('/users', (request, response) => {
//     return response.json({
//         "evento": "Semana Omnistack 11.0",
//         "aluno": "Lucas Fernandes"
//     });
// });

// routes.get('/', (request, response) => {

//     const params = request.query;

//     console.log(params);

//     return response.json({
//         "exemplo": "SOMENTE um exemplo de retorno"
//     });
// });

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes; 