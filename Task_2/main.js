var result=document.getElementById('result');
var buttons=Array.from(document.getElementsByClassName('button'));

buttons.map(button =>{
    button.addEventListener('click',(e) =>{
        switch(e.target.innerText){
            case 'AC':
                result.innerText = '';
                break;
            case 'DELETE':
                if(result.innerText){
                    result.innerText = result.innerText.slice(0,-1);
                }
                break;
            case '=':

                try{
                    result.innerText = eval(result.innerText).toFixed(15);
                }catch{
                    result.innerText = 'Math Error!';
                }
                break;
                case '%':
                    try{
                        result.innerText = percentage(result.innerText);
                    }catch{
                        result.innerText = 'Invalid Expression';
                    }
                    break;
            default:
                result.innerText += e.target.innerText;
        }
    });
});
function percentage(num)
{
  return (num/100);
}
          
const re =0;

function test(s) {
  "%s is valid? %s", s, re.test(s);
}