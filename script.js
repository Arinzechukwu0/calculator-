let display = document.getElementById('display');

let button = Array.from(document.getElementsByClassName('button'));

button.map( button =>{
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'AC':
                display.innerText='';
                break;
            case 'DEL':
                if(display.innerText){
                    display.innerText = display.innerText.slice(0,-1)
                }
                break;
            case '=':
                try{
                    display.innerText = eval (display.innerText)
                } catch{
                    display.innerText = 'error'
                }
                break;

            default:
                display.innerText+= e.target.innerText
        }
    })
})