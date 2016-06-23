var dates = function (date1, date2) {
    var startMonth = date1.getMonth(),
        endMonth = date2.getMonth(),
        calStart = new Date(date1.setHours(0,0,0,0)),
        duration = 1,
        segArray = [calStart.getTime()];
    if (startMonth === endMonth){
        duration += differenceDaysInSameMonth(date1,date2) 
    }else {
        duration += differenceDaysInDiffMonth(date1,date2)
    }
    for (var i = 1; i < duration * 96; i++) {
        segArray[i] = segArray[i-1] + 900000;
    }
    for (var j = 0; j<segArray.length; j++){
        console.log(new Date(segArray[j]));
    }
    
};

function differenceDaysInSameMonth(date1, date2) {
    return date2.getDate() - date1.getDate();
} 

function differenceDaysInDiffMonth(date1, date2) {
    var monthBetweenDays = 0,
        monthOneDays = daysInMonth(date1.getMonth()) - date1.getDate(),
        monthFinalDays = date2.getDate();
    
    for (var i = date1.getMonth() + 1; i < date2.getMonth(); i++) {
        monthBetweenDays += daysInMonth(i);
    };
    
    return monthOneDays + monthFinalDays + monthBetweenDays + 1;
        
    
};

function daysInMonth(month){
    var days = 0;
    switch (month){
            case 0:
                days += 31;
                break;
            case 1:
                days += 28;
                break;
            case 2:
                days += 31;
                break;
            case 3:
                days += 30;
                break;
            case 4:
                days += 31;
                break;
            case 5:
                days += 30;
                break;
            case 6:
                days += 31;
                break;
            case 7:
                days += 31;
                break;
            case 8:
                days += 30;
                break;
            case 9:
                days += 31;
                break;
            case 10:
                days += 30;
                break;
            case 11:
                days += 31;
                break;
        }
    return days
}