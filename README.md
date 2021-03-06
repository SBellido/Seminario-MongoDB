## Seminario MongoDB - TUDAI - FCE - UNICEN / 2020

### Actividad 1
**1.** Instalar MongoDB en ambiente local.

**2.** Conectarse a MongoDB vía CLI.

**3.** Crear una nueva base de datos llamada futbolfifa.

**4.** Crear una nueva collection llamada players.

**5.** Insertar 5 documentos en la collection players con datos básicos (nombre, apellido, posición, fecha de nacimiento, etc).

**6.** Listar todos los documentos de la collection players.

**7.** Crear otras collections con documentos (ej. teams, games, etc).

Importante: Guardar cada comando y subirlo a un repo/gist en GitHub.

### COMANDOS

> #### Start MongoDB 
> - ***mongod***
>
> #### Connect to MongoDB using CLI 
> - ***mongo***
>
> #### Help command 
> - ***help***
>
> #### Show databases 
> - ***show dbs***
>
> #### Connect or create a database 
> - ***use <dbname>***
>
> #### Create new collection 
> - ***db.createCollection(“countries”)***


> **1.**  Se creó la db para la empresa ***grafeno***.
> 
> **2.**  Dentro de esta se crearon las colecciones ***service***, ***clients*** y ***client***.
>
> **3.**  Se posiciona en collección ***service***
>
> ![MondoDBCompass, Using console](images/created_switched.jpg)
>
> **4.**  Se inserta un documento con el siguiente comando: 
>
> - ***db.clients.insert({brand: 'InvestigAr', nameClient: 'Fabricio Ballarini', city: 'CABA', numberMobile: '005491121580848', fechaEntrega: 'ISODate("2021-03-06")'})***

![MondoDBCompass, Using console](images/result-insert-date.jpg)

**5.**  Después de cargar más documentos sin campo fechaEntrega se usó este comando para agregar dicho campo al resto de los documentos.  

***db.clients.insert({brand: 'InvestigAr', nameClient: 'Fabricio Ballarini', city: 'CABA', numberMobile: '005491121580848', fechaEntrega: 'ISODate("2021-03-06")'})***

![MondoDBCompass, Using console](images/dbFind.jpg)

> **6.**  Se editó el nombre del campo ***fechaEntrega*** por ***dateDelivery***.
>
> - ***db.clients.updateMany( {}, { $rename: { "fechaEntrega": "dateDelivery" } } )***
>
> ![MondoDBCompass, Using console](images/setDate.jpg)

> **7.**  Se muestran todas las colecciones de la db ***grafeno*** con el siguiente comando:
>
> ![MondoDBCompass, Using console](images/showCollection.jpg)

> **8.**  Se eliminó la colección ***client*** con el siguiente comando:
>
> ![MondoDBCompass, Using console](images/dropCollection.jpg)

> **9.**  Se editó el nombre de la colección ***service*** por ***services*** para mantener consistencia y todas las colecciones sean en plural.
>
> - ***db.service.renameCollection('services')***
>
> ![MondoDBCompass, Using console](images/setNameCollection.jpg)

### Actividad 2

**1.** Crear una nueva base de datos de un sistema de streaming de video
(ej. Netflix, Flow, Amazon Prime) que permita almacenar movies.

**2.** Para cada movie, se debería guardar información como título
(String), year (Number), rating (Number, entre 1.0 y 5.0), genre
(String), description (String), actors (Array<String>), country
(String), income (Number), duration (Number).

**3.** Agregar películas usando insert(), insertOne() & insertMany().

**4.** Actualizar películas agregando el field highlighted=true a aquellas
con rating > 4.5.

**5.** Actualizar películas cambiando el genre “drama” por “bored”.

**6.** Borrar todas las películas que tengan más de 30 años.

**7.** Buscar todas las películas argentinas.

**8.** Buscar todas las películas de acción con un buen rating (ej. > 4.0)
que hayan salido los últimos 2 años.

Importante: Guardar cada comando y subirlo a un repo/gist en GitHub.

### COMANDOS

> Crea una nueva base de datos llamada ***stv*** (Streaming Video).
> - ***use stv*** 

> Crea una nueva colección llamada ***netflix***.
> - ***db.createCollection("netflix")***

> Se posiciona sobre la colección llamada ***netflix***
> - ***use netflix***

> Crea una nueva colección llamada ***movies***.
> - ***db.createCollection("movies")***

> ***db.movies.insert( { title: 'Titanic', year: 1998, rating: 4.7, genre: 'Romance', des195cription: 'Una joven de la alta sociedad abandona a su arrogante pretendiente por un artista humilde en el trasatlántico que se hundió durante su viaje inaugural.', country: 'EEUU', ncome:  2., duration: 240 } )***
> - Crea un documento en la colección ***movies***

> Inserta un arreglo en la película con ***title*** 'Titanic'.
> - ***db.movies.update({title: 'Titanic'}, {$push: {actors: {$each:['Leonardo Dicaprio', 'Kate Winslet', 'Billy Zane']}}})***

> Crea un documento en la colección ***movies***
> - ***db.movies.insertOne( { title: 'Guasón', year: 2019, rating: 4.5, genre: 'Crimen', description: 'Arthur Fleck adora hacer reír a la gente, pero su carrera como comediante es un fracaso. El repudio social, la marginación y una serie de trágicos acontecimientos lo conducen por el sendero de la locura y, finalmente, cae en el mundo del crimen.', country: 'EEUU', income:  1.074, duration: 140 } )***

> ***db.movies.insertMany( [ { title: 'Batman inicia' }, { title: 'Martes 13' }, { title: 'El Gran Pez' } ] )***
> - Crea varios documentos en la colección ***movies*** y les agrega el campo ***title***.

![MondoDBCompass, Using console](images/resultMany.jpg)

> Encuentra los documentos donde el campo ***rating*** es mayor a 4.5 ($gt: greater than (>))
> - ***db.movies.find( { rating: { $gt: 4.5 } } )***

> Encuentra los documentos donde el campo ***rating*** es menor a 4.6 ($gt: lower than (<))
> - ***db.movies.find( { rating: { $lt: 4.6 } } )***

> Agrega el campo ***highlighted*** con valor ***true*** a todos los documentos donde el campo ***rating*** es mayor a 4.5 ($gt: greater than (>)).
> - ***db.movies.updateMany( { rating: { $gt: 4.5 } },{ $set: { highlighted: true } } )***

> Actualiza campos ***genre*** de todas las películas de género ***Drama*** cambiándolo a ***Bored***.
> - ***db.movies.updateMany( { genre: "Drama" }, { $set: { genre: "Bored" } } )***

> Elimina todas las películas que tengan más de 30 años.
> - ***db.movies.deleteMany( { year: { $lt: new Date().getFullYear() - 30 } } )***

> Encuentra todos los documentos donde el campo ***country*** es ***'Argentina'***.
> - ***db.movies.find( { country: "Argentina" } )***

> Encuentra todos los documentos donde el campo ***rating*** es mayor a 4.0 y tengan como máximo 2 años.
> - ***db.movies.find( { genre: "Action", rating: { $gt: 4.0 }, year: { $gt: new Date().getFullYear() - 2 } } )***

### Actividad 3

Importante: Guardar cada comando y subirlo a un repo/gist en GitHub.

Utilizar la misma base de datos de películas e insertar varias películas con distinto contenido.

> **1.** Utilizar la misma base de datos de películas e insertar varias
> películas con distinto contenido.
>
> **2.** Listar todas las películas del año 2018.
>
> - ***db.movies.find( { year: 2018 } )***

> **3.** Listar las 10 primeras películas de Hollywood.
>
> - ***db.movies.find( { country: "USA" } ).limit(10).sort( { year: 1 } )***

> **4.** Listar las 5 películas más taquilleras.
>
> - ***db.movies.find().limit(5).sort( { income: -1 } )***

> **5.** Listar el 2do conjunto de 5 películas más taquilleras.
>
> ***db.movies.find().skip(5).limit(5).sort( { income: -1 } )***

> **6.** Repetir query 3 y 4 pero retornando sólo el título y genre.
>
> - ***db.movies.find( { country: "USA" }, { titulo: 1, genre:1, _id:0 } ).limit(10).sort( { year: 1 } )***
>
> - ***db.movies.find( { }, { titulo: 1, genre: 1, _id: 0 } ).limit(5).sort( { income: -1 } )***

> **7.** Mostrar los distintos países que existen en la base de datos.
>
> - ***db.movies.distinct("country")***









