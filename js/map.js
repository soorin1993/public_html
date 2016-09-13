$(function(){
	$('#world-map').vectorMap({
    map: 'world_mill',
    focusOn: {
      x: 0,
      y: 0,
      scale: 1
    },
    series: {
      regions: [{
        values: {
            US:'#FF0000',
            KR: '#FF0000',
            CN: '#FF0000',
            NZ: '#FF0000',
            AU: '#FF0000',
            PH: '#FF0000',
            AT: '#FF0000',
            CZ: '#FF0000',
            DE: '#FF0000',
            GB: '#FF0000',
            HU: '#FF0000',
            ES: '#FF0000',
            KH: '#FF0000',
            FR: '#FF0000',
            IT: '#FF0000',
            CH: '#FF0000'
            
        }
      }]
    }
});
});