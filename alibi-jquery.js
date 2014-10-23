$(document).ready(function(){


	$("form.questions").on("submit",function(event){
		event.preventDefault(); // prevents form from refreshing
	}); // end of form.questions event function

	// empty variables to store user's input:
	var who = "";
	var firstTimeAnswer = "";
	var scaleOfIssueQ = "";

	// this function defines who alibi is for & stores the value
	$("fieldset.who input[type='radio']").on("change", function(){
		 who = $(this).val(); 
	}); // end of function listening on "who" question

	// this function defines whether it's the first time or not & stores the value
	$("fieldset.alibiTiming input[type='radio']").on("change", function(){
		 firstTimeAnswer = $(this).val(); 
	}); // end of function listening on alibi Timing

	// this function defines the scale of the issue & stores the value
	$("select.scaleMessUp").on("change", function(){
		 scaleOfIssueQ = $(this).val(); 
	}); // end of function listening on scale of Mess up Input

	// functions that run on submit button:	
	$("input[type=submit]").on("click",function(){
		$(this).addClass("animated wobble"); // fun effect for submit
		console.log("Who alibi is for: " + who + ", " + "Happened before? "+ firstTimeAnswer + ", Scale of mess up: " + scaleOfIssueQ); // logs user's answers
	}); // end of click submit function


	 
}); // end doc ready function


// Notes:

// $("[value~='mom']")
// selects elements with the value attribute and the word mom


// http://learn.jquery.com/using-jquery-core/selecting-elements/
// :checked

// Not to be confused with :checkbox, :checked targets checked checkboxes, but keep in mind that this selector works also for checked radio buttons, and select elements (for select elements only, use the :selected selector):

// 1
// $( "form :checked" );

