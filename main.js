

var flights = document.getElementsByClassName('flight-summary')

for (var i=0; i<flights.length;i++)

flights[i].addEventListener('click', function(e){


    if(e.currentTarget.parentElement.classList.contains('open')){
        e.currentTarget.parentElement.classList.remove('open')
    }else{
        if(document.querySelectorAll('.open').length>0){
            document.querySelectorAll('.open')[0].classList.remove('open')
        }
        e.currentTarget.parentElement.classList.add('open')
        e.currentTarget.scrollIntoView(true,{behavior: "smooth"});

    }
})

