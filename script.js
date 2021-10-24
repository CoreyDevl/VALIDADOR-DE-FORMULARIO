let b7validator = {
    handleSubmit:(event)=>{
        event.prevenDefault();
        let inputs = form.querySelectorAll('input');
        for(let i = 0; i < inputs.length; i++) {
            let input = inputs[i];
        }
        send = false; 

        let send = true;
        if(send){
            form.submit();

        }
    } 
}    //PARADO EM 2 HORAS E 59 MINUTOS
let form = document.querySelector('.b7validator');
form.addEventListener('submit', b7validator.handleSubmit);