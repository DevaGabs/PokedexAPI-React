# PokedexAPI-React

Uma aplicação de Pokedex construída com React e Material-UI, consumindo dados de uma API para exibir informações sobre Pokémons. 

## Visão Geral

Esta aplicação permite que os usuários pesquisem e visualizem informações detalhadas sobre vários Pokémons. Utiliza a biblioteca `react-slick` para criar um carrossel de Pokémons e oferece funcionalidades como download de informações em PDF e filtragem de Pokémons por nome.

## Funcionalidades

- Exibição de cards de Pokémons em um carrossel.
- Visualização de detalhes de Pokémons, incluindo imagens e variações.
- Pesquisa de Pokémons por nome.
- Download das informações do Pokémon em formato PDF.
- Navegação intuitiva com uma barra de navegação estilizada.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção da interface de usuário.
- **Material-UI**: Biblioteca de componentes React para um design bonito e responsivo.
- **react-slick**: Componente de carrossel para React.
- **html2canvas** e **jspdf**: Bibliotecas para gerar PDFs a partir de componentes React.
- **Docker**: Para containerização da aplicação.
- **GitHub Actions**: Para integração contínua e deploy automatizado.

## Estrutura do Projeto

Pokedex/
├── public/
│ ├── index.html
│ └── ...
├── src/
│ ├── components/
│ │ ├── MyComponent.jsx
│ │ ├── Navbar.jsx
│ │ ├── PokemonCard.jsx
│ │ ├── PokemonCarousel.jsx
│ │ └── ...
│ ├── App.jsx
│ ├── index.js
│ └── ...
├── Dockerfile
├── docker-compose.yml
├── package.json
└── ...

## Instalação e Uso

### Pré-requisitos

- Node.js instalado.
- Docker e Docker Compose instalados.

### Passos para Rodar a Aplicação

1. Clone o repositório:
   ```bash
   git clone https://github.com/DevaGabs/PokedexAPI-React.git
   cd PokedexAPI-React
2. Instale as dependências:

bash
Copiar código
npm install
3.Inicie a aplicação localmente:

bash
Copiar código
npm start
4.Abra http://localhost:3000 no seu navegador.

## Usando Docker
1.Construa a imagem Docker:

bash
Copiar código
docker build -t pokedex-api-react .

2.Execute o container:

bash
Copiar código
docker run -p 3000:3000 pokedex-api-react

3.Abra http://localhost:3000 no seu navegador.

## Usando Docker Compose
Execute o Docker Compose:

bash
Copiar código
docker-compose up
Abra http://localhost:3000 no seu navegador.

## Contribuição
Contribuições são bem-vindas! Por favor, faça um fork do repositório e envie um pull request com suas melhorias.

## Licença
Esta aplicação é distribuída sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.


Este README cobre uma visão geral da aplicação, tecnologias usadas, estrutura do projeto, instruções de instalação e execução, e informações sobre contribuição e licença. Ajuste-o conforme necessário para melhor se adequar à sua aplicação e informações adicionais.
