# O Agente Secreto - Landing Page

Uma landing page, desenvolvida para promover o filme "O Agente Secreto", de Kleber Mendonça Filho. O projeto destaca habilidades em desenvolvimento front-end, incluindo animações CSS avançadas, SCSS modular e automação com Gulp.

## 🚀 Tecnologias Utilizadas

- **HTML5 Semântico**: Estrutura acessível e organizada.
- **SCSS (Sass)**: Estilização modular com uso de variáveis, mixins e aninhamento.
- **JavaScript (Vanilla)**: Interatividade para o componente de ingresso ("ticket") e menu.
- **Gulp**: Automação de tarefas para compilação de Sass, minificação de scripts e otimização de imagens.
- **Hamburgers**: Biblioteca CSS para ícones de menu animados.

## ✨ Funcionalidades

- **Ticket Interativo**: Um componente de ingresso estilizado com efeito de "cantos cortados" (implementado via mixin SCSS customizado). Ao clicar no ingresso, uma sinopse do filme desliza suavemente para baixo.
- **Layout Responsivo**: Design adaptável para diferentes tamanhos de tela.
- **Seção Hero**: Apresentação visual impactante com trailer incorporado.
- **Galeria de Imagens**: Exposição de cenas do filme.
- **Créditos do Filme**: Lista detalhada da equipe e elenco com HTML semântico.
- **Links Sociais**: Ícones para LinkedIn e GitHub integrados.

## 🛠️ Como Executar o Projeto

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/Alexandre-Mir/secret-agent-page.git
    cd secret-agent-page
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    ```

3.  **Execute em modo de desenvolvimento:**
    Este comando inicia o `gulp watch`, que monitora alterações nos arquivos SCSS e JS e recompila automaticamente.

    ```bash
    npm run dev
    ```

4.  **Build para produção:**
    Para compilar e minificar os arquivos para a pasta `dist/`.
    ```bash
    npm run build
    ```

## 📂 Estrutura do Projeto

```
lotr-landing/
├── dist/               # Arquivos compilados (CSS, JS, Imagens)
├── src/
│   ├── images/         # Imagens originais
│   ├── js/             # Scripts originais
│   └── scss/           # Arquivos Sass
│       ├── _film-credits.scss
│       ├── _gallery.scss
│       ├── _hero.scss
│       ├── _mixins.scss
│       ├── _ticket.scss
│       ├── _variables.scss
│       └── style.scss  # Arquivo principal que importa os módulos
├── gulpfile.js         # Configuração do Gulp
├── index.html          # Página principal
└── package.json
```

## 👤 Autor

**Alexandre**

- LinkedIn: [https://www.linkedin.com/in/alexandre-mir/](https://www.linkedin.com/in/alexandre-mir/)
- GitHub: [https://github.com/Alexandre-Mir/](https://github.com/Alexandre-Mir/)

---

Desenvolvido como projeto de portfólio.
