function guardarCliente() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const direccion = document.getElementById('direccion').value;
    const pais = document.getElementById('pais').value;
  
    console.log('Datos del cliente:');
    console.log('Nombre:', nombre);
    console.log('Apellido:', apellido);
    console.log('Email:', email);
    console.log('Teléfono:', telefono);
    console.log('Dirección:', direccion);
    console.log('País:', pais);
  
    document.getElementById('nombre').value = '';
    document.getElementById('email').value = '';
    document.getElementById('telefono').value = '';
    document.getElementById('direccion').value = '';
    document.getElementById('pais').value = '';
  
    event.preventDefault();
  }
  