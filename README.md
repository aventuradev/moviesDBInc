# Movies Inc 🎬

Prueba técnica para desarrollar aplicación móvil utilizando **React Native** que se conecta a la **Movie Database API** para permitir a los usuarios descubrir y calificar películas en actualmente en cartelera. La aplicación deberá:

*(Obligatorio)* 

[✅] Mostrar una lista de películas que se están reproduciendo actualmente.  

[✅] Permitir al usuario seleccionar una película y ver sus detalles.  

[✅] Permitir al usuario calificar una película.

*(Opcional)*   

[✅] Mostrar una lista de películas recomendadas o similares.

[✅] Permitir al usuario agregar películas a sus "Favoritos".  


## Instalación

1 . Clona o descargua el zip del [repositorio](https://github.com/aventuradev/moviesDBInc.git).

2 . En la carpeta del proyecto instale los módulos con:
```bash
npm install
```
3 . Clonar el archivo `.env.template` a `.env` y configurar la variable de entorno que tendrá como valor tu API Key generado en tu cuenta de [THE MOVIE DB](https://www.themoviedb.org/), de la siguiente manera:

```javascript
MOVIE_DB_API_KEY='TU_API_KEY'
```

o en su defecto, colocar el API KEY en los archivos:
```
./src/config/adapters/genreDB.adapter.ts
./src/config/adapters/movieDB.adapter.ts 
```

4 . Con esto realizado solo resta iniciar el proyecto con el comando:
```bash
npx react-native run-android
```

## Pruebas

Estas pruebas se han diseñado para evaluar la correcta implementación de los elementos clave del sistema, asegurando que las funcionalidades primarias. Para ejecutar las pruebas realizadas y verificar la funcionalidad del código, puedes utilizar el siguiente comando en la carpeta del proyecto:
```bash
npm run test
```

