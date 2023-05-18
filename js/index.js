function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

//Destination Javascript
function moon() {
  document.querySelector(".moon-img")
  .src="./pics/moon.png";
  document.getElementById("title-text")
  .innerHTML="MOON";
  document.getElementById("desc")
  .innerHTML="See our planet as you've never seen it before.A perfect relaxing trip away to help regain perspective and come back refreshed.While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
  document.getElementById("num-km")
  .innerHTML="384,400 km";
  document.getElementById("num-days")
  .innerHTML="3 days";
}

function mars() {
  document.querySelector(".moon-img")
  .src="./pics/mars.png";
  document.getElementById("title-text")
  .innerHTML="MARS";
  document.getElementById("desc")
  .innerHTML=" Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!";
  document.getElementById("num-km")
  .innerHTML="225 MIL. km";
  document.getElementById("num-days")
  .innerHTML="9 months";
}

function europa() {
  document.querySelector(".moon-img")
  .src="./pics/europa.png";
  document.getElementById("title-text")
  .innerHTML="EUROPA";
  document.getElementById("desc")
  .innerHTML="The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream.With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
  document.getElementById("num-km")
  .innerHTML="628 MIL. km";
  document.getElementById("num-days")
  .innerHTML="3 years";
}

function Titan() {
  document.querySelector(".moon-img")
  .src="./pics/titan.png";
  document.getElementById("title-text")
  .innerHTML="TITAN";
  document.getElementById("desc")
  .innerHTML="The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
  document.getElementById("num-km")
  .innerHTML="1.6 BIL. km";
  document.getElementById("num-days")
  .innerHTML="7 years";
}

// Crew Javascript

function crewA(){
  document.getElementById('image')
  .src="./pics/image-tab.png";
  document.getElementById('level')
  .innerHTML="Commander";
  document.getElementById('name')
  .innerHTML="Douglas Harley";
  document.getElementById('description')
  .innerHTML=" Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut.He launched into space for the third time as commander of Crew Dragon Demo-2.";
}

function crewB(){
document.getElementById('image')
.src="./pics/mark-tab.png";
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
.src="./pics/victor-tab.png";
document.getElementById('level')
.innerHTML="Pilot";
document.getElementById('name')
.innerHTML="Victor Glover";
document.getElementById('description')
.innerHTML="Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ";
}

function crewD(){
document.getElementById('image')
.src="./pics/anoushan-tab.png";
document.getElementById('level')
.innerHTML="Flight Engineer";
document.getElementById('name')
.innerHTML="Anousheh Ansari";
document.getElementById('description')
.innerHTML="Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.";
}

// Tech Javascript
function techA() {
  document.querySelector(".image")
  .src="./pics/techDesk.jpg";
  document.querySelector(".title-main")
  .innerHTML="LAUNCH VEHICLE"
  document.querySelector(".description")
  .innerHTML="A launch vehicle or carrier rocket is a rocket-propelledvehicle used to carry a payload from Earth's surface to space,usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation.Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
}

function techB() {
  document.querySelector(".image")
  .src="./pics/techimg2.jpg";
  document.querySelector(".title-main")
  .innerHTML="SPACEPORT"
  document.querySelector(".description")
  .innerHTML="A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
}

function techC() {
  document.querySelector(".image")
  .src="./pics/techimg3.jpg";
  document.querySelector(".title-main")
  .innerHTML="SPACE CAPSULE"
  document.querySelector(".description")
  .innerHTML="A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
}