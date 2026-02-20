### O projeto consiste em uma API feita com Node.js, utilizando autenticação JWT, que possui vulnerabilidades intencionais para exploração, identificação e correção de falhas.


### OBSERVAÇÕES COM RELAÇÃO A SEGURANÇA:

#### 1 - A chave jwt e o tempo de expiração estão armazenados em um arquivo .env que para fins de segurança não devem ser armazenadas em repositório.

#### 2 - Para gerar a chave foi utilizado o seguinte comando no terminal:
##### 2.1 - node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"


#### 3 - Na branch https, o certificado e chave SSL estão armazenados na pasta certs em repositório local em cer.pem e key.pem.

#### 4 - Para gerar o certificado e a chave foram utilizados o comando:
##### 4.1 - openssl req -nodes -new -x509 -keyout key.pem -out cert.pem -days 365


### COMO RODAR O PROJETO:

#### 1 - Para rodar o projeto é necessário ter o node.js e npm instalados em sua máquina, instalar as bibliotecas necessárias:
##### 1.1 - npm install express dotenv jsonwebtoken cors fs https

#### 2 - Instale o nodemon para rodar a API e ver as atualizações do seu código em tempo real:
##### 2.1 - npm install nodemon -g
##### 2.2 - Rode a API com o comando: nodemon server.js


### BRANCHS:

#### 1 - A branch main contém apenas autenticação com jwt

#### 2 - Na branch https foi adicionado protocolo https
