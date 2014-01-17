/*
* Holds all my weird stuff.
*/

/* Curtain stuff */
   $(function(){
       $('.curtains').curtain({
           scrollSpeed: 300,
           controls: '.menu',
           curtainLinks: '.curtain-links',
           nextSlide: function(){
            console.log("ok");
           }
       });
    });
    
  idleTime = 0;
  
  /* Makes sure that if no key movement or mouse movement occurs for 2 seconds, pop up "scroll down please" */
$(document).ready(function () {
    //Increment the idle time counter every minute.
    var idleInterval = setInterval(timerIncrement, 1000); // 1 second

    //Zero the idle timer on mouse movement.
    $(this).mousemove(function (e) {
        idleTime = 0;
         $('#scroll').fadeOut(100);
    });
    $(this).keypress(function (e) {
        idleTime = 0;
         $('#scroll').fadeOut(100);
    });

    $('.work').hover(
      function() {
        var text = ""
        switch($(this).data('id')) {
        case 1:
          text = "<p>Astrid 2012<ul><li>Created and implemented a natural language date parser using regular expressions to the Android app<li>Added UI features that improved the user experience</ul></p>";
          break;
        case 2: 
          text = "<p>Google 2012<ul><li>Ported Product Ads/Shopping Ads to mobile<li>Involved annotating the ads with contextual information using MapReduce, BigTable, ProtocolBuffers, and other internal Google technologies.<li>Created a demo website hosted by AppEngine that would call Google's servers and return contextually appropriate ads</ul></p>";
          break;
        case 3:
          text =  "<p>Google 2013<ul><li>Worked on search frontend.<li>Used HTML/CSS/Javascript/Java/templating system.</ul></p>";
          break;
        case 4: 
          text = "<p>Facebook 2014<ul><li>In progress</ul></p>"
          break;
        default:
          text = "You hovered over something that didn't exist.";
        }
        $('#workbox').html(text);
      },
      function() {
//        $('#workbox').html('');
        }
      );

$('.pp').hover(
      function() {
          var text = ""
        switch($(this).data('id')) {
        case 1:
          text = "<p>Thorgi: Dog of Thunder<ul><li>iOS game.<li>Fights Lokitty and other various cats.<li>Won $3500.<li>Not released on app store yet.</ul></p>";
          break;
        case 2: 
          text = "<p>3 Week Habit<ul><li>Android Widget.<li>Helps you keep track of one habit for 3 weeks<li>Currently 200 active users<li><a href='https://play.google.com/store/apps/details?id=com.amytang.habit&hl=en'>On Google Play</a></ul></p>";
          break;
        case 3:
          text =  "<p>Fill<ul><li>Fun color puzzle game for Android.<li><a href='https://play.google.com/store/apps/details?id=com.amytang.fill.free&hl=en'>On Google Play</a></ul></p>";
          break;
        case 4: 
          text = "<p>GameYourWorkout<ul><li>Android app that creates levels and achievements in the gym.<li><a href='https://play.google.com/store/apps/details?id=com.amytang&hl=en'>On Google Play</a></ul></p>"
          break;
        default:
          text = "You hovered over something that didn't exist.";
        }
        $('#ppbox').html(text);
      },
      function() {
       
        }
      );
});

function timerIncrement() {
    idleTime = idleTime + 1;
    if (idleTime > 2) { // 2 seconds
        //window.location.reload();
        $('#scroll').fadeIn(700);
        idleTime=0;
    }

}
