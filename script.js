function generateCode() {
    const featureName = document.getElementById('featureName').value.trim();
    if (!featureName) {
        alert('Por favor, insira o nome da funcionalidade.');
        return;
    }

    const pageObjectCode = `
export class ${featureName} {
    constructor() {
        this.locators = {
            
        };
    }

    /**
     * @return Promise
     */
    init() {
        
    }

}`;
    const handlerCode = `
// ajustar import

const ${featureName.toLowerCase()} = new ${featureName}();

export class ${featureName}Handler {
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
        return ${featureName.toLowerCase()}[this.config.method](this.config);
    }
}`;
    const specCode = `
describe('${featureName.replace(/([A-Z])/g, ' $1').trim()}', () => {
    // Adicione seus testes aqui
});
`;

    document.getElementById('pageObjectCode').textContent = pageObjectCode;
    document.getElementById('handlerCode').textContent = handlerCode;
    document.getElementById('specCode').textContent = specCode;

    Prism.highlightAll();
}

function copyToClipboard(elementId) {
    const codeElement = document.getElementById(elementId);
    const range = document.createRange();
    range.selectNode(codeElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert('Código copiado para a área de transferência!');
}