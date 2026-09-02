# Como conectar o formulário à sua planilha do Google

Você vai fazer 3 coisas: (1) criar a planilha, (2) colar um código nela,
(3) colar o link gerado dentro do formulário. Leva uns 5 minutos.

## 1. Crie (ou abra) a planilha
- Acesse sheets.google.com e crie uma planilha nova (ou use uma existente).
- Não precisa criar nenhuma coluna manualmente — o script cria a aba
  "Respostas" e o cabeçalho sozinho, na primeira vez que alguém enviar o
  formulário.

## 2. Cole o código do Apps Script
1. Na planilha, vá em **Extensões → Apps Script**.
2. Apague o conteúdo do arquivo `Code.gs` que abrir e cole o conteúdo do
   arquivo **Code.gs** que eu gerei.
3. Salve (ícone de disquete ou Ctrl+S).
4. Clique em **Implantar → Nova implantação**.
5. Em "Selecionar tipo", clique na engrenagem e escolha **App da Web**.
6. Configure:
   - **Executar como:** Eu (seu e-mail)
   - **Quem tem acesso:** Qualquer pessoa
7. Clique em **Implantar**.
8. O Google vai pedir para autorizar o script — autorize com sua conta
   (é normal aparecer um aviso de "app não verificado"; clique em
   Avançado → Acessar [nome do projeto], mesmo assim, pois o script é seu).
9. Copie a **URL do app da Web** que aparece (algo como
   `https://script.google.com/macros/s/AAAAAA.../exec`).

## 3. Cole a URL no formulário
1. Abra o arquivo **formulario-mei.html**.
2. Procure a linha:
   ```js
   const GOOGLE_SHEETS_WEBAPP_URL = 'COLE_AQUI_A_URL_DO_APPS_SCRIPT';
   ```
3. Substitua `COLE_AQUI_A_URL_DO_APPS_SCRIPT` pela URL que você copiou no
   passo anterior, mantendo as aspas. Exemplo:
   ```js
   const GOOGLE_SHEETS_WEBAPP_URL = 'https://script.google.com/macros/s/AAAAAA.../exec';
   ```
4. Salve o arquivo.

Pronto. Agora, toda vez que alguém preencher e enviar o formulário, uma
nova linha vai aparecer automaticamente na aba "Respostas" da sua
planilha, com data/hora, número de protocolo e todos os campos
preenchidos.

## Onde hospedar o formulário
Esse HTML funciona sozinho — você pode:
- Enviá-lo por WhatsApp/e-mail para a pessoa abrir no navegador;
- Subir no seu site (ex: `seusite.com.br/cadastro-mei.html`);
- Hospedar gratuitamente em serviços como Google Sites, Netlify ou
  GitHub Pages.

Não é preciso reabrir esse chat depois — o link do Apps Script continua
funcionando sozinho, mesmo com o computador desligado, pois roda nos
servidores do Google.

## Se algo não funcionar
- Confirme que em "Quem tem acesso" você escolheu **Qualquer pessoa**
  (não "Somente eu").
- Se editar o `Code.gs` depois, é preciso criar uma **nova implantação**
  (ou gerenciar implantações → editar → nova versão) para as mudanças
  valerem.
- Os dados enviados por estrangeiros(as) só aparecem preenchidos nas
  colunas `paisNacionalidade`, `tipoDocumentoPF` e `numeroDocumentoPF`
  quando a pessoa marcar a caixa "Sou estrangeiro(a)".
