function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

  function techA() {
    document.querySelector(".img")
    .src="./pics/shattle.png";
    document.querySelector(".title-main")
    .innerHTML="LAUNCH VEHICLE"
    document.querySelector(".description")
    .innerHTML="A launch vehicle or carrier rocket is a rocket-propelledvehicle used to carry a payload from Earth's surface to space,usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation.Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
  }

  function techB() {
    document.querySelector(".img")
    .src="./pics/spaceport.png";
    document.querySelector(".title-main")
    .innerHTML="SPACEPORT"
    document.querySelector(".description")
    .innerHTML="A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
  }

  function techC() {
    document.querySelector(".img")
    .src="./pics/capsule.png";
    document.querySelector(".title-main")
    .innerHTML="SPACE CAPSULE"
    document.querySelector(".description")
    .innerHTML="A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
  }