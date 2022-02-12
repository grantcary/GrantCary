function openimage() {
    // document.getElementById("image1").style.visibility="visible";
    var x = document.getElementById("image1");
    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
      } else {
        x.style.visibility = "hidden";
      }
    var elem = document.getElementById("imgbtn");
    if (elem.value=="shhh... open secrent image") elem.value = "for the love of god, GO BACK!!!!";
    else elem.value = "shhh... open secrent image";
}
