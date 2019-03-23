var param;
var paramValue;
var query;
query=window.location.search.substring(1).split("?");
for(i in query){
  param=query[i].split("=");
  paramValue=parseInt(param[1]);
}
var request;
  var idb=window.indexedDB || window.mozIndexedDB|| window.msIndexedDB  || window.webkitIndexedDB;
if(!idb in window){
  alert("browser is not supported");
}
var open=idb.open("StoreData",1);
console.log("indexedDB is created");
open.onupgradeneeded=function(){
  var request=event.target.result;
var storeDB=request.createObjectStore("Formdata",{keyPath:"id",autoIncrement:true});

}
open.onerror=function(error){
console.log("object store is not created",+error);
}
open.onsuccess=function(event){
  request=event.target.result;
  var transaction=request.transaction("Formdata","readwrite");
  var storeDB=transaction.objectStore("Formdata");

var info=storeDB.get(paramValue);
info.onsuccess=function(data){
  console.log(data.target.result);
  display(data.target.result);
}
}
var main=document.querySelector(".main")
var left=document.querySelector(".left");
var right=document.querySelector(".right");
function display(data){
  var img=document.createElement("img");
  img.src="images/145852.svg";
  left.append(img);
  var h2=document.createElement("h2");
  h2.textContent=data.name;
  left.append(h2);
  var h3=document.createElement("h3");
  h3.textContent=data.email;
  left.append(h3);
  var h4=document.createElement("h4");
  h4.textContent=data.role;
  left.append(h4);
  var h5=document.createElement("h5");
  h5.textContent=data.mobile;
  left.append(h5);
  var head=document.createElement("h1");
  head.textContent="career Objective";
  right.append(head);
  var pc=document.createElement("p");
  pc.textContent=data.career;
  right.append(pc);
  var pc1=document.createElement("p");
  pc1.textContent="Education Details"
  right.append(pc1);
  var table=document.createElement('table');
  table.border="3"
  let row='';

    row += "<tr>"+"<th>"+"name of college"+"</th>"+
    "<th>"+"DEGREE" +"</th>"+
    "<th>"+"branch" +"</th>"+
    "<th>"+"marks"+"</th>"+
    "</tr>";

  for(i in data.education){
    row += "<tr>"+"<td>"+data.education[i].college+"</td>"+
    "<td>"+data.education[i].degree +"</td>"+
    "<td>"+data.education[i].branch+"</td>"+
    "<td>"+data.education[i].marks+"</td>"+
    "</tr>";
    }
    table.innerHTML=row;
    right.append(table);
    for(i in data.skills){

    var d1=document.createElement("h1");
    d1.textContent="skills";
    right.append(d1);
    var d2=document.createElement("h2");
    d2.textContent=data.skills[i].skills;
    right.append(d2);
    // main.append(right);

}

  }
