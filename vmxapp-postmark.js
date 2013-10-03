var last = 0;
VMX.callback = function(detections){
  var api_key= "5efd4b21-806d-4d05-a034-bb0fed6f9f07"
  var url =  "http://192.168.0.104/v/email.php";
  var headers = {};
  headers["Accept"] = "application/json";
  headers["Content-Type"] = "application/json";
  headers["X-Postmark-Server-Token"] = "ed742D75-5a45-49b6-a0a1-5b9ec3dc9e5d";
  var msg = {
      From: 'geoff@vmx.ai',
      To  : 'geoffgolder@gmail.com',
      Subject: "Emailing you because i detected something",
      HtmlBody: "thsse bodyxx",
      image_data: VMX.getSnapshot(),
    }
  var now = new Date().getTime();
  if(detections[0].score > 1){
    if(!last || now > last + 5000){
      last = new Date().getTime();
      console.log("only every five seconds!",last,now);
      console.log($http.defaults.headers.post);
      $http.defaults.headers.post = headers;
      $.post(url,msg).success(function(response){
        console.log("success!",response);
      }).error(function(response){
        console.log("error", response); 
      });
    }
  }
}
 
