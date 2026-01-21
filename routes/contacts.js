const routes = require('express').Router();
const contactController = require('..//controllers/contacts');

routes.get('/', contactsController.getAllContacts);

routes.get('/:id', contactsController.getContact);

module.exports = routes;