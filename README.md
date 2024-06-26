# Gerador de Código para Cypress

Este é um projeto simples de página web que gera boilerplate de código para testes com Cypress com base no nome da
funcionalidade fornecido. A página também permite copiar facilmente o código gerado para a área de transferência.

## Funcionalidades

- Geração de código para Page Object, Handler e Spec com base no nome da funcionalidade.
- Syntax highlighting utilizando Prism.js.
- Botões de copiar código para facilitar a transferência para o seu projeto.

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript
- Prism.js para syntax highlighting
- Font Awesome para ícones de copiar

## Estrutura do Código Gerado

### Page Object

```javascript
export class NomeDaFuncionalidade {
    constructor() {
        this.locators = {
            // Adicione seus locators aqui
        };
    }

    /**
     * @return Promise
     */
    init() {
        // Inicialize sua funcionalidade aqui
    }
}
```

### Handler

```javascript
// ajustar import

const nomeDaFuncionalidade = new NomeDaFuncionalidade();

export class NomeDaFuncionalidadeHandler {
    constructor(config) {
        this.config = config;
    }

    canHandler(context) {
        return true;
    }

    handlerWillNotRun() {
        return this.config.willNotRun();
    }

    handler(context) {
        return nomeDaFuncionalidade[this.config.method](this.config);
    }
}
```

### Spec

```javascript
describe('Nome Da Funcionalidade', () => {
    // Adicione seus testes aqui
});
```