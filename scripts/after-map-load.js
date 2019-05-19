const layerIcon = document.querySelector('.leaflet-control-layers');
layerIcon.classList.add('control-layers-with-label');

const label = document.createElement('span');
label.className = 'control-layers-label';
label.textContent = 'Слои';

layerIcon.appendChild(label);

