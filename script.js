window.addEventListener("scroll",function(){
    const navbar=document.getElementById("navbar");

    if(this.window.scrollY>50){
        navbar.style.background="black";
    }
    else{
        navbar.style.background="linear-gradient(90deg,#ff6b6b,#6c5ce7,#00cec9)";
    }
});
