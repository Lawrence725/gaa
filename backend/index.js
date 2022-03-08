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
function popInvoice() {
    var popInvoice  = document.getElementById("popInvoice");
    var close       = popInvoice.getElementsByClassName("close")[0];
    var submit      = popInvoice.getElementsByClassName("submit")[0];
    var cancel      = popInvoice.getElementsByClassName("cancel")[0];
    close.onclick   = function() { popInvoice.style.display = "none"; }
    submit.onclick  = function() { popInvoice.style.display = "none"; }
    cancel.onclick  = function() { popInvoice.style.display = "none"; }
    window.onclick  = function(event) { if (event.target == popInvoice) { popInvoice.style.display = "none"; }}
    popInvoice.style.display = "flex"; }
    
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