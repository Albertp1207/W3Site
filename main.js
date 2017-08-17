function opOrCloseNav () {
	if($("nav").css("display")=="none"){
		$("nav").css("display","inline-block");
		$(".opDiv").css("display","inline-block")
		
	} else {
		$("nav").css("display","none")
		$(".opDiv").css("display","none")
	}
}
$(".navButton img").click(opOrCloseNav)
$("#closeNav").click(opOrCloseNav);
$(".opDiv").click(opOrCloseNav);
$("nav a").click(opOrCloseNav);

function clicked() {
	$(this).addClass("filterButtonActive");
	$(".filterButton").not(this).removeClass("filterButtonActive")
}
$(".filterButton").click(clicked)
$("#archiButton").click(()=>{
	$("article[data-tag=archi]").show();
	$("article:not([data-tag=archi])").hide();
});
$("#absButton").click(()=>{
	$("article[data-tag=abs]").show();
	$("article:not([data-tag=abs])").hide();
});
$("#allButton").click(()=>{
	$("article").show();
});
