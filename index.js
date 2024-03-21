// fogjuk meg a .kivalszt div-et
const ELEM=$(".kivalaszt")
ELEM.eq(0).html("<h2>Hello JQuery! </h2>")

const pELEM=$("#masodik p")
pELEM.html("<b>szegény emberek!</b>")

/* ha az OK gombra kattintunk, akkor az első kivalaszt div tartalmát
tegye bele a p tagekbe! */

const BUTTON=$("button")
BUTTON.on("click", function(){
   let tartalom = ELEM.eq(0).html()
   pELEM.html(tartalom)
   //pELEM.html(ELEM.eq(0).html())
})

