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

    showLessBtn.addEventListener('click', () => {
        cards.forEach((card, index) => {
            card.style.display = index < cardsToShow ? 'block' : 'none';
        });

        cardsShown = cardsToShow;
        showLessBtn.style.display = 'none';
        showMoreBtn.style.display = 'block';
    });
}



async function loadJsonData(filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        return null;
    }
}

// Fetch data and populate cards
async function fetchData() {
    const data = await loadJsonData('jsondata/resourcedata.json');
    if (data) {
        data.collection.forEach(item => {
            const anchor = document.createElement('a');
            anchor.classList.add("resource-card");
            anchor.setAttribute("data-category", item.category);

            const topicData = encodeURIComponent(JSON.stringify(item.topics));
            anchor.setAttribute("href", `topicpage.html?topicData=${topicData}`);

            anchor.innerHTML = `
                <div class="image">
                    <img src="${item.courseImage}" alt="${item.altCourseImage}">
                </div>
                <div class="content">
                    <h4>${item.name}</h4>
                    <span class="visit-btn">Visit Now<i class="fa-solid fa-chevron-right"></i></span>
                </div>`;

            document.querySelector(".resource-cards").appendChild(anchor);
        });
        showMoreCards();
        attachFilterEventListeners();
    }
}

fetchData();

// Create boxes from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const topicData = urlParams.get('topicData');
const topics = JSON.parse(decodeURIComponent(topicData));

function createBox(title, topicImage, altTopicImage, index) {
    const div = document.createElement('div');
    div.classList.add('card');

    const resources = encodeURIComponent(JSON.stringify(topics[index].resources));

    div.innerHTML = `
        <div class="image-container">
            <img src="${topicImage}" alt="${altTopicImage}" class="course-img">
        </div>
        <div class="content">
            <h2 class="title">${title}</h2>
            <a href="content.html?resources=${resources}" class="btn">Learn More</a>
        </div>`;
    document.querySelector('.card-grid').appendChild(div);
}

if (topics) {
    topics.forEach((topic, index) => createBox(topic.topicTitle, topic.topicImage, topic.altTopicImage, index));
} else {
    console.log('No course data found');
}
