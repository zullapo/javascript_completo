# Tooling

Conjunto de ferramentas e utilidades para compilação de código JavaScript, empacotamento
de dependências...

## webpack

É uma ferramenta para empacotamento de dependências para projetos JavaScript, focada para
projetos que necessitam do gerenciamento de módulos web (ESM).

No webpack, toda vez que um arquivo depende de outro, é gerado uma dependência, mesmo que
seja uma imagem ou fonte de texto.

Quando aplicação é processada pelo webpack, o webpack puxa os módulos listados no ponto
de entrada, converte os módulos em dependências e junta tudo em um único arquivo (pacote)
pronto para ser carregado pelo navegador.

## Babel

É um compilador JavaScript que converte códigos da versão ES2015+ para versões anteriores
e vice-versa.

O babel tem suporte ao core-js - plugin que provê polyfills para versões de navegadores
mais antigas, e a uma variedade de plugins.