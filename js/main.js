

document.getElementById("search").addEventListener('click', initReq);

function initReq(){

    var temp = document.getElementById("temp");
    temp.classList.add('fadeOut');
    temp.classList.remove('fadeIn');
    
    var cityValue = document.getElementById('city').value;
    var xhr = new XMLHttpRequest;
    xhr.open('GET', 'http://api.apixu.com/v1/current.json?key=267f3d95c90149419d061627182612&q=' + cityValue);
    xhr.send();
    console.log(temp)

    xhr.onreadystatechange = function(){
        var a = JSON.parse(xhr.responseText);
        console.log(a);
        temp.innerHTML = a.current.temp_c + " " + "&deg";
        temp.classList.remove('fadeOut');
        temp.classList.add('fadeIn');
        setTimeout(function(){
            temp.classList.remove('fadeIn');
        }, 2000);
        
        
    }

}

var cel = document.getElementById("celcius"); 
cel.addEventListener('click', function(){
    cel.classList.add('fadeOut');
    console.log(cel.innerHTML);
    if(cel.innerHTML == "C &deg;"){
        console.log(true);
        // cel.innerHTML = "F &deg;";
        // cel.classList.add('fadeIn');    
    }
    else if(cel.innerHTML == "F &deg;"){
        cel.innerHTML = "C &deg;"
        cel.classList.add('fadeIn');
    }
    // cel.innerHTML = "f";
    // cel.classList.add('fadeIn');
})