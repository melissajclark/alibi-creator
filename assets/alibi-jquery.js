$(document).ready(function(){

/*=============================================
=            Code Sections:           		=
=============================================
	
1. Hiding of Elements, Stuff to Do on Page Load
2. Variables Defined for User's Input
3. Alibi Summary for User
4. Alibi Creation
5. Alibi Output

=============================================*/

/**
*
* Hiding of Elements, Stuff to Do on Page Load
*
**/

	$(".fitThis").fitText(0.8, {minFontSize:'30px', maxFontSize: '80px'});
	$(".caption").fitText(0.8, {minFontSize:'15px', maxFontSize: '25px'});

	$(".otherField").hide(); // hides other text field on page load
	$("fieldset.pissedName").hide(); // hides pissedName fieldset on page load
	$("fieldset.who [value='other']").on("click", function(){
		$(".otherField").show();
	});

	$("form.questions").on("submit",function(event){
		event.preventDefault(); // prevents form from refreshing
	}); // end of form.questions event function


/**
*
* Variables Defined for User's Input
*
**/

	var alibiQuestion = { 
	// would be good to add if statement in case user inputs other answer
		who: "",
		whoName: "",
		firstTime: "",
		scaleOfIssue: ""
		// more alibi questions?
	}

	var whosePissed = "";

	// this function defines alibiQuestion.who alibi is for & stores the value
	$("fieldset.who input[type='radio']").on("click", function(){
		 alibiQuestion.who = $(this).val(); 

		 var nameQhtml = '<fieldset class="pissedName"><legend>Whats your ' + alibiQuestion.who + '&#39;s ' + 'name?' + '</legend><br/><input type="text" name="their" id="who_8" placeholder="name" /></fieldset>';

		 if (alibiQuestion.who != "other") { // checks for input that is not "other"
		 	$("fieldset.pissedName").remove();
		 	$("fieldset.who").after(nameQhtml); // puts Q about name after first fieldset
		 	$(".otherField").hide(); // hides other text if "other" is not selected
		 }

		 if (alibiQuestion.who === "other") { // hides name Q if user selects other
		 	$("fieldset.pissedName").hide(); 
		 }

	}); // end of function listening on "alibiQuestion.who" question


	// this function defines whether it's the first time or not & stores the value
	$("fieldset.alibiTiming input[type='radio']").on("change", function(){
		 alibiQuestion.firstTime = $(this).val(); 
	}); // end of function listening on alibi Timing

	// this function defines the scale of the issue & stores the value
	$("select.scaleMessUp").on("change", function(){
		 alibiQuestion.scaleOfIssue = $(this).val(); 
	}); // end of function listening on scale of Mess up Input	

	// this function happens when user hits submit - analyzes input of "who" fields
	$("input[type=submit]").on("click",function(){
		$(this).addClass("animated wobble"); // fun effect for submit

		if (alibiQuestion.who == "other") { // checks the value of input with the value of "other"
			alibiQuestion.who = $("fieldset.who input[type=text]").val();
		}

		if (alibiQuestion.who != "other") { // checks the value of input with the value of "other"
			alibiQuestion.whoName = $("fieldset.pissedName input[type=text]").val();
		}

		whosePissed = '<span class="capitalized">' + alibiQuestion.whoName + '</span>'; // on submit: updates the name with span class so it can be styled with CSS

	}); // end of click submit function & logging of quick alibi summary


	$("input[type=submit]").on("click",function(){ 	// this section analyzes user's answer to scaleofIssue prompt
			$("section.formContent").hide();
	});



/**
*
* Alibi Summary for User
*
**/

	// variables below: defines empty variables for storing generated content from function below
	var scaleOfIssueQ = ""; 
	var analyzedAlibi = "";


	$("input[type=submit]").on("click",function(){ 	// this section analyzes user's answer to scaleofIssue prompt

		if (alibiQuestion.scaleOfIssue === 10 || alibiQuestion.scaleOfIssue >= 10) {
			scaleOfIssueQ = "Holy shit, this could be bad. I don't know if I can get you outta this one";
		} else if (alibiQuestion.scaleOfIssue >= 8 && alibiQuestion.scaleOfIssue <= 9) {
			scaleOfIssueQ = "Eep, that bad's pretty bad. I'll do my best";
		} else if (alibiQuestion.scaleOfIssue >= 6 && alibiQuestion.scaleOfIssue <= 7 ) {
			scaleOfIssueQ = "Hmmm, alright, I think I can help you out";
		} else if (alibiQuestion.scaleOfIssue >= 4 && alibiQuestion.scaleOfIssue <= 5) {
			scaleOfIssueQ = "Okay, sounds like didn't mess up too badly, I got your back. We'll get through this together";
		} else if (alibiQuestion.scaleOfIssue >= 2 && alibiQuestion.scaleOfIssue <= 3) {
			scaleOfIssueQ = "You barely messed up! Let's call this a misdemeanour";
		} else if (alibiQuestion.scaleOfIssue = 1) {
			scaleOfIssueQ = "You know what, you'll be fine. I bet your " + alibiQuestion.who + ", " + whosePissed + " is already over it. Let's get you an alibi, just in case" 
		}

		var analyzedAlibi = "<p>" + "Alright so you messed up and pissed off your " + alibiQuestion.who + ", " + whosePissed + "." + "</p>" + "<p>" +scaleOfIssueQ + "." + "</p>"; 
		
		$(".alibiSummary").append(analyzedAlibi); // inserts response to answers into the DOM

	}); // end of click submit function that analyzes scale of Issue

/**
*
* Alibi Creation
*
**/

	// defines prefixes to insert before array items
	var prefix = [ "my", "I had", "I was"]; 

	/* My */ var alibiOption1 = [ "toilet exploded", "apartment flooded", "great-aunt twice removed died", "cat had a seizure", "my phone died"];

	/* I had */ var alibiOption2 = [ "diarrhea", "the bird flu", "my first period", "to meet my parole officer", "food poisoning", "vertigo"]; 

	/* I was */ var alibiOption3 = ["watching porn", "in Montreal", "in a coma", "helping an old lady cross the street", "robbed", "arrested", "doing laundry", "in rehab", "at a Katy Perry concert", "dealing with my bedbug infestation"]; 

	/* bad */ var badWord = ["awful", "terrible", "serious", "a bummer", "dreadful", "atrocious", "godawful", "gross", "abominable", "despicable", "horrid", "repulsive", "rotten"];

	/* more*/ var moreAlibi = ["If you knew the state I was in, you wouldn't have wanted me around.", "I still can't believe this happened!", "I'm still dealing with it all, you know?", "Ugh, it's not even over yet. It's still going on."]

	/* apology */ var alibiApology = ["Can we get past this?", "I hope we can move on from this, let's remember the good times. What do you say?", "I know I'm a bit of a fuckup, I hope you can find it in your hear to forgive me.", "This whole situation has been awful, but the worst part is knowing I disappointed you. This will never happen again. Let's move on. So uh, can I get you a beer?"]

	// returns random item from array (full disclosure: borrowed from cat name project)
	  var random = function(arr) {
	  var num = arr.length;
	  var random = Math.floor(Math.random() * arr.length);
	  return arr[random];
	}

	// updates array values to include prefix + elaborates with more info
	var alibiOption1 = "I am SO sorry! Oh god, " + prefix[0] + " " + random(alibiOption1) + ". It was a real nightmare. " + random(moreAlibi) + " " + random(alibiApology); 
	var alibiOption2 = "Believe me, I wish I could have been there. " + prefix[1] + " " + random(alibiOption2) + " and it was " + random(badWord) + "! " + random(moreAlibi) + " " + random(alibiApology);
	var alibiOption3 = "I can't believe I'm saying this aloud, I feel  " + random(badWord) + ". But, I need to be honest with you... " + prefix[2] + " " + random(alibiOption3) + ". " + random(moreAlibi) + " " + random(alibiApology);

/**
*
* Alibi Output
*
**/

var alibiButton = '<button class="createAlibi">Ready for an Alibi?</button>';

$("input[type=submit]").on("click",function(){ 	// functions below are executed after user hits submit
	$(".alibiSummary").after(alibiButton); // adds button after AlibiSummary
	$("button.createAlibi").on("click", function(){
		$("section.alibiOutput ol").append("<li>"+alibiOption1+"</li>");
		$("section.alibiOutput ol").append("<li>"+alibiOption2+"</li>");
		$("section.alibiOutput ol").append("<li>"+alibiOption3+"</li>");

	}); // closes function on button
}); // closes on click submit function



}); // end doc ready function



