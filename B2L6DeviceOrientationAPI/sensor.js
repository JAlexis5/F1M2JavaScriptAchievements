
// activeer de Device Orientation API
window.addEventListener('deviceorientation', handleOrientation);

// event handler
function handleOrientation(eventData){
    let alpha, beta, gamma;
    // alpha rotation compass rotation Z-axis
    alpha = Math.round(eventData.alpha);
    // beta rotation front back rotation X-axis
    beta = Math.round(eventData.beta);
    // gamma rotation left right rotation Y-axis
    gamma = Math.round(eventData.gamma);
    
    // doe iets met de data
    doSomething(alpha, beta, gamma);     
}   


function doSomething(alpha, beta, gamma){
    showDataColor(alpha, beta, gamma); // kleurtjes en tekst
    activateVoice(alpha, beta, gamma); // geluid
    showMyImage(alpha, beta, gamma);   // afbeelding  
}

function showDataColor(alpha, beta, gamma){
    //show the data in HTML
    document.getElementById('beta').innerHTML = beta;
    document.getElementById('gamma').innerHTML = gamma;
    document.getElementById('alpha').innerHTML = alpha;

    // change background color
     // gamma rotation left right rotation Y-axis
    document.body.style.background = `rgb(150, ${Math.abs(gamma)*5}, 150)`;
}

function activateVoice(alpha, beta, gamma){
    // voice if Z-axis rotation > value
    if(alpha > 120){
        var stufftosay = ["YOU FOOL, YOU ACTIVATED MY TRAP CARD", "You're gonna have a bad time.", "new crispy pretzel chicken fries at burger king", "Denzel Curry is better than Drake, fight me."]
        let myTxt = stufftosay[Math.floor(Math.random() * stufftosay.length)];  
        sayItLoud(myTxt); // text 2 speech

        // laat het ook in de HTML zien
        document.getElementById('voice').innerHTML = myTxt;
        }
        else if(alpha > 60){
            let myTxt2 = "You're making a terrible mistake.";
            sayItLoud(myTxt2);
        }
        else{
            // haal de tekst weg
            document.getElementById('voice').innerHTML = "";
            }
}

function showMyImage(alpha, beta, gamma){
    // image if X-axis > value
    if(beta > -20){
        document.getElementById('myImage').src = "king_boo.jpg"; // show image
        }
        else if(beta > 40){
            document.getElementById('myImage').src = "jerma.jpg";
        }
        else {
            document.getElementById('myImage').src = ""; // no image
        }
}