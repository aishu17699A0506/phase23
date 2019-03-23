
function addData(){
  //profile data
  var career=document.querySelector("#career").value;
  var name=document.querySelector("#name").value;
  var email=document.querySelector("#email").value;
  var role=document.querySelector("#role").value;
  var mobile=document.querySelector("#mobile").value;
  //graduation data
var college1=document.querySelector("#college1").value;
var degree1=document.querySelector("#degree1").value;
var branch1=document.querySelector("#branch1").value;
var marks1=document.querySelector("#marks1").value;
//Intermediate
var college2=document.querySelector("#college2").value;
var degree2=document.querySelector("#degree2").value;
var group1=document.querySelector("#group1").value;
var marks2=document.querySelector("#marks2").value;
//SSC
var school=document.querySelector("#school").value;
var group2=document.querySelector("#group2").value;
//Technical
var skills=document.querySelector("#skills").value;

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
  storeDB.put({
    career:career,
    name:name,
    role:role,
    email:email,
    mobile:mobile,
    education:[{
    college:college1,
    degree:degree1,
    branch:branch1,
    marks:marks1
  },{
    college:college2,
    degree:degree2,
    group:group1,
    marks:marks2
  },{
    college:school,
    degree:"",
    branch:group2,
    marks:""
  }],

  skills:[
    {
      skills:skills
    }
  ]
  });
  window.open("index.html");
}
}
