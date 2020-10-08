function myFunction(e) {
  document.getElementById("myText").value = e.target.value
}

$(document).ready(function() {
		
  var allOptions = $('input[name=inlineRadioOptions]')

  allOptions.click(function() {
    if($(allOptions).prop('checked') == true){
      $("#myText").prop("disabled", true);
  } else {
      $("#myText").prop("disabled", false);
  }
      
  });
});

var thevalue = 0;
$("#click").click(function(){
  
  $("#display").text("You Memorized ");
   var theinput_value = parseInt($("#myText").val());
   thevalue += theinput_value;
  //$("#display").append(thevalue);
  document.getElementById("answer").value = thevalue ;
  
});

function perc2() {
  a = document.form1.c.value;
  b = document.form1.d.value;
  c = a/b;
  d = c*100;
  document.form1.total2.value = d
  $("#display").append(d.toFixed(2)+ "%" + " of Quran." +"<br>" + "MashaAllah keep memorizing"+"<br>"+
  	"and make it 100%" + "<br>"
  	+"InshaAllah :)");
  }


