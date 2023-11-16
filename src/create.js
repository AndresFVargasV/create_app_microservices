const { connectToDatabase } = require('./dbconfig');

async function insertarPersona(
    primer_nombre,
    segundo_nombre,
    apellidos,
    fecha_nacimiento,
    genero_id,
    correo_electronico,
    celular,
    numero_documento,
    tipo_documento_id,
    foto
  ) {

    let client;

    try {

    // Conectarse a MongoDB
    client = await connectToDatabase();

    // Seleccionar la base de datos y la colección
    const db = client.db('crud');
    const collection = db.collection('crudmicroservices');

    const fotoBuffer = Buffer.from(foto, 'base64');

  
      // Crear el documento que se va a insertar en la colección
      const persona = {
        primer_nombre,
        segundo_nombre,
        apellidos,
        fecha_nacimiento,
        genero_id,
        correo_electronico,
        celular,
        numero_documento,
        tipo_documento_id,
        foto: fotoBuffer
      };
  
      // Insertar el documento en la colección
      const result = await collection.insertOne(persona);
  
      console.log('Datos insertados correctamente:', result);
  
      if (result.acknowledged) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Error al insertar datos o al conectarse con la BD', error);
    } finally {
      // Cerrar la conexión con MongoDB
      if (client) {
        await client.close();
      }
    }
  }
  
  module.exports = insertarPersona;