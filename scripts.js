
// hide most stuff
$( function() {
	$('.cycle1').hide().fadeIn(1000); // fade in cycle1
	$('.cycle2').hide(); // hide cycle2
	$('.button').hide(); // hide submit
	$('.results p').hide(); // hide results & errors
});

// redefine input value as a moment.js date
var getAnyStartCycle = function (id) {
	return moment( $(id).val() );
};

// set up function to show more (either next section, or an error)
var doAnyCycle = function (id, nextId) {
	var cycle = getAnyStartCycle(id);
	var charCount = $(id).val().length;

    if ( ( charCount >= 10 ) && ( !cycle.isValid() ) ) { // field is completed but not valid
    	$('.error').hide().fadeIn(100); // show error
    	return;
    } else if ( ( charCount >= 10 ) && ( cycle.isValid() ) ) { // field is completed and valid
    	$('.error').hide(); // hide any error already showing
    	$(nextId).hide().fadeIn(); // show next section
    }
};

// ok let's go
$(document).ready(function() {

	$('#start-cycle1').keyup(function() { // when user types in cycle1 field
		doAnyCycle("#start-cycle1", ".cycle2");
	});  

	$('#start-cycle2').keyup(function() { // when user types in cycle2 field
		doAnyCycle("#start-cycle2", ".button");
	});

	$('.button').click(function() {

		// define input values as dates
		var startCycle1 = getAnyStartCycle('#start-cycle1');
		var startCycle2 = getAnyStartCycle('#start-cycle2');
		var cycle = startCycle1.diff(startCycle2, "days");
		var next = startCycle1.add(cycle, "days");

		// give info to the user
		$('.error').hide();
		$('.cycle-length').hide().fadeIn();
		$('.cycle-start').hide().fadeIn();
		$('.cycle-length strong').text(cycle + ' days');
		$('.cycle-start strong').text(moment(next).format("dddd, MMMM Do YYYY"));
		return false;

	}); // end .click();

});