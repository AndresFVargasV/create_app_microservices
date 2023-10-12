-- Crear una tabla de referencia para el género
CREATE TABLE Genero (
    id INT PRIMARY KEY,
    nombre NVARCHAR(30) NOT NULL
);

-- Insertar valores válidos para el género
INSERT INTO Genero (id, nombre)
VALUES (1, 'Masculino'),
       (2, 'Femenino'),
       (3, 'No binario'),
       (4, 'Prefiero no reportar');

-- Crear una tabla de referencia para el tipo de documento
CREATE TABLE TipoDocumento (
    id INT PRIMARY KEY,
    nombre NVARCHAR(30) NOT NULL
);

-- Insertar valores válidos para el tipo de documento
INSERT INTO TipoDocumento (id, nombre)
VALUES (1, 'Tarjeta de identidad'),
       (2, 'Cédula');

-- Crear la tabla Personas
CREATE TABLE Personas (
    id INT PRIMARY KEY IDENTITY(1,1),
    primer_nombre VARCHAR(30) NOT NULL,
    segundo_nombre VARCHAR(30),
    apellidos VARCHAR(60) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    genero_id INT NOT NULL,
    correo_electronico VARCHAR(50) NOT NULL,
    celular VARCHAR(10) NOT NULL,
    numero_documento VARCHAR(10) NOT NULL,
    tipo_documento_id INT NOT NULL,
    foto VARBINARY(MAX),
    
    FOREIGN KEY (genero_id) REFERENCES Genero(id),
    FOREIGN KEY (tipo_documento_id) REFERENCES TipoDocumento(id)
);

-- Crear la tabla Log con tipo_transaccion como ENUM
CREATE TABLE Log (
    id INT PRIMARY KEY IDENTITY(1,1),
    tipo_transaccion VARCHAR(30) NOT NULL CHECK (tipo_transaccion IN ('Crear', 'Modificar', 'Eliminar', 'Consultar')),
    numero_documento VARCHAR(10) NOT NULL,
    fecha_transaccion DATETIME NOT NULL
);
