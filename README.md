# Nest.js OpenJira App

Para correr localmente, se necesita la base de datos

```bash
docker-compose up -d
```

* El -d significa __detached__

MondoDB URL local:

```bash
mongodb://localhost:27017/entries-db
```

## Configurar las variables de entorno

Utilizar el archivo __.env.example__ como template para generar el archivo __.env__

## Llenar la base de datos con informacion de prueba

Llamar a:

```bash
http://localhost:3000/api/seed
```
