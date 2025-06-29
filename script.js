const animations = [
  {
    title: "Fish Swimming",
    description: "An underwater world where the number of fish increases with EDA.",
    theme: "Ocean",
    gif: "gifs/fish_school.gif",
    video: "videos/fish_school.mp4"
  },
  {
    title: "Hot Air Balloons",
    description: "Floating balloons that grow and shrink with your emotions.",
    theme: "Sky",
    gif: "gifs/hotair_balloon.gif",
    video: "videos/hotair_balloon.mp4"
  },
  {
    title: "Dinosaur Game",
    description: "insert caption.",
    theme: "Game",
    gif: "gifs/dino_game.gif",
    video: "videos/dino_game.mp4"
  },
  {
    title: "Biking",
    description: "insert caption.",
    theme: "Exercise",
    gif: "gifs/biking.gif",
    video: "videos/biking.mp4"
  },
  {
    title: "Ants",
    description: "insert caption.",
    theme: "Animals",
    gif: "gifs/ants.gif",
    video: "videos/ants.mp4"
  },
  {
    title: "Car",
    description: "insert caption.",
    theme: "Transportation",
    gif: "gifs/car.gif",
    video: "videos/car.mp4"
  },
  {
    title: "Cube",
    description: "insert caption.",
    theme: "Toy",
    gif: "gifs/cube.gif",
    video: "videos/cube.mp4"
  },
  {
    title: "Leaves",
    description: "insert caption.",
    theme: "Nature",
    gif: "gifs/leaves.gif",
    video: "videos/leaves.mp4"
  },
  {
    title: "Oil Droplets",
    description: "insert caption.",
    theme: "Liquid",
    gif: "gifs/oil_droplets.gif",
    video: "videos/oil_droplets.mp4"
  },
  {
    title: "Planets",
    description: "insert caption.",
    theme: "Space",
    gif: "gifs/planet.gif",
    video: "videos/planet.mp4"
  },
  {
    title: "Rainbow",
    description: "insert caption.",
    theme: "Nature",
    gif: "gifs/rainbow.gif",
    video: "videos/rainbow.mp4"
  },
  {
    title: "Boat",
    description: "insert caption.",
    theme: "Transportation",
    gif: "gifs/ship_ocean.gif",
    video: "videos/ship_ocean.mp4"
  },
  {
    title: "Apple",
    description: "insert caption.",
    theme: "Nature",
    gif: "gifs/apple.gif",
    video: "videos/apple.mp4"
  },
  {
    title: "Rocket",
    description: "insert caption.",
    theme: "Transportation",
    gif: "gifs/rocket.gif",
    video: "videos/rocket.mp4"
  },
  {
    title: "Singing",
    description: "insert caption.",
    theme: "Activity",
    gif: "gifs/singing.gif",
    video: "videos/singing.mp4"
  },
  {
    title: "Traffic Light",
    description: "insert caption.",
    theme: "Transportation",
    gif: "gifs/traffic_light.gif",
    video: "videos/traffic_light.mp4"
  },
  {
    title: "Blob",
    description: "insert caption.",
    theme: "Shape",
    gif: "gifs/blob.gif",
    video: "videos/blob.mp4"
  },
  {
    title: "City Fog",
    description: "insert caption.",
    theme: "Nature",
    gif: "gifs/city_fog_1.gif",
    video: "videos/city_fog_1.mp4"
  },
  {
    title: "Cityscape",
    description: "insert caption.",
    theme: "Building",
    gif: "gifs/cityscape.gif",
    video: "videos/cityscape.mp4"
  },
  {
    title: "Day Cycle",
    description: "insert caption.",
    theme: "Time",
    gif: "gifs/day_cycle.gif",
    video: "videos/day_cycle.mp4"
  },
  {
    title: "Fan",
    description: "insert caption.",
    theme: "Object",
    gif: "gifs/fan.gif",
    video: "videos/fan.mp4"
  },
  {
    title: "Firework",
    description: "insert caption.",
    theme: "Sky",
    gif: "gifs/firework.gif",
    video: "videos/firework.mp4"
  },
  {
    title: "Galaxy",
    description: "insert caption.",
    theme: "Space",
    gif: "gifs/galaxy.gif",
    video: "videos/galaxy.mp4"
  },
  {
    title: "Grandfather Clock",
    description: "insert caption.",
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
    <div class="caption">
      <h3>${anim.title}</h3>
      <p>${anim.description}</p>
    </div>
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
  modalDesc.textContent = `${anim.description} [${anim.theme}]`;

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

// Optional Masonry or layout enhancements
window.addEventListener("load", () => {
  new Masonry(".grid", {
    itemSelector: ".card",
    columnWidth: ".card",
    percentPosition: true,
    gutter: 24
  });
});
