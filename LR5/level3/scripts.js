var tabContent;
var tab;

window.onload = function () {
    tabContent = document.getElementsByClassName('tabContent');
    tab = document.getElementsByClassName('tab');
    showTabsContent(0); // Спочатку показуємо вкладку "border-radius"
};

function showTabsContent(index) {
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tab[i].classList.remove('whiteborder');
    }
    tabContent[index].classList.add('show');
    tab[index].classList.add('whiteborder');
}

function generate() {
    // Border Radius (для першої вкладки)
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

    // Outline (для вкладки Outline)
    var outlineColor = document.getElementById('outlineColor').value;
    var outlineWidth = document.getElementById('outlineWidth').value;
    var outlineWidthText = document.getElementById('outlineWidthText');
    var outlineStyle = document.getElementById('outlineStyle').value;

    var blockOutline = document.getElementById('block-outline');
    var codeOutline = document.getElementById('codeOutline');

    outlineWidthText.value = outlineWidth;

    blockOutline.style.borderRadius = `${rtl}px ${rtr}px ${rbr}px ${rbl}px`;  // Додаємо border-radius
    blockOutline.style.outline = `${outlineWidth}px ${outlineStyle} ${outlineColor}`;

    codeOutline.value = `outline: ${outlineWidth}px ${outlineStyle} ${outlineColor};`;

    // Overflow (для вкладки Overflow)
    var overflowX = document.getElementById('overflowX').value;
    var overflowY = document.getElementById('overflowY').value;

    var blockOverflow = document.getElementById('block-overflow');
    var codeOverflow = document.getElementById('codeOverflow');

    blockOverflow.style.borderRadius = `${rtl}px ${rtr}px ${rbr}px ${rbl}px`;  // Додаємо border-radius
    blockOverflow.style.overflowX = overflowX;
    blockOverflow.style.overflowY = overflowY;

    codeOverflow.value = `overflow-x: ${overflowX};\noverflow-y: ${overflowY};`;
}
