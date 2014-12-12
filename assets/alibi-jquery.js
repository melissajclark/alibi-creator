$(document).ready(function(){

/*=============================================
=            Code Sections:           		=
=============================================
	Empty Variables	
	Hiding of Elements, Stuff to Do on Page Load
	Variables Defined for User's Input
	Function Updates Value of "Who"
	Alibi Summary for User
	Alibi Creation
	Alibi Output

=============================================*/

/*=================================================
=   Empty variables (to be used later on) =
==================================================*/

var nameOfAngryPerson = "";
var scaleOfIssueQ = ""; 
var analyzedAlibi = "";
var whoIsMadandTheirName = "";
var nameUsedInFinalAlibi = "";
var pissedNameInput = "";
var pissedNameInputOther = "";

/*-----  End of All empty variables ------*/


/**
*
* Hiding of Elements, Stuff to Do on Page Load
*
**/

	$(".fitThis").fitText(0.8, {minFontSize:'30px', maxFontSize: '100px'});
	$(".caption").fitText(0.8, {minFontSize:'15px', maxFontSize: '25px'});

	$(".otherField").hide(); // hides other text field on page load
	$("fieldset.pissedName").hide(); // hides pissedName fieldset on page load
	$("fieldset.who [value='other']").on("click", function(){
		$(".otherField").show();
	});
	$("button.createMoreAlibis.btn.btn-default.btn-lg.btn-block").hide(); // hides button on page load

	$("form.questions").on("submit",function(event){
		event.preventDefault(); // prevents form from refreshing
	}); // end of form.questions event function

	
/**
*
* Variables Defined for User's Input
*
**/

	var alibiQuestion = { 
		userName: "",
		who: "",
		whoName: "",
		firstTime: "",
		scaleOfIssue: ""
		// more alibi questions?
	}

	// this function defines alibiQuestion.who alibi is for & stores the value
	$("fieldset.who input[type='radio']").on("click", function(){
		 alibiQuestion.who = $(this).val(); 

		 var nameQhtml = '<fieldset class="pissedName"><legend>Whats your ' + alibiQuestion.who + '&#39;s ' + 'name?' + '</legend><br/><input type="text" name="name" id="who_10" placeholder="name"/></fieldset>';

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

/**
*
* Function Listens on Submit & adds [type=submit] on click
*
**/

$("button.submitButton.btn.btn-default.btn-lg.btn-block").on("click",function(){ 
	$("button.submitButton.btn.btn-default.btn-lg.btn-block").attr("type", "submit");

	// this function happens when user hits submit - analyzes input of "who" fields
	$("button.submitButton.btn.btn-default.btn-lg.btn-block [type='submit']").on("click",function(){ 
		$(this).addClass("animated wobble"); // fun effect for submit

		var nameInput = $("fieldset.pissedName input[type='text']").val();
		// console.log(nameInput);

		var nameInputOther = $("input#who_9").val();
		// console.log(nameInputOther);

	/**
	*
	* Function Updates Value of "Who"
	*
	**/

		if (alibiQuestion.who === "mom" || alibiQuestion.who === "dad" ) {
			alibiQuestion.whoName = $("fieldset.pissedName input[type=text]").val();
			nameOfAngryPerson = ' ' + '<span class="capitalized">' + alibiQuestion.whoName + '</span>';
			nameUsedInFinalAlibi = ' ' + '<span class="capitalized">' + alibiQuestion.who + '</span>' + ', ';
			whoIsMadandTheirName = " your " + alibiQuestion.who + "," + nameOfAngryPerson;
		} 

		if (alibiQuestion.who ===  "other") { // checks the value of input with the value of "other"
			alibiQuestion.who = $("fieldset.who input[type=text]").val();
			nameOfAngryPerson = ' ' + '<span class="capitalized">' + alibiQuestion.who + '</span>';
			whoIsMadandTheirName = nameOfAngryPerson;
			nameUsedInFinalAlibi = nameOfAngryPerson + ', ';
		}
		else if (alibiQuestion.who != "other" && alibiQuestion.who != "mom" && alibiQuestion.who != "dad") { 
			alibiQuestion.whoName = $("fieldset.pissedName input[type=text]").val();
			nameOfAngryPerson = ' ' + '<span class="capitalized">' + alibiQuestion.whoName + '</span>';
			whoIsMadandTheirName = " your " + alibiQuestion.who + "," + nameOfAngryPerson;
			nameUsedInFinalAlibi = nameOfAngryPerson + ', ';
		}

		console.log(nameOfAngryPerson);
		$("section.formContent").hide();

		// sets user's Name entry as value in alibiQuestion.userName variable
		alibiQuestion.userName = $("fieldset.userName input[type='text']").val();
		var usersName = "<span class='capitalized'>" + alibiQuestion.userName + "</span>"; 
		console.log(usersName);


	/**
	*
	* Alibi Summary for User
	*
	**/

		// this section analyzes user's answer to scaleofIssue prompt

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
			scaleOfIssueQ = "You know what, you'll be fine. I bet " + whoIsMadandTheirName + " is already over it. Let's get you an alibi, just in case" 
		}

		var analyzedAlibi = "<p>" + "Alright so you messed up and pissed off " + whoIsMadandTheirName + "." + "</p>" + "<p>" +scaleOfIssueQ + "." + "</p>";
		
		$(".alibiSummary").append(analyzedAlibi); // inserts response to answers into the DOM
		console.log(whoIsMadandTheirName);

	}); // end of click submit function & logging of quick alibi summary	
}); // end of function adding type=submit to button



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

var alibiButton = '<button type="button" class="createAlibi btn btn-default btn-lg btn-block animated">Ready for an Alibi?</button>';

// functions below are executed after user hits submit
$("button.submitButton.btn.btn-default.btn-lg.btn-block [type='submit']").one("click",function(){ 	

	$(".alibiSummary").after(alibiButton); // adds button after AlibiSummary
		$("button.createAlibi.btn.btn-default.btn-lg.btn-block").one("click", function(){
			$(this).addClass('tada');
			setTimeout(function(){ // appends alibis after time out function
				$("section.alibiOutput ol").append("<li>"+nameUsedInFinalAlibi + ' ' + alibiOption1+"</li>");
				$("section.alibiOutput ol").append("<li>"+nameUsedInFinalAlibi + ' ' + alibiOption2+"</li>");
				$("section.alibiOutput ol").append("<li>"+nameUsedInFinalAlibi + ' ' + alibiOption3+"</li>");
			},2000); // time between click and appendage of list items
		}); // closes function on create alibi button

	// 	setTimeout(function(){
	// 		$("button.createMoreAlibis.btn.btn-default.btn-lg.btn-block").show(); // appends button after initial three alibis
	// 		setTimeout(function(){
	// 			$("button.createMoreAlibis.btn.btn-default.btn-lg.btn-block").one("click", function(){ // appends button after initial three alibis
	// 				$(this).addClass('tada');
	// 				$("section.moreAlibiOutput ol").append("<li>"+nameUsedInFinalAlibi + ' ' + alibiOption1+"</li>");
	// 				$("section.moreAlibiOutput ol").append("<li>"+nameUsedInFinalAlibi + ' ' + alibiOption2+"</li>");
	// 				$("section.moreAlibiOutput ol").append("<li>"+nameUsedInFinalAlibi + ' ' + alibiOption3+"</li>");
	// 			}); // closes function on more alibi button
	// 		},2000); // time between click and appendage of list items

	// },5000); // closes function on more alibis button

}); // closes on click submit function


}); // end doc ready function

