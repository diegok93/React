# Proyecto Demister Brewing

## El sitio es una tienda online de cervezas artesanales.

Consta básicamente de los siguientes componentes:
- Navbar creado utilizando Tailwind:
  . Es totalmente responsive, y en tamaño mobile se convierte en menú timpo hamburguesa.
  . Desde aquí se puede ir a la home, donde están todos los productos, o filtrar por algunos de los tres tipos de categorías.
  . Se visualiza el ícono del cart (Creado con MUI), con la cantidad de elementos actuales que fueron agregados. Clickeando sobre el mismo, te lleva a ver en detalle el carrito.
  
- Itemlist:
  . Aquí se pueden visualizar las cards de todos los productos, con la imagen, nombre, precio, y un botón que permite ver los detalles.
  . La información de los productos, es obtenida mediante un Fetch a la database de firestore.
  . Al hacer un filtro, se muestran solo las cervezas a las que pertenece la categoría elegida.
  
- ItemDetail:
  . Aquí se puede ver en detalle determinado producto, mostrando además el estilo, la descripción y el volumen
  . Selector de cantidad de ítems a agregar al carrito, el cual solo te permite aumentar hasta alcanzar la cantidad que existe en stock.
  
 - Cart:
  . Aquí se visualiza el detalle de todos los productos agregados al carrito y su cantidad, pudiendo eliminar los mismos.
  . Se almacena en un Context, para poder importarlo luego en cualquier lugar del sitio que fuese necesario.
  . Al finalizar la compra, se le solicitará al usuario un nombre y correo electrónico.
  . Al confirmar la compra, se envía la información del Cart y del usuario mediante un push al servidor de Firebase. También se descuenta el stock de cada producto.
