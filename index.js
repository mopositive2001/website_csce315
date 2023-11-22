$(document).ready(function(){
    document.getElementById("landing_page").scrollIntoView();
    $("#bio").click(function(){
        document.getElementById("bio_page").scrollIntoView({behavior: 'smooth'});
    })
    $("#skills").click(function(){
        document.getElementById("skills_page").scrollIntoView({behavior: 'smooth'});
    })
    $("#projects").click(function(){
        document.getElementById("projects_page").scrollIntoView({behavior: 'smooth'});
    })
    $("#volunteer").click(function(){
        document.getElementById("volunteer_page").scrollIntoView({behavior: 'smooth'});
    })

    $("#black").click(function(){
        document.getElementById("mainStyleSheet").setAttribute("href","index2.css");
        localStorage.setItem("lastSetting","black");
        document.getElementById("black").style.zIndex=1;
    })
    $("#white").click(function(){
        document.getElementById("mainStyleSheet").setAttribute("href","index.css");
        localStorage.setItem("lastSetting","white");
        document.getElementById("black").style.zIndex=0;
    })

    $("#ww").click(function(){
        window.open("https://github.com/NASAWorldWind/WorldWindJava", "_blank");
    })

    $("#th").click(function(){
        window.open("https://github.com/tamuhack-org", "_blank");
    })

    $("#cp").click(function(){
        window.open("https://github.com/mopositive2001/Competitive_Programming", "_blank");
    })

    $("#ip").click(function(){
        window.open("https://github.com/mopositive2001/Project_moo_moo", "_blank");
    })

    $("#left").click(function(){
        window.open("https://www.houstonfoodbank.org", "_blank");
    })

    $("#right").click(function(){
        window.open("https://www.egr.uh.edu/news/201903/girls-engineering-future-set-saturday-uh", "_blank");
    })

    $("#git").click(function(){
        window.open("https://github.com/mopositive2001", "_blank");
    })
})


function type(){
    var skills_page_bottom=document.getElementById("skills_page").getBoundingClientRect().bottom;
    var windowtop=window.scrollY;
    if(windowtop >= skills_page_bottom){
        document.getElementById("text").style.animation="animated-text 4s steps(29,end) 1s 1 normal both,animated-cursor 600ms steps(29,end) infinite";
    }
}

window.addEventListener("scroll",type);

window.onload = function(){
    if(localStorage.getItem("lastSetting")=="white"){
        document.getElementById("mainStyleSheet").setAttribute("href","index.css");
        document.getElementById("black").style.zIndex=0;
    } 
    else{
        document.getElementById("mainStyleSheet").setAttribute("href","index2.css");
        document.getElementById("black").style.zIndex=1;
    }   
}




