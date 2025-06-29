const animations = [
  {
    title: "Schools of Fish",
    description: "An underwater world where the number of fish increases with EDA. Data controlling the animation is directly linked to a subject practicing controling their EDA levels by increasing and decreasing their excitement.  ",
    theme: "Ocean",
    gif: "gifs/fish_school.gif",
    video: "videos/fish_school.mp4"
  },
  {
    title: "Hot Air Balloons",
    description: "Floating balloons that grow and shrink with your emotions, such that the size of the balloons is dependent on EDA data: as EDA increases, the balloons become larger. Data controlling the animation is directly linked to a subject practicing controling their EDA levels by increasing and decreasing their excitement. ",
    theme: "Sky",
    gif: "gifs/hotair_balloon.gif",
    video: "videos/hotair_balloon.mp4"
  },
  {
    title: "Dinosaur Game",
    description: "A play on the google dinosaur game, such that the speed of the dinosaur is dependent on EDA data: as EDA increases, the dinosaur runs faster. Data controlling the animation is directly linked to a subject practicing controling their EDA levels by increasing and decreasing their excitement. .",
    theme: "Game",
    gif: "gifs/dino_game.gif",
    video: "videos/dino_game.mp4"
  },
  {
    title: "Biking",
    description: "A stick figure biking, such that the speed of the bike is dependent on EDA data: as EDA increases, the stick figure bikes faster: Data controlling the animation is directly linked to a subject practicing controling their EDA levels by increasing and decreasing their excitement. .",
    theme: "Exercise",
    gif: "gifs/biking.gif",
    video: "videos/biking.mp4"
  },
  {
    title: "Ants",
    description: "A trail of ants crawling, such that the speed of the ants is dependent on EDA data: as the EDA increases, the ants crawl faster. Data controlling the animation is directly linked to a subject practicing controling their EDA levels by increasing and decreasing their excitement. .",
    theme: "Animals",
    gif: "gifs/ants.gif",
    video: "videos/ants.mp4"
  },
  {
    title: "Car",
    description: "A car driving amongst trees, such that the speed of the car is dependent on EDA data: as the EDA increases, the car drives faster. Data controlling the animation is directly linked to a subject practicing controling their EDA levels by increasing and decreasing their excitement. ",
    theme: "Transportation",
    gif: "gifs/car.gif",
    video: "videos/car.mp4"
  },
  {
    title: "Cube",
    description: "An abstract rubik's cube, that scrambles faster as EDA increases. Data controlling the animation is directly linked to a subject practicing controling their EDA levels by increasing and decreasing their excitement. ",
    theme: "Toy",
    gif: "gifs/cube.gif",
    video: "videos/cube.mp4"
  },
  {
    title: "Leaves",
    description: "An animation of leaves falling.",
    theme: "Nature",
    gif: "gifs/leaves.gif",
    video: "videos/leaves.mp4"
  },
  {
    title: "Oil Droplets",
    description: "An animation of oil droplets floating.",
    theme: "Liquid",
    gif: "gifs/oil_droplets.gif",
    video: "videos/oil_droplets.mp4"
  },
  {
    title: "Planets",
    description: "An animation of planets rotating.",
    theme: "Space",
    gif: "gifs/planet.gif",
    video: "videos/planet.mp4"
  },
  {
    title: "Rainbow",
    description: "An animation of a pulsing rainbow.",
    theme: "Nature",
    gif: "gifs/rainbow.gif",
    video: "videos/rainbow.mp4"
  },
  {
    title: "Boat",
    description: "An animation of a boat at sea.",
    theme: "Transportation",
    gif: "gifs/ship_ocean.gif",
    video: "videos/ship_ocean.mp4"
  },
  {
    title: "Apple",
    description: "An animation of apples falling, such that apple sizes are dependent on EDA data: as EDA increases, the apples do as well. Data controlling the animation is directly linked to a subject practicing controling their EDA levels by increasing and decreasing their excitement. ",
    theme: "Nature",
    gif: "gifs/apple.gif",
    video: "videos/apple.mp4"
  },
  {
    title: "Rocket",
    description: "An animation of a rocket.",
    theme: "Transportation",
    gif: "gifs/rocket.gif",
    video: "videos/rocket.mp4"
  },
  {
    title: "Singing",
    description: "An animation of a singer.",
    theme: "Activity",
    gif: "gifs/singing.gif",
    video: "videos/singing.mp4"
  },
  {
    title: "Traffic Light",
    description: "An animation of a car stopping and starting based on the status of the traffic light.",
    theme: "Transportation",
    gif: "gifs/traffic_light.gif",
    video: "videos/traffic_light.mp4"
  },
  {
    title: "Blob",
    description: "An animation of floating blue blobs.",
    theme: "Shape",
    gif: "gifs/blob.gif",
    video: "videos/blob.mp4"
  },
  {
    title: "City Fog",
    description: "An animation of fog in a city.",
    theme: "Nature",
    gif: "gifs/city_fog_1.gif",
    video: "videos/city_fog_1.mp4"
  },
  {
    title: "Cityscape",
    description: "An animation of stars and lights twinkling in a city.",
    theme: "Building",
    gif: "gifs/cityscape.gif",
    video: "videos/cityscape.mp4"
  },
  {
    title: "Day Cycle",
    description: "An animation of time passing with correlating sky colors.",
    theme: "Time",
    gif: "gifs/day_cycle.gif",
    video: "videos/day_cycle.mp4"
  },
  {
    title: "Fan",
    description: "An animation of a fan.",
    theme: "Object",
    gif: "gifs/fan.gif",
    video: "videos/fan.mp4"
  },
  {
    title: "Firework",
    description: "An animation of fireworks.",
    theme: "Sky",
    gif: "gifs/firework.gif",
    video: "videos/firework.mp4"
  },
  {
    title: "Galaxy",
    description: "An animation of a galaxy.",
    theme: "Space",
    gif: "gifs/galaxy.gif",
    video: "videos/galaxy.mp4"
  },
  {
    title: "Grandfather Clock",
    description: "An animation of a grandfather clock.",
    theme: "Time",
    gif: "gifs/grandfather_clock.gif",
    video: "videos/grandfather_clock.mp4"
  }
];

const gallery = document.getElementById("gallery");

animations.forEach(anim => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${anim.gif}" alt="${anim.title}">
  `;
  card.addEventListener("click", () => {
    openModal(anim);
  });
  gallery.appendChild(card);
});

function openModal(anim) {
  const modal = document.getElementById("modal");
  const modalVideo = document.getElementById("modal-video");
  const modalTitle = document.getElementById("modal-title");
  const modalDesc = document.getElementById("modal-desc");

  modalVideo.src = anim.video;
  modalTitle.textContent = anim.title;
  modalDesc.textContent = `${anim.description} `;

  modal.style.display = "flex";
  modalVideo.play();
}

document.getElementById("modal").addEventListener("click", () => {
  const modal = document.getElementById("modal");
  const modalVideo = document.getElementById("modal-video");
  modal.style.display = "none";
  modalVideo.pause();
  modalVideo.src = "";
});

window.addEventListener("load", () => {
  new Masonry(".grid", {
    itemSelector: ".card",
    columnWidth: ".card",
    percentPosition: true,
    gutter: 24
  });
});
