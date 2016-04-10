# TsLabIframeUtils
Modulo que realiza resize em iframes a partir do resize de conteúdos carregados.

> Qualquer manipulação entre iframes e páginas principais exigem configurações mínimas de conversação cross-domain. Isto significa que as aplicações necessitam ter permissões de conversação de headers. Existem várias alternativas para resolver estes tipos de problema a mais simples é utilizando o comando document.domain do javascript. Farei um tutorial explicando quais são as alternativas pois existem muitas possibilidades dependendo das limitações técincas. Mas caso efrentem dificuldades com cross-domain podem entrar em contato solerzao@gmail.com

## Instalação
Para utilizar o plugin é necessário seguir os dois passos que seguem.

### 1 - Adição de scripts na pagina principal
É necessário adicionar o script na página que terá o iframe para implementar o core que irá disponibilizar o resize automático

**Scripts de dependências (Página principal)**

```html
<script type="text/javascript" src="ts-lab.page.min.js"></script>
```

Este script irá disponibilizar a variável `tsLabIframeUtils` no ambiente global

### 2 - Adição de scripts no conteúdo do iframe
É necessário adicionar o script na página que será carregada dentro do iframe para realizar as ações do resize

**Scripts de dependências (Página que será carregada no iframe)**

```html
<script type="text/javascript" src="ts-lab.iframe.min.js"></script>
```

Este script irá disponibilizar a variável `tsLabIframeUtils` no ambiente global do frame