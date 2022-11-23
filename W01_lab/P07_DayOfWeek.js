function dayOfWeek(dayOfWeek){

let dayCount = 0;
let isDay = true;

if(dayOfWeek === 'Monday'){
    dayCount = 1;
}else if (dayOfWeek === 'Tuesday'){
    dayCount = 2;
}else if (dayOfWeek === 'Wednesday'){
    dayCount = 3;
}else if (dayOfWeek === 'Thursday'){
    dayCount = 4;
}else if (dayOfWeek === 'Friday'){
    dayCount = 5;
}else if (dayOfWeek === 'Saturday'){
    dayCount = 6;
}else if (dayOfWeek === 'Sunday'){
    dayCount = 7;
}else{
    isDay = false;
}

if(isDay){
    console.log(dayCount);
}else{
    console.log('error')
}



}

dayOfWeek('Monday');
dayOfWeek('Invalid');
dayOfWeek('Friday')