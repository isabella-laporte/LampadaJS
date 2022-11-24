
 
function interruptor(){
    var atualEstado = document.querySelector('.container');
        
    atualEstado.addEventListener('click', () =>{
           
        let mudancabotao = document.getElementById('botao');
        let mudancacorda = document.getElementById('corda');
        let estado = '';
    
        if(!mudancabotao.classList.contains('click1')){
        mudancabotao.classList.add('click1');
        mudancacorda.classList.add('interruptor-corda1');
        
        estado = "on";
    }
        else{
        mudancabotao.classList.remove('click1');
        mudancacorda.classList.remove('interruptor-corda1');
        estado = "off";
        }
    
        lampada(estado)
    });
    }
    interruptor();
    
    function lampada(parametro){
    
        let mudancalampadacentral = document.getElementById('central');
        let mudancalampadaachatada = document.getElementById('achatamento');
        
        if(parametro == 'on'){
            mudancalampadacentral.classList.add('fundo-lampada-acesa')
            mudancalampadaachatada.classList.add('lampada-achatada-acesa');
           mudancalampadacentral.classList.add('lampada-central-acesa');
    
        }
    
        else{
            mudancalampadacentral.classList.remove('lampada-central-acesa');
            mudancalampadaachatada.classList.remove('lampada-achatada-acesa');
            mudancalampadacentral.classList.remove('fundo-lampada-acesa')
        }
    }
    
    
            
       
        
    