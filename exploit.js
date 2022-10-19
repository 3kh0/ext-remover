function m() {
    var r='',c='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    for ( var i = 0; i < 5; i++ ) {
      r += c.charAt(Math.floor(Math.random() * 36));
   }
   return r;
}

if (location.host != "chrome.google.com" || !location.pathname.startsWith("/webstore")) {
    location.href = "https://chrome.google.com/webstore" + m();
}

document.head.innerHTML = `
<style>
tr:nth-child(even){background-color: #f2f2f2;}
tr:hover {background-color: #ddd;}
td, th {
  border: 1px solid #ddd;
  padding: 8px;
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
}
.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 23px;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}
.slider:before {
  position: absolute;
  content: "";
  height: 17px;
  width: 17px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}
input:checked + .slider {
  background-color: #2196F3;
}
input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}
input:checked + .slider:before {
  -webkit-transform: translateX(17px);
  -ms-transform: translateX(17px);
  transform: translateX(17px);
}
/* Rounded sliders */
.slider.round {
  border-radius: 23px;
}
.slider.round:before {
  border-radius: 50%;
}
</style>
`;
document.body = document.createElement("body");

document.toggleFunction = function(id){
    var clickedRow = document.getElementById(id);
    chrome.management.setEnabled(id, clickedRow.children[0].children[0].children[0].checked);
};

document.newBodyData = "<table>"
console.log(document.newBodyData)
document.newBodyData += ""


chrome.management.getAll(function(){
    arguments[0].forEach(function(extension){
        document.newBodyData += "<tr id="+extension.id+">"
        /*
        if ("icons" in extension) {
            document.newBodyData += "<td><img src='"+extension.icons[0]['url']+"'/></td>"
        }    
        */
        document.newBodyData += "<td><label class='switch'><input type='checkbox' " + (extension.enabled ? "checked" : "") + " onclick=\"toggleFunction('"+extension.id+"')\"><span class='slider round'></span></label></td>"
        document.newBodyData += "<td>"+extension.name+"</td>"
        document.newBodyData += "<td>"+extension.id+"</td>"
        document.newBodyData += "<td>"+extension.installType+"</td>"
        
        document.newBodyData += "</tr>"
    });
    document.newBodyData += "</table>"
    document.body.innerHTML = document.newBodyData;
})
