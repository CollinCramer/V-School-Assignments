var cnt= localStorage.getItem("count");

if (cnt == "") {
    cnt = 0
} else { var divData=document.getElementById("showCount");
divData.innerHTML="Number of Clicks: ("+cnt +")";}
    

function CountFun(){
 cnt=parseInt(cnt)+parseInt(1);
 var divData=document.getElementById("showCount");
 divData.innerHTML="Number of Clicks: ("+cnt +")";
 localStorage.setItem("count", cnt.toString())
}
