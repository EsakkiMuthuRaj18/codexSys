var submit=document.getElementById("submit");
var output=document.getElementById("output");
function submmit(){
    var input=document.getElementById("input").value;
    if(input == ""){
        alert("You Need To Type Some String.....");
    } else {
       input= input.toLowerCase();
       input= input.split("");
         
         var count=0;
            function callMe(){
            var iterateMe=false;
                for(var i=count;i<input.length;i++){
                    if(input[count]==input[i+1]){
                    if((i+1)-count==1){
                        count++;
                    }
                    iterateMe=true;
                    break;
                    }
                }
                if(iterateMe){
                count++;
                callMe();
                }else{
                    if(count==input.length){
                    output.innerHTML="-1";
                    }else{
                    output.innerHTML=count;
                }
                }
            }
            callMe()
    }
}

