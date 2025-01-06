# Clean DDD

Este projeto é um exemplo de aplicação utilizando o **Domain-Driven Design (DDD)**, com foco em arquitetura limpa. Ele demonstra como estruturar um projeto seguindo as melhores práticas de design e desenvolvimento, organizando os módulos em camadas bem definidas.

## 🚀 Tecnologias Utilizadas

- **Node.js**: Plataforma para execução do JavaScript no backend.
- **TypeScript**: Linguagem que adiciona tipagem estática ao JavaScript.
- **Express**: Framework minimalista para desenvolvimento de aplicações web.
- **Jest**: Framework de testes unitários.
- **ESLint** e **Prettier**: Ferramentas para padronização de código.
- **Docker**: Gerenciamento de contêineres para facilitar o ambiente de desenvolvimento.

## 📂 Estrutura do Projeto

O projeto segue o padrão de camadas proposto pelo DDD:

1. **Domain**:
   - Contém as regras de negócio e entidades principais.
   - Livre de dependências externas.
2. **Application**:
   - Camada intermediária, responsável por orquestrar casos de uso.
3. **Infrastructure**:
   - Lida com a integração de serviços externos, como bancos de dados e APIs.
4. **Presentation**:
   - Interface com o usuário ou qualquer entrada/saída (ex.: REST APIs).

## 🛠️ Instalação e Uso

### Pré-requisitos

- **Node.js** (v18+)
- **Docker** (opcional, para rodar o ambiente isolado)

### Passos para execução

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/rafaelone/clean-DDD.git
   cd clean-DDD
   ```

2. **Instale as dependências**:

   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**:
   Renomeie o arquivo `.env.example` para `.env` e preencha as variáveis necessárias.

4. **Inicie a aplicação**:

   ```bash
   npm run dev
   ```

5. **Executar testes**:
   ```bash
   npm test
   ```

### Com Docker

1. **Construir e iniciar o contêiner**:

   ```bash
   docker-compose up --build
   ```

2. **Acessar a aplicação**:
   A aplicação estará disponível em `http://localhost:3000`.

## 🧪 Testes

O projeto utiliza o **Jest** para testes unitários. Para rodar os testes:

```bash
npm test
```

Para ver a cobertura de testes:

```bash
npm run test:coverage
```

## 📖 Documentação

- [Domain-Driven Design (DDD)](https://www.domainlanguage.com/ddd/)
- [Clean Architecture](https://8thlight.com/blog/uncle-bob/2012/08/13/the-clean-architecture.html)

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto.
2. Crie uma nova branch:
   ```bash
   git checkout -b feature/nova-funcionalidade
   ```
3. Commit suas alterações:
   ```bash
   git commit -m "feat: descrição da nova funcionalidade"
   ```
4. Envie suas alterações:
   ```bash
   git push origin feature/nova-funcionalidade
   ```
5. Abra um Pull Request.

## 📝 Licença

Este projeto está sob a licença [MIT](LICENSE). Sinta-se à vontade para usá-lo e modificá-lo conforme necessário.

## 👨‍💻 Autor

Desenvolvido por [Rafael One](https://github.com/rafaelone). Se você gostou do projeto, não esqueça de deixar uma ⭐ no repositório!

```

Se precisar ajustar algum detalhe ou adicionar mais informações específicas sobre o projeto, é só avisar! 🚀
```
