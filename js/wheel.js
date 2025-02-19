const opticsData = {
    geometrical: {
    title: "Geometrical Optics",
    description: "The study of light propagation using ray theory",
    topics: ["Reflection", "Refraction", "Mirrors & Lenses", "Optical Instruments"],
    color: "#3498db",
    angle: 0
    },
    physical: {
    title: "Physical Optics",
    description: "Wave phenomena of light including interference and diffraction",
    topics: ["Interference", "Diffraction", "Polarization", "Wave Theory"],
    color: "#e74c3c",
    angle: 60
    },
    quantum: {
    title: "Quantum Optics",
    description: "Light-matter interaction at the quantum level",
    topics: ["Photons", "Quantum States", "Entanglement", "Quantum Computing"],
    color: "#2ecc71",
    angle: 120
    },
    // Add more areas...
    };
    class OpticsWheel {
    constructor() {
    this.svg = document.querySelector('.wheel-svg');
    this.sectorsGroup = document.querySelector('.sectors-group');
    this.labelsGroup = document.querySelector('.labels-group');
    this.previewPanel = document.getElementById('preview-panel');
    this.initWheel();
    this.addEventListeners();
    }
    initWheel() {
    // Calculate sector angles and paths
    const sectorCount = Object.keys(opticsData).length;
    const angleStep = 360 / sectorCount;
    Object.entries(opticsData).forEach(([key, data], index) => {
    const startAngle = index angleStep;
    const endAngle = (index + 1) angleStep;
    // Create sector
    const sector = this.createSector(startAngle, endAngle);
    sector.setAttribute('data-area', key);
    sector.style.fill = data.color;
    this.sectorsGroup.appendChild(sector);
    // Create label
    const label = this.createLabel(data.title, startAngle + angleStep/2);
    this.labelsGroup.appendChild(label);
    });
    }
    createSector(startAngle, endAngle) {
    // Convert angles to radians and calculate coordinates
    const startRad = (startAngle - 90) Math.PI / 180;
    const endRad = (endAngle - 90) Math.PI / 180;
    const x1 = 200 + 180 Math.cos(startRad);
    const y1 = 200 + 180 Math.sin(startRad);
    const x2 = 200 + 180 Math.cos(endRad);
    const y2 = 200 + 180 Math.sin(endRad);
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", M200,200 L${x1},${y1} A180,180 0 0,1 ${x2},${y2} Z);
    path.classList.add('sector');
    return path;
    }
    createLabel(text, angle) {
    const rad = (angle - 90) Math.PI / 180;
    const x = 200 + 120 Math.cos(rad);
    const y = 200 + 120 Math.sin(rad);
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", x);
    text.setAttribute("y", y);
    text.setAttribute("text-anchor", "middle");
    text.classList.add('sector-label');
    text.textContent = text;
    return text;
    }
    addEventListeners() {
    this.sectorsGroup.addEventListener('mouseover', (e) => {
    const sector = e.target.closest('.sector');
    if (sector) {
    const area = sector.dataset.area;
    this.showPreview(area);
    }
    });
    this.sectorsGroup.addEventListener('mouseout', () => {
    this.hidePreview();
    });
    }
    showPreview(area) {
    const data = opticsData[area];
    this.previewPanel.querySelector('.preview-title').textContent = data.title;
    this.previewPanel.querySelector('.preview-description').textContent = data.description;
    const topicsHtml = data.topics.map(topic =>
    <span class="topic-tag">${topic}</span>
    ).join('');
    this.previewPanel.querySelector('.preview-topics').innerHTML = topicsHtml;
    this.previewPanel.classList.add('active');
    }
    hidePreview() {
    this.previewPanel.classList.remove('active');
    }
    }
    // Initialize the wheel when the document is loaded
    document.addEventListener('DOMContentLoaded', () => {
    const wheel = new OpticsWheel();
    });