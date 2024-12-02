function szamol(){
    let varju = 0;
    let hollo = 0;
    let szarka = 0;
    if (document.getElementById("a").checked){
        varju++;
    }
    if (document.getElementById("b").checked){
        szarka++;
    }
    if (document.getElementById("c").checked){
        hollo++;
    }
    if (document.getElementById("d").checked){
        szarka++;
    }
    if (document.getElementById("e").checked){
        hollo++;
    }
    if (document.getElementById("f").checked){
        varju++;
    }
    if (document.getElementById("g").checked){
        varju++;
    }
    if (document.getElementById("h").checked){
        hollo++;
    }
    if (document.getElementById("i").checked){
        szarka++;
    }
    if (document.getElementById("j").checked){
        szarka++;
    }
    if (document.getElementById("k").checked){
        hollo++;
    }
    if (document.getElementById("l").checked){
        varju++;
    }
    if (document.getElementById("m").checked){
        varju++;
    }
    if (document.getElementById("n").checked){
        hollo++;
    }
    if (document.getElementById("o").checked){
        szarka++;
    }


    if(varju==hollo){
        if(varju<szarka){
            document.getElementById("valasz").innerHTML=`<h2>a szarka!</h2><img src="képek/05_személyiségteszt/ruby-lalor-CzDMB4mW7B4-unsplash.jpg" alt="szarka egy réten"><p>A szarkák élénk, kíváncsi és intelligens madarak, akik játékos természetükkel és gyors tanulékonyságukkal hívják fel magukra a figyelmet. Rendkívül szociálisak, és életre szóló párkapcsolatokat alakítanak ki, miközben bonyolult kommunikációs rendszerekkel tartják a kapcsolatot társaikkal. Gyakran társítják őket a csillogó tárgyak iránti vonzalommal, ami furfangos és ravasz személyiségüket tükrözi. A szarkák egyedi eleganciájukkal és okos viselkedésükkel az emberi képzelet és kultúra állandó szereplői.</p><p>Bónusz! Mondd el háromszor egymás után gyorsan:</p><p class="idezet">Nem minden fajta szarka farka tarkabarka, csak a tarkabarka farkú szarkafajta farka tarkabarka.</p>`
        }
        else{
            document.getElementById("valasz").innerHTML=`<h2>a csóka!</h2><img src="képek/05_személyiségteszt/pexels-nibman-221095404-12022506.jpg" alt="csóka egy réten"><p>A csókák kisméretű, elegáns varjúfélék, akik intelligenciájukkal és szociális természetükkel tűnnek ki. Élénk, kíváncsi személyiségük van, és gyakran csapatokban mozognak, szoros kapcsolatokat kialakítva társaikkal. Rendkívül alkalmazkodó madarak, akik ügyesen boldogulnak városi és vidéki környezetben egyaránt. Jellegzetes, csillogó kékesszürke szemeik és finom viselkedésük méltóságot kölcsönöz nekik, miközben játékos természetük mindig újabb meglepetéseket tartogat.</p>`
        }
    }
    else{
        if (hollo==szarka){
            if(varju>hollo){
                document.getElementById("valasz").innerHTML=`<h2>a csóka!</h2><img src="képek/05_személyiségteszt/pexels-nibman-221095404-12022506.jpg" alt="csóka egy réten"><p>A csókák kisméretű, elegáns varjúfélék, akik intelligenciájukkal és szociális természetükkel tűnnek ki. Élénk, kíváncsi személyiségük van, és gyakran csapatokban mozognak, szoros kapcsolatokat kialakítva társaikkal. Rendkívül alkalmazkodó madarak, akik ügyesen boldogulnak városi és vidéki környezetben egyaránt. Jellegzetes, csillogó kékesszürke szemeik és finom viselkedésük méltóságot kölcsönöz nekik, miközben játékos természetük mindig újabb meglepetéseket tartogat.</p>`
            }
            else{
                document.getElementById("valasz").innerHTML=`<h2>a holló!</h2><img src="képek/05_személyiségteszt/kasturi-roy-a1LVsvM_zuE-unsplash.jpg" alt="kép egy hollóról"><p>A hollók a madárvilág egyik legintelligensebb tagjai, amelyeket méltóságteljes megjelenésük és titokzatos személyiségük különösen figyelemre méltóvá tesz. Ezek a madarak nemcsak rendkívüli problémamegoldó képességgel és eszközhasználattal rendelkeznek, hanem mély szociális kapcsolatokat is kialakítanak. Személyiségük gyakran öntudatos és független, de ugyanakkor játékosak és kíváncsiak is, különösen, ha új helyzeteket vagy tárgyakat fedeznek fel. A hollók éles elméjükkel és érzelmeket tükröző viselkedésükkel az emberi figyelem középpontjába kerültek az évszázadok során.</p>`
            }
        }
        else{
            if (szarka==hollo){
                if(varju>hollo){
                    document.getElementById("valasz").innerHTML=`<h2>a varjú!</h2><img src="képek/05_személyiségteszt/pexels-babek-gadirly-1884866-3825776.jpg" alt="egy varjú ül egy padon"><p>A varjak rendkívül intelligens és kíváncsi madarak, akik éles megfigyelőképességükkel és problémamegoldó készségükkel tűnnek ki. Személyiségük gyakran játékos és furfangos, ugyanakkor rendkívül szociálisak, erős kötelékeket alakítanak ki társaikkal. Egyedi viselkedésük, például a különféle hangjelzések és eszközhasználat, jól tükrözi kreativitásukat és tanulási képességeiket. Ez a kombináció teszi őket a természet egyik legérdekesebb szereplőjévé.</p>`
                }
                else{
                    document.getElementById("valasz").innerHTML=`<h2>a csóka!</h2><img src="képek/05_személyiségteszt/pexels-nibman-221095404-12022506.jpg" alt="csóka egy réten"><p>A csókák kisméretű, elegáns varjúfélék, akik intelligenciájukkal és szociális természetükkel tűnnek ki. Élénk, kíváncsi személyiségük van, és gyakran csapatokban mozognak, szoros kapcsolatokat kialakítva társaikkal. Rendkívül alkalmazkodó madarak, akik ügyesen boldogulnak városi és vidéki környezetben egyaránt. Jellegzetes, csillogó kékesszürke szemeik és finom viselkedésük méltóságot kölcsönöz nekik, miközben játékos természetük mindig újabb meglepetéseket tartogat.</p>`
                }
            }
            else{
                if (varju>hollo){
                    if (varju>szarka){
                        document.getElementById("valasz").innerHTML=`<h2>a varjú!</h2><img src="képek/05_személyiségteszt/pexels-babek-gadirly-1884866-3825776.jpg" alt="egy varjú ül egy padon"><p>A varjak rendkívül intelligens és kíváncsi madarak, akik éles megfigyelőképességükkel és problémamegoldó készségükkel tűnnek ki. Személyiségük gyakran játékos és furfangos, ugyanakkor rendkívül szociálisak, erős kötelékeket alakítanak ki társaikkal. Egyedi viselkedésük, például a különféle hangjelzések és eszközhasználat, jól tükrözi kreativitásukat és tanulási képességeiket. Ez a kombináció teszi őket a természet egyik legérdekesebb szereplőjévé.</p>`
                    }
                    else{
                       document.getElementById("valasz").innerHTML=`<h2>a szarka!</h2><img src="képek/05_személyiségteszt/ruby-lalor-CzDMB4mW7B4-unsplash.jpg" alt="szarka egy réten"><p>A szarkák élénk, kíváncsi és intelligens madarak, akik játékos természetükkel és gyors tanulékonyságukkal hívják fel magukra a figyelmet. Rendkívül szociálisak, és életre szóló párkapcsolatokat alakítanak ki, miközben bonyolult kommunikációs rendszerekkel tartják a kapcsolatot társaikkal. Gyakran társítják őket a csillogó tárgyak iránti vonzalommal, ami furfangos és ravasz személyiségüket tükrözi. A szarkák egyedi eleganciájukkal és okos viselkedésükkel az emberi képzelet és kultúra állandó szereplői.</p><p>Bónusz! Mondd el háromszor egymás után gyorsan:</p><p class="idezet">Nem minden fajta szarka farka tarkabarka, csak a tarkabarka farkú szarkafajta farka tarkabarka.</p>`
                    }
                }
                else{
                    if(hollo>szarka){
                        document.getElementById("valasz").innerHTML=`<h2>a holló!</h2><img src="képek/05_személyiségteszt/kasturi-roy-a1LVsvM_zuE-unsplash.jpg" alt="kép egy hollóról"><p>A hollók a madárvilág egyik legintelligensebb tagjai, amelyeket méltóságteljes megjelenésük és titokzatos személyiségük különösen figyelemre méltóvá tesz. Ezek a madarak nemcsak rendkívüli problémamegoldó képességgel és eszközhasználattal rendelkeznek, hanem mély szociális kapcsolatokat is kialakítanak. Személyiségük gyakran öntudatos és független, de ugyanakkor játékosak és kíváncsiak is, különösen, ha új helyzeteket vagy tárgyakat fedeznek fel. A hollók éles elméjükkel és érzelmeket tükröző viselkedésükkel az emberi figyelem középpontjába kerültek az évszázadok során.</p>`
                    }
                    else{
                        document.getElementById("valasz").innerHTML=`<h2>a szarka!</h2><img src="képek/05_személyiségteszt/ruby-lalor-CzDMB4mW7B4-unsplash.jpg" alt="szarka egy réten"><p>A szarkák élénk, kíváncsi és intelligens madarak, akik játékos természetükkel és gyors tanulékonyságukkal hívják fel magukra a figyelmet. Rendkívül szociálisak, és életre szóló párkapcsolatokat alakítanak ki, miközben bonyolult kommunikációs rendszerekkel tartják a kapcsolatot társaikkal. Gyakran társítják őket a csillogó tárgyak iránti vonzalommal, ami furfangos és ravasz személyiségüket tükrözi. A szarkák egyedi eleganciájukkal és okos viselkedésükkel az emberi képzelet és kultúra állandó szereplői.</p><p>Bónusz! Mondd el háromszor egymás után gyorsan:</p><p class="idezet">Nem minden fajta szarka farka tarkabarka, csak a tarkabarka farkú szarkafajta farka tarkabarka.</p>`
                    }
                }
            }
        }
    }
    
}




document.getElementById("myButton").addEventListener("click", szamol);
