var last = 0;
VMX.callback = function(detections){
  var url =  "http://192.168.0.104/v/email.php";
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
      $.post(url,msg).success(function(response){
        console.log("success!",response);
      }).error(function(response){
        console.log("error", response); 
      });
    }
  }
}
 
