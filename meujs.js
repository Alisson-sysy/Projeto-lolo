
function mudarcor(){
    document.getElementById("bt").style.borderColor = "rgb(216, 194, 150)"
    document.getElementById("bt").style.boxShadow = "1px 1px 10px white"
    document.getElementById("bt").style.transition = ".2s"
setTimeout(muda, 300)
function muda(){
    document.getElementById("bt").style.borderColor = "rgb(207, 181, 126)"
    document.getElementById("bt").style.boxShadow = ".5px .5px 2px white"
    document.getElementById("bt").style.transition = ".2s"
}

}
function tiracor(){
document.getElementById("bt").style.borderColor = "rgb(200,169,108);"
document.getElementById("bt").style.boxShadow = "1.5px 1.5px 1px black "
}
    function animacao(r){
        document.getElementById("h11").style.opacity = "1"
        document.getElementById("h11").style.transition = "1s"
        setTimeout(controleTempo2, 100)
        function controleTempo2(){
            document.getElementById("img1").style.opacity = "1"
            setTimeout(img1, 100)
            function img1(){
            document.getElementById("img1").src = "image/Determinação/Rune_Resolve.png"
            }
            setTimeout(img2, 200)
            function img2(){
                document.getElementById("img1").src = "image/dominação/Rune_Domination.png"
            }
            setTimeout(img3, 300)
            function img3(){
                document.getElementById("img1").src = "image/precisão/Rune_Precision.png"
            }
            setTimeout(img4, 400)
            function img4(){
                document.getElementById("img1").src = "image/inspiração/Rune_Inspiration.png"
            }
            setTimeout(img5, 500)
            function img5(){
                document.getElementById("img1").src = "image/Feitiçaria/Rune_Sorcery.png"
            }
            setTimeout(imgF, 600)
            function imgF(){
                document.getElementById("img1").src = r
            }
        }
    }
    function aparece(m){
        document.getElementById(m).style.opacity = "1"
        document.getElementById(m).style.transition = "1s"
    }
    function animaflex(){
        setTimeout(voltaanimaflex1, 100)
        function voltaanimaflex1(){
            document.getElementById("img9F").style.opacity = 0
            document.getElementById("img9F").style.marginBottom = "-444.7px"
            document.getElementById("img9F").style.transition = ".8s"
    
            document.getElementById("img10F").style.opacity = 0
            document.getElementById("img10F").style.transition = "2s"

            document.getElementById("img11F").style.opacity = 0
            document.getElementById("img11F").style.marginLeft = "-550px"
            document.getElementById("img11F").style.transition = ".8s"
        }

        setTimeout(voltaanimaflex, 2250)
        function voltaanimaflex(){
            document.getElementById("img9F").style.opacity = 1
            document.getElementById("img9F").style.marginBottom = 0
            document.getElementById("img9F").style.transition = ".8s"

            document.getElementById("img10F").style.opacity = 1
            document.getElementById("img10F").style.transition = "2s"

            document.getElementById("img11F").style.opacity = 1
            document.getElementById("img11F").style.marginLeft = 0
            document.getElementById("img11F").style.transition = ".8s"
        }
    
    }
    musicplay = " "
function go(){
    if(musicplay != 1){
        document.getElementById("music").play(); 
    }
    musicplay = 1
    for(x=1; x<=5; x++){
        document.getElementById("img" + x).style.opacity = "0"
    }
    //------<>---------<>---------<>----------<>-------------<>------Runa Principal------<>-----------<>---------------<>
    runaP = Math.round(4 * (Math.random()) + 1);
    //----------------------------------------Precisão------------------------------------------------------------------
    if(runaP == 1){
        animacao("image/precisão/Rune_Precision.png")
        setTimeout(time1, 750)
        function time1(){
            imgErunas = ["image/precisão/Runas/Runa essencial/Press_the_Attack.png", "image/precisão/Runas/Runa essencial/Lethal_Tempo.png", "image/precisão/Runas/Runa essencial/Fleet_Footwork.png", "image/precisão/Runas/Runa essencial/Conqueror.png"]
            aleato = Math.round(3 * (Math.random()));
            document.getElementById("img2").src = imgErunas[aleato]
            aparece("img2")

        }
        //----------------------------Outras runas----------linha 1--------------------------------------------------
        setTimeout(time2, 850)
        function time2(){
            imgOrunas1 = ["image/precisão/Runas/Resto/Rune_Overheal.png", "image/precisão/Runas/Resto/Rune_Triumph.png", "image/precisão/Runas/Resto/Rune_Precision.png"]
            aleatorio1 = Math.round(2 * (Math.random()));
            document.getElementById("img3").src = imgOrunas1[aleatorio1]
            aparece("img3")
        }
        //----------------------------Outras runas----------linha 2--------------------------------------------------
        setTimeout(time3, 950)
        function time3(){
            imgOrunas = ["image/precisão/Runas/Resto/Rune_Legend_-_Alacrity.png", "image/precisão/Runas/Resto/Rune_Legend_-_Tenacity.png", "image/precisão/Runas/Resto/Rune_Legend_-_Bloodline.png"]
            aleatorio = Math.round(2 * (Math.random()));
            document.getElementById("img4").src = imgOrunas[aleatorio]
            aparece("img4")
        }
        //----------------------------Outras runas----------linha 3--------------------------------------------------
        setTimeout(time4, 1050)
        function time4(){
            imgOrunas = ["image/precisão/Runas/Resto/Rune_Coup_de_Grace.png", "image/precisão/Runas/Resto/Rune_Cut_Down.png", "image/precisão/Runas/Resto/Rune_Last_Stand.png"]
            aleatorio = Math.round(2 * (Math.random()));
            document.getElementById("img5").src = imgOrunas[aleatorio]
            aparece("img5")
        }
//------<>---------<>---------<>----------<>-------------<>------Runa Principal 2------<>-----------<>---------------<>-------<>-----------<>------------------<>-----------------<>-----------<>
    }
     if(runaP == 2){
        animacao("image/dominação/Rune_Domination.png")
        setTimeout(time5, 750)
        function time5(){
            imgErunas = ["image/dominação/Runa essencial/Rune_Electrocute.png", "image/dominação/Runa essencial/Rune_Predator.png", "image/dominação/Runa essencial/Rune_Dark_Harvest.png", "image/dominação/Runa essencial/180px-Rune_Hail_of_Blades.png"]
            aleato = Math.round(3 * (Math.random()));
            document.getElementById("img2").src = imgErunas[aleato]
            aparece("img2")
        }
        //----------------------------Outras runas----------linha 1--------------------------------------------------
        setTimeout(time6, 850)
        function time6(){
            imgOrunas = ["image/dominação/Resto/Rune_Cheap_Shot.png", "image/dominação/Resto/Rune_Taste_of_Blood.png", "image/dominação/Resto/Rune_Sudden_Impact.png"]
            aleatorio = Math.round(2 * (Math.random()));
            document.getElementById("img3").src = imgOrunas[aleatorio]
            aparece("img3")
        }
        //----------------------------Outras runas----------linha 2--------------------------------------------------
        setTimeout(time7, 950)
        function time7(){
            imgOrunas = ["image/dominação/Resto/Rune_Zombie_Ward.png", "image/dominação/Resto/Rune_Ghost_Poro.png", "image/dominação/Resto/Rune_Eyeball_Collection.png"]
            aleatorio = Math.round(2 * (Math.random()));
            document.getElementById("img4").src = imgOrunas[aleatorio]
            aparece("img4")
        }
        //----------------------------Outras runas----------linha 3--------------------------------------------------
        setTimeout(time8, 1050)
        function time8(){
            imgOrunas = ["image/dominação/Resto/Rune_Ravenous_Hunter.png", "image/dominação/Resto/Rune_Ingenious_Hunter.png", "image/dominação/Resto/Rune_Relentless_Hunter.png", "image/dominação/Resto/Rune_Ultimate_Hunter.png"]
            aleatorio = Math.round(3 * (Math.random()));
            document.getElementById("img5").src = imgOrunas[aleatorio]
            aparece("img5")
        }
//------<>---------<>---------<>----------<>-------------<>------Runa Principal 3------<>-----------<>---------------<>-------<>-----------<>------------------<>-----------------<>-----------<>
    }
    if(runaP == 3){
        animacao ("image/Feitiçaria/Rune_Sorcery.png")
        setTimeout(time9, 750)
        function time9(){
            imgErunas = ["image/feitiçaria/Runa essencial/Rune_Summon_Aery.png", "image/feitiçaria/Runa essencial/Rune_Arcane_Comet.png", "image/feitiçaria/Runa essencial/Rune_Phase_Rush.png"]
            aleato = Math.round(2 * (Math.random()));
            document.getElementById("img2").src = imgErunas[aleato]
            aparece("img2")
        }
        //----------------------------Outras runas----------linha 1--------------------------------------------------
        setTimeout(time10, 850)
        function time10(){
            imgOrunas = ["image/feitiçaria/Resto/Rune_Nullifying_Orb.png", "image/feitiçaria/Resto/Rune_Manaflow_Band.png", "image/feitiçaria/Resto/Rune_Nimbus_Cloak.png"]
            aleatorio = Math.round(2 * (Math.random()));
            document.getElementById("img3").src = imgOrunas[aleatorio]
            aparece("img3")
        }
        //----------------------------Outras runas----------linha 2--------------------------------------------------
        setTimeout(time11, 950)
        function time11(){
            imgOrunas = ["image/feitiçaria/Resto/Rune_Transcendence.png", "image/feitiçaria/Resto/Rune_Celerity.png", "image/feitiçaria/Resto/Rune_Absolute_Focus.png"]
            aleatorio = Math.round(2 * (Math.random()));
            document.getElementById("img4").src = imgOrunas[aleatorio]
            aparece("img4")
        }
        //----------------------------Outras runas----------linha 3--------------------------------------------------
        setTimeout(time12, 1050)
        function time12(){
            imgOrunas = ["image/feitiçaria/Resto/Rune_Scorch.png", "image/feitiçaria/Resto/Rune_Waterwalking.png", "image/feitiçaria/Resto/Rune_Gathering_Storm.png"]
            aleatorio = Math.round(2 * (Math.random()));
            document.getElementById("img5").src = imgOrunas[aleatorio]
            aparece("img5")
        }
//------<>---------<>---------<>----------<>-------------<>------Runa Principal 4------<>-----------<>---------------<>-------<>-----------<>------------------<>-----------------<>-----------<>

    }
    if(runaP == 4){
       animacao("image/Determinação/Rune_Resolve.png")
        setTimeout(time13, 750)
        function time13(){
            imgErunas = ["image/Determinação/Runa essencial/Rune_Grasp_of_the_Undying.png", "image/Determinação/Runa essencial/Rune_Aftershock.png", "image/Determinação/Runa essencial/Rune_Guardian.png"]
            aleato = Math.round(2 * (Math.random()));
            document.getElementById("img2").src = imgErunas[aleato]
            aparece("img2")
        }
        //----------------------------Outras runas----------linha 1--------------------------------------------------
        setTimeout(time14, 850)
        function time14(){
            imgErunas = ["image/Determinação/Resto/Rune_Demolish.png", "image/Determinação/Resto/Rune_Font_of_Life.png", "image/Determinação/Resto/Rune_Mirror_Shell.png"]
            aleato = Math.round(2 * (Math.random()));
            document.getElementById("img3").src = imgErunas[aleato]
            aparece("img3")
        }
        //----------------------------Outras runas----------linha 2--------------------------------------------------
        setTimeout(time15, 950)
        function time15(){
            imgErunas = ["image/Determinação/Resto/Rune_Conditioning.png", "image/Determinação/Resto/Rune_Second_Wind.png", "image/Determinação/Resto/Rune_Bone_Plating.png"]
            aleato = Math.round(2 * (Math.random()));
            document.getElementById("img4").src = imgErunas[aleato]
            aparece("img4")
        }
        //----------------------------Outras runas----------linha 3--------------------------------------------------
        setTimeout(time16, 1050)
        function time16(){
            imgErunas = ["image/Determinação/Resto/Rune_Overgrowth.png", "image/Determinação/Resto/Rune_Revitalize.png", "image/Determinação/Resto/Rune_Unflinching.png"]
            aleato = Math.round(2 * (Math.random()));
            document.getElementById("img5").src = imgErunas[aleato]
            aparece("img5")
        }
    }
//------<>---------<>---------<>----------<>-------------<>------Runa Principal 5------<>-----------<>---------------<>-------<>-----------<>------------------<>-----------------<>-----------<>
    if(runaP == 5){
        animacao("image/inspiração/Rune_Inspiration.png")
        setTimeout(time17, 750)
        function time17(){
            imgErunas = ["image/inspiração/Runa essencial/Rune_Glacial_Augment.png", "image/inspiração/Runa essencial/Rune_Unsealed_Spellbook.png", "image/inspiração/Runa essencial/180px-Rune_Prototype_-_Omnistone.png"]
            aleato = Math.round(2 * (Math.random()));
            document.getElementById("img2").src = imgErunas[aleato]
            aparece("img2")
        }
        //----------------------------Outras runas----------linha 1--------------------------------------------------
        setTimeout(time18, 850)
        function time18(){
            imgErunas = ["image/inspiração/Resto/Rune_Hextech_Flashtraption.png", "image/inspiração/Resto/Rune_Magical_Footwear.png", "image/inspiração/Resto/Rune_Perfect_Timing.png"]
            aleato = Math.round(2 * (Math.random()));
            document.getElementById("img3").src = imgErunas[aleato]
            aparece("img3")
        }
        //----------------------------Outras runas----------linha 2--------------------------------------------------
        setTimeout(time19, 950)
        function time19(){
            imgErunas = ["image/inspiração/Resto/Rune_Future's_Market.png", "image/inspiração/Resto/Rune_Minion_Dematerializer.png", "image/inspiração/Resto/Rune_Biscuit_Delivery.png"]
            aleato = Math.round(2 * (Math.random()));
            document.getElementById("img4").src = imgErunas[aleato]
            aparece("img4")
        }
        //----------------------------Outras runas----------linha 3--------------------------------------------------
        setTimeout(time20, 1050)
        function time20(){
            imgErunas = ["image/inspiração/Resto/Rune_Cosmic_Insight.png", "image/inspiração/Resto/Rune_Approach_Velocity.png", "image/inspiração/Resto/Rune_Time_Warp_Tonic.png"]
            aleato = Math.round(2 * (Math.random()));
            document.getElementById("img5").src = imgErunas[aleato]
            aparece("img5")
        }
    }
//------<>---------<>---------<>----------<>-------------<>------Runa secundaria 1------<>-----------<>---------------<>-------<>-----------<>------------------<>-----------------<>-----------<>

        segundaruna = Math.round(4 * (Math.random()) + 1);
        if(segundaruna == runaP){
            if(segundaruna == 5){
                segundaruna--
                continuar(segundaruna);
            }else{
                segundaruna++
                continuar(segundaruna);
            }
        }else{
            continuar(segundaruna);
        }
        function continuar(p){ 
            for(x=6; x<=8; x++){
                document.getElementById("img" + x).style.opacity = "0"
                document.getElementById("img" + x).style.marginLeft = "-500px"
            }
            function animacao2(r){
                document.getElementById("h12").style.opacity = "1"
                document.getElementById("h12").style.transition = "1s"
                document.getElementById("img6").style.marginLeft = "0"
                document.getElementById("img6").style.opacity = "1"
                document.getElementById("img6").style.transition = ".9s"
                setTimeout(pt1, 500)
                function pt1(){
                    document.getElementById("img7").style.marginLeft = "0"
                    document.getElementById("img7").style.opacity = "1"
                    document.getElementById("img7").style.transition = ".9s"
                }
                setTimeout(pt2, 700)
                function pt2(){
                    document.getElementById("img8").style.marginLeft = "0"
                    document.getElementById("img8").style.opacity = "1"
                    document.getElementById("img8").style.transition = ".9s"
                }
                document.getElementById("img6").src = r

                setTimeout(controleTempo3, 1500)
                function controleTempo3(){
                    document.getElementById("h13").style.opacity = 1
                document.getElementById("h13").style.transition = "1s"
                }
            }
            /*Sortar as img da segunda runa*/
            meuA2 = [ ]
            for(x=0; x<=1; x++){
                restoM2 = Math.round(2 * (Math.random()));
                meuA2 [x] = restoM2;
            }
                gorune2(meuA2[0], meuA2[1])

            function gorune2(ma0, ma1){
                /*Sortea as duas linhas que serão usadas na segunda runa*/
                Nlinha = [ ]
                for(x=0; x<=1; x++){
                    aleatoto = Math.round(2 * (Math.random()) + 1);
                    Nlinha [x] = aleatoto;
                }
                if(Nlinha[0] == Nlinha[1]){
                    if(Nlinha[0] == 3){
                        Nlinha2 = Nlinha[0]
                        Nlinha2 --
                        linha(Nlinha2, Nlinha[1])
                    }else{
                        Nlinha2 = Nlinha[0]
                        Nlinha2 ++
                        linha(Nlinha2, Nlinha[1])
                    } 
                }else{
                    linha(Nlinha[0], Nlinha[1])
                }
                function linha(n0, n1){
                if(p == 1){
                   
                    setTimeout(function aquelecaraali(){animacao2("image/precisão/Rune_Precision.png")}, 1000)
                    imgs1 = ["image/precisão/Runas/Resto/Rune_Overheal.png", "image/precisão/Runas/Resto/Rune_Precision.png", "image/precisão/Runas/Resto/Rune_Triumph.png"]
                    imgs2 = ["image/precisão/Runas/Resto/Rune_Legend_-_Alacrity.png", "image/precisão/Runas/Resto/Rune_Legend_-_Tenacity.png", "image/precisão/Runas/Resto/Rune_Legend_-_Bloodline.png"]               
                    imgs3 = ["image/precisão/Runas/Resto/Rune_Coup_de_Grace.png", "image/precisão/Runas/Resto/Rune_Cut_Down.png", "image/precisão/Runas/Resto/Rune_Last_Stand.png"]               
                    document.getElementById("img7").src = imgs3[ma0]
                        if(n0 == 1){             
                            document.getElementById("img7").src = imgs1[ma0]
                        }else if(n0 == 2){
                            document.getElementById("img7").src = imgs2[ma0]
                        }else if(n0 == 3){
                           
                        }
    
                        if(n1 == 1){
                            document.getElementById("img8").src = imgs1[ma1]
                        }else if(n1 == 2){
                            document.getElementById("img8").src = imgs2[ma1]
                        }else if(n1 == 3){
                            document.getElementById("img8").src = imgs3[ma1]
                        }
                    
                }
                if(p == 2){
                    setTimeout(function aquelecaraali(){animacao2("image/dominação/Rune_Domination.png")}, 1000)
                    imgs1 = ["image/Dominação/Resto/Rune_Cheap_Shot.png", "image/Dominação/Resto/Rune_Taste_of_Blood.png", "image/Dominação/Resto/Rune_Sudden_Impact.png"]               
                    imgs2 = ["image/Dominação/Resto/Rune_Zombie_Ward.png", "image/Dominação/Resto/Rune_Ghost_Poro.png", "image/Dominação/Resto/Rune_Eyeball_Collection.png"]              
                    imgs3 = ["image/Dominação/Resto/Rune_Ravenous_Hunter.png", "image/Dominação/Resto/Rune_Ingenious_Hunter.png", "image/Dominação/Resto/Rune_Relentless_Hunter.png", "image/Dominação/Resto/Rune_Ultimate_Hunter.png"]               
                    if(n0 == 1){
                        document.getElementById("img7").src = imgs1[ma0]
                    }else if(n0 == 2){ 
                        document.getElementById("img7").src = imgs2[ma0]
                    }else if(n0 == 3){
                        document.getElementById("img7").src = imgs3[ma0]
                    }

                    if(n1 == 1){         
                        document.getElementById("img8").src = imgs1[ma1]
                    }else if(n1 == 2){
                        document.getElementById("img8").src = imgs2[ma1]
                    }else if(n1 == 3){
                        document.getElementById("img8").src = imgs3[ma1]
                    }
                }
                if(p == 3){
                    setTimeout(function aquelecaraali(){animacao2("image/feitiçaria/Rune_Sorcery.png")}, 1000)
                    imgs1 = ["image/Feitiçaria/Resto/Rune_Nullifying_Orb.png", "image/Feitiçaria/Resto/Rune_Manaflow_Band.png", "image/Feitiçaria/Resto/Rune_Nimbus_Cloak.png"]
                    imgs2 = ["image/Feitiçaria/Resto/Rune_Transcendence.png", "image/Feitiçaria/Resto/Rune_Celerity.png", "image/Feitiçaria/Resto/Rune_Absolute_Focus.png"]
                    imgs3 = ["image/Feitiçaria/Resto/Rune_Scorch.png", "image/Feitiçaria/Resto/Rune_Waterwalking.png", "image/Feitiçaria/Resto/Rune_Gathering_Storm.png"]
                    if(n0 == 1){               
                        document.getElementById("img7").src = imgs1[ma0]
                    }else if(n0 == 2){               
                        document.getElementById("img7").src = imgs2[ma0]
                    }else if(n0 == 3){               
                        document.getElementById("img7").src = imgs3[ma0]
                    }

                    if(n1 == 1){
                        document.getElementById("img8").src = imgs1[ma1]
                    }else if(n1 == 2){
                                    document.getElementById("img8").src = imgs2[ma1]
                    }else if(n1 == 3){                     
                        document.getElementById("img8").src = imgs3[ma1]
                    }
                }
                if(p == 4){
                    setTimeout(function aquelecaraali(){animacao2("image/Determinação/Rune_Resolve.png")}, 1000)
                    imgs1 = ["image/Determinação/Resto/Rune_Demolish.png", "image/Determinação/Resto/Rune_Font_of_Life.png", "image/Determinação/Resto/Rune_Mirror_Shell.png "]
                    imgs2 = ["image/Determinação/Resto/Rune_Conditioning.png", "image/Determinação/Resto/Rune_Second_Wind.png", "image/Determinação/Resto/Rune_Bone_Plating.png"]
                    imgs3 = ["image/Determinação/Resto/Rune_Overgrowth.png", "image/Determinação/Resto/Rune_Unflinching.png", "image/Determinação/Resto/Rune_Revitalize.png"]
                    if(n0 == 1){               
                        document.getElementById("img7").src = imgs1[ma0]
                    }else if(n0 == 2){               
                        document.getElementById("img7").src = imgs2[ma0]
                    }else if(n0 == 3){               
                        document.getElementById("img7").src = imgs3[ma0]
                    }

                    if(n1 == 1){
                        document.getElementById("img8").src = imgs1[ma1]
                    }else if(n1 == 2){
                        document.getElementById("img8").src = imgs2[ma1]
                    }else if(n1 == 3){                     
                        document.getElementById("img8").src = imgs3[ma1]
                    }
                }
                if(p == 5){
                    setTimeout(function aquelecaraali(){animacao2("image/inspiração/Rune_Inspiration.png")}, 1000)
                    imgs1 = ["image/inspiração/Resto/Rune_Hextech_Flashtraption.png", "image/inspiração/Resto/Rune_Magical_Footwear.png", "image/inspiração/Resto/Rune_Perfect_Timing.png"]
                    imgs2 = ["image/inspiração/Resto/Rune_Future's_Market.png", "image/inspiração/Resto/Rune_Minion_Dematerializer.png", "image/inspiração/Resto/Rune_Biscuit_Delivery.png"]
                    imgs3 = ["image/inspiração/Resto/Rune_Cosmic_Insight.png", "image/inspiração/Resto/Rune_Approach_Velocity.png", "image/inspiração/Resto/Rune_Time_Warp_Tonic.png"]
                    if(n0 == 1){               
                        document.getElementById("img7").src = imgs1[ma0]
                    }else if(n0 == 2){               
                        document.getElementById("img7").src = imgs2[ma0]
                    }else if(n0 == 3){               
                        document.getElementById("img7").src = imgs3[ma0]
                    }

                    if(n1 == 1){
                        document.getElementById("img8").src = imgs1[ma1]
                    }else if(n1 == 2){
                        document.getElementById("img8").src = imgs2[ma1]
                    }else if(n1 == 3){                     
                        document.getElementById("img8").src = imgs3[ma1]
                    }
                    }
                }
            }
        }
        
    NF = []
    imgflex = ["image/Flex/apulhetaA.png", "image/Flex/bolinhaF.png", "image/Flex/coracaoD.png", "image/Flex/EscudoF-D.png", "image/Flex/estrelaA-F.png", "image/Flex/machadoA.png"]
    for(x=0; x<=2; x++){
        numeroF = Math.round(2 * (Math.random()) + 1);
        NF[x] = numeroF
    }
    animaflex()
    setTimeout(controleTempo, 2000);
    function controleTempo(){
        /*--------------------------------------------------------Flex PT1------------------------------------------------------*/
        switch(NF[0]){
            case 1:
                document.getElementById("img9F").src = imgflex[4]
                    break
            case 2:
                document.getElementById("img9F").src = imgflex[5]
                    break
            case 3:
                document.getElementById("img9F").src = imgflex[0]
                    break
            }
        /*--------------------------------------------------------Flex PT2------------------------------------------------------*/
        switch(NF[1]){
            case 1:
                document.getElementById("img10F").src = imgflex[4]
                    break
            case 2:
                document.getElementById("img10F").src = imgflex[1]
                    break
            case 3:
                document.getElementById("img10F").src = imgflex[3]
                    break
                }
                    /*--------------------------------------------------------Flex PT3------------------------------------------------------*/
        switch(NF[2]){
            case 1:
                document.getElementById("img11F").src = imgflex[2]
                    break
            case 2:
                document.getElementById("img11F").src = imgflex[1]
                     break
            case 3:
                document.getElementById("img11F").src = imgflex[3]
                    break
        }  
    }

    }
