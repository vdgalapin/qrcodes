function generateQRCode(BoxID, Whse, Location) {

    const table = document.getElementById('qrcodes');
    
    const tbodyRowCount = table.tBodies[0].rows.length + 1;

    $("#qrcodes #qrcodes_row").append('<tr align="center"><td id = \"qr_box_' + tbodyRowCount +'\"><div id=\"box_label_' + tbodyRowCount + '\"></div></td><td id = \"loc_box_' + tbodyRowCount +'\"><div id=\"loc_label_' + tbodyRowCount + '\"></div></td><td> <button onclick="testing()">test</button></td></tr>');


    let Box_qrcodeContainer = document.getElementById("qr_box_" + tbodyRowCount);
    let Loc_qrcodeContainer = document.getElementById("loc_box_" + tbodyRowCount);
    new QRCode(Box_qrcodeContainer, {
        text: BoxID.replace(/\s+/g, ' ').trim(),
        width: 128,
        height: 128,
    });

    document.getElementById('box_label_'+tbodyRowCount).innerHTML = BoxID.replace(/\s+/g, ' ').trim();

    new QRCode(Loc_qrcodeContainer, {
        text: Whse + '-' + Location,
        width: 128,
        height: 128,        
    });
    document.getElementById('loc_label_'+tbodyRowCount).innerHTML = Whse + '-' + Location;
}