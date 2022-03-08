// All Popup (Click outside popup close)
window.onclick = function(event) {
    if (event.target == popConfirm) {
        popConfirm.style.display = "none";
    }
    else if (event.target == popRefund) {
        popRefund.style.display = "none";
    }
    else if (event.target == popPrivacy) {
        popPrivacy.style.display = "none";
    }
    else if (event.target == popTerms) {
        popTerms.style.display = "none";
    }
}

// Popup (Confirm)
var popConfirm    = document.getElementById("popConfirm");
var buttonConfirm = document.getElementById("buttonConfirm");
var close       = popConfirm.getElementsByClassName("close")[0];
var submit      = popConfirm.getElementsByClassName("submit")[0];
var cancel      = popConfirm.getElementsByClassName("cancel")[0];
buttonConfirm.onclick = function() { popConfirm.style.display = "flex"; }
close.onclick       = function() { popConfirm.style.display = "none"; }
submit.onclick      = function() { popConfirm.style.display = "none"; }
cancel.onclick      = function() { popConfirm.style.display = "none"; }

// Popup (Refund)
var popRefund    = document.getElementById("popRefund");
var buttonRefund = document.getElementById("buttonRefund");
var close       = popRefund.getElementsByClassName("close")[0];
buttonRefund.onclick = function() { popRefund.style.display = "flex"; }
close.onclick       = function() { popRefund.style.display = "none"; }

// Popup (Privacy)
var popPrivacy    = document.getElementById("popPrivacy");
var buttonPrivacy = document.getElementById("buttonPrivacy");
var close       = popPrivacy.getElementsByClassName("close")[0];
buttonPrivacy.onclick = function() { popPrivacy.style.display = "flex"; }
close.onclick       = function() { popPrivacy.style.display = "none"; }

// Popup (Terms)
var popTerms    = document.getElementById("popTerms");
var buttonTerms = document.getElementById("buttonTerms");
var close       = popTerms.getElementsByClassName("close")[0];
buttonTerms.onclick = function() { popTerms.style.display = "flex"; }
close.onclick       = function() { popTerms.style.display = "none"; }