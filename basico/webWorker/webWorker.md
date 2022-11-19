# WebWorker

Executa scripts em uma thread diferente da thread do browser, a thread do web worker
comunica com a thread do browser através de um sistema de mensagems - o browser "escuta"
as mensagens através do evento onmessage, e o web worker envia as messages através do
método postMessage.

Thread do browser

- Executa um código por vez (sequencial).
- Um código só é executado, quando o outro termina (bloqueante)

Web Worker

- Executa códigos de forma simultânea (paralela).
- Comunicação de mensagem e resposta (não-bloqueante)