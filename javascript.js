(window.alert("Welcome to our site"))
function calc() {
    first = document.loveform.name1.value.toUpperCase();
    firstlength = document.loveform.name1.value.length;
    second = document.loveform.name2.value.toUpperCase();
    secondlength = document.loveform.name2.value.length;
    var LoveCount = 0;

    for (count=0; count < firstlength; count++) {

        letter1=first.substring(count,count+1);
        if (letter1=='L') LoveCount+=2;
        if (letter1=='O') LoveCount+=2;
        if (letter1=='v') LoveCount+=2;
        if (letter1=='E') LoveCount+=2;
        if (letter1=='Y') LoveCount+=3;
        if (letter1=='O') LoveCount+=1;
        if (letter1=='U') LoveCount+=3;
    }

    for (count=0; count < secondlength; count++) {
        letter2=second.substring(count,count+1);
        if (letter2=='L') LoveCount+=2;
        if (letter2=='O') LoveCount+=2;
        if (letter2=='V') LoveCount+=2;
        if (letter2=='E') LoveCount+=2;
        if (letter2=='Y') LoveCount+=3;
        if (letter2=='O') LoveCount+=1;
        if (letter2=='U') LoveCount+=3;
    }

    amount=0;

    if (LoveCount> 0) amount=  5-((firstlength+secondlength)/2)
    if (LoveCount> 2) amount= 10-((firstlength+secondlength)/2)
    if (LoveCount> 4) amount= 20-((firstlength+secondlength)/2)
    if (LoveCount> 6) amount= 30-((firstlength+secondlength)/2)
    if (LoveCount> 8) amount= 40-((firstlength+secondlength)/2)

    if (LoveCount>10) amount= 50-((firstlength+secondlength)/2)

    if (LoveCount>12) amount= 60-((firstlength+secondlength)/2)
    if (LoveCount>14) amount= 70-((firstlength+secondlength)/2)
    if (LoveCount>16) amount= 80-((firstlength+secondlength)/2)
    if (LoveCount>18) amount= 90-((firstlength+secondlength)/2)
    if (LoveCount>20) amount=100-((firstlength+secondlength)/2)
    if (LoveCount>22) amount=110-((firstlength+secondlength)/2)
    if (firstlength==0 || secondlength==0) amount= "Err";
    if (amount < 0) amount= 0;
    if (amount >99) amount=99;

    document.loveform.output.value=amount+"%";




}

name=window.prompt("here","Write Your Name");
document.write("<H1 align=center> Nice to meet you "+name+" </H1>")


function color(frm, clr, val) {
    v = eval("0x" + frm[clr].value) + val;
    if (v < 0 || v > 255) v -= val;
    v = v.tostring(16).toUpperCase();
    while (v.length < 2) v = "0" + v;
    frm[clr].value = v; nc = "";
    for( i = 1; i < 8; i +=3) nc += frm.elements[i].value;
    document.bgColor = nc;



}


function setval(myitem) {
    v = prompt("choose color" + myitem.name + "Example: (00 )", myitem.value);
      if (v) {
          v = eval("0x" + v);
          if ((v & 255) ==v) {
              myitem.value=v.tostring(16).toUpperCase();
              while (myitem.value.length < 2) myitem.value = "0" + myitem.value;
              color(document.f , myitem.name, 0);
          }
      }
}