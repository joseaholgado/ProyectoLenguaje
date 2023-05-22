// Función para cargar y analizar el archivo XML
function cargarXML() {
    // Crear un nuevo objeto XMLHttpRequest
    var xmlhttp = new XMLHttpRequest();
  
    // Especificar la ruta a tu archivo XML
    var archivoXML = './Cancion.xml';
  
    // Realizar una solicitud GET para obtener el archivo XML
    xmlhttp.open('GET', archivoXML, true);
  
    // Establecer el tipo de respuesta a 'document' para analizar el XML
    xmlhttp.responseType = 'document';
  
    // Función de devolución de llamada para manejar los datos XML
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status === 200) {
        // Obtener el documento XML parseado
        var xmlDoc = xmlhttp.responseXML;
  
        // Acceder a los elementos y datos XML según sea necesario
        var titulo = xmlDoc.getElementsByTagName('titulo')[0].textContent;
        var contenido = xmlDoc.getElementsByTagName('contenido')[0].textContent;
  
        // Actualizar el contenido del div con los datos XML
        document.getElementById('xmlContainer').innerHTML = '<h1>' + titulo + '</h1>' + '<p>' + contenido + '</p>';
      }
    };
  
    // Enviar la solicitud
    xmlhttp.send();
  }