# Configuración del entorno del desarrollo web

## Introducción

Esto es una guía al detalle para crear un entorno web de desarrollo con la instalación de MAMP, creación de un Virtual Host de Apache. También crearemos un respositorio local otro "cloud" en GitHub mediante la terminal de MAC y el editor Visual Studio Code.

## Índice

<ul>
    <li>1. Instalación de MAMP </li>
    <li>2. Configuración Virtual Host de Apache </li>
    <li>3. Instalación de Visual Studio Code </li>
    <li>4. Definición de Workspace </li>
    <li>5. Definición del proyecto </li>
    <li>6. Definición del repositorio local </li>
    <li>7. Creación de repositorio de GitHub </li>
    <li>8. Exportación de la rama "master" local sobre repositorio GitHub </li>
</ul>

## 1. Instalación de MAMP

El acrónimo MAMP se refiere al conjunto de programas software comúnmente usados para desarrollar sitios web dinámicos sobre sistemas operativos Apple Macintosh: Mac OS X (Sistema operativo), Apache (Servidor Web), MySQL (Sistema Gestor de Bases de Datos) y PHP, Perl ó Python (lenguajes de programación usados para la creación de sitios web).

MAMP es una herramienta de desarrollo que te permite probar tu trabajo (páginas web o programación por ejemplo) en tu propio ordenador sin necesidad de tener que acceder a internet.

### Instalación paso a paso:

Para intalar MAMP lo primero que debemos hacer es ir a la página web oficial de MAMP:
https://www.mamp.info/en/

![pagina oficial](/img-mamp/mamp1.png) 

Desde esta pantalla clicaremos "Free download".

![pagina oficial](/img-mamp/mamp2.png)

Eligiremos la opción de Apple en el botón de <code> MAMP & MAMP PRO 5.4 </code>

![pagina oficial](/img-mamp/mamp3.png)

El navegador nos preguntará dónde queremos ubicar este paquete.

![pagina oficial](/img-mamp/mamp4.png)

Una vez lo tengamos deberemos ejecutarlo y seguir los pasos de la instalación.

![pagina oficial](/img-mamp/mamp5.png)

En la <em> Introduction </em> te indica simplemente que debes seguir los pasos clicando continuar.

![pagina oficial](/img-mamp/mamp6.png)

En <em> Read Me </em> te indica que se guardará MAMP en el directorio de <em> Applications </em> y que no debes renombrarlo y cambiarle la ubicación.

También te avisan que si hiciste una instalación previa, priorizarán esta ante otras.

![pagina oficial](/img-mamp/mamp7.png)

En <em> License </em> querrán que aceptes la licencia del programa.

Hay que destacar que MAMP PRO se te instalará automáticamente, posteriormente lo puedes borrar y trabajar únicamente con MAMP.

![pagina oficial](/img-mamp/mamp8.png)

Es importante que cliques <em> Agree </em> de lo contrario no te dejará avanzar.

![pagina oficial](/img-mamp/mamp9.png)

En <em> Installation type </em> te detalla dónde se instalará y cuanto pesará en GB.

![pagina oficial](/img-mamp/mamp10.png)

Te pedirá la contraseña de usuario.

![pagina oficial](/img-mamp/mamp11.png)

Finalmente en <em> Installation </em> se iniciará el proceso de instalación.

Puede durar alrededor de 3-4-5 minutos, dependiendo de la capacidad de la própia máquina utilizada.

![pagina oficial](/img-mamp/mamp13.png)

En <em> Summary </em> te dirá que la instalación se ha instalado correctamente y únicamente debes clicar <code> Close </code>

![pagina oficial](/img-mamp/mamp14.png)

Llegado a este punto, puedes ir a <em> Applications </em> y borrar MAMP PRO.

![pagina oficial](/img-mamp/mamp22.png)

De esta manera tendrás en <em> Applications </em> solo el directorio MAMP y el software MAMP dentro.

![pagina oficial](/img-mamp/mamp23.png)

Accediendo al directorio MAMP podemos llegar al directorio <code> htdocs </code> y ahí tendremos el espacio donde ubicaremos nuestro proyectos.

## 2. Configuración Virtual Host de Apache

Configurar un Virtual Host es la mejor solución para obtener proyectos 100% independientes y mantener la raíz del sitio Web autónoma y poder, de esta manera, crear rutas absolutas de archivos y carpetas.

Para crear un Host Virtual tendremos que seguir los siguientes pasos:

### 2.1. Editamos el archivo httpd.conf

Siguiendo la ruta Applications/MAMP/conf/apache encontraremos el archivo httpd.conf que tendremos que modificar.

![pagina oficial](/img-mamp/apache1.png)

Una vez abierto buscaremos la línea 575 para liberar el comentario que dice:

Include /Applications/MAMP/conf/apache/extra/httpd-vhosts.conf

![pagina oficial](/img-mamp/apache2.png)

De esta forma conseguiremos que el fichero se incorpore y se fusione con el archivo httpd-vhosts.conf.

![pagina oficial](/img-mamp/apache3.png)

Después de hacer esta modificación iremos a buscar el fichero httpd-vhosts.conf, que estará en:
Applications/MAMP/conf/apache/extra.

![pagina oficial](/img-mamp/apache4.png)

Abierto el fichero httpd-vhosts.conf, buscaremos la línea 27 hasta la 34 y lo copiaremos y pegaremos al final del mismo documento.

Una vez hecho esto, de la línea 27 a la 42 (que son dos ejemplos) lo comentaremos porque ya no necesitamos usarlo.

Nota: El comentario es con un # al principio de la línea.

`<VirtualHost *:80>` <br>
   ` ServerAdmin webmaster@pla1.pqtm19.local` <br>
   ` DocumentRoot "/Applications/MAMP/htdocs/pla1.pqtm19.local"` <br>
   ` ServerName pla1.pqtm19.local` <br>
   `ServerAlias www.pla1.pqtm19.local` <br>
   `ErrorLog "logs/pla1.pqtm19.local-error_log"` <br>
   `CustomLog "logs/pla1.pqtm19.local-access_log" common` <br>
`</VirtualHost>` <br>

Para hacer una ruta nueva de cada proyecto hay que cambiar los diferentes espacios con el nombre de tu directorio.

## 3. Instalación de Visual Studio Code

Para instalar Visual Studio Code, lo primero que debemos hacer es acceder a su stio web:
https://code.visualstudio.com

![pagina oficial](/img-mamp/visual-1.png)

Clicaremos el botón de <code> Download for Mac </code>.

![pagina oficial](/img-mamp/visual-2.png)

El navegador nos preguntará donde queremos ubicar el fichero.

![pagina oficial](/img-mamp/visual-3.png)

Hay que descomprimir el archivo ...

![pagina oficial](/img-mamp/visual-4.png)

... y ajecutarlo.

![pagina oficial](/img-mamp/visual-5.png)

Este es el aspecto que tiene el editor.

![pagina oficial](/img-mamp/visual-6.png)

A la izquierda del panel hay un buscador e instalador de pluggins. 
Adjunto esta foto de los que para mi han sido más útiles.

## 4. Definición de Workspace Visual Studio Code

Para crear un nuevo proyecto en Visual Studio Code debemos acceder al menú y clicar *File*, desde aquí accederemos a *New file*.

![pagina oficial](/img-mamp/workspace1.png)

También desde <code> open folder </code>.

![pagina oficial](/img-mamp/workspace2.png)

Posteriormente, en el momento de guardar podremos indicar al editor dónde lo queremos.

## 5. Definición del proyecto

Visual Studio Code visualiza los proyectos en la pestaña _Explorer_.

Para crear un nuevo proyecto, vamos al comando File -> New File. Nos preguntará ubicación del nuevo archivo o proyecto.

![pagina oficial](/img-mamp/new-file-visual-1.png)

![pagina oficial](/img-mamp/new-file-visual-2.png)

## 6. Definición del repositorio local

Podemos trabajar con repositorio local, que es le que tenemos en nuestra ordenador, o con un repositorio remoto, que sería el de GitHub.

`Para crear un nuevo Visual tiene incorporada una terminal que, siguiendo las pautas del punto 8.`

## 7. Creación de repositorio de GitHub

![pagina oficial](/img-mamp/github-1.png)

Desde nuestro perfil de GitHub podemos acceder directamente a el <code> Repositories </code>.

![pagina oficial](/img-mamp/github-2.png)

Desde <code> Repositories </code> debemos clicar en el botón a la derecha <code> New </code>.

![pagina oficial](/img-mamp/github-3.png)

Aquí tendremos que poner un nombre obligatorio a nuestro repositorio y una descripción opcional.

![pagina oficial](/img-mamp/github-4.png)

Por último, abajo de todo, podremos marcar <code> Create a repository </code>.

## 8. Exportación de la rama "master" local sobre repositorio GitHub

### 8.1 Vincular repositorio local con GitHub

Una vez creado el nuevo repositorio para poder vincularlo con nuestro Virtual Host tendremos que inicializarlo desde la terminal.

![pagina oficial](/img-mamp/github2.png)

Para hacerlo tendremos que abrir la terminal y trazar la ruta hasta la carpeta que queremos subir a GitHub.

En nuestro caso estará en Applications/MAMP/htdocs/pla1.pqtm19.local.

![pagina oficial](/img-mamp/github3.png)

Para ejecutarlo primero tipearemos en comandos en la terminal:

 `cd /` <br>
`ls` <br>
`cd Applications` <br>
`ls` <br>
`cd MAMP` <br>
`ls` <br>
`cd htdocs` <br>
`ls` <br>
`cd pla1.pqtm19.local` <br>

![pagina oficial](/img-mamp/github4.png)

Una vez dentro del directorio que deseas vincular, debes seguir las correspondientes indicaciones que GitHub te da.

<code> git init </code>
<code> git add README.md </code>
<code> git commit -m "first commit" </code>
<code> git remote add origin https://github/gersonlaporta/pla1.pqtm19.local </code> 
* Esta ruta variará en función de la ubicación de tu directorio y nombre de tu máquina
<code> git push -u origin master </code>

### 8.2 Push de repositorio local a GitHub

Para hacer un `push` a GitHub, es decir, para hacer una actualización cuando hayas hecho modificaciones debes abrir de nuevo la terminal y seguir los siguientes comandos:

`cd /` <br>
`ls` <br>
`cd Applications` <br>
`ls` <br>
`cd MAMP` <br>
`ls` <br>
`cd htdocs` <br>
`ls` <br>
`cd pla1.pqtm19.local` <br>
`ls` <br>

`git add .` <br>
`git status` <br>
`git commit -m "Ejemplo de comentario"` <br>
`git push origin master` <br>

De esta forma si actualizas el navegador de GitHub verás que aparecen aquellos archivos nuevos o borrados y modificaciones efectuadas.