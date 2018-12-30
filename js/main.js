

document.getElementById("search").addEventListener('click', initReq);

function initReq(){

    var temp = document.getElementById("temp");
    var location = document.getElementById("location")
    temp.classList.add('fadeOut');
    temp.classList.remove('fadeIn');
    
    var cityValue = document.getElementById('city').value;
    var xhr = new XMLHttpRequest;
    xhr.open('GET', 'http://api.apixu.com/v1/current.json?key=267f3d95c90149419d061627182612&q=' + cityValue);
    xhr.send();
    // console.log(temp)

    xhr.onreadystatechange = function(){
        var a = JSON.parse(xhr.responseText);

        location.style.visibility = "visible";


        location.innerHTML = document.getElementById("city").value;
        location.classList.remove('fadeOut');
        location.classList.add('fadeIn');
        setTimeout(function(){
            city.classList.remove('fadeIn');
        }, 2000);

        temp.innerHTML = "Currently: " + a.current.temp_c + " " + "&deg";
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
    cel.classList.remove('fadeIn');

    console.log(cel.innerHTML);
    
    if(cel.innerHTML == "C °"){
        // console.log(true);
        cel.innerHTML = "F &deg;";
        cel.classList.remove('fadeOut');
        cel.classList.add('fadeIn');
        setTimeout(function(){
            cel.classList.remove('fadeIn');
        }, 1000);
    }
    else {
        cel.innerHTML = "C &deg;";
        cel.classList.remove('fadeOut');
        cel.classList.add('fadeIn');
        setTimeout(function(){
            cel.classList.remove('fadeIn');
        }, 1000);
    }

    // cel.classList.remove('fadeOut', 'fadeIn');
}
    // cel.innerHTML = "f";
    // cel.classList.add('fadeIn');
)