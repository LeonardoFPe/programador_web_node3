
## Desafio Prático: Página Inicial de uma Biblioteca Digital

### Objetivo

Desenvolva uma página inicial para o projeto **Biblioteca Digital Beta**, aplicando conceitos de React, componentização e organização de arquivos. O exercício visa reforçar a estruturação de projetos React, uso de componentes reutilizáveis e boas práticas de estilização.

### Passos do Exercício

1. **Configuração do Projeto**
   - Crie uma pasta chamada `beta_library`.
   - No terminal, navegue até essa pasta e execute:

```
npx create-react-app .
```

    - Após a instalação, inicie o projeto com:

```
npm start
```

2. **Primeira Modificação**
   - No arquivo `src/App.js`, altere o conteúdo do parágrafo para:

```jsx
<p>
  Beta Library - sua biblioteca digital moderna
</p>
```

3. **Explique o conceito de Componentização**
   - Escreva, com suas palavras, o que é componentização no React e por que ela é importante.
4. **Limpeza Inicial**
   - Remova arquivos desnecessários em `src` (ex: logo.svg, arquivos de teste).
   - Mantenha apenas o essencial para o funcionamento do projeto.
5. **Organização de Imagens**
   - Crie uma pasta `img` dentro de `src` e adicione imagens como `logo_beta.svg`, `usuario.svg`, `livros.svg`.
6. **Criação de Componentes**
   - Crie um componente `LogoBeta` em `src/components/LogoBeta` com seus próprios arquivos `index.js` e `style.css`.
   - Importe e utilize o componente `LogoBeta` no `App.js`.
7. **Estilização**
   - Adicione estilos para o componente `LogoBeta` e para a aplicação, utilizando arquivos CSS separados para cada componente.
8. **Menu de Navegação**
   - Adicione uma lista de navegação no header: "INÍCIO", "CATÁLOGO", "SOBRE".
   - Utilize `.map()` para gerar os itens da lista a partir de um array.
9. **Adição de Ícones**
   - Importe e exiba ícones de usuário e livros ao lado das opções do menu.
10. **Componentização Avançada**
    - Crie componentes separados para o menu (`MenuNavegacao`) e para os ícones (`IconesMenu`).
    - Importe e utilize esses componentes no header.
11. **Componente Header**
    - Crie um componente `HeaderBeta` que reúna `LogoBeta`, `MenuNavegacao` e `IconesMenu`.
    - Importe e utilize o `HeaderBeta` no `App.js`.
12. **Organização dos Estilos**
    - Separe os estilos de cada componente em seus respectivos arquivos CSS.

### Critérios de Avaliação

- Estrutura correta dos componentes e pastas.
- Uso adequado de `.map()` para listas.
- Separação e importação dos arquivos de estilo.
- Organização e clareza do código.
- Explicação clara sobre componentização.

### Dica Extra

Implemente um efeito de hover nos itens do menu ou personalize o gradiente de fundo para deixar a interface mais atraente!

### Exemplo de Estrutura Final

```
src/
  components/
    HeaderBeta/
      index.js
      style.css
    LogoBeta/
      index.js
      style.css
    MenuNavegacao/
      index.js
      style.css
    IconesMenu/
      index.js
      style.css
  img/
    logo_beta.svg
    usuario.svg
    livros.svg
  App.js
  App.css
```

**Desafie-se a criar uma interface organizada, funcional e visualmente agradável!**
