/** https://youtu.be/VPI27L_fQC4 */
/** Channel: Get __it Done! */
/** Google Sheets Self-Made JSON API Tutorial */

function doGet() {

  const response = [ {status: 'Cool!'} ];

  return ContentService
    .createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);
  
}


function doPost(e) {

  const body = e.postData.contents;
  const bodyJson = JSON.parse(body);
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName('test');
  ws.appendRow(bodyJson);
  

}
