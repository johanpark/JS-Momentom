
const COORDS = 'coords';

function SaveCoords(CoordsObj){
    localStorage.setItem(COORDS, JSON.stringify(CoordsObj));
}

function HandleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const CoordsObj = {
        latitude,
        longitude
    };
    SaveCoords(CoordsObj);
};
function HandleGeoError(){
    console.log("Can't");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(HandleGeoSucces, HandleGeoError);
}
function LoadCoords(){
    const LoadedCoords = localStorage.getItem(COORDS);
    if(LoadedCoords === null){
        askForCoords();
    }else{

    }
}

function init(){
    LoadCoords();
}
init();