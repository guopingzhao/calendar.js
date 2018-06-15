 function Calendar(){
     this.daysOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
 }

 Calendar.prototype.getDays = function (year, month) {
    if (month != 1) {
        return this.isLeapYear(year) ? 29 : 28;
    } else {
        return this.daysOfMonth[month];
    }
 }

 Calendar.prototype.isLeapYear = function(year) {
    if ((year % 4) && year % 100 || !(year % 400)) {
        return true;
    } else {
        return false;
    }
 }

 Calendar.prototype.zellerWeek = function(year, month, day) {

    let m = month;
    let d = day;

    if(month <= 2){ /*对小于2的月份进行修正*/
       year--;
       m = month + 12;
    }

    let y = year % 100;
    let c = year / 100;

    let w = (y + y / 4 + c / 4 - 2 * c + (13 * (m + 1) / 5) + d - 1) % 7;

    if(w < 0) { /*修正计算结果是负数的情况*/
       w += 7;
       
    }
    return w >> 0;
}