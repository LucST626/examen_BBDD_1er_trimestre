## Teoria

5/12, whooops! hay algunos conceptos que se te han escapado, pero no te preocupes, es normal al principio, dar un repaso a las bases te ayudará siempre a entender mejor que haces y por qué lo haces.

## Practica

Está muy bien! Me gusta la estetica y que se separen con algo de color las dos secciones. Todo lo que se pedía funciona bien, tan solo mejoraría lo siguiente:

- La ruta desde donde cargas tu `Script.js` funciona de forma absoluta, si usas una ruta relativa, podrás usar tu página en cualquier ordenador sin tener que cambiar la ruta: `src="./Script.js"` cargará el script desde la misma carpeta que el html, independientemente de donde esté el html.
- Hay algo de inconsistencia a la hora de nombrar clases, ids y algunos ficheros, recuerda ser consistentes dentro de html, y de no nombrar archivos con mayusculas.

## Documentacion

Está bien, pero compartir código en imágenes no es muy cómodo, en markdown podemos usar:

```js
function hola() {
    console.log("hola");
}
```

```html
<h1>Hola</h1>
```

```css
h1 {
    color: red;
}
```

Para compartir cualquier tipo de código, se verá mucho mejor que en una imagen, es más rápido y deja copiar y pegar.

Además, hace que el repositorio sea más pequeño, ya que no tenemos que subir imágenes.

Nota: 8