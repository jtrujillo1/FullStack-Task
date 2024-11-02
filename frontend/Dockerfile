# Dockerfile
# Usa la imagen de Node.js como base
FROM node:18

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de la aplicación
COPY . .

# Compila la aplicación para producción
RUN npm run build

# Expone el puerto 3000
EXPOSE 3000

# Inicia la aplicación
CMD ["npm", "start"]
