# Use a imagem base do Node.js
FROM node:20

# Define o diretório de trabalho no container
WORKDIR /app

# Copia o package.json e o package-lock.json para o container
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o restante do código para o container
COPY . .

# Compila o projeto (se necessário)
RUN npm run build

# Exponha a porta que o app usará
EXPOSE 3100

# Comando para iniciar a aplicação
CMD ["npm", "run", "dev"]
