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

		// if ("fieldset.who input[value='other']") {
		// 	who = $("fieldset.who input[type='text']").val();
		// } else if ("fieldset.who input[type='radio']"){
		// 	who = $("fieldset.who input[type='radio']").val();
		// } 

		if (!"fieldset.who input[value='your']") {
			who = $("fieldset.who input[value='text']").val();
		}

		// if user selects other, log text value inputted
		// if user selects a radio button option, log that value

		console.log("Who alibi is for: " + who + ", " + "Happened before? "+ firstTimeAnswer + ", Scale of mess up: " + scaleOfIssueQ); // logs user's answers
	}); // end of click submit function


	 
}); // end doc ready function



