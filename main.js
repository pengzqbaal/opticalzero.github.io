const opticsData = {
geometrical: {
title: "Geometrical Optics",
description: "Study of light rays, reflection, refraction, and optical systems.",
subtopics: ["Mirrors", "Lenses", "Prisms"]
},
physical: {
title: "Physical Optics",
description: "Wave nature of light, interference, diffraction, and polarization.",
subtopics: ["Interference", "Diffraction", "Polarization"]
},
quantum: {
title: "Quantum Optics",
description: "Light-matter interaction at quantum level.",
subtopics: ["Photons", "Quantum States", "Entanglement"]
},
laser: {
title: "Laser Physics",
description: "Principles and applications of laser systems.",
subtopics: ["Laser Types", "Laser Applications", "Laser Safety"]
},
applied: {
title: "Applied Optics",
description: "Practical applications in imaging and instruments.",
subtopics: ["Microscopy", "Telescopes", "Fiber Optics"]
},
nonlinear: {
title: "Nonlinear Optics",
description: "High-intensity light-matter interactions.",
subtopics: ["Second Harmonic", "Four Wave Mixing", "Optical Solitons"]
}
};
document.querySelectorAll('.sector').forEach(sector => {
sector.addEventListener('mouseenter', (e) => {
const area = e.target.dataset.area;
const data = opticsData[area];
const infoPanel = document.getElementById('info-panel');
infoPanel.innerHTML = <h2>${data.title}</h2> <p>${data.description}</p> <ul> ${data.subtopics.map(topic => <li>${topic}</li>).join('')} </ul> ;
infoPanel.style.display = 'block';
});
sector.addEventListener('mouseleave', () => {
document.getElementById('info-panel').style.display = 'none';
});
});
