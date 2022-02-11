console.log('Server works!');
const express = require('express');
const app = express();
const path = require('path'); //modulo de manejo de directorios independientemente del SO

//configuraciones
app.set('port',3000); //mejor que const PORT = 3000;
app.use(express.static('public')); //<- la carpeta 'public' debe estar en el directorio raíz de la aplicación (el directorio que contiene a start.js)

//rutas
app.get('/', (req,res) => {
    //res.send('Hello world' );
    //console.log(__dirname);
    res.sendFile(path.join(__dirname,'./public/views/index.html'));
});

//listening the server
app.listen(app.get('port'), () => {
    //console.log(`Server listening on port ${PORT}`); 
    console.log('Server listening on port', app.get('port'));
});
