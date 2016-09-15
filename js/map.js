$(function(){
	var colorIn = "#fb2d2d";
	$('#world-map').vectorMap({
    backgroundColor: "#CFCFCF",
    map: 'world_mill',
    zoomButtons : false,
    focusOn: {
      x: 0,
      y: 0,
      scale: 1
    },
    series: {
      regions: [{
        values: {
            US: colorIn,
            KR: colorIn,
            CN: colorIn,
            NZ: colorIn,
            AU: colorIn,
            PH: colorIn,
            AT: colorIn,
            CZ: colorIn,
            DE: colorIn,
            GB: colorIn,
            HU: colorIn,
            ES: colorIn,
            KH: colorIn,
            FR: colorIn,
            IT: colorIn,
            CH: colorIn
            
        }
      }]
    },
    onRegionTipShow: function(e, el){
      	el.html(el.html());
    }
});
});