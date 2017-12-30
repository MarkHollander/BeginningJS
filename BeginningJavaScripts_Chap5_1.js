var toDay = new Date();
var thisMonth = toDay.getMonth();
var result1=new Date(toDay.setMonth(thisMonth+12));
$("#result").append("<h1 style='color:red;'> Now: "+result1+"</h1>");