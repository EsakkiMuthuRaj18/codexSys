var submit=document.getElementById("submit");
var output=document.getElementById("output");
function submmit(){
    var input=document.getElementById("input").value;
    if(input == ""){
        alert("You Need To Type Some input.....");
    } else {
       input= input.toLowerCase();
    //    input= input.split("");
    output.innerHTML= firstNonRepeatedCharacter(input);
        function firstNonRepeatedCharacter(string) {
            for (var i = 0; i < string.length; i++) {
                var c = string.charAt(i);
                if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
                    return i;
                }
            }
            return -1;
        
        }
    }
}

