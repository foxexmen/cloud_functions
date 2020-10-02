# Autor: Marco Orquera

# Examen Supletorio: Tópicos Especiales

## Tema: EXAMEN FINAL DE TÓPICOS ESPECIALES

#### Enlace: ![youtube]()

Resumen – En este documento se presentan los resultados de la aplicación móvil generada en Ionic con angular utilizando un servicio de Cloud Function de Firebase para generar una consulta de campos específicos, con una interfaz tipo chat.

### I. DESARROLLO EN IONIC
Iniciamos un proyecto con “ionic start ionic-firebase-crud”, el mismo que sería en blanco con angular.

Al tener iniciado el proyecto se procede a crear un proyecto en Firebase que permitirá utilizar como base de datos en la nube y hacer la conexión con el proyecto local de Ionic.
![captura](https://github.com/foxexmen/cloud_functions/blob/main/capturas/1.JPG) 
Se crea una aplicación para obtener las credenciales que me permitirán el acceso con mi proyecto de Ionic

![captura](https://github.com/foxexmen/cloud_functions/blob/main/capturas/2.JPG)
  
Se instala los módulos de Firebase en Ionic con “npm install firebase @angular/fire –sabe” y se agregan las credenciales en los environment del proyecto de Ionic.
 
![captura](https://github.com/foxexmen/cloud_functions/blob/main/capturas/3.JPG)
![captura](https://github.com/foxexmen/cloud_functions/blob/main/capturas/4.JPG)

Luego se procede a hacer un crud que obtendrá y entregará de manera directa datos a Firebase, por lo que se importan los servicios necesarios dentro de la página principal “app” en app.module.ts.
 
![captura](https://github.com/foxexmen/cloud_functions/blob/main/capturas/5.JPG)
 
Se procede a crear las diferentes páginas que se necesitaran para que el crud quedé funcional, se usa el comando “ng generate page (nombre de página)”.

![captura](https://github.com/foxexmen/cloud_functions/blob/main/capturas/6.JPG)

Y se agrega una ruta en app-routing.ts y en el app.component.html para tener en un menú acceso a la nueva página.
 
![captura](https://github.com/foxexmen/cloud_functions/blob/main/capturas/7.JPG) 
![captura](https://github.com/foxexmen/cloud_functions/blob/main/capturas/8.JPG)

 

Se procede a crear los servicios que permitirán abstraer la información desde Firebase, se crea un directorio de servicios con “ng generate service shared/appointment”, aquí es donde se programan las funciones que nos permiten realizar get, post y un delete en los json de Firebase.
 
![captura](https://github.com/foxexmen/cloud_functions/blob/main/capturas/9.JPG) 
![captura](https://github.com/foxexmen/cloud_functions/blob/main/capturas/10.JPG)
![captura](https://github.com/foxexmen/cloud_functions/blob/main/capturas/11.JPG)
 
Luego utilizamos las páginas creadas anteriormente y la página home por defecto para utilizar el crud dentro de Firebase, en la página de crear dato pondremos la parte de ingresar datos y en la home la de visualizar una breve descripción de los datos dentro de Firebase real time database , se programa en el module los recursos necesarios para que funcionen, dentro de los .ts se programa la parte de la lógica, y dentro de los .html se escribe la manera en que será mostrado los .ts.
 

 
![captura](https://github.com/foxexmen/cloud_functions/blob/main/capturas/12.JPG)
![captura](https://github.com/foxexmen/cloud_functions/blob/main/capturas/13.JPG) 
![captura](https://github.com/foxexmen/cloud_functions/blob/main/capturas/14.JPG)
![captura](https://github.com/foxexmen/cloud_functions/blob/main/capturas/15.JPG)
![captura](https://github.com/foxexmen/cloud_functions/blob/main/capturas/16.JPG)
![captura](https://github.com/foxexmen/cloud_functions/blob/main/capturas/17.JPG)
![captura](https://github.com/foxexmen/cloud_functions/blob/main/capturas/18.JPG)

 
Con esto básicamente se tiene un crud funcional, que nos permite interactuar directamente con la Real Time Database de Firebase, ahora se procede a crear una Cloud Function de Firebase para abstraer información específica de la base.

### II.  CLOUD FUNCTION CON FIREBASE
Para la creación de una Firebase Function primero es necesario recurrir a nuestra cuenta de Firebase y al apartado de functions, aquí nos mostrará los comandos que debemos ocupar para instalar las herramientas de Firebase y como iniciarlo en nuestra computadora.
 
![captura](https://github.com/foxexmen/cloud_functions/blob/main/capturas/19.JPG)
![captura](https://github.com/foxexmen/cloud_functions/blob/main/capturas/20.JPG)
 

 

Al ejecutar estos comandos tenemos que elegir el lenguaje que ocuparemos, en este caso se utilizó typescript y nos dará como resultado un directorio con estos archivos.

![captura](https://github.com/foxexmen/cloud_functions/blob/main/capturas/21.JPG)
 
Dentro de estos buscamos el archivo index.ts que es donde se va a programar la Firebase Function, entonces con esta Firebase Function se busca hacer una conexión con la Real Time Database y que abstraiga información de las colecciones de nombre “appointment” , el orderByChild es para que nos haga una tipo de buscqueda en este caso elegimos el campo de nombre, y el equalTo permite ingresar el nombre del campo que necesitamos obtener los detalles de su document.
 
![captura](https://github.com/foxexmen/cloud_functions/blob/main/capturas/22.JPG)

Aquí para realizar pruebas se puede utilizar de manera local esta función antes de mandarla a producción con el Deploy, esto se hace con “Firebase serve”.
 
![captura](https://github.com/foxexmen/cloud_functions/blob/main/capturas/23.JPG)
![captura](https://github.com/foxexmen/cloud_functions/blob/main/capturas/24.JPG)
![captura](https://github.com/foxexmen/cloud_functions/blob/main/capturas/25.JPG)
 
Como se observa la Firebase Function está respondiendo con el documento que justamente se está buscando, por lo que se cumple con uno de los requerimientos de la aplicación, ahora para aplicarlo dentro de Ionic y que se pueda consumir de esta Firebase Function como si de una API se tratara se procede a realizar algunas configuraciones, empezando por hacer un deploy para tener la función directamente en la nube y no de manera local.

 
![captura](https://github.com/foxexmen/cloud_functions/blob/main/capturas/26.JPG)
 

Ahora para mostrar estos datos dentro de la aplicación de Ionic se procede a crear otra página como se lo hizo anteriormente, a esta se la nombro mostrar.

![captura](https://github.com/foxexmen/cloud_functions/blob/main/capturas/27.JPG)

En la parte de mostrar.page.ts se hace el consumo de la Cloud Function creada anteriormente, como tal se hace un get para obtener la información que esta arroja.


![captura](https://github.com/foxexmen/cloud_functions/blob/main/capturas/28.JPG)

En él .html se hace un poco la interfaz con la que va a contar y se programa el botón de enviar para que haga uso de la función programada en page.ts.

![captura](https://github.com/foxexmen/cloud_functions/blob/main/capturas/29.JPG) 

En el module .ts se agrega HttpClientModule, y HttpCliente que es lo que nos permite hacer el enrutamiento y mostrar los datos de la Cloud Function. 
![captura](https://github.com/foxexmen/cloud_functions/blob/main/capturas/30.JPG)

![captura](https://github.com/foxexmen/cloud_functions/blob/main/capturas/31.JPG)

![captura](https://github.com/foxexmen/cloud_functions/blob/main/capturas/32.JPG)

### III.  CONCLUSIONES

El utilizar Firebase Function o como tal una Cloud Function disminuye la carga de trabajo de los componentes en los que se puede estar corriendo una aplicación, esto puedes hacer que una aplicación sea mucho más eficiente y fluida, a su vez en algunos casos puede agregar seguridad a la información de la aplicación gracias a que Firebase cuenta con protecciones para esta información que maneja.