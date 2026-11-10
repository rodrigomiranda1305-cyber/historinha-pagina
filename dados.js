/* DADOS EDITÁVEIS DA PÁGINA (Historinha da Noite)
   Enquanto uma lista estiver vazia, a seção dela fica escondida para o comprador.
   Para ver os espaços reservados, abra a página com ?revisao=1 no fim do endereço.
   Preço, checkout, garantia e e-mail de suporte ficam em fonte/oferta.json (depois rodar fonte/montar.py). */
window.OFERTA = {
  id: 'biblia',

  // Contador regressivo: só com prazo verdadeiro. Exemplo: prazo: '2026-12-24T23:59:00-03:00'
  prazo: null,
  prazoTexto: '',

  // Depoimentos reais de pais, só com autorização.
  depoimentos: [
    // { tipo: 'texto', nome: 'Primeiro nome, cidade', texto: 'O que a pessoa disse.', autorizado: true },
  ],

  // Fotos ou vídeos reais de famílias, só com autorização dos pais.
  antesDepois: [],

  // Bônus que ainda faltam: hoje existe 1 bônus real (Ritual da Hora de Dormir). Os outros 2 entram aqui quando existirem.
  bonusExtras: [
    // { titulo: 'Nome do bônus', descricao: 'O que a pessoa recebe.', imagem: 'img/bonus2.webp' },
  ],

  rastreio: {
    clarity: 'zaqrht8m7g',  // mesmo projeto do Clarity da página antiga da Bíblia
    utmifyPixel: null,      // ID do pixel na Utmify (falta cadastrar). Pixel Meta da Bíblia: 1791958008732437.
    endpoint: null,
    mascarar: false
  }
};
