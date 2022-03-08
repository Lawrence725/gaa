// Popup (All) - Read buttons by class
window.onload   = function() {
    var stations = document.getElementsByClassName('popStation');
    for(var i = 0; i < stations.length; i++) {
        var station = stations[i];
        station.onclick = function() {
            popStation.style.display = "flex";
        }
    }
    var dels = document.getElementsByClassName('popDelete');
    for(var i = 0; i < dels.length; i++) {
        var del = dels[i];
        del.onclick = function() {
            popNotice.style.display = "flex";
        }
    }
}

// Popup (All) - Click outside popup to close
window.onclick = function(event) {
    if (event.target == popStation) {
        popStation.style.display = "none";
    }
    if (event.target == popPrint) {
        popPrint.style.display = "none";
    }
    if (event.target == popReceipt) {
        popReceipt.style.display = "none";
    }
    if (event.target == popNotice) {
        popNotice.style.display = "none";
    }
}

// Popup - 新增/編輯工作站
var popStation  = document.getElementById("popStation");
var close       = popStation.getElementsByClassName("close")[0];
var submit      = popStation.getElementsByClassName("submit")[0];
var cancel      = popStation.getElementsByClassName("cancel")[0];
close.onclick   = function() { popStation.style.display = "none"; }
submit.onclick  = function() { popStation.style.display = "none"; }
cancel.onclick  = function() { popStation.style.display = "none"; }

// Popup - 列印品項
var popPrint    = document.getElementById("popPrint");
var buttonPrint = document.getElementsByClassName("popPrint")[0];
var close       = popPrint.getElementsByClassName("close")[0];
var submit      = popPrint.getElementsByClassName("submit")[0];
var cancel      = popPrint.getElementsByClassName("cancel")[0];
buttonPrint.onclick = function() { popPrint.style.display = "flex"; }
close.onclick       = function() { popPrint.style.display = "none"; }
submit.onclick      = function() { popPrint.style.display = "none"; }
cancel.onclick      = function() { popPrint.style.display = "none"; }

// Popup - 出單樣板
var popReceipt    = document.getElementById("popReceipt");
var buttonReceipt = document.getElementsByClassName("popReceipt")[0];
var close       = popReceipt.getElementsByClassName("close")[0];
var submit      = popReceipt.getElementsByClassName("submit")[0];
var cancel      = popReceipt.getElementsByClassName("cancel")[0];
buttonReceipt.onclick = function() { popReceipt.style.display = "flex"; }
close.onclick       = function() { popReceipt.style.display = "none"; }
submit.onclick      = function() { popReceipt.style.display = "none"; }
cancel.onclick      = function() { popReceipt.style.display = "none"; }

// Popup - 通知
var popNotice    = document.getElementById("popNotice");
var close       = popNotice.getElementsByClassName("close")[0];
var submit      = popNotice.getElementsByClassName("submit")[0];
var cancel      = popNotice.getElementsByClassName("cancel")[0];
close.onclick       = function() { popNotice.style.display = "none"; }
submit.onclick      = function() { popNotice.style.display = "none"; }
cancel.onclick      = function() { popNotice.style.display = "none"; }