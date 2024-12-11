DROP DATABASE IF EXISTS hospital;

CREATE DATABASE hospital;
USE hospital;


CREATE TABLE medicos (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(200) NOT NULL,
    especialidad VARCHAR(40),
    perfil ENUM('RESIDENTE','ESPECIALISTA'),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- ALTER TABLE medicos ADD COLUMN imagen VARCHAR(200) AFTER especialidad;

INSERT INTO medicos (nombre, especialidad, perfil) 
VALUES 
  ('Jose Eusebio', 'Dermatólogo', "RESIDENTE"),
  ('Jesus Gil', 'Odontólogo', "ESPECIALISTA"),
  ('Lara Moreno', 'Dentista', "ESPECIALISTA");

DROP TABLE IF EXISTS pacientes;
CREATE TABLE pacientes (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(200) NOT NULL,
    localidad VARCHAR(200),
    fecha_nacimiento DATE,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- ALTER TABLE medicos ADD COLUMN imagen VARCHAR(200) AFTER especialidad;

INSERT INTO pacientes (nombre, localidad, fecha_nacimiento) 
VALUES 
  ('Emilio Pastor', 'Cordoba','2004-10-23'),
  ('Tomas Ramirez', 'La Rambla', '2000-11-10'),
  ('Jimena Raya', 'Paris', '1996-03-30');
