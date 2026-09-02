/**
 * Recebe os dados enviados pelo formulário HTML e grava
 * uma nova linha na aba "Respostas" da planilha.
 */
function doPost(e) {
  var sheet = getOrCreateSheet_();
  var headers = getHeaders_();

  // Se a aba estiver vazia, escreve o cabeçalho primeiro
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
  }

  var data = e.parameter;
  var row = headers.map(function (campo) {
    return data[campo] !== undefined ? data[campo] : '';
  });

  sheet.appendRow(row);

  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function getOrCreateSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Respostas');
  if (!sheet) {
    sheet = ss.insertSheet('Respostas');
  }
  return sheet;
}

// Ordem das colunas na planilha — segue os campos do formulário
function getHeaders_() {
  return [
    'enviadoEm',
    'protocolo',
    'nivelGov',
    'nome',
    'documentoIdentidade',
    'telefonePessoal',
    'emailPessoal',
    'enderecoResidencial',
    'bairro',
    'cidade',
    'estado',
    'cep',
    'atividades',
    'formaAtuacao',
    'emailProfissional',
    'telefoneComercial',
    'enderecoComercial',
    'bairroCidadeEstadoComercial',
    'cepComercial',
    'souEstrangeiro',
    'paisNacionalidade',
    'tipoDocumentoPF',
    'numeroDocumentoPF'
  ];
}
