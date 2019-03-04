function counterClick() {
 var pulsante = $(".square.center");
 var base = Number(pulsante.text());

 pulsante.click(function() {
   base = base +=1;
   $(".right").text(base);
   $(".left").text("-" + base);
   $(".center").text("PUSH");
 });
}

counterClick()
