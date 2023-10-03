function  handleFormularioInicioSesionSubmit(event){
    event.preventDefault();
    var usuario = document.querySelector('#txtUsuario').value;
    var password = document.querySelector('#txtPassword').value;
    if(usuario===''||password===''){
        window.alert('Necesitas llenar los campos');
      
    }
    else{
        window.alert('Haz iniciado sesion!');
        
    console.log("Usuario: ", usuario, "   Contraseña: ", password);
    }

}



document
    .querySelector('#formulario-inicio-sesion')
    .addEventListener('submit', handleFormularioInicioSesionSubmit);
