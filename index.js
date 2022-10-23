const express = require('express');
const app = express();
const mongoose = require('mongoose');
const TareaSchema = require('./modelos/Tarea.js');

const router = express.Router();
app.use(router);
app.use(express.urlencoded({extended: true}));
app.use(express.json());

mongoose.connect('mongodb+srv://diegosh14:DIEGO1401@misionticdiegosh14.bwqz3o5.mongodb.net/TareasBDG36?retryWrites=true&w=majority');

app.listen(3000, () => {

    console.log('Escuchando por puerto 3000');
    
    });

router.get('/', (req, res) => {
    res.send('Inicio de la API');

});

router.post('/tarea', (req, res) => {
    let nuevaTarea = new TareaSchema({
        idTarea: req.body.id,
        nombreTarea: req.body.nombre,
        detalleTarea: req.body.detalle
    
    });
    nuevaTarea.save(function(err, datos){

        if (err) {
            console.log(err);
        }
        else{
         res.send('Tarea almacenada correctamente');
        
        }
     });
        
});