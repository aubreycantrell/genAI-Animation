const animations = [
    {
      title: "Fish Swimming",
      description: "An underwater world where the number of fish increases with EDA.",
      theme: "Ocean",
      video: "videos/fish_school.mp4"
    },
    {
      title: "Hot Air Balloons",
      description: "Floating balloons that grow and shrink with your emotions.",
      theme: "Sky",
      video: "videos/hotair_balloon.mp4"
    },
    {
      title: "Dinosaur Game",
      description: "insert caption.",
      theme: "Game",
      video: "videos/dino_game.mp4"
    },
    {
        title: "Biking",
        description: "insert caption.",
        theme: "Exercise",
        video: "videos/biking.mp4"
      },
      {
        title: "Ants",
        description: "insert caption.",
        theme: "Animals",
        video: "videos/ants.mp4"
      },
      {
        title: "Car",
        description: "insert caption.",
        theme: "Transportation",
        video: "videos/car.mp4"
      },
      {
        title: "Cube",
        description: "insert caption.",
        theme: "Toy",
        video: "videos/cube.mp4"
      },
      {
        title: "Leaves",
        description: "insert caption.",
        theme: "Nature",
        video: "videos/leaves.mp4"
      },
      {
        title: "Oil Droplets",
        description: "insert caption.",
        theme: "Liquid",
        video: "videos/oil_droplets.mp4"
      },
      {
        title: "Planets",
        description: "insert caption.",
        theme: "Space",
        video: "videos/planet.mp4"
      },
      {
        title: "Rainbow",
        description: "insert caption.",
        theme: "Nature",
        video: "videos/rainbow.mp4"
      },
      {
        title: "Boat",
        description: "insert caption.",
        theme: "Transportation",
        video: "videos/ship_ocean.mp4"
      },
      {
        title: "Apple",
        description: "insert caption.",
        theme: "Transportation",
        video: "videos/apple.mp4"
      },
      {
        title: "Rocket",
        description: "insert caption.",
        theme: "Transportation",
        video: "videos/rocket.mp4"
      },
      {
        title: "Singing",
        description: "insert caption.",
        theme: "Activity",
        video: "videos/singing.mp4"
      },
      {
        title: "Traffic Light",
        description: "insert caption.",
        theme: "Transportation",
        video: "videos/traffic_light.mp4"
      },
      {
        title: "Blob",
        description: "insert caption.",
        theme: "Shape",
        video: "videos/blob.mp4"
      },
      {
        title: "City Fog",
        description: "insert caption.",
        theme: "Nature",
        video: "videos/city_fog_1.mp4"
      },
      {
        title: "Cityscape",
        description: "insert caption.",
        theme: "Building",
        video: "videos/cityscape.mp4"
      },
      {
        title: "Day Cycle",
        description: "insert caption.",
        theme: "Time",
        video: "videos/day_cycle.mp4"
      },
      {
        title: "Fan",
        description: "insert caption.",
        theme: "Object",
        video: "videos/fan.mp4"
      },
      {
        title: "Firework",
        description: "insert caption.",
        theme: "Sky",
        video: "videos/firework.mp4"
      },
      {
        title: "Galaxy",
        description: "insert caption.",
        theme: "Space",
        video: "videos/galaxy.mp4"
      },
      {
        title: "Grandfather Clock",
        description: "insert caption.",
        theme: "Time",
        video: "videos/grandfather_clock.mp4"
      }
  ];
  const gallery = document.getElementById("gallery");

  animations.forEach(anim => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <video src="${anim.video}" autoplay loop muted playsinline></video>
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
  
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const header = document.querySelector('header');
    const title = header.querySelector('h1');
    const subtitle = header.querySelector('h2');
  
    // How far it moves based on scroll
    const offset = Math.min(scrollY * 2, 600);  // Caps movement at 600px
    const opacity = Math.max(1 - scrollY / 300, 0); // Fade out faster
  
    // Move title and subtitle to the right and fade out
    title.style.transform = `translateX(${offset}px)`;
    subtitle.style.transform = `translateX(${-offset}px)`;
  
    title.style.opacity = opacity;
    subtitle.style.opacity = opacity;
  });
  