var api_key= "5efd4b21-806d-4d05-a034-bb0fed6f9f07"


var url =  "http://192.168.0.104/v/email.php";
var headers = {};
var msg = {};
function _set_response(){
  var msg = {
      From: 'geoff@vmx.ai',
      To  : 'geoffgolder@gmail.com',
      Subject: "Hello from VMX APP",
      HtmlBody: "thsse bodyxx",
      image_data: VMX.getSnapshot(),
    }
}

var last = 0;
VMX.callback = function(detections){
  var now = new Date().getTime();
  if(detections[0].score > 1){
    if(!last || now > last + 5000){
      last = new Date().getTime();
      console.log("only every five seconds!",last,now);
      _set_response();
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
 
