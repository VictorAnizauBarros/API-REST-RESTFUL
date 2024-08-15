## API, REST, RESTFUL:

    Utilizando a analogia de um "restaurante" para compreender os conceitos mencionados acima, temos: 

    Cliente (client) - que pode ser compreendido, por exemplo, como uma aplicação em seu smartphone ou sua página na web. 

    Garçon (pedidos) - responsável por levar o seu pedido para a "cozinha" (API). 

    Cozinha (Server) - responsável por processar os pedidos trazidos pelo "garçon".

    API - Acrônimo de Application Programming Interface (Interface de Programação de Aplicações) é, de forma simples, um conjunto de rotinas e padrões estabelecidos por uma aplicação, para que outras aplicações possar utilizar as funcionalidades desta aplicação. 

        De uma forma menos formal, podemos entender as APIs como:
        -   Responsável por estabelecer comunicação entre diferentes serviços. 
        -   "Meio de campo" entre as técnologias. 
        -   Intermediador para a troca de informações. 


## REST:
    No contexto de API, a transferência de dados é feita, geralmente, utilizando o protocolo HTTP. 

    REST é um acrônimo de Representational State Transfer (Transferência de Estado Representativo), ou seja, a transferência de dados será feita de uma maneira simbólica, representativa, de forma didática, delimitando algumas obrigações (ou constraints) nesta transferência. 

    No REST, os dados são chamados de RESOURCES, sendo uma entidade, um objeto. 

## 6 necessidades (constraints) para ser RESTFUL:
    1 - Client - Server: separação do cliente e do armazenamento de dados (servidor), possibilitando a portabilidade do sistema, usando o React para WEB e React Native para o smartphone, por exemplo.

    2 - Stateless (sem estado) : cada requisição que o cliente fizer para o servidor, deverá conter todas as informações necessárias para o servidor entender e responder (RESPONSE) a requisição (REQUEST).
        Exemplo: A sessão "usuário" de uma aplicação deverá ser enviada em todas as requisições, para garantir que aquele usuário está autenticado e apto para usar os serviços, sendo que o servidor NÃO PODE se "lembrar" que o usuário foi autenticado na requisição anterior. 

    3 - Cacheable : As respostas (RESPONSE) de uma requisição (REQUEST), deverão ser explicitas ao dizer se aquela requisição, pode ou não ser "cacheada"(possibilidade de armazenar temporariamente a resposta à essa requisição afim de melhorar o desempenho e reduzir a carga nos servidores) pelo cliente.

    4 - Layered System (Sistemas em camadas) : O cliente acessa um endpoint, sem precisar saber da complexidade, de quais passos são necessários para o servidor responder à aquela requisição, ou quais outras camadas o servidor estará lidando, para que a requisição seja respondida. 

    5 - Code on Demand (utilização opcional): Dá a possibilidade da nossa aplicação pegar códigos, como JS, por exemplo, e executar no cliente.

    6 - Uniforme Interface (Interface Uniforme) : Deve ter uma interface uniforme para simplificar a interação, geralmente envolvendo a definição de um conjunto de padrões a serem seguidos, como o uso de verbos HTTP (GET,POST,PUT,DELETE) e a estruturação dos URLs. 

## RESTFUL:
    Ser "RESTFUL" é, basicamente, aplicar os padrões do REST. 

## BOAS PRÁTICAS: 
    - Utilizar verbos HTTP para as nossas requisições.
    - Não utilizar barras no final do nosso endpoint.
    - Utilizar plural ou singular na criação dos endpoints é sua escolha, apenas mantenha um padrão.
    - Nunca deixe seu cliente sem respostas.
### Verbos HTTP:
    GET: receber dados de um resource; 
    POST: enviar dados ou informações para serem processados por um resource. 
    PUT: atualizar os dados de um resource. 
    DELETE: deletar um resource. 

### Status das Respostas (Response):
    1xx: Informação
    2xx: Sucesso
        -200: OK
        -201: CREATED
        -204: Não tem conteúdo PUT POST DELETE
    3xx: Redirecionamento
    4xx: Client Error
        -400: Bad Request
        -404: Not Found
    5xx: Server Error
        -500: Internal server error




