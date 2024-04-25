async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();

        const cardsContainer = document.getElementById('cards-container');

        data.forEach((todo) => {
            const card = document.createElement('div');
            card.className = 'card';

            const title = document.createElement('h2');
            title.textContent = todo.title;

            const userId = document.createElement('p');
            userId.textContent = `User ID: ${todo.userId}`;

            const completed = document.createElement('p');
            completed.textContent = `Completed: ${todo.completed? 'Yes' : 'No'}`;

            card.appendChild(title);
            card.appendChild(userId);
            card.appendChild(completed);

            cardsContainer.appendChild(card);
        });
    } catch (error) {
        console.error(error);
    }
}

fetchData();