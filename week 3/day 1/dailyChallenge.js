let solarSystem = {
    mercure:{'color':'grey', 'moons': 0},
   venus:{'color':'yellow', 'moons': 0},
   terre:{'color':'blue', 'moons': 1},
   mars:{'color':'red', 'moons': 2},
   jupiter:{'color':'yellow', 'moons': 4},
   saturne:{'color':'lightyellow', 'moons': 8},
   uranus:{'color':'green', 'moons': 5},
   neptune:{'color':'darkblue', 'moons': 2}, 
};


for(let planete in solarSystem){
    let div = document.createElement('div');
    div.setAttribute('class', 'planet');
    let couleur = solarSystem[planete].color;
    div.style.backgroundColor = couleur;

    for(let lune in solarSystem[planete]['moons']){
        console.log(solarSystem[planete][lune]);
    }
}