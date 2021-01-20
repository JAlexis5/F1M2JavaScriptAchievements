var basehp = 100;
document.getElementById("butone").addEventListener("click",(e)=>{
    var health = basehp -= 10;
    document.getElementById("hpbar").setAttribute("value", health);   
});      