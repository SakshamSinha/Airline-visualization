(function () {
    var btn = document.createElement('button');
    btn.innerHTML = 'Un-Check All';
    btn.style.cssText = `
        position:absolute;
        left: 20px;
        top: 10px;
        background: rgb(42, 64, 173);
        color: #fff;
        border: none;
        padding: 5px 10px;
        z-index: 1000000;
        cursor: pointer;
    `;

    btn.onclick = function () {
        for(i=0; i < chart.series.length; i++) {
            if(chart.series[i].selected == true){
                chart.series[i].select();
                showSeries.call(chart.series[i], {checked: false});
            }
        }
    }

    document.body.appendChild(btn);
})();