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


**1.**  Se creó la db para la empresa ***grafeno***.

**2.**  Dentro de esta se crearon las colecciones ***service***, ***clients*** y ***client***.

**3.**  Se posiciona en collección ***service***

 ![MondoDBCompass, Using console](images/created_switched.jpg)

**4.**  Se inserta un documento con el siguiente comando: 

***db.clients.insert({brand: 'InvestigAr', nameClient: 'Fabricio Ballarini', city: 'CABA', numberMobile: '005491121580848', fechaEntrega: 'ISODate("2021-03-06")'})***

 ![MondoDBCompass, Using console](images/result-insert-date.jpg)

**5.**  Después de cargar más documentos sin campo fechaEntrega se usó este comando para agregar dicho campo al resto de los documentos.  

 ***db.clients.insert({brand: 'InvestigAr', nameClient: 'Fabricio Ballarini', city: 'CABA', numberMobile: '005491121580848', fechaEntrega: 'ISODate("2021-03-06")'})***

![MondoDBCompass, Using console](images/dbFind.jpg)

**6.**  Se editó el nombre del campo ***fechaEntrega*** por ***dateDelivery***.

***db.clients.updateMany( {}, { $rename: { "fechaEntrega": "dateDelivery" } } )***

 ![MondoDBCompass, Using console](images/setDate.jpg)

**7.**  Se muestran todas las colecciones de la db ***grafeno*** con el siguiente comando:

 ![MondoDBCompass, Using console](images/showCollection.jpg)

 **8.**  Se eliminó la colección ***client*** con el siguiente comando:

 ![MondoDBCompass, Using console](images/dropCollection.jpg)

**9.**  Se editó el nombre de la colección ***service*** por 

***services*** para mantener consistencia y todas las colecciones sean en plural.

***db.service.renameCollection('services')***

 ![MondoDBCompass, Using console](images/setNameCollection.jpg)

