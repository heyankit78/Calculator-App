let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue='';
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        console.log('Button text is ',buttonText);

        if(buttonText == 'X'){
            buttonText= '*';
            screenValue+=buttonText;
            screen.value = screenValue;
        }        
        else if(buttonText == 'C'){
            screenValue='';
           screen.value = screenValue;
        }
        // else if(buttonText == '--'){
        //     screen.value = document.getElementById("--").value;
        //     document.getElementById("--").value = value.substr(0, value.length - 1);
        // }       
        else if(buttonText == '='){
           screen.value = eval(screenValue);
        }
        else{
            screenValue+=buttonText;
            screen.value = screenValue;
        }       
    })
    function back() {
        var value = document.getElementById("d").value;
        document.getElementById("d").value = value.substr(0, value.length - 1);
    }
}

