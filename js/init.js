// Init

(function($){
	$(function(){

		$('.button-collapse').sideNav();
		$('.parallax').parallax();
		$('select').material_select();

		$('.modal-trigger').leanModal();

	}); // end of document ready
})(jQuery); // end of jQuery name space

document.addEventListener("DOMContentLoaded", function(){
	$('.preloader-background').delay(1700).fadeOut('slow');
	
	$('.preloader-wrapper')
		.delay(600)
		.fadeOut();
});

(function($){
  $(function(){

    $('.sidenav').sidenav('show');

  }); // end of document ready
})(jQuery); // end of jQuery name space

function change_button(checkbx,button_id) {
    var btn = document.getElementById(button_id);
    if (checkbx.checked == true) {
        btn.disabled = "";

    } else {
        btn.disabled = "disabled";
    }
}

$(document).ready(function(){
   
    $("#show").click(function(){
        $("#sub1").show();
    });
});



// Show button
var show = function (elem) {

	// Get the  height of the button
	var getHeight = function () {
		elem.style.display = 'block'; // Make button visible
		var height = elem.scrollHeight + 'px'; // Get button's height
		elem.style.display = ''; //  Hide button again
		return height;
	};

	var height = getHeight(); // Get the button height
	elem.classList.add('is-visible'); // Make button visible
	elem.style.height = height; // Update the max-height

	// Once the transition is complete, remove the inline max-height so the content can scale responsively
	window.setTimeout(function () {
		elem.style.height = '';
	}, 350);

};

// Hide an element
var hide = function (elem) {

	// Give the element a height to change from
	elem.style.height = elem.scrollHeight + 'px';

	// Set the height back to 0
	window.setTimeout(function () {
		elem.style.height = '0';
	}, 1);

	// When the transition is complete, hide it
	window.setTimeout(function () {
		elem.classList.remove('is-visible');
	}, 350);

};

// Toggle element visibility
var toggle = function (elem, timing) {

	// If the element is visible, hide it
	if (elem.classList.contains('is-visible')) {
		hide(elem);
		return;
	}

	// Otherwise, show it
	show(elem);
	
};

// Listen for click events
document.addEventListener('click', function (event) {

	// Make sure clicked element is our toggle
	if (!event.target.classList.contains('toggle')) return;

	// Prevent default link behavior
	event.preventDefault();

	// Get the content
	var content = document.querySelector(event.target.hash);
	if (!content) return;

	// Toggle the content
	toggle(content);

}, false);


$(document).ready(
function()
    {
        $(".option").click(
            function(event)
        {
            $(this).addClass("active").siblings().removeClass("active");
			//$("#start_button").style.display = 'block';
			$('.toggle-content').css('display','block');
			
			// Get the  height of the button
	var getHeight = function () {
		$('.toggle-content').css('display','block'); // Make button visible
		var height = $('.toggle-content').scrollHeight + 'px'; // Get button's height
		//$('.toggle-content').css('display','none'); //  Hide button again
		
		return height;
	};

	var height = getHeight(); // Get the button height
	$('.toggle-content').addClass('is-visible'); // Make button visible
	$('.toggle-content').style.height = height; // Update the max-height
    $('.toggle-content').css('display','block');
	$('.toggle-content').removeClass('Rectangle-Male');
    $('.toggle-content').addClass('Male_selected'); // Make button visible

			
	// Once the transition is complete, remove the inline max-height so the content can scale responsively
	window.setTimeout(function () {
		$('.toggle-content').style.height = '';
	}, 350);
        }
        );
    });


function show1(){
  document.getElementById('toggle-content').style.display ='block';
}
function show2(){
  document.getElementById('div1').style.display = 'block';
}

 function enableButtonMale() {
            document.getElementById("btn1").disabled = true;
	        document.getElementById('male_img').src='img/gender-male-white.svg';
	        document.getElementById('female_img').src='img/female.svg';
	        document.getElementById("btn2").disabled = false;
	
            $(this).addClass("active").siblings().removeClass("active");
			//$("#start_button").style.display = 'block';
			$('.toggle-content').css('display','block');
			
			// Get the  height of the button
	var getHeight = function () {
		$('.toggle-content').css('display','block'); // Make button visible
		var height = $('.toggle-content').scrollHeight + 'px'; // Get button's height
		//$('.toggle-content').css('display','none'); //  Hide button again
		
		return height;
	};

	var height = getHeight(); // Get the button height
	$('.toggle-content').addClass('is-visible'); // Make button visible
	$('.toggle-content').style.height = height; // Update the max-height
    $('.toggle-content').css('display','block');
	$('.toggle-content').removeClass('Rectangle-Male');
    $('.toggle-content').addClass('Male_selected'); // Make button visible

			
	// Once the transition is complete, remove the inline max-height so the content can scale responsively
	window.setTimeout(function () {
		$('.toggle-content').style.height = '';
	}, 350);
        
	 

        }

function enableButtonFemale() {
            document.getElementById("btn1").disabled = false;
	        document.getElementById('male_img').src='img/gender-male.svg';
	        document.getElementById('female_img').src='img/female-white.svg';
            document.getElementById("btn2").disabled = true;
	
	        $(this).addClass("active").siblings().removeClass("active");
			//$("#start_button").style.display = 'block';
			$('.toggle-content').css('display','block');
			
			// Get the  height of the button
	var getHeight = function () {
		$('.toggle-content').css('display','block'); // Make button visible
		var height = $('.toggle-content').scrollHeight + 'px'; // Get button's height
		//$('.toggle-content').css('display','none'); //  Hide button again
		
		return height;
	};

	var height = getHeight(); // Get the button height
	$('.toggle-content').addClass('is-visible'); // Make button visible
	$('.toggle-content').style.height = height; // Update the max-height
    $('.toggle-content').css('display','block');
	$('.toggle-content').removeClass('Rectangle-Male');
    $('.toggle-content').addClass('Male_selected'); // Make button visible

			
	// Once the transition is complete, remove the inline max-height so the content can scale responsively
	window.setTimeout(function () {
		$('.toggle-content').style.height = '';
	}, 350);
        
        }


$(document ).ready(function(){
     $(".button-collapse").sideNav();
  })
function getBlogs(str,flag){
          if(str==""){
            if(flag == 0) //laptop size
            {
            document.getElementById("searchResults").innerHTML="";
          }
          else{ //for mobile and laptop
             document.getElementById("searchResults2").innerHTML="";
          }
              return;
          }
   var searchedResults,x,txt="";
          var xhttp=new XMLHttpRequest();
           xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        searchedResults=JSON.parse(this.responseText);
        for(x in searchedResults)
        {
//           get data from server and set it to txt
          txt="data"
        }
    if(flag == 0) //laptop size
            {
            document.getElementById("searchResults").innerHTML=txt;
          }
          else{ //for mobile and laptop
             document.getElementById("searchResults2").innerHTML=txt;
          }
    }
}
}


/* Tags Input Auto Complete  */
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.chips');
    var instances = M.Chips.init(elems, options);
  });

  // Or with jQuery

  $('.chips').chips();
  $('.chips-initial').chips({
    data: [{
      tag: '#Entertainment',
    }, {
      tag: '#Music',
    }, {
      tag: '#Movies',
    }],
  });
  $('.chips-placeholder').chips({
    placeholder: 'Enter a tag',
    secondaryPlaceholder: '+Tag',
  });
  $('.chips-autocomplete').chips({
    autocompleteOptions: {
      data: {
        '#Entertainment': null,
        '#Music': null,
        '#Movies': null
      },
      limit: Infinity,
      minLength: 1
    }
  });





 // $('.dropdown-trigger').dropdown();


$('.dropdown-trigger').dropdown({
      inDuration: 800,
      outDuration: 225,
      constrainWidth: false, // Does not change width of dropdown to that of the activator
      hover: false, // Activate on hover
      gutter: 755, // Spacing from edge
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
      stopPropagation: true // Stops event propagation
    }
  );

/*
// INITIALIZATION OF CHIPS COLLECTION
var vChipsList =  [{
    tag: '#Movie',
}, {
    tag: '#Entertainment',
}, {
    tag: '#Music',
}];

// INITIALIZATION OF AUTOCOMPLETE LIST
var vTagList =  {
    alpha: null,
    Beta: null,
    avion: null,
    maman: null,
    paPa: null,
    aVec: null,
    instinct: null,
    Surf: null,
    blurp: null,
    doublon: null
};

function fDisplayChips() {
    // FILLS THE CHIPS ZONE FROM THE LIST
    $('#lg-Chips').material_chip({
        data: vChipsList
    });
}


// ADDING A NEW CHIP
function fChipAdd(lChipName){
    lChipName = lChipName.toLowerCase();
    // test1 : minimum word size
    if (!(lChipName.length > 2)){
        return 0;
    }
    // test2 :  no duplicates
    for(i=0;i<vChipsList.length;i++) {
        if(lChipName == vChipsList[i].tag){
            return 0;
        }
    }
    // tests Okay => add the chip and refresh the view
    vChipsList.push({"tag":lChipName});
    fDisplayChips();
    return 1;
};

$(function() {
// delete chip command
    $('#lg-Chips').on('chip.delete', function(e, chip){
        vChipsList = $("#lg-Chips").material_chip('data');
    });


    $("#lg-Chips").focusin(function () {
        $("#lg-input").focus();
    });


    fDisplayChips();


// NEW CHIP COMMAND
    $("#cmd-ChipsAjout").click(function () {
        fChipAdd($("#lg-input").val()) ;
        $("#lg-input").val("");
    });

    $("#lg-input").autocomplete({
        data: vTagList
    });
	
	$('.chips-placeholder').material_chip({
    placeholder: 'Enter a tag',
    secondaryPlaceholder: '+Add more tags',
});

});

*/


$(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });
        