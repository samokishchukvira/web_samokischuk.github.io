// function generate() {
//     let rtl = document.getElementById('rtl').value;
//     let rtr = document.getElementById('rtr').value;
//     let rbr = document.getElementById('rbr').value;
//     let rbl = document.getElementById('rbl').value;

//     document.getElementById('ttl').value = rtl;
//     document.getElementById('ttr').value = rtr;
//     document.getElementById('tbr').value = rbr;
//     document.getElementById('tbl').value = rbl;

//     let block = document.getElementById('block');
//     block.style.borderRadius = `${rtl}px ${rtr}px ${rbr}px ${rbl}px`;

//     document.getElementById('code').value = `border-radius: ${rtl}px ${rtr}px ${rbr}px ${rbl}px;`;
// }

function generate() {
    var rtl = document.getElementById('rtl').value;
    var rtr = document.getElementById('rtr').value;
    var rbr = document.getElementById('rbr').value;
    var rbl = document.getElementById('rbl').value;

    var ttl = document.getElementById('ttl');
    var ttr = document.getElementById('ttr');
    var tbr = document.getElementById('tbr');
    var tbl = document.getElementById('tbl');

    var block = document.getElementById('block');
    var code = document.getElementById('code');

    ttl.value = rtl;
    ttr.value = rtr;
    tbr.value = rbr;
    tbl.value = rbl;

    block.style.borderRadius = `${rtl}px ${rtr}px ${rbr}px ${rbl}px`;

    code.value = `border-radius: ${rtl}px ${rtr}px ${rbr}px ${rbl}px;`;
}

// function updateRadius(sliderId, textId) {
//     let textValue = document.getElementById(textId).value;
//     document.getElementById(sliderId).value = textValue;
//     generate();
// }

// function showTab(tabId) {
//     let contents = document.getElementsByClassName('tabContent');
//     for (let content of contents) {
//         content.style.display = 'none';
//     }

//     document.getElementById(tabId).style.display = 'block';
// }

// showTab('border-radius');

