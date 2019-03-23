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
  var finalData=storeDB.getAll();
  finalData.onsuccess=function(event){
    var result=event.target.result;
    console.log(result);
    display(event.target.result);
  }
}
function display(data){
   var parent=document.querySelector(".parent");
   for(var i=0;i<data.length;i++){
      var child=document.createElement("div");
      child.classList.add("child");
      var image=document.createElement("img");
      image.src="images/145852.svg";
      image.alt=data[i].name;

      var name=document.createElement("h1");
      name.textContent=data[i].name;
      var role=document.createElement("h2");
      role.textContent=data[i].roll;
      var link=document.createElement("a");
      link.href="resume.html?id="+data[i].id;
      link.textContent="view Profile";
      parent.append(child);
      child.append(name);
      child.append(image);
      child.append(role);
       child.append(link);
   }

}
