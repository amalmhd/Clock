function clock(){
    var hours = document.querySelector("#hours");
    var minutes = document.querySelector("#minutes");
    var seconds = document.querySelector("#seconds");
    var am = document.querySelector("#am-pm");

    var time = new Date();
    var a = time.getHours();
    var b = time.getMinutes();
    var c = time.getSeconds();
    var d = "AM";

    if(a == 0){
        a = 12;
    }
    if(a > 12){
        a = a - 12;
        d = "PM";
    }

    hours.innerHTML = a;
    minutes.innerHTML = b;
    seconds.innerHTML = c;
    am.innerHTML = d;
}
setInterval(clock, 1000);

function makediv(){
    let container = document.createElement('div');
    container.id='dynamic-block';
    container.class='timing';
    container.class='timing1';
    container.class='timing2';
    container.class='timing3';

    document.querySelector('.timing').appendChild(container);

    let invalue = document.querySelector("#wakeUptime");
    let value = invalue.options[invalue.selectedIndex].text;
    document.querySelector('.timing').innerHTML='Wake Up Time : '+value;
    
    let invalue1 = document.querySelector("#lunchTime");
    let value1 = invalue.options[invalue.selectedIndex].text;
    document.querySelector('.timing1').innerHTML='Lunch Time : '+value1;
    
    let invalue2 = document.querySelector("#napTime");
    let value2 = invalue.options[invalue.selectedIndex].text;
    document.querySelector('.timing2').innerHTML='Nap Time : '+value2;
    
    let invalue3 = document.querySelector("#nightTime");
    let value3 = invalue.options[invalue.selectedIndex].text;
    document.querySelector('.timing3').innerHTML='Night Time : '+value3;
}

function settime(){
    var i = document.getElementById("wakeUptime").value;
    let j = document.getElementById("lunchTime").value;
    let k = document.getElementById("napTime").value;
    let l = document.getElementById("nightTime").value;
    var hrs = new Date().getHours();

    document.querySelector('.item3').style.display="block";
    document.querySelector('.grid2-item2').style.display="block";
    document.querySelector('.timin').style.display="block";

    if(i == hrs){
        document.querySelector('#image').src='assets/Group 5183-1.png';
        document.querySelector('.custom-text').innerHTML = "GRAB SOME HEALTHY BREAKFAST!!!";
        document.querySelector('.item3-text').innerHTML = "GOOD MORNING!! WAKE UP !!";
    }
    else if(j == hrs){
        document.querySelector('#image').src='assets/Group 5183.png';
        document.querySelector('.custom-text').innerHTML = "LET'S HAVE SOME LUNCH !!";
        document.querySelector('.item3-text').innerHTML = "GOOD AFTERNOON !! TAKE SOME SLEEP";
    }
    else if(k == hrs){
        document.querySelector('#image').src='assets/lunch_image.png';
        document.querySelector('.custom-text').innerHTML = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
        document.querySelector('.item3-text').innerHTML = "GOOD EVENING !!";
    }
    else if(l == hrs){
        document.querySelector('#image').src='assets/Group 5194.png';
        document.querySelector('.custom-text').innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP";
        document.querySelector('.item3-text').innerHTML = "GOOD NIGHT !!";
    }
    
    makediv();

}