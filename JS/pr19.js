var week = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

var regularYear = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
var leapYear = [ 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

function main() {
  var sundayFirstMonths = 0;
  var firstSundays = [];
  var allDays = [];
  for (var i = 1; i <= 100; i++) {
    var year = 1900 + i;
    allDays = getAllDaysFromYear('sunday', year);
    for (var j = 0; j < allDays.length; j++) {
      if (isFirstDayOfMonth(allDays[j], year)) {
        firstSundays.push(year, allDays[j]);
        sundayFirstMonths++;
      }
    }
  }
  console.log(sundayFirstMonths);
}

// returns an array of integers representing the position of the day in the whole year (not per month)
function getAllDaysFromYear(day, year) {
  if (day === undefined || day === null) { day = 'monday'; }
  var totalDays = isLeapYear(year) ? 366 : 366;
  var ocurrences = [];
  for (var i = getFirstOcurrenceOfDay(day, year); i <= totalDays; i += 7) {
    ocurrences.push(i);
  }
  return ocurrences;
}

function getFirstOcurrenceOfDay(day, year) {
  var firstDayOfYear = getFirstDayOfYearFromNineteenHundred(year);
  var weekCopy = week.slice(week.indexOf(firstDayOfYear)).concat(week.slice(0, week.indexOf(firstDayOfYear)));
  return weekCopy.indexOf(day) + 1;
}

// day here is the number in the entire year
function isFirstDayOfMonth(day, year) {
  var yearToCompare = isLeapYear(year) ? leapYear : regularYear;
  if (day === 1) {
    return true;
  } else {
    var currentTotalDays = 0;
    for (var i = 0; i < yearToCompare.length; i++) {
      currentTotalDays += yearToCompare[i];
      if (day === (currentTotalDays - (yearToCompare[i] - 1))) {
        return true;
      }
    }
  }

  return false;
}

function getFirstDayOfYearFromNineteenHundred(year) {
  var nineteenHundredTotalDays = 365;
  var firstDay = 'monday';
  var previousYearFirstDay;
  var previousIndex, currentIndex;
  var yearDifference = year - 1900;

  for (var i = 1; i <= yearDifference; i++) {
    previousYearFirstDay = firstDay;
    previousIndex = week.indexOf(previousYearFirstDay);
    currentIndex = previousIndex + 1;
    if (isLeapYear(1900 + (i - 1))) {
      currentIndex = currentIndex + 1;
    }
    firstDay = week[currentIndex % 7];
  }

  return firstDay;
}

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 > 0) || year % 400 === 0) {
    return true;
  }
  return false;
}

main();
