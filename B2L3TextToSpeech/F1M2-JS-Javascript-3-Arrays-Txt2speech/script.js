    "use strict"   
    let myText = document.getElementById('myText');
    let myImage = document.getElementById('myImage');
    let myButton = document.getElementById('myButton');
    let myReset = document.getElementById('myReset');

    myButton.addEventListener('click', function(){
        main();
    })

    myReset.addEventListener('click', function(){
        reset();
    })

    function main(){
         let dezeTextWordtHet = makeThisSentence();
         myText.innerHTML = dezeTextWordtHet;
         sayItLoud(dezeTextWordtHet); // say something nice say it loud
         selectThisImage(); // show a nice image
    }
    
    function reset(){
        
    }
    
    function randomizer(range = 1){ 
        // Math.random geeft een waarde  0 <= waarde < 1 (dus exclusief 1)
        return Math.floor((Math.random() * range));
    }
    
    
    function makeThisSentence(){
        let index = randomizer(arrayLength);
        let woord1 = onderwerp[index];
        let woord2 = werkwoord[index];
        let woord3 = restwoord[index];
        let outputString = woord1 + " " + woord2 + " " + woord3;
        return outputString;
    }
    
    function selectThisImage(){
        let index = randomizer(arrayLength);
        myImage.src = plaatjes[index]; 
    }
    
    function sayItLoud (textString) {
      window.speechSynthesis.cancel();
      let message = new SpeechSynthesisUtterance(textString);
      let voices = window.speechSynthesis.getVoices();
      message.voice = voices[1];
      message.pitch = 1; // range between 0 and 2
      message.rate = 1.5; // range between 0.1 (lowest) and 10 (highest) 
      window.speechSynthesis.speak(message);
    }
    
    
    
    const onderwerp = ["Why are we", "God is", "You aint black"];
    const werkwoord = ["still here?", "dead, for", "if you dont"];
    const restwoord = ["Just to suffer?", "we have killed him", "wash yo rice b4 cookin it"];
        
    let plaatjes = ["https://pbs.twimg.com/profile_images/1162710956218245120/L4b1guuv_400x400.jpg", "https://i0.wp.com/everydayriot.com/wp-content/uploads/2019/12/cursed-emojis-4.jpg?w=425&ssl=1", "https://i.ytimg.com/vi/WP7y6rva4Ys/mqdefault.jpg", "https://cdn130.picsart.com/326192620105211.png?type=webp&to=min&r=640"]
    let arrayLength = onderwerp.length;
