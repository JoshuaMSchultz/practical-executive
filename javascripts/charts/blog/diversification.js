var chart1 = AmCharts.makeChart("chart1div", {
    "type": "serial",
    "theme": "light",
    "marginTop":10,
    "marginRight": 80,
    "fontFamily": "Architects Daughter",
    "handDrawn": true,
    "valueAxes": [{
        "position": "left",
        "title": "Total Risk In Your Portfolio",
        "gridAlpha": 0,
        "maximum": 100
    }],
    "graphs": [{
        "id":"g1",
        "balloonText": "Portfolio Risk with<br><b><span style='font-size:14px;'>[[category]]</span></b><span style='font-size:14px;'> stocks</span><br>stocks in the portfolio",
        "lineColor": "#d1655d",
        "lineThickness": 4,
        "animationPlayed": true,
        "type": "smoothedLine",
        "valueField": "Total Risk in Portfolio"
    }],
    "chartCursor": {
    "categoryBalloonEnabled": false,
    "cursorAlpha": 0,
    "zoomable": false
    },
    "categoryField": "Number of Stocks",
    "categoryAxis": {
      "title": "Number of Stocks In Your Portfolio",
      "gridPosition": "start",
      "gridAlpha": 0,
      "tickPosition": "start",
    },
    "dataProvider": [
      {
        "Number of Stocks":0,
        "Total Risk in Portfolio":100
      },
      {
        "Number of Stocks":1,
        "Total Risk in Portfolio":91
      },
      {
        "Number of Stocks":2,
        "Total Risk in Portfolio":82.9
      },
      {
        "Number of Stocks":3,
        "Total Risk in Portfolio":75.61
      },
      {
        "Number of Stocks":4,
        "Total Risk in Portfolio":69.049
      },
      {
        "Number of Stocks":5,
        "Total Risk in Portfolio":63.1441
      },
      {
        "Number of Stocks":6,
        "Total Risk in Portfolio":57.82969
      },
      {
        "Number of Stocks":7,
        "Total Risk in Portfolio":53.046721
      },
      {
        "Number of Stocks":8,
        "Total Risk in Portfolio":48.7420489
      },
      {
        "Number of Stocks":9,
        "Total Risk in Portfolio":44.86784401
      },
      {
        "Number of Stocks":10,
        "Total Risk in Portfolio":41.38105961
      },
      {
        "Number of Stocks":11,
        "Total Risk in Portfolio":38.24295365
      },
      {
        "Number of Stocks":12,
        "Total Risk in Portfolio":35.41865828
      },
      {
        "Number of Stocks":13,
        "Total Risk in Portfolio":32.87679245
      },
      {
        "Number of Stocks":14,
        "Total Risk in Portfolio":30.58911321
      },
      {
        "Number of Stocks":15,
        "Total Risk in Portfolio":28.53020189
      },
      {
        "Number of Stocks":16,
        "Total Risk in Portfolio":26.6771817
      },
      {
        "Number of Stocks":17,
        "Total Risk in Portfolio":25.00946353
      },
      {
        "Number of Stocks":18,
        "Total Risk in Portfolio":23.50851718
      },
      {
        "Number of Stocks":19,
        "Total Risk in Portfolio":22.15766546
      },
      {
        "Number of Stocks":20,
        "Total Risk in Portfolio":20.94189891
      },
      {
        "Number of Stocks":21,
        "Total Risk in Portfolio":19.84770902
      },
      {
        "Number of Stocks":22,
        "Total Risk in Portfolio":18.86293812
      },
      {
        "Number of Stocks":23,
        "Total Risk in Portfolio":17.97664431
      },
      {
        "Number of Stocks":24,
        "Total Risk in Portfolio":17.17897988
      },
      {
        "Number of Stocks":25,
        "Total Risk in Portfolio":16.46108189
      },
      {
        "Number of Stocks":26,
        "Total Risk in Portfolio":15.8149737
      },
      {
        "Number of Stocks":27,
        "Total Risk in Portfolio":15.23347633
      },
      {
        "Number of Stocks":28,
        "Total Risk in Portfolio":14.7101287
      },
      {
        "Number of Stocks":29,
        "Total Risk in Portfolio":14.23911583
      },
      {
        "Number of Stocks":30,
        "Total Risk in Portfolio":13.81520424
      },
      {
        "Number of Stocks":31,
        "Total Risk in Portfolio":13.43368382
      },
      {
        "Number of Stocks":32,
        "Total Risk in Portfolio":13.09031544
      },
      {
        "Number of Stocks":33,
        "Total Risk in Portfolio":12.78128389
      },
      {
        "Number of Stocks":34,
        "Total Risk in Portfolio":12.5031555
      },
      {
        "Number of Stocks":35,
        "Total Risk in Portfolio":12.25283995
      },
      {
        "Number of Stocks":36,
        "Total Risk in Portfolio":12.02755596
      },
      {
        "Number of Stocks":37,
        "Total Risk in Portfolio":11.82480036
      },
      {
        "Number of Stocks":38,
        "Total Risk in Portfolio":11.64232033
      },
      {
        "Number of Stocks":39,
        "Total Risk in Portfolio":11.47808829
      },
      {
        "Number of Stocks":40,
        "Total Risk in Portfolio":11.33027946
      },
      {
        "Number of Stocks":41,
        "Total Risk in Portfolio":11.19725152
      },
      {
        "Number of Stocks":42,
        "Total Risk in Portfolio":11.07752637
      },
      {
        "Number of Stocks":43,
        "Total Risk in Portfolio":10.96977373
      },
      {
        "Number of Stocks":44,
        "Total Risk in Portfolio":10.87279636
      },
      {
        "Number of Stocks":45,
        "Total Risk in Portfolio":10.78551672
      },
      {
        "Number of Stocks":46,
        "Total Risk in Portfolio":10.70696505
      },
      {
        "Number of Stocks":47,
        "Total Risk in Portfolio":10.63626854
      },
      {
        "Number of Stocks":48,
        "Total Risk in Portfolio":10.57264169
      },
      {
        "Number of Stocks":49,
        "Total Risk in Portfolio":10.51537752
      },
      {
        "Number of Stocks":50,
        "Total Risk in Portfolio":10.46383977
      }
    ],
    "export": {
        "enabled": false
    }

});
