


! function() {

    var testExternal = function() {
	  // listen for external events

	  /**
	  we could have a websocket here directly, 
	  but we only need the iframe to listen...

	  */
	  window.addEventListener('message',function(event) {
	 
	  
	      if (event.data.mobile !== true) return;

	      console.log('mobile essage received:  ' + event.data.msg);
              var uparrow = $.Event('keydown');
              uparrow.which = 38;
              $("#gameContent").trigger(uparrow);

	  },false);
    }
	  // works!
    var testKeyDown = function() {
	  $(document).ready(function(){

             var uparrow = $.Event('keydown');
	     uparrow.which = 38;

	     var keyaction = function(){

	        $("#gameContent").trigger(uparrow);

	      }
	      $("#gameContent").keydown(function(e){console.log(e)});
	          // turn off for now
	          //	    setInterval(keyaction,3000);

	  });
     }
   //  testKeyDown();
   //  testExternal();

    var testQRCode  = function() {
	console.log("DDDDDDDDD---------x");
	console.log(window.location.pathname);
	if (window.location.pathname == "/game/list") 
	    return true;

	// TODO put in a template
	$("body").prepend('<div id="mobileqr"><div id="qrcode1"><div id="qr1"></div></div><div id="qrcode2"><div id="qr2"></div></div></div>');
	


// generate n qrs and put them in #mobileqr with captions
// player 1
	var qrcode = new QRCode("qr1", {
	    text: '{"f":"12e437","u":83,"d":88,"ip":"'+mobiler_qr_ip+'","p":'+mobiler_qr_port+',"id":"qrcode1"}',
	    width: 128,
	    height: 128,
	    colorDark : "#9900CC",
	    colorLight : "#ffffff",
	    correctLevel : QRCode.CorrectLevel.H
	});

	$("#qrcode1").append('<div class="qr-caption">player 1 </div>');
// player 2
	var qrcode = new QRCode("qr2", {

	    text: '{"f":"12e438","u":38,"d":40,"ip":"'+mobiler_qr_ip+'","p":'+mobiler_qr_port+',"id":"qrcode2"}',
	    width: 128,
	    height: 128,
	    colorDark : "#000099",
	    colorLight : "#ffffff",
	    correctLevel : QRCode.CorrectLevel.H
	});
	$("#qrcode2").append('<div class="qr-caption">player 2 </div>');




    }

    $(document).ready(function(){
    testQRCode();
    });
}()