document.addEventListener('DOMContentLoaded',()=>{
    const bird = document.querySelector('.bird');
    const continer = document.querySelector('.continer')
    const ground = document.querySelector('.ground')
    const sky = document.querySelector('.sky')
    const number=document.createElement('div');
    number.classList.add('count')
    var birdLeft = 60;
    var birdBottom = 400;
    var gravity=2;
    var jump = 60;
    var ifover=false;
    var count=0;
    
    function startGame(){
        birdBottom-= gravity; 
        bird.style.bottom = birdBottom +'px';
        bird.style.left=birdLeft +'px';
    }
    function generatebeam(){
        var beamleft=500;
        var speed=4;
        const beam1 = document.createElement('div');
        const beam2 = document.createElement('div');
        beam1.classList.add('beam1');
        beam2.classList.add('beam2');
        continer.appendChild(beam1);
        continer.appendChild(beam2);
        var beam1height = Math.floor(Math.random() * 100)+150;
        var beam2height = 200+(250-beam1height);
        beam1.style.height =beam1height+'px';
        beam2.style.height =beam2height+'px';
        beam2.style.top = beam1height+145 +'px';                                                    
        
        beam1.style.left =beamleft+'px'
        beam2.style.left =beamleft+'px'

        
        number.innerHTML=count/12;
        sky.appendChild(number);





        var id=setInterval(move,30);
        function move(){
            beamleft-=speed;
            beam1.style.left =beamleft+'px';
            beam2.style.left =beamleft+'px';
            if(ifover==true){
                clearInterval(id);
            }
            if((beamleft>60&&beamleft<110&&birdBottom>(beam2height+100))||beamleft>60&&beamleft<110&&birdBottom<beam2height||birdBottom<=0){
                gameover();
                ifover=true;   
                
            }else if(beamleft>60&&beamleft<110){
                count=count+1;
            }
                   
        }
        setTimeout( function() { clearInterval(id);
        beam1.remove;
        beam2.remove;
        },50000);
    }
    function gameover(){
        clearInterval(id2);
        clearInterval(id3);
        
        const overword=document.createElement('div');
        overword.classList.add('word')
        overword.innerHTML="Gameover"
        sky.appendChild(overword);
        

    }
    
    id2=setInterval(startGame,20)
    document.addEventListener('keyup',(event)=>{
        var keycode=event.which;
        if(keycode==32&&birdBottom<500){  
        birdBottom += jump;
        console.log(birdBottom);
    }
    })
    id3=setInterval(generatebeam,2500);
    
    
    
   
        



})

   