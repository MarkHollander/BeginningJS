$("#test").bind("click",function () {
var timeRequest= 0;

var abc=setInterval(function () {

  timeRequest=prompt("Enter your times table to display","");
  if (timeRequest==-1) clearInterval(abc);
  timesTable(timeRequest);  
},3000);
});


function timesTable(j) {
  document.body.innerHTML='';
  for (var i=1; i<=j;i++)
  {
    var result= j*i;
    document.write("<br/>"+j+" * "+i+" = "+result);
  }
}

$("#t1 tr:odd").each(function(){
  $(this).on("mouseover", function(){
    $(this).css("background-color","#eaebfa");
  });
  $(this).on("mouseout", function(){
    $(this).css("background-color","white");
  });
})