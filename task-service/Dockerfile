# Usa una imagen oficial de Node.js
FROM node:18

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Expone el puerto en el que corre el servicio
EXPOSE 4001 

# Comando para iniciar el servicio
CMD ["npm", "start"]
