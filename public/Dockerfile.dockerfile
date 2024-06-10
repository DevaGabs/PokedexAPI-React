# Use uma imagem base Node.js
FROM node:14

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o arquivo package.json e package-lock.json (se existirem)
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o resto do código fonte para o contêiner
COPY . .

# Execute o comando de construção de produção
RUN npm run build

# Exponha a porta onde o servidor da aplicação estará em execução
EXPOSE 3000

# Comando para iniciar a aplicação quando o contêiner for iniciado
CMD ["npm", "start"]
