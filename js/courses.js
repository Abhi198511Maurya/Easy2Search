// JavaScript for filtering resources
// document.addEventListener('DOMContentLoaded', function () {
// Function to attach filter functionality
function attachFilterEventListeners() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const resourceCards = document.querySelectorAll('.resource-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            const category = this.getAttribute('data-category');

            // Filter resources based on category
            resourceCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Fetch data and add resource cards
function fetchData() {
    fetch("jsondata/resourcedata.json") // Make sure the path is correct
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            // console.log(data); // Log the data to ensure it's valid
            for (let i = 0; i < data.collection.length; i++) {
                let anchor = document.createElement('a');
                anchor.classList.add("resource-card");
                anchor.setAttribute("data-category", `${data.collection[i].category}`);

                // Convert the course array to a JSON string and encode it
                const topicData = encodeURIComponent(JSON.stringify(data.collection[i].topics));

                // Construct the URL with the encoded course data
                anchor.setAttribute("href", `topicpage.html?topicData=${topicData}`);

                anchor.innerHTML = `
                        <div class="image">
                            <img src="${data.collection[i].courseImage}" alt="${data.collection[i].altCourseImage}">
                        </div>
                        <h4>${data.collection[i].name}</h4>
                        <span class="visit-btn">Visit Now<i class="fa-solid fa-chevron-right"></i></span>`;

                document.querySelector(".resource-cards").appendChild(anchor);
            }

            // After adding resource cards, attach the filtering functionality
            attachFilterEventListeners(); // Ensure this is called after resources are added
        })
        .catch((err) => {
            console.log("Error:", err.message); // Log the error with a descriptive message
        });
}

// Call fetchData to populate the resource cards
fetchData();
// });



// Use URLSearchParams to get the title and description from the URL
const urlParams = new URLSearchParams(window.location.search);
const topicData = urlParams.get('topicData');


// Parse the topicData back into an array of course objects
const topics = JSON.parse(decodeURIComponent(topicData));
// console.log(topics[0].videos);

function createBox(title, topicImage,altTopicImage, index) {
    let div = document.createElement('div');
    div.classList.add('card');

    const resources = encodeURIComponent(JSON.stringify(topics[index].resources));

    // anchor.setAttribute("href", `videos.html?videos=${videos}`);
    // anchor.setAttribute("href", "#");
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

// If course data is found, iterate over each course and create a box
if (topics) {
    topics.forEach((topic, index) => {
        createBox(topic.topicTitle, topic.topicImage, topic.altTopicImage, index);
    });
} else {
    console.log('No course data found');
}
