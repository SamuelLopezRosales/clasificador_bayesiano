"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var mysql_1 = __importDefault(require("../mysql/mysql"));
var router = express_1.Router();
router.get('/iris-completo', function (req, res) {
    var query = "\n        SELECT * FROM clasificacion";
    //ORDER BY RAND() LIMIT 33
    //const query2 = `SELECT *FROM clasificacion WHERE id Between 1 and 50 ORDER BY RAND() LIMIT 33`;
    mysql_1.default.ejecutarQuery(query, function (err, iris) {
        if (err) {
            res.status(400).json({
                ok: false,
                error: err
            });
        }
        else {
            res.json({
                ok: true,
                iris: iris
            });
        }
    });
});
router.get('/iris-entrenamiento1', function (req, res) {
    var query = "SELECT *FROM clasificacion WHERE id Between 1 and 50 ORDER BY RAND() LIMIT 33";
    mysql_1.default.ejecutarQuery(query, function (err, iris) {
        if (err) {
            res.status(400).json({
                ok: false,
                error: err
            });
        }
        else {
            res.json({
                ok: true,
                iris: iris
            });
        }
    });
});
router.get('/iris-entrenamiento2', function (req, res) {
    var query = "SELECT *FROM clasificacion WHERE id Between 51 and 100 ORDER BY RAND() LIMIT 33";
    mysql_1.default.ejecutarQuery(query, function (err, iris) {
        if (err) {
            res.status(400).json({
                ok: false,
                error: err
            });
        }
        else {
            res.json({
                ok: true,
                iris: iris
            });
        }
    });
});
router.get('/iris-entrenamiento3', function (req, res) {
    var query = "SELECT *FROM clasificacion WHERE id Between 101 and 150 ORDER BY RAND() LIMIT 33";
    mysql_1.default.ejecutarQuery(query, function (err, iris) {
        if (err) {
            res.status(400).json({
                ok: false,
                error: err
            });
        }
        else {
            res.json({
                ok: true,
                iris: iris
            });
        }
    });
});
router.get('/iris2', function (req, res) {
    var query = "\n        SELECT id, sepal_length, sepal_width, petal_length, petal_width, '?' FROM clasificacion WHERE id >= 34 and id <= 50 or id >= 84 and id <= 100 || id >= 134 and id <= 150";
    mysql_1.default.ejecutarQuery(query, function (err, iris) {
        if (err) {
            res.status(400).json({
                ok: false,
                error: err
            });
        }
        else {
            res.json({
                ok: true,
                iris: iris
            });
        }
    });
});
router.get('/iris/:id', function (req, res) {
    var id = req.params.id;
    var escapedId = mysql_1.default.instance.cnn.escape(id);
    var query = "\n        SELECT * FROM clasificacion\n        WHERE id = " + escapedId;
    mysql_1.default.ejecutarQuery(query, function (err, iri) {
        if (err) {
            res.status(400).json({
                ok: false,
                error: err
            });
        }
        else {
            res.json({
                ok: true,
                iri: iri[0]
            });
        }
    });
});
exports.default = router;
