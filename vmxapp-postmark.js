var api_key= "5efd4b21-806d-4d05-a034-bb0fed6f9f07"


var url =  "http://api.postmarkapp.com/email"; -H "Accept: application/json" \
var headers = [];
headers["Content-Type"] = "application/json";
headers["X-Postmark-Server-Token"] = "ed742D75-5a45-49b6-a0a1-5b9ec3dc9e5d";
-v \
var msg = {
    From: 'geoff@vmx.ai',
    To  : 'geoffgolder@gmail.com',
    Subject: "Hello from VMX APP",
    HtmlBody: "the body",
  }

var last = 0;
VMX.callback = function(detections){
  var now = new Date().getTime();
  if(detections[0].score > 1){
    if(!last || now < last + 5000){
      console.log("only every five seconds!");
    }
  }
}
 
