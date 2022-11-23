function roudRadar(speed, area) {

    let speedLimit = 0

    let note = '';

    let difference = 0;

    switch (area) {
        case 'city':
            speedLimit = 50;
            difference = speed - speedLimit;
            break;

        case 'residential':
            speedLimit = 20;
            difference = speed - speedLimit;
            break;
        case 'interstate':
            speedLimit = 90;
            difference = speed - speedLimit;
            break;
        case 'motorway':
            speedLimit = 130;
            difference = speed - speedLimit;
            break;
    }

    if (difference <= 0){
        note = (`Driving ${speed} km/h in a ${speedLimit} zone`);
    }else if (difference >0 && difference <= 20){
        note = (`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - speeding`);
    }else if (difference >20 && difference <= 40){
        note = (`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`);
    }else{
        note = (`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - reckless driving`);
    }

    console.log(note);

}

roudRadar(40, 'city');  
roudRadar(21, 'residential');
