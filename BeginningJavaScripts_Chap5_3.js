function fix (fixNumber, decimalPlaces){
  
  var i;
  for (i= 0; i<=decimalPlaces; i++) {
    var q = fixNumber*Math.pow(10, i)- Math.round(fixNumber*Math.pow(10, i));
    if (q===0) break;
  }
  if (i==0) fixNumber=fixNumber+'.'; 
  if (i==decimalPlaces) {
    var div = Math.pow(10, i);
    fixNumber= Math.round(fixNumber*div)/div;
  }
  else {
    for (var j=1; j<=decimalPlaces-i; j++) fixNumber+="0";
  }
  return fixNumber;
}
var t;
while (isNaN(t) || t=='' || t===true || t== null) {
t = prompt("Nhap so",'');
}

$('#in').text(t);
$('#out').text(fix(t,3));
