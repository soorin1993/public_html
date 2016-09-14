$(document).ready(function(){
	
	$(".home_button").click(function(){
        $(".loveletter").show();
        $(".letter").show();
        
        $(".github").hide();
        $(".git").hide();
        $(".bash").hide();
        
        $(".bash").css("display", "none");
        $(".git").css("display", "none");
        $(".github").css("display", "none");
        
        $(".bash-sop1").css("display", "none");
        $(".bash-sop2").css("display", "none");
        $(".git-sop1").css("display", "none");
        $(".git-sop2").css("display", "none");
        $(".github-sop1").css("display", "none");
        $(".github-sop2").css("display", "none");
        
        $(".bash_label").css("color", "#3a3a3a");
        $(".git_label").css("color", "#3a3a3a");
        $(".github_label").css("color", "#3a3a3a");
        
        $(".type-container").css("display", "none");
        
        
    });
	
    $(".bash_label").click(function(){
        $(".loveletter").hide();
        $(".letter").hide();
        
        $(".github").hide();
        $(".git").hide();
        $(".bash").show();
        
        $(".bash").css("display", "inline-block");
        $(".git").css("display", "none");
        $(".github").css("display", "none");
        
        $(".bash-sop1").css("display", "inline-block");
        $(".bash-sop2").css("display", "inline-block");
        $(".git-sop1").css("display", "none");
        $(".git-sop2").css("display", "none");
        $(".github-sop1").css("display", "none");
        $(".github-sop2").css("display", "none");
        
        $(".bash_label").css("color", "#ff7c7c");
        $(".git_label").css("color", "#3a3a3a");
        $(".github_label").css("color", "#3a3a3a");
        
        $(".type-container").css("display", "inline-block");
        
        
    });
    
    $(".git_label").click(function(){
        $(".loveletter").hide();
        $(".letter").hide();
        
        $(".git").show();
        $(".github").hide();
        $(".bash").hide();
		
		$(".bash").css("display", "none");
        $(".git").css("display", "inline-block");
        $(".github").css("display", "none");
        
        $(".bash-sop1").css("display", "none");
        $(".bash-sop2").css("display", "none");
        $(".git-sop1").css("display", "inline-block");
        $(".git-sop2").css("display", "inline-block");
        $(".github-sop1").css("display", "none");
        $(".github-sop2").css("display", "none");
		
		$(".bash_label").css("color", "#3a3a3a");
        $(".git_label").css("color", "#ff7c7c");
        $(".github_label").css("color", "#3a3a3a");

    });
    
    $(".github_label").click(function(){
        $(".loveletter").hide();
        $(".letter").hide();
        
        $(".github").show();
        $(".bash").hide();
        $(".git").hide();
        
        $(".bash").css("display", "none");
        $(".git").css("display", "none");
        $(".github").css("display", "inline-block");
        
        $(".bash-sop1").css("display", "none");
        $(".bash-sop2").css("display", "none");
        $(".git-sop1").css("display", "none");
        $(".git-sop2").css("display", "none");
        $(".github-sop1").css("display", "inline-block");
        $(".github-sop2").css("display", "inline-block");
        
		$(".bash_label").css("color", "#3a3a3a");
        $(".git_label").css("color", "#3a3a3a");
        $(".github_label").css("color", "#ff7c7c");
    });
    
	var itemList = [];
	$(".body-container").find("b").each(function(){ itemList.push(this.id); });    
	
    for (i = 0; i < itemList.length; i++){

		(function(index){
			
			var idName = '#' + itemList[index];
			var idName1 = idName + '-li';
				
		    $(idName).hover(function(){
	    		
	    	    $(idName1).css("color", "#ff7c7c");
				$(idName1).css("font-weight", "bold");
				$(idName1).css("background-color", "rgba(203, 242, 255, .8)");
				$(idName1).css("padding", "1px");
		   	    
		   	    
		
			    }, function(){
		        $(idName1).css("color", "#3a3a3a");
		        $(idName1).css("font-weight", "normal");
		        $(idName1).css("background-color", "");
		        $(idName1).css("padding", "");
		 		
			});
		})(i)
	}
	 
});