# Proyecto final para la materia de 'Programación web'

## Estructura del proyecto

  El proyecto cuenta con la siguiente estructura:
  
  - helpers (Documento con scripts auxiliares)
  - media (imagenes usadas en la web page)
  - pages (Documentos html y javascript correspondientes a cada página sin la estructura DOCTYPE!)
      - scripts (Documentos js correspondientes a cada html dentro de pages)
  - src (Donde se almacena los documentos relacionados al layout html con la estructura DOCTYPE! y el archivo global .css)
  - Menu.json (Donde se almacenan los datos que se generan dinámicamente en el navbar)

## Funcionamiento del home.html

El documento home.html funciona a modo de layout, en el son inyectadas las demás páginas html
las cuales solo cuentan con una estructura basada en div, los cuales son inyectados en el <section> principal de la página
la finalidad de esta estructura es poder reutilizar los elementos en general con los que cuenta el documento html, e inyectar
el html de los demas documentos con la manipulación del DOM a través de Javascript
  
## Funcionamiento de home.js
  
Cuenta con dos funcionamientos, el primero es generar de forma dinámica el navbar a través de Menu.json, la segunda responsabilidad
de este documento es el generar los eventos para inyectar código html dentro de otras páginas al <section> principal
  
## Funcionamiento de styles.css
  
Funciona en este caso como hoja de estilos general para todas las ventanas, esto debido a que la estructura de las demás páginas es inyectada
sobre el documento principal
  
## Funcionamiento de carpeta pages/
  
En esta carpeta se generan archivos html los cuales van a ser inyectados en el layout principal, se lee el html de estos archivos y es puesto en
el <section> principal de la página
  
  *Autor: Saúl Cañedo Castillo*
  *Fecha: 26 de Mayo del 2021*
  *Materia: Programación Web* 
  *Profesor: Jorge Atempa* 
  
