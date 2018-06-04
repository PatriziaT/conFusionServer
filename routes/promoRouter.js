const express = require('express');
const bodyParser = require('body-parser');
const promoRouter = express.Router();



promoRouter.use(bodyParser.json());

promoRouter.route('/')
    .all((req,res,next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req,res,next) => {
        res.end('Will send all the promo to you!');
    })
    .post((req, res, next) => {
        res.end('Will add the promo: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /promo');
    })
    .delete((req, res, next) => {
        res.end('Deleting all promos');
    });

promoRouter.route('/:promoId')
    .all((req,res,next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req,res,next) => {
        res.end('Will send ' + req.params.promoId + 'promo to you!');
    })
    .post((req, res, next) => {
        res.end('POST operation not supported on /:promoId');
    })
    .put((req, res, next) => {
        res.statusCode = 200;
        res.write('Will update the promo with new Id: ' + req.params.promoId + ' \n');
        res.end(' updated version' + req.body.name + req.body.description) ;
    })
    .delete((req, res, next) => {
        res.end('Deleting one promo');
    });


module.exports = promoRouter;