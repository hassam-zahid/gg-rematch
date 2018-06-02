$(function(){

	/* ----------------------- 
	 Click to scroll 
	------------------------- */	
	var t = $("html, body");
	$(".clickScroll").on("click", function() {
		return t.animate({
			scrollTop: $($.attr(this, "href")).offset().top
		}, 800), !1
	})	
	
	/* ----------------------- 
     On scroll Show arrow
	------------------------- */
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scrollTop').fadeIn();
        } else {
            $('.scrollTop').fadeOut();
        }	

		var secTop = $('.footer').offset().top - 10
			winHeight = $(window).height()
			winScroll = $(window).scrollTop();
			total = winHeight +  winScroll;
			if(total > secTop){
				$('body').addClass('stickyNone')
			}
			else{
				$('body').removeClass('stickyNone')			
			}        
	});	

	/* ----------------------- 
	Select box
	------------------------- */	
	if ($.fn.selectize) {
		$('select:not(.systemDrop)').selectize({
			allowEmptyOption: true,
			create: true,
			inputMode: false
		});
	}

	$(".systemDrop").each(function(){
	    if (this.selectize) {
	        this.selectize.destroy();
	    }
	});	

    $(".systemDrop").change(function() {
        setSpanValue($(this));
    });
    $(".systemDrop").each(function(key, val) {
        setSpanValue($(this));
    });
    function setSpanValue(drp) {
        var str = "";
        var id = drp.attr("id");
        str = $("#" + id + " option:selected").text();
        $("." + id).text(str);
        $("." + id).attr('data-value',str);
    }
	
	if($('#homeSlider').length){
		  $slick = $('#homeSlider');
		  $slick.slick({
			  infinite: true,	
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  arrows: true,
			  dots: false,
			  autoplay: true,
			  autoplaySpeed: 5000,
			  speed: 1500,
		  });	  	

	}		
	
	/* ----------------------- 
	Mobile menu Toggle
	------------------------- */	
	$('.menuIcon').click(function(e) {
        $('body').toggleClass('menuSlide');
		$('.headerRight').slideToggle(300);
    });
	/* ----------------------- 
	Filter Toggle
	------------------------- */	
	$('.morweBtn').click(function(e) {
        $('.moreFilter').toggleClass('filterShow')
    });
	

	/* ----------------------- 
	Tabing script
	------------------------- */		
	$('.tabUl li').click(function() {
        var thisAtt = $(this).attr('data-tab');
		$('.tabUl li, .tabMain').removeClass('active in')
		$(this).addClass('active');
		$('#'+ thisAtt).addClass('active');
		setTimeout(function(){
			$('#'+ thisAtt).addClass('in');	
		},200)

		/* Below script is swipe text form active li to toggle link for  casher page only */
		$(this).parent().removeClass('tabShow');
		$('.tabTogglelink').text($(this).text())
    });		

	/* ----------------------- 
	Snap bar Tabing script
	------------------------- */		
	$('.chatleftLinks li a').click(function() {
        var thisAtt = $(this).attr('data-snap-id');
		$('.chatleftLinks li a, .snapTab').removeClass('active in')
		$(this).addClass('active');
		$('#'+ thisAtt).addClass('active');
		setTimeout(function(){
			$('#'+ thisAtt).addClass('in');	
		},200)
    });	    

	/* ----------------------- 
	Tabing script for Date picker text box hide show
	------------------------- */	
	if($('.touramnetDates').length){
		$('.tabUl li[data-tab="sit-and-go"]').click(function() {
			$('.touramnetDates').removeClass('showDates')
			$('.playFilter').removeClass('showDivs')
			$('.button[data-filter="*"]').trigger('click')
		});	
		$('.tabUl li[data-tab="tournaments"]').click(function() {
			$('.touramnetDates').addClass('showDates')
			$('.playFilter').addClass('showDivs')
			$('.button[data-filter="*"]').trigger('click')
		});			
	}



	/* ----------------------- 
	Expand chat script
	------------------------- */	
	$('.expandLink').click(function(event) {
		if($('body').hasClass('expandChat')){
			$('body').addClass('startHide')
			setTimeout(function(){				
				$('body').removeClass('expandChat fadeChild')			
			},100)	
	       setTimeout(function() {
	           $("body").removeClass('startHide')
	       }, 500);				
		}
		else{			
			$('body').addClass('expandChat')
			setTimeout(function(){
				$('body').addClass('fadeChild')
			},400)			
		}

		setTimeout(function(){
			$('.leftHeight, .rightHeight').removeAttr('style')
			setTwoColEqHeight($(".leftHeight"), $(".rightHeight"));
		},400)	

	});


    //open popup
    $('.cd-popup-trigger').on('click', function(event){    	
    	  // $('.cd-popup').hasClass('is-visible')){
    		event.preventDefault();
    		$('.cd-popup').removeClass('is-visible')
    		$('body').removeClass('fixedBody')
			var thisAttr = $(this).attr('href');
	        $(thisAttr).addClass('is-visible');    		
	        $('body').addClass('fixedBody')
    });
    
    //close popup
    $('.cd-popup').on('click', function(event){
        if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') ) {
            event.preventDefault();
            $(this).removeClass('is-visible');
            $('body').removeClass('fixedBody')
        }
    });
    //close popup when clicking the esc keyboard button
    $(document).keyup(function(event){
        if(event.which=='27'){
            $('.cd-popup').removeClass('is-visible');
            $('body').removeClass('fixedBody')
        }
    });

	/* ----------------------- 
	Datepicker
	------------------------- */
    if($('#datepicker, .datepicker').length){
    	$( "#datepicker, .datepicker" ).datepicker();
    }

	/* ----------------------- 
	Function Call
	------------------------- */
	$('.toggleLeftbar').click(function(event) {
		/* Act on the event */
		$('body').toggleClass('leftBarshow')
	});


	$('.tabTogglelink').click(function(event) {
		/* Act on the event */
		$(this).next('.tabUl').toggleClass('tabShow')
	});

	/* ----------------------- 
	Function Call
	------------------------- */
    $('.inputFile').change(function() {
        $(this).siblings('.fileSpan').text(this.value || 'No file chosen. ')
    });

    /* ----------------------- 
	countdown timer script
	------------------------- */	
	if($('#remaining-time').length){
		$("#remaining-time").countdown("2018/06/06", function(event) {
	  		$(this).html(event.strftime('%D<sub>d</sub>  %H<sub>h</sub>  %M<sub>m</sub>  %S<sub>s</sub>'));
		});
	}	
	/* ----------------------- 
	Function Call
	------------------------- */	
	filterMain()

	$(".mCustomScrollbar").mCustomScrollbar({
	  mouseWheelPixels: 500 //change this to a value, that fits your needs
	})

	//$("aside.left-panel").mCustomScrollbar('destroy');

	$('.visaIcon').before($('<i class="lineI"></i>'))


	/* ----------------------- 
	On text box focus add class
	------------------------- */
    $('.msgTextarea textarea').keypress(function() {
        $(this).parent().addClass('hasFocus');
    });

    $('.msgTextarea textarea').blur(function() {
        if($(this).val() == ''){
        	$(this).parent().removeClass('hasFocus');	
        }
        else{
        	$(this).parent().addClass('hasFocus');
        }
     });


    $('.chatleftLinks li a').removeClass('active')

});

$(window).load(function(e) {
	setTwoColEqHeight($(".leftHeight"), $(".rightHeight"));
});

$(window).resize(function(e) {
	
	/* ----------------------- 
	Function Call
	------------------------- */	
	setTwoColEqHeight($(".leftHeight"), $(".rightHeight"));

});


function setTwoColEqHeight($col1, $col2) {
    var firstCol = $col1,
        secondCol = $col2,
        firstColHeight = $col1.innerHeight(),
        secondColHeight = $col2.innerHeight();

    if (firstColHeight > secondColHeight) {
        secondCol.css({
            "height": firstColHeight + "px"
        })
    } else {
        firstCol.css({
            "height": secondColHeight + "px"
        })
    }
}


function filterMain(){
	/* ----------------------- 
	Play now page filtering
	------------------------- */
	if($('.sit-and-go-grid').length){
	    var containerEl = document.querySelector('.sit-and-go-grid');
	    var containerEl2 = document.querySelector('.tournaments-grid');
	    var mixer = mixitup(containerEl);  
	    var mixer2 = mixitup(containerEl2);  
	    $('.filters-button-group > .button').click(function(event) {
	    	/* Act on the event */
	    	$('.filters-button-group > .button').removeClass('is-checked')
	    	$(this).addClass('is-checked')
	    });
	}    
}	

/*
document.onkeydown = function (e) {
  var key = e.charCode || e.keyCode;
  if (key == 13) { 
    // enter key do nothing
  } else {
    e.preventDefault();
  }	     
}

$(document).bind("contextmenu",function(e) {
 e.preventDefault();
});
*/