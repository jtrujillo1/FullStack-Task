# FullStack-Task

Proyecto FullStack con nodeJs y react para la gestión de usuarios y tareas asociadas a cada usuario.

# Proyecto Microservicios: Auth y Task Service

Este proyecto está diseñado con una arquitectura de microservicios, que incluye un servicio de autenticación (`auth-service`) y un servicio de gestión de tareas (`task-service`). El frontend está desarrollado en React y se comunica con estos servicios.

## Estructura del Proyecto

- `auth-service`: Servicio para registro e inicio de sesión de usuarios.
- `task-service`: Servicio para realizar operaciones CRUD en tareas asociadas a un usuario.
- `frontend`: Aplicación de React que interactúa con los microservicios.
- `docker-compose.yml`: Archivo de configuración para Docker.

## Requisitos Previos

Asegúrate de tener instalado lo siguiente:

- [Docker](https://www.docker.com/get-started) y [Docker Compose](https://docs.docker.com/compose/)
- [Node.js](https://nodejs.org/) (opcional para desarrollo local sin Docker)

## Configuración de la Base de Datos

El proyecto utiliza MySQL como base de datos. Puedes configurar la base de datos utilizando las siguientes variables de entorno en el archivo `.env` dentro de la carpeta `auth-service` y `task-service`:

```plaintext
DB_NAME=db
DB_USER=root
DB_PASSWORD=root
DB_HOST=127.0.0.1
JWT_SECRET=domina
```

git clone https://github.com/jtrujillo1/FullStack-Task.git

## Ejecución de proyecto

# En docker correr

```plaintext
docker-compose up --build
```

Abrir el navegador en localhost:3000

# En local

Acceder a cada carpeta del proyecto y ejecutar comando

```plaintext
npm run start
```

Ejemplo para correr auth service

```plaintext
cd auth-service
npm run start
```
