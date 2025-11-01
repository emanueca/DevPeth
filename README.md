<p align="center">
    <img src="/archive/photo/gitfile/Logo_DevPeth.png" width="190px" alt="DevPath Logo">
</p>

<p align="center">
    <a href="https://github.com/SEU_USUARIO/DevPath/blob/main/LICENSE"><img src="https://img.shields.io/badge/Licen%C3%A7a-MIT-blue.svg?style=flat-square"></a>
  <a href="https://github.com/SEU_USUARIO/DevPath/graphs/contributors"><img src="https://img.shields.io/badge/contributors-wanted-brightgreen.svg?style=flat-square"></a>
  <a href="https://github.com/SEU_USUARIO/DevPath/issues"><img src="https://img.shields.io/github/issues/SEU_USUARIO/DevPath?style=flat-square"></a>
  <a href="URL_DO_SEU_PIPELINE_DE_BUILD"><img src="https://img.shields.io/badge/build-passing-brightgreen.svg?style=flat-square"></a>
</p>

DevPath é uma plataforma de curadoria focada em **resultados profissionais** para desenvolvedores no ecossistema de código aberto (OSS).

Nosso foco é o resultado profissional. Ao utilizar o DevPath, você não está apenas resolvendo *issues*; você está **construindo ativamente um portfólio de contribuições verificáveis**. A experiência adquirida em projetos open source reais é um diferencial competitivo significativo no mercado de tecnologia.

<p align="center">
  <br />
    <img src="URL_DE_UM_SCREENSHOT_DA_UI.png" width="800px" alt="Screenshot da plataforma DevPath mostrando as trilhas de issues" >
  <br />
</p>

Este repositório contém:

- [O código-fonte do `backend` (crawler, API)](https://github.com/SEU_USUARIO/DevPath/tree/main/backend)
- [O código-fonte do `frontend` (aplicação web)](https://github.com/SEU_USUARIO/DevPath/tree/main/frontend)
- [A documentação do projeto](https://github.com/SEU_USUARIO/DevPath/tree/main/docs)
- [O roadmap público e issues](https://github.com/SEU_USUARIO/DevPath/issues)

Para sugestões, dúvidas ou para reportar um bug, por favor, [abra uma issue](https://github.com/SEU_USUARIO/DevPath/issues/new/choose).

## ✨ Funcionalidades Principais

- **Foco no Portfólio:** Nosso objetivo não é que você resolva *issues*, mas que construa um histórico de contribuições relevantes.
- **Trilhas de Progressão:** Guiamos você desde sua primeira contribuição até desafios de alta complexidade.
- **Curadoria de Issues:** Indexamos e classificamos *issues* de projetos reais para que você encontre o desafio certo para seu nível.
- **Certificados de Conclusão:** (Em breve) Valide suas habilidades ao completar *issues* na trilha "Complexa".
- **👻 Ghost Issues:** Uma categoria especial para os desafios mais difíceis — *issues* que foram abandonadas e precisam de um especialista.
- **Gratuito para Desenvolvedores:** Focado na comunidade e no crescimento profissional.

## 🚀 Como Funciona: De Contribuidor a Profissional

O DevPath foi projetado para ser o seu guia de carreira no mundo open source. Em vez de simplesmente listar "good first issues", nós criamos um caminho.

### 1. Trilha Comum

Estas são as "good first issues" clássicas, revisadas e validadas. São perfeitas para entender o fluxo de um projeto, fazer seu primeiro Pull Request e ganhar confiança. O foco aqui é **quebrar a barreira de entrada**.

### 2. Trilha Complexa

Aqui é onde seu portfólio começa a brilhar. São *features* ou bugs mais substanciais que exigem pesquisa, dedicação e interação real com os mantenedores.
* **Construa Reputação:** Resolver *issues* complexas é a forma mais rápida de ser notado em uma comunidade.
* **Ganhe Certificados:** (Em breve) Ao ter seu PR aprovado em uma *issue* desta trilha, você receberá um certificado de conclusão do DevPath, validando seu esforço.

### 3. 👻 Ghost Issues (A Trilha Fantasma)

Esta é a nossa categoria de elite. "Ghost Issues" são problemas reais que outros desenvolvedores tentaram resolver e falharam. São *issues* com PRs abandonados ou que se provaram difíceis demais e se tornaram "fantasmas" no repositório.

Resolver uma *Ghost Issue* não é apenas uma contribuição; é uma demonstração de senioridade e persistência.

## 🛠️ Stack Tecnológica (Exemplo)

O DevPath é construído com foco em escalabilidade e uma experiência de usuário moderna.

* **Frontend:** [Next.js / React]
* **Backend:** [Node.js (Fastify) / Go]
* **Banco de Dados:** [PostgreSQL]
* **Crawler / Jobs:** [BullMQ / Redis]

## 💖 Contribuidores

Obrigado a todos que dedicaram seu tempo para contribuir com o DevPath!

<a href="https://github.com/SEU_USUARIO/DevPath/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=SEU_USUARIO/DevPath" />
</a>

## 💸 Preço

O DevPath é, e sempre será, **gratuito para desenvolvedores**. Nosso modelo de negócio é focado em [a ser definido: empresas que buscam talentos, etc.].

## 🤝 Como Contribuir / Reportar um Bug

Encontrou um bug ou tem uma ideia para uma nova funcionalidade? Nós adoraríamos sua ajuda!

O DevPath também é open source. Contribuir para nossa plataforma é uma ótima forma de praticar!

1.  Antes de adicionar uma issue, por favor, [procure por issues existentes](https://github.com/emanueca/DevPath/issues) para evitar duplicatas.
2.  Se não existir, [abra uma nova issue](https://github.com/emanueca/DevPath/issues/new/choose) usando nossos templates.
3.  Se você deseja contribuir com código:
    * Faça um `Fork` deste repositório.
    * Crie uma nova branch: `git checkout -b feature/sua-feature`
    * Faça o `commit` de suas mudanças: `git commit -m 'Adiciona feature X'`
    * Envie para a branch: `git push origin feature/sua-feature`
    * Abra um `Pull Request`.

# Developer - DevPeth
Este diretório contém toda a documentação, guias de configuração e padrões de código necessários para entender, rodar e contribuir com o projeto DevPeth.
(toda contribuilção de issues terá seu nome destacado)

## 🗺️ Mapa do Diretório
Use a tabela abaixo para navegação rápida entre os guias essenciais do projeto.

| Pasta | Conteúdo Principal | 🔗 Acesso Rápido |
| :--- | :--- | :--- |
| **`/TypeDeveloper`** | Padrões de TypeScript, convenções de tipos e regras de manutenção. | **[Guia de TypeScript](./developer/TypeDeveloper/REDME.md)** |
| **`/ServerDeveloper`** | Instruções para configurar e rodar o ambiente de desenvolvimento local. | **[Guia de Setup Local](./developer/ServerDeveloper/README.md)** |
| **`/databaseDeveloper`** | Documentação do schema, diagramas e guias do banco de dados (MySQL). | **[Guia do Banco de Dados](./developer/DatabaseDeveloper/README.md)** |

---


## ⚖️ Licença

Distribuído sob a Licença MIT. Veja `LICENSE.md` para mais informações.
