$(document).ready(function(){


	$("form.questions").on("submit",function(event){
		event.preventDefault(); // prevents form from refreshing
	}); // end of form.questions event function

	
	$("input[type=submit]").on("click",function(){
		$(this).addClass("animated wobble");
		
		// below: variables to store user's answers
		var who = $("fieldset.who input[type='radio']").val();
		var firstTimeAnswer = $("fieldset.alibiTiming input[type='radio']").val();
		var scaleOfIssueQ = $("select.scaleMessUp").val();
		console.log(who + ", " + firstTimeAnswer + ", " + scaleOfIssueQ);

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

