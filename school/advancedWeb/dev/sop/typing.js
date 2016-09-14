$(document).ready(function(){

	var itemList = [];
	$(".body-container").find("b").each(function(){ itemList.push(this.id); });    
	for (i = 0; i < itemList.length; i++){

		(function(index){
			
			var idName = '#' + itemList[index];
			var idName1 = idName + '-tp';
				
		    $(idName).hover(function(){
			    
			    $(function(){
					$(".type").typed({
						stringsElement: $(idName1),
						typeSpeed: 0
    				});
				});
		 		
			});
		})(i)
	};
});

