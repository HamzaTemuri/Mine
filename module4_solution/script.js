(function(){

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (i=0; i<names.length; i++) {
  var a = names[i].charAt(0);
  a = a.toLowerCase();

  if ( a == "j") {
    byeSpeaker.speak(names[i]);
  }
  else
  {
    helloSpeaker.speak(names[i]);
  }
}
})();