O projeto consiste em uma API feita com Node.js, utilizando autenticação JWT, que possui vulnerabilidades intencionais para exploração, identificação e correção de falhas.

1 - A chave jwt e o tempo de expiração estão armazenados em um arquivo .env que para fins de segurança não devem ser armazenadas em repositório.
2 - Para gerar a chave foi utilizado o seguinte comando no terminal: node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
3 - Para rodar o projeto é necessário ter o node.js e npm instalados em sua máquina, instalar as bibliotecas necessárias:
3.1 - npm install express dotenv jsonwebtoken cors
