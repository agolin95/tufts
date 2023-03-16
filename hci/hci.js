var sliderWatch = new clsStopwatch();
var dropdownWatch = new clsStopwatch();
var sliderClicks = 0;
var dropdownClicks = 0;

$(document).ready(function() {

	//START
	$("#startbutton").click(function() {
		sliderWatch.start();
		$("#sliders").css("display", "block");
		$("#startbutton").css("display", "none");
	});

	///SLIDERS
	$("#monthslider").change(function() {
		$("#monthval").text($("#monthslider").val()); 
	});

	$("#dayslider").change(function() {
		$("#dayval").text($("#dayslider").val()); 
	});

	$("#yearslider").change(function() {
		$("#yearval").text($("#yearslider").val()); 
	});

	$("#sliders").click(function() {
		sliderClicks += 1;
	});

	$("#slidersubmit").click(function() {
		$("#slidertime").text(formatTime(sliderWatch.time()));
		$("#sliderclickcount").text(sliderClicks);
		$("#dropdowns").css("display", "block");
		$("#sliders").css("display", "none");
		dropdownWatch.start();
	});

	////DROPDOWNS
	$("#dropdowns").click(function() {
		dropdownClicks += 1;
	});

	$("#dropdownsubmit").click(function() {
		$("#results").css("display", "block");
		$("#dropdowns").css("display", "none");
		$("#dropdowntime").text(formatTime(dropdownWatch.time()));
		$("#dropdownclickcount").text(dropdownClicks);
	});



});
