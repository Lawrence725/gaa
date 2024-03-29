// Popup close
function popClose(e) {
    if (e.classList.contains('popup'))
        window.onclick  = function(event) {
            if (event.target == e)
                e.style.display = "none"; }
    else if (!(e.classList.contains('popBody')))
        e.closest('.popup').style.display = "none"; }

// Popup (Api)
function popApi() {
    document.getElementById("popApi").style.display = "flex"; }
    
// Popup (Calculate)
function popCalculate() {
    var popCalculate    = document.getElementById("popCalculate");
    var close           = popCalculate.getElementsByClassName("close")[0];
    var submit          = popCalculate.getElementsByClassName("submit")[0];
    close.onclick       = function() { popCalculate.style.display = "none"; }
    // submit.onclick      = function() { popCalculate.style.display = "none"; }
    window.onclick      = function(event) { if (event.target == popCalculate) { popCalculate.style.display = "none"; }}
    popCalculate.style.display = "flex"; }

// Popup (Logistics)
function popLogistics() {
    var popLogistics    = document.getElementById("popLogistics");
    var close           = popLogistics.getElementsByClassName("close")[0];
    var submit          = popLogistics.getElementsByClassName("submit")[0];
    var cancel          = popLogistics.getElementsByClassName("cancel")[0];
    close.onclick       = function() { popLogistics.style.display = "none"; }
    submit.onclick      = function() { popLogistics.style.display = "none"; }
    cancel.onclick      = function() { popLogistics.style.display = "none"; }
    window.onclick      = function(event) { if (event.target == popLogistics) { popLogistics.style.display = "none"; }}
    popLogistics.style.display = "flex"; }

// Popup (Delivery)
function popDelivery() {
    var popDelivery = document.getElementById("popDelivery");
    var close       = popDelivery.getElementsByClassName("close")[0];
    var submit      = popDelivery.getElementsByClassName("submit")[0];
    var cancel      = popDelivery.getElementsByClassName("cancel")[0];
    close.onclick   = function() { popDelivery.style.display = "none"; }
    submit.onclick  = function() { popDelivery.style.display = "none"; }
    cancel.onclick  = function() { popDelivery.style.display = "none"; }
    window.onclick  = function(event) { if (event.target == popDelivery) { popDelivery.style.display = "none"; }}
    popDelivery.style.display = "flex"; }

// Popup (Delete)
function popDelete() {
    var popDelete   = document.getElementById("popDelete");
    var close       = popDelete.getElementsByClassName("close")[0];
    var submit      = popDelete.getElementsByClassName("submit")[0];
    var cancel      = popDelete.getElementsByClassName("cancel")[0];
    close.onclick   = function() { popDelete.style.display = "none"; }
    submit.onclick  = function() { popDelete.style.display = "none"; }
    cancel.onclick  = function() { popDelete.style.display = "none"; }
    window.onclick  = function(event) { if (event.target == popDelete) { popDelete.style.display = "none"; }}
    popDelete.style.display = "flex"; }
    
// Popup (Discount)
function popDiscount() {
    var popDiscount = document.getElementById("popDiscount");
    var close       = popDiscount.getElementsByClassName("close")[0];
    var submit      = popDiscount.getElementsByClassName("submit")[0];
    var cancel      = popDiscount.getElementsByClassName("cancel")[0];
    close.onclick   = function() { popDiscount.style.display = "none"; }
    submit.onclick  = function() { popDiscount.style.display = "none"; }
    cancel.onclick  = function() { popDiscount.style.display = "none"; }
    window.onclick  = function(event) { if (event.target == popDiscount) { popDiscount.style.display = "none"; }}
    popDiscount.style.display = "flex"; }
    
// Popup (Invoice)
function popInvoice1() {
    var popInvoice1 = document.getElementById("popInvoice1");
    var close       = popInvoice1.getElementsByClassName("close")[0];
    var submit      = popInvoice1.getElementsByClassName("submit")[0];
    var cancel      = popInvoice1.getElementsByClassName("cancel")[0];
    close.onclick   = function() { popInvoice1.style.display = "none"; }
    submit.onclick  = function() { popInvoice1.style.display = "none"; popInvoice2(); }
    cancel.onclick  = function() { popInvoice1.style.display = "none"; }
    window.onclick  = function(event) { if (event.target == popInvoice1) { popInvoice1.style.display = "none"; }}
    popInvoice1.style.display = "flex"; }
function popInvoice2() {
    var popInvoice2 = document.getElementById("popInvoice2");
    var close       = popInvoice2.getElementsByClassName("close")[0];
    var submit      = popInvoice2.getElementsByClassName("submit")[0];
    var cancel      = popInvoice2.getElementsByClassName("cancel")[0];
    close.onclick   = function() { popInvoice2.style.display = "none"; }
    submit.onclick  = function() { popInvoice2.style.display = "none"; popInvoice3(); }
    cancel.onclick  = function() { popInvoice2.style.display = "none"; popInvoice1(); }
    window.onclick  = function(event) { if (event.target == popInvoice2) { popInvoice2.style.display = "none"; }}
    popInvoice2.style.display = "flex"; }
function popInvoice3() {
    var popInvoice3 = document.getElementById("popInvoice3");
    var close       = popInvoice3.getElementsByClassName("close")[0];
    var submit      = popInvoice3.getElementsByClassName("submit")[0];
    var cancel      = popInvoice3.getElementsByClassName("cancel")[0];
    close.onclick   = function() { popInvoice3.style.display = "none"; }
    submit.onclick  = function() { popInvoice3.style.display = "none"; }
    cancel.onclick  = function() { popInvoice3.style.display = "none"; popInvoice2(); }
    window.onclick  = function(event) { if (event.target == popInvoice3) { popInvoice3.style.display = "none"; }}
    popInvoice3.style.display = "flex"; }
    
// Popup (InvoiceDisable)
function popInvoiceDisable() {
    var popInvoiceDisable   = document.getElementById("popInvoiceDisable");
    var close               = popInvoiceDisable.getElementsByClassName("close")[0];
    var submit              = popInvoiceDisable.getElementsByClassName("submit")[0];
    var cancel              = popInvoiceDisable.getElementsByClassName("cancel")[0];
    close.onclick           = function() { popInvoiceDisable.style.display = "none"; }
    submit.onclick          = function() { popInvoiceDisable.style.display = "none"; }
    cancel.onclick          = function() { popInvoiceDisable.style.display = "none"; }
    window.onclick          = function(event) { if (event.target == popInvoiceDisable) { popInvoiceDisable.style.display = "none"; }}
    popInvoiceDisable.style.display = "flex"; }

// Chart
// https://www.chartjs.org/docs/latest/samples/bar/stacked-groups.html
var c1 = '#F96332';
var c2 = '#A0D468';
var c3 = '#5D9CEC';

const ctx = document.getElementById('timeChart').getContext('2d');
const pieChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['日', '一', '二', '三', '四', '五', '六'],
        datasets: [
            {
                label: '營業時間',
                data: [[6,14],[6,14],[6,14],[6,14],[6,14],[6,14],[6,14]],
                backgroundColor: [c1],
                stack: 'Stack 0',
                barPercentage: 0.5,
                borderRadius: Number.MAX_VALUE,
                borderSkipped: false,
            },
            {
                label: '營業時間',
                data: [[3,7],,,,,,[3,7]],
                backgroundColor: [c1],
                stack: 'Stack 0',
                barPercentage: 0.5,
                borderRadius: Number.MAX_VALUE,
                borderSkipped: false,
            },
            {
                label: '營業時間',
                data: [,[3,5],[3,5],[3,5],[3,5],[3,5],],
                backgroundColor: [c1],
                stack: 'Stack 0',
                barPercentage: 0.5,
                borderRadius: Number.MAX_VALUE,
                borderSkipped: false,
            },
            {
                label: '外送取餐時間',
                data: [[11,14],[11,14],[11,14],[11,14],[11,14],[11,14],[11,14]],
                backgroundColor: [c2],
                stack: 'Stack 1',
                barPercentage: 0.5,
                borderRadius: Number.MAX_VALUE,
                borderSkipped: false,
            },
            {
                label: '外送取餐時間',
                data: [[3,6],,,,,,[3,6]],
                backgroundColor: [c2],
                stack: 'Stack 1',
                barPercentage: 0.5,
                borderRadius: Number.MAX_VALUE,
                borderSkipped: false,
            },
            // {
            //     label: '自取取餐時間',
            //     data: [[11,14],[11,14],[11,14],[11,14],[11,14],[11,14],[11,14]],
            //     backgroundColor: [c3],
            //     stack: 'Stack 3',
            //     barPercentage: 0.5,
            //     borderRadius: Number.MAX_VALUE,
            //     borderSkipped: false,
            // },
        ]
    },
    options: {
        events: [],
        plugins: {
            legend: {
                display: false
            },
            tooltips: {enabled: false}
        },
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
                reverse: true,
                max: 24,
                ticks: { stepSize: 2 }
            },
        }
    }
});