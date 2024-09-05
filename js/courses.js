// Attach filter event listeners
function attachFilterEventListeners() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const resourceCards = document.querySelectorAll('.resource-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const category = this.getAttribute('data-category');

            resourceCards.forEach(card => {
                card.style.display = (category === 'all' || card.getAttribute('data-category') === category) ? 'block' : 'none';
            });
        });
    });
}

// Show more / show less functionality
function showMoreCards() {
    const cards = document.querySelectorAll('.resource-card');
    const showMoreBtn = document.querySelector('.show-more-btn');
    const showLessBtn = document.querySelector('.show-less-btn');
    const cardsToShow = 8;
    let cardsShown = cardsToShow;

    cards.forEach((card, index) => {
        card.style.display = index < cardsToShow ? 'block' : 'none';
    });

    if (showMoreBtn) {
        showMoreBtn.addEventListener('click', () => {
            cards.forEach((card, index) => {
                if (index >= cardsShown && index < cardsShown + cardsToShow) {
                    card.style.display = 'block';
                }
            });

            if (cardsShown >= cards.length) {
                showMoreBtn.style.display = 'none';
                showLessBtn.style.display = 'block';
            }

            cardsShown += cardsToShow;
        });
    }
    if (showLessBtn) {
        showLessBtn.addEventListener('click', () => {
            cards.forEach((card, index) => {
                card.style.display = index < cardsToShow ? 'block' : 'none';
            });

            cardsShown = cardsToShow;
            showLessBtn.style.display = 'none';
            showMoreBtn.style.display = 'block';
        });
    }
}


// async function to get the data from JSON file
async function loadJsonData(filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch operation error:', error);
        return null;
    }
}

// function to store the data in session storage
function storeDataInSession(data) {
    sessionStorage.setItem('collectionData', JSON.stringify(data));
}

// function to fetch the data from JSON file
async function fetchData() {
    const data = await loadJsonData('jsondata/resourcedata.json');
    if (data) {
        // store collection data into sessionStorage
        storeDataInSession(data.collection);

        data.collection.forEach(course => {
            const anchor = document.createElement('a');
            anchor.classList.add("resource-card");
            anchor.setAttribute("data-category", course.category);

            // passing data using URL
            anchor.setAttribute("href", `topicpage.html?course=${encodeURIComponent(course.name)}`);

            anchor.innerHTML = `
                <div class="image">
                    <img src="${course.courseImage}" alt="${course.altCourseImage}">
                </div>
                <div class="content">
                    <h4>${course.name}</h4>
                    <span class="visit-btn">Visit Now<i class="fa-solid fa-chevron-right"></i></span>
                </div>`;
            if (document.querySelector(".resource-cards")) {

                document.querySelector(".resource-cards").appendChild(anchor);
            }
        });
        showMoreCards();
        attachFilterEventListeners();
    }
}

fetchData();
