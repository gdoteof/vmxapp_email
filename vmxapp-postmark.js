var last = 0;  //set init time to 0
VMX.callback = function(detections){
  // a local script for sending email
  var url =  "http://192.168.0.104/v/email.php";

  //The message, roughly formatted as postmarkapp wants it
  var msg = {
      From: 'geoff@vmx.ai',
      To  : 'geoffgolder@gmail.com',
      Subject: "Emailing you because i detected: " + detections[0].cls,
      HtmlBody: "thsse bodyxx",
      image_data: VMX.getSnapshot(),
    }
  var now = new Date().getTime();
  if(detections[0].score > 1){
    if(!last || now > last + 5000){   //do this a max of once every 5 seconds
      last = new Date().getTime();

      //USE ANGULAR MODULES!  
      //could also be $.post(...) (jquery works as well)
      $.post(url,msg).success(function(response){
        console.log("success!",response);
      }).error(function(response){
        console.log("error", response); 
      });
    }
  }
}
 
