CREATE DATABASE spa_db;

USE spa_db;
DROP TABLE IF EXISTS servicio_spa;
DROP TABLE IF EXISTS horario_servicio_spa;


CREATE TABLE servicio_spa(
    id INT(11) NOT NULL PRIMARY KEY,
    nombre VARCHAR(180),
    descripcion VARCHAR(255),
    precio FLOAT,
    image VARCHAR(200)
);

CREATE TABLE horario_servicio_spa(
    id_servicio_spa INT(11) NOT NULL,
    dia DATE NOT NULL,
    comienzo VARCHAR(15),
    fin VARCHAR(15),
    PRIMARY KEY(id_servicio_spa,dia)
);

INSERT INTO servicio_spa VALUES (1, "MASAJE A 4 MANOS 60'", "Este tratamiento consta de varias etapas que buscan estimular el cuerpo para la mejor recepción de las propiedades medicinales de los productos orgánicos utilizados, entre los que se destacan el fango, arcillas, algas o chocolate.", 20.50, "https://cdn.shopify.com/s/files/1/0069/4727/4811/files/4-hand-massage-570x380.00000019_large.jpg?v=1543003561");
INSERT INTO servicio_spa VALUES (2, "MASAJE FACIAL RELAJANTE 45'", "Masaje facial indicado para reducir tensiones del rostro.", 10.33, "https://backstagebcn.com/wp-content/uploads/2019/10/caption.jpg");
INSERT INTO servicio_spa VALUES (3, "AROMATERAPIA CON PINDAS", "Con este tratamiento logramos aumentar el bienestar y la relajación del individuo a través de un masaje neurosedante con el que recorremos los meridianos energéticos del cuerpo utilizando Pindas.", 63, "https://www.cimformacion.com/blog/wp-content/uploads/beneficios-del-masaje-con-pindas.jpg");
INSERT INTO servicio_spa VALUES (4, "CHOCOLATERAPIA", "La Chocolaterapia consiste en una exfoliación profunda seguida de una envoltura y masaje en el que utilizamos el brazo y el antebrazo. Todo ello empleando elemento principal el chocolate.", 66, "https://www.beautymarket.es/estetica/fotos/13576_notbme1grande.jpg");
INSERT INTO servicio_spa VALUES (5, "MASAJE DE PIEDRAS CALIENTES", "El masaje con piedras calientes combina el masaje terapéutico tradicional con la aplicación sobre la piel de piedras a distintas temperaturas, para facilitar que fluya la energía vital y aliviar así trastornos físicos y emocionales.", 80, "https://sadhanamassagecenter.com/wp-content/uploads/2019/11/masaje-piedras-calientes-espalda2.jpg");
INSERT INTO horario_servicio_spa VALUES (1, '2020-03-09', "10:00", "16:00");
INSERT INTO horario_servicio_spa VALUES (1, '2020-03-10', "10:00", "16:00");
INSERT INTO horario_servicio_spa VALUES (1, '2020-03-11', "10:00", "16:00");
INSERT INTO horario_servicio_spa VALUES (1, '2020-03-12', "10:00", "16:00");
INSERT INTO horario_servicio_spa VALUES (1, '2020-03-13', "10:00", "16:00");
INSERT INTO horario_servicio_spa VALUES (1, '2020-03-14', "10:00", "18:00");
INSERT INTO horario_servicio_spa VALUES (1, '2020-03-15', "10:00", "18:00");
INSERT INTO horario_servicio_spa VALUES (2, '2020-03-09', "11:00", "17:00");
INSERT INTO horario_servicio_spa VALUES (2, '2020-03-10', "11:00", "17:00");
INSERT INTO horario_servicio_spa VALUES (2, '2020-03-11', "11:00", "17:00");
INSERT INTO horario_servicio_spa VALUES (2, '2020-03-12', "11:00", "17:00");
INSERT INTO horario_servicio_spa VALUES (2, '2020-03-13', "11:00", "17:00");
INSERT INTO horario_servicio_spa VALUES (2, '2020-03-14', "10:00", "18:00");
INSERT INTO horario_servicio_spa VALUES (2, '2020-03-15', "10:00", "18:00");
INSERT INTO horario_servicio_spa VALUES (3, '2020-03-09', "12:00", "16:00");
INSERT INTO horario_servicio_spa VALUES (3, '2020-03-10', "12:00", "16:00");
INSERT INTO horario_servicio_spa VALUES (3, '2020-03-11', "12:00", "16:00");
INSERT INTO horario_servicio_spa VALUES (3, '2020-03-12', "12:00", "16:00");
INSERT INTO horario_servicio_spa VALUES (3, '2020-03-13', "12:00", "16:00");
INSERT INTO horario_servicio_spa VALUES (3, '2020-03-14', "10:00", "19:00");
INSERT INTO horario_servicio_spa VALUES (3, '2020-03-15', "10:00", "19:00");
INSERT INTO horario_servicio_spa VALUES (4, '2020-03-09', "13:00", "16:00");
INSERT INTO horario_servicio_spa VALUES (4, '2020-03-10', "13:00", "16:00");
INSERT INTO horario_servicio_spa VALUES (4, '2020-03-11', "13:00", "16:00");
INSERT INTO horario_servicio_spa VALUES (4, '2020-03-12', "13:00", "16:00");
INSERT INTO horario_servicio_spa VALUES (4, '2020-03-13', "13:00", "16:00");
INSERT INTO horario_servicio_spa VALUES (4, '2020-03-14', "10:00", "20:00");
INSERT INTO horario_servicio_spa VALUES (4, '2020-03-15', "10:00", "20:00");
INSERT INTO horario_servicio_spa VALUES (5, '2020-03-09', "14:00", "16:00");
INSERT INTO horario_servicio_spa VALUES (5, '2020-03-10', "14:00", "16:00");
INSERT INTO horario_servicio_spa VALUES (5, '2020-03-11', "14:00", "16:00");
INSERT INTO horario_servicio_spa VALUES (5, '2020-03-12', "14:00", "16:00");
INSERT INTO horario_servicio_spa VALUES (5, '2020-03-13', "14:00", "16:00");
INSERT INTO horario_servicio_spa VALUES (5, '2020-03-14', "10:00", "20:00");
INSERT INTO horario_servicio_spa VALUES (5, '2020-03-15', "10:00", "20:00");

DESCRIBE servicio_spa;
DESCRIBE horario_servicio_spa;