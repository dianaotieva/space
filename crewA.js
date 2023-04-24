function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

 

  function crewA(){
    document.getElementById('image')
    .src="douglas.png";
    document.getElementById('imgTab')
    .src="image-tab.png";
    document.getElementById('level')
    .innerHTML="Commander";
    document.getElementById('name')
    .innerHTML="Douglas Harley";
    document.getElementById('description')
    .innerHTML=" Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut.He launched into space for the third time as commander of Crew Dragon Demo-2.";
}

function crewB(){
  document.getElementById('image')
  .src="mark.png";
  document.getElementById('imgTab')
  .src="mark-tab.png";
  document.getElementById('level')
  .innerHTML="Mission Specialist";
  document.getElementById('name')
  .innerHTML="Mark Shuttleworth";
  document.getElementById('description')
  .innerHTML="Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";
  console.log("its working");
}

function crewC(){
  document.getElementById('image')
  .src="victor.png";
  document.getElementById('imgTab')
  .src="victor-tab.png";
  document.getElementById('level')
  .innerHTML="Pilot";
  document.getElementById('name')
  .innerHTML="Victor Glover";
  document.getElementById('description')
  .innerHTML="Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ";
}

function crewD(){
  document.getElementById('image')
  .src="anoushan.png";
  document.getElementById('imgTab')
  .src="anoushan-tab.png";
  document.getElementById('level')
  .innerHTML="Flight Engineer";
  document.getElementById('name')
  .innerHTML="Anousheh Ansari";
  document.getElementById('description')
  .innerHTML="Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.";
}


