$(document).ready(function(){
	$('.question').click(showList);
});

function showList() {
	$(this).next('.answer').toggle("slow");
}