function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

  function moon() {
    document.querySelector(".moon-img")
    .src="moon.png";
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
    .src="mars.png";
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
    .src="europa.png";
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
    .src="titan.png";
    document.getElementById("title-text")
    .innerHTML="TITAN";
    document.getElementById("desc")
    .innerHTML="The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
    document.getElementById("num-km")
    .innerHTML="1.6 BIL. km";
    document.getElementById("num-days")
    .innerHTML="7 years";
  }