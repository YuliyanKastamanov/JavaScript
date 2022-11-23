function daysInMont(month, year) {

    function getDaysInMonth(month,year) {

        // Here January is 1 based
    
        //Day 0 is the last day in the previous month
    
       return new Date(year, month, 0).getDate();
    
      // Here January is 0 based
    
      // return new Date(year, month+1, 0).getDate();
    
      };
    
      console.log(getDaysInMonth(month, year)); 

}


daysInMont(1, 2012)

daysInMont(2, 2021)