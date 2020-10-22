import { Router, Request, Response } from 'express';
import MySQL from '../mysql/mysql';

const router = Router();

router.get('/iris-completo', ( req: Request, res: Response ) => {

    const query = `
        SELECT * FROM clasificacion`;
        //ORDER BY RAND() LIMIT 33

       //const query2 = `SELECT *FROM clasificacion WHERE id Between 1 and 50 ORDER BY RAND() LIMIT 33`;

        MySQL.ejecutarQuery( query, ( err:any, iris: Object[]) => {
            if(err){
                res.status(400).json({
                    ok: false,
                    error: err
                });
            }else{
                res.json({
                    ok: true,
                    iris: iris
                });
            }
        });

});


router.get('/iris-entrenamiento1', ( req: Request, res: Response ) => {



       const query = `SELECT *FROM clasificacion WHERE id Between 1 and 50 ORDER BY RAND() LIMIT 33`;

        MySQL.ejecutarQuery( query, ( err:any, iris: Object[]) => {
            if(err){
                res.status(400).json({
                    ok: false,
                    error: err
                });
            }else{
                res.json({
                    ok: true,
                    iris: iris
                });
            }
        });

});

router.get('/iris-entrenamiento2', ( req: Request, res: Response ) => {

   

       const query = `SELECT *FROM clasificacion WHERE id Between 51 and 100 ORDER BY RAND() LIMIT 33`;

        MySQL.ejecutarQuery( query, ( err:any, iris: Object[]) => {
            if(err){
                res.status(400).json({
                    ok: false,
                    error: err
                });
            }else{
                res.json({
                    ok: true,
                    iris: iris
                });
            }
        });

});


router.get('/iris-entrenamiento3', ( req: Request, res: Response ) => {

   

    const query = `SELECT *FROM clasificacion WHERE id Between 101 and 150 ORDER BY RAND() LIMIT 33`;

     MySQL.ejecutarQuery( query, ( err:any, iris: Object[]) => {
         if(err){
             res.status(400).json({
                 ok: false,
                 error: err
             });
         }else{
             res.json({
                 ok: true,
                 iris: iris
             });
         }
     });

});





router.get('/iris2', ( req: Request, res: Response ) => {

    const query = `
        SELECT id, sepal_length, sepal_width, petal_length, petal_width, '?' FROM clasificacion WHERE id >= 34 and id <= 50 or id >= 84 and id <= 100 || id >= 134 and id <= 150`;

        MySQL.ejecutarQuery( query, ( err:any, iris: Object[]) => {
            if(err){
                res.status(400).json({
                    ok: false,
                    error: err
                });
            }else{
                res.json({
                    ok: true,
                    iris: iris
                });
            }
        });

});

router.get('/iris/:id', ( req: Request, res: Response ) => {
    const id = req.params.id;
    const escapedId = MySQL.instance.cnn.escape( id );

    const query = `
        SELECT * FROM clasificacion
        WHERE id = ${ escapedId }`;

        MySQL.ejecutarQuery( query, ( err:any, iri: Object[]) => {
            if(err){
                res.status(400).json({
                    ok: false,
                    error: err
                });
            }else{
                res.json({
                    ok: true,
                    iri: iri[0]
                });
            }
        });
});

export default router;