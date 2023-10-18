const {pool, connectToDatabase, sql} = require('./dbconfig');    

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
    try {
        // Conecta al pool de conexiones
        await connectToDatabase();

        // Realiza la inserción en la tabla Personas
        const result = await pool.request()
            .input('primer_nombre', sql.VarChar(30), primer_nombre)
            .input('segundo_nombre', sql.VarChar(30), segundo_nombre)
            .input('apellidos', sql.VarChar(60), apellidos)
            .input('fecha_nacimiento', sql.Date, fecha_nacimiento)
            .input('genero_id', sql.Int, genero_id)
            .input('correo_electronico', sql.VarChar(50), correo_electronico)
            .input('celular', sql.VarChar(10), celular)
            .input('numero_documento', sql.VarChar(20), numero_documento)
            .input('tipo_documento_id', sql.Int, tipo_documento_id)
            .input('foto', sql.VarBinary(sql.MAX), foto.buffer)
            .query(`
                INSERT INTO Personas (primer_nombre, segundo_nombre, apellidos, fecha_nacimiento, genero_id, correo_electronico, celular, numero_documento, tipo_documento_id, foto)
                VALUES (@primer_nombre, @segundo_nombre, @apellidos, @fecha_nacimiento, @genero_id, @correo_electronico, @celular, @numero_documento, @tipo_documento_id, @foto)
            `);

        if (result.rowsAffected[0] === 1) {      
            return true;
          } else {
            return false;
          }

    } catch (error) {
        return false
    } finally {
        pool.close();
    }
}

module.exports = insertarPersona;