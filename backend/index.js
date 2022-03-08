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