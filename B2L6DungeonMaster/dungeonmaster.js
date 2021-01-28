function rollDaDice(){

    // Rolls
    var firstRoll = Math.round(Math.random() * 6) + 1;
    var secondRoll = Math.round(Math.random() * 6) + 1;
    var thirdRoll = Math.round(Math.random() * 6) + 1;
    var fourthRoll = Math.round(Math.random() * 6) + 1;

    // Put rolls in array
    var rollArray = [firstRoll, secondRoll, thirdRoll, fourthRoll];

    // Display rolls in console
    console.log("Roll 1:", rollArray[0]);
    console.log("Roll 2:", rollArray[1]);
    console.log("Roll 3:", rollArray[2]);
    console.log("Roll 4:", rollArray[3]);

    // Store lowest roll
    var lowestRoll = Math.min(firstRoll, secondRoll, thirdRoll, fourthRoll);
    console.log("Lowest Roll:", lowestRoll);

    // Get final roll; all four rolls - lowest roll (highest 3 rolls)
    var finalRoll = firstRoll + secondRoll + thirdRoll + fourthRoll - lowestRoll;
    console.log("Full Roll:", finalRoll);

    // Display results via HTML
    document.getElementById("roll1").innerHTML = "Roll 1: " + rollArray[0];
    document.getElementById("roll2").innerHTML = "Roll 2: " + rollArray[1];
    document.getElementById("roll3").innerHTML = "Roll 3: " + rollArray[2];
    document.getElementById("roll4").innerHTML = "Roll 4: " + rollArray[3];
    document.getElementById("result").innerHTML = "Result: " + finalRoll;
}