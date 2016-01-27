var chart2 = AmCharts.makeChart("chart2div", {
	"type": "serial",
  "theme": "light",
  "fontFamily": "Architects Daughter",
  "handDrawn": true,
  "rotate": true,
  "categoryAxis": {
    "gridPosition": "start",
    "position": "left"
  },
	"startDuration": 1,
  "categoryField": "Company",
	"trendLines": [],
	"graphs": [
		{
			"balloonText": "Fidelity Growth Holds: [[value]]%",
			"fillAlphas": 0.8,
			"id": "AmGraph-1",
			"lineAlpha": 0.2,
			"title": "Percent Held",
			"type": "column",
			"valueField": "percentHeld"
		}],
	"guides": [],
	"valueAxes": [
		{
			"id": "ValueAxis-1",
			"position": "top",
			"axisAlpha": 0
		}
	],
	"allLabels": [],
	"balloon": {},
	"titles": [],
	"dataProvider": [
		{
			"Company": "Apple",
			"percentHeld": 5.69,
		},
		{
			"Company": "Salesforce.com",
			"percentHeld": 4.5,
		},
		{
			"Company": "Alphabet",
			"percentHeld": 3.74,
		},
		{
			"Company": "Amazon",
			"percentHeld": 3.71,
		},
		{
			"Company": "NVIDIA",
			"percentHeld": 2.91,
		},
    {
			"Company": "Facebook",
			"percentHeld": 2.79,
		},
    {
			"Company": "Regeneron Pharmaceuticals",
			"percentHeld": 2.18,
		},
    {
			"Company": "Alkermes",
			"percentHeld": 1.81,
		},
    {
			"Company": "Monster Beverage Pharmaceuticals",
			"percentHeld": 1.4,
		},
    {
			"Company": "Gilead Sciences",
			"percentHeld": 1.37,
		}
	],
    "export": {
    	"enabled": true
     }

});

var chart3 = AmCharts.makeChart("chart3div", {
	"type": "serial",
  "theme": "light",
  "fontFamily": "Architects Daughter",
  "handDrawn": true,
  "rotate": true,
  "categoryAxis": {
    "gridPosition": "start",
    "position": "left"
  },
	"startDuration": 1,
  "categoryField": "Company",
	"trendLines": [],
	"graphs": [
		{
			"balloonText": "MFS Growth Holds: [[value]]%",
			"fillAlphas": 0.8,
			"id": "AmGraph-1",
			"lineAlpha": 0.2,
			"title": "Percent Held",
			"type": "column",
			"valueField": "percentHeld"
		}],
	"guides": [],
	"valueAxes": [
		{
			"id": "ValueAxis-1",
			"position": "top",
			"axisAlpha": 0
		}
	],
	"allLabels": [],
	"balloon": {},
	"titles": [],
	"dataProvider": [
		{
			"Company": "Visa",
			"percentHeld": 3.98,
		},
		{
			"Company": "Amazon",
			"percentHeld": 3.89,
		},
		{
			"Company": "Alphabet",
			"percentHeld": 3.75,
		},
		{
			"Company": "Facebook",
			"percentHeld": 3.36,
		},
		{
			"Company": "Mastercard",
			"percentHeld": 2.85,
		},
    {
			"Company": "Danaher",
			"percentHeld": 2.6,
		},
    {
			"Company": "Thermo Fisher Scientific",
			"percentHeld": 2.6,
		},
    {
			"Company": "Adobe Systems",
			"percentHeld": 2.38,
		},
    {
			"Company": "Apple",
			"percentHeld": 2.25,
		},
    {
			"Company": "American Tower Corp",
			"percentHeld": 2.19,
		}
	],
    "export": {
    	"enabled": true
     }

});
