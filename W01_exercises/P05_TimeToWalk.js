function timeToWalk(steps, footprint, speed){

    let distanceMeters = steps * footprint;
    let speedMeterSec = speed/3.6;
    let time = distanceMeters/speedMeterSec;
    let rest = Math.floor(distanceMeters / 500);


    let timeMinutes = Math.floor(time / 60);
    let timeSec = Math.round(time - timeMinutes * 60);
    let timeHours =  Math.floor(time / 3600);

    console.log((timeHours < 10 ? "0" : "") + timeHours + ":" + (timeMinutes + rest < 10 ? "0" : "") + (timeMinutes + rest) + ":" + (timeSec < 10 ? "0" : "") + timeSec);

}

timeToWalk(4000, 0.60, 5);
