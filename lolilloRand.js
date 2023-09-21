let champs = ["Aatrox","Ahri","Akali","Akshan","Alistar","Amumu","Anivia","Annie","Aphelios","Ashe","Asol","Azir","Bard","Blitz","Brand","Braum",
"Caitlyn","Camille","Cassio","cho","Corki","Darius","Diana","DrMundo","Ekko","Elise","Evelyn","Ezreal","Fiddle","Fiora","Fizz","Galio","Gangplank","Garen","Gnar","Gragas","Graves"
,"Gwen","Hecarim","Heimer","Illaoi","Irelia","Ivern","Janna","Jarvan","JAx","Jayce","Jhin","Jinx","Kaisa",
"Kalista","Karma","Karthus","Kassadin","Katarina","Kayle","Kayn","Kennen","Khazix","Kindred","Kled","Kogmaw","Leblanc","LeeSin","Leona","Lillia","Lissandra","Lucian","Lulu","Lux","Malphite","Malzahar","Maokai","MasterYi",
"MissFortune","Mordekaiser","Morgana","Nami","Nasus","Nautilus","Neeko","Nidalee","Nocturne","Nunu","Olaf","Orianna","Ornn","Pantheon",
"Quinn","Rakan","Rammus","RekSai","Rell","Renata_Glasc","Renekton","Rengar","Riven","Rumble","Ryze","Samira","Sejuani","Senna",
"Seraphine","Sett","Shaco","Shen","Shyvana","Singed","Sion","Sivir","Skarner","Sona","Soraka","Swain","Sylas","Syndra",
"TK","Taliyah","Talon","Taric","Teemo","Thresh","Tristana","Trundle","Tryndamere","TF","Twitch","Udyr","Urgot","Varus","Vayne","Veigar","VelKoz","Vi","Viego","Viktor","Vlad",
"Volibear","Warwick","Wukong","Xayah","Xerath","XinZhao","Yasuo","Yone","Yorick","Yuumi","Zac","Zed","Zeri","Ziggs","Zilean","Zoe","Zyra","velve","kasante","nafiri","briar","milio"];

let stageEl = document.getElementById("stage")
let randomButton = document.getElementById("randomButton")
let lastButton = document.getElementById('lastButton')
let randomIndex;
let lista = document.getElementById("opciones");
let indiceSeleccionado
let champ
let champStg1 = []
let champStg2 = []
let text = ""

let stringChamp1 = ""
let stringChamp2 = ""

randomButton.addEventListener("click", function() {
    indiceSeleccionado = lista.selectedIndex + 1;
    restart()
    for(let i =0; i< (indiceSeleccionado * 3)*2; i++){
        
        do{
            randomIndex = Math.floor( Math.random() * champs.length )
            champ = champs[randomIndex]

        }while(champ == undefined)

//Primer equipo       
        if(i < (indiceSeleccionado * 3)){
//Para sacar el texto
            if(i == (indiceSeleccionado * 3) - 1){
                stringChamp1 += champ
            }
            else{
                stringChamp1 += champ + ","
            }
//Para sacar las fotos
            const element = '<img src="fotos/'+champ+ '.png">'
            document.querySelector('.imagesE1').innerHTML += element;
            champStg1.push(champ);
        }      
        else{
//Segundo equipo

            if(i == (((indiceSeleccionado * 3))*2) - 1){
                stringChamp2 += champ
            }
            else{
                stringChamp2 += champ + ","
            }
            const element = '<img src="fotos/'+champ+ '.png">'
            document.querySelector('.imagesE2').innerHTML += element;
            champStg2.push(champ);
        }
        
        
        delete(champs[randomIndex])
    }
    document.querySelector('.equipo1').innerHTML = "<h3>Equipo 1</h3>"
    document.querySelector('.equipo2').innerHTML = "<h3>Equipo 2</h3>"
    document.querySelector('.textE1').innerHTML = text
    text = '<input type="text" id="name" name="name" value='+stringChamp1+'  size="'+(17* indiceSeleccionado)+'" />'
    document.querySelector('.textE1').innerHTML = text
    text = '<input type="text" id="name" name="name" value='+stringChamp2+'  size="'+(17* indiceSeleccionado)+'" />'
    document.querySelector('.textE2').innerHTML = text
})

lastButton.addEventListener("click",function() {
    let champsFromLS = JSON.parse( localStorage.getItem("lastRandom1") )
    let champsFromLS2 = JSON.parse( localStorage.getItem("lastRandom2") )
    restart()
    console.log(champsFromLS)
    console.log(champsFromLS2)
            
        if(champsFromLS != 0){
            for(let i = 0; i< champsFromLS.length;i++){

                if(i == (indiceSeleccionado * 3) - 1){
                    stringChamp1 += champsFromLS[i]
                }
                else{
                    stringChamp1 += champsFromLS[i] + ","
                }
    
                const element = '<img src="fotos/'+champsFromLS[i]+ '.png">'
                document.querySelector('.imagesE1').innerHTML += element;
            }
                text = '<input type="text" id="name" name="name" value='+stringChamp1+'  size="'+(17* indiceSeleccionado)+'" />'
        }
        else{
            text = ""
        }
        
            document.querySelector('.textE1').innerHTML = text
       if(champsFromLS2 != 0){
            for(let i = 0; i< champsFromLS2.length;i++){

                if(i == (indiceSeleccionado * 3) - 1){
                    stringChamp2 += champsFromLS2[i]
                }
                else{
                    stringChamp2 += champsFromLS2[i] + ","
                }
    
                const element = '<img src="fotos/'+champsFromLS2[i]+ '.png">'
                document.querySelector('.imagesE2').innerHTML += element;
            }
                text = '<input type="text" id="name" name="name" value='+stringChamp2+'  size="'+(17* indiceSeleccionado)+'" />'
                document.querySelector('.equipo1').innerHTML = "<h3>Equipo 1</h3>"
                document.querySelector('.equipo2').innerHTML = "<h3>Equipo 2</h3>"
        }
        else{
            text = ""
        }
        
            document.querySelector('.textE2').innerHTML = text  

        
    
    
})

function restart(){
    stringChamp1 = ""
    stringChamp2 = ""
    document.querySelector('.equipo1').innerHTML = ""
    document.querySelector('.equipo2').innerHTML = ""
    localStorage.clear()
    localStorage.setItem("lastRandom1", JSON.stringify(champStg1) )
    localStorage.setItem("lastRandom2", JSON.stringify(champStg2) )
    champStg1 = []
    champStg2 = []
    let limpiar = ""
    document.querySelector('.imagesE1').innerHTML = limpiar
    document.querySelector('.imagesE2').innerHTML = limpiar

}
