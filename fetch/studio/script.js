//TODO: Add Your Code Below
window.addEventListener('load', function() {
    fetch('https://handlers.education.launchcode.org/static/astronauts.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('container');   
        data.forEach(astronaut => {
            const astronautDiv = document.createElement('div');
            astronautDiv.classList.add('astronaut');
            astronautDiv.innerHTML = `
                <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                <ul>
                    <li>Hours in space: ${astronaut.hoursInSpace}</li>
                    <li>Active: ${astronaut.active}</li>
                    <li>Skills: ${astronaut.skills.join(', ')}</li>
                </ul>
                <img class="avatar" src="${astronaut.picture}" alt="${astronaut.firstName} ${astronaut.lastName}">
            `;        
            container.appendChild(astronautDiv);
        });
    });
});
            