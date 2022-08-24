import './styles/main.scss'

const container = document.querySelector('.container');
const filters = {
    sex: {
        male: { gender: 'Male', input: document.getElementById('male') },
        female: { gender: 'Female', input: document.getElementById('female') },
    },
    status: {
        alive: { status: 'Alive', input: document.getElementById('alive') },
        dead: { status: 'Dead', input: document.getElementById('dead') },
    },
};
renderPage();

async function renderPage() {
    const characters = await fetchCharacters();
    container.innerHTML = renderCharacters(characters);
    Object.values(filters.sex).map(async ({ gender, input }) => {
        input.addEventListener('change', () => {
            const filteredCharacters = !input.checked
                ? characters
                : characters.filter((character) => character.gender === gender);
            container.innerHTML = renderCharacters(filteredCharacters);
        });
    });

    Object.values(filters.status).map(async ({ status, input }) => {
        input.addEventListener('change', () => {
            const filteredCharacters = !input.checked
                ? characters
                : characters.filter((character) => character.status === status);
            container.innerHTML = renderCharacters(filteredCharacters);
        });
    });
}

async function fetchCharacters() {
    const response = await fetch(
        'https://rickandmortyapi.com/api/character/'
    ).then((res) => res.json());
    return response.results;
}

function renderCharacters(characters) {
    return characters
        .map(
            ({ name, species, status, location: { name: locationName }, image }) => {
                return `
            <div class="card">
                <div class="card-info">
                    <div class="title">
                        <h1>${name}</h1>
                        <div class="status">
                            <div class="live-status ${
                    'Dead' === status ? 'dead' : ''
                }"></div>
                            <p>${species} -- ${status}</p>
                        </div>
                    </div>
                    <div class="content">
                        <p>${locationName}</p>
                    </div>
                </div>
                <div class="card-image">
                    <img src="${image}" alt="${name}">
                </div>
            </div>`;
            }
        )
        .join('');
}
