let jobs = [
    {
        'id': 1,
        'title': 'Software Engineer',
        'description': 'Develop and maintain web applications.',
        'requirements': '2+ years experience in software development, knowledge of Python and JavaScript.',
        'designation': 'Junior Software Engineer',
        'company': 'Tech Solutions',
        'location': 'New York',
        'salary': 80000,
        'skill_sets': ['Python', 'JavaScript', 'React'],
        'qualification': 'B.Tech',
        'year_of_passing': 2023,
        'percentage_criteria': '70%',
        'interview_mode': 'Online',
        'interview_rounds': 3,
        'url': 'https://techsolutions.com/careers'
    },
    {
        'id': 2,
        'title': 'Data Analyst',
        'description': 'Analyze and visualize data sets.',
        'requirements': 'Proficiency in SQL and Excel, experience with data visualization tools.',
        'designation': 'Data Analyst Intern',
        'company': 'DataCorp',
        'location': 'San Francisco',
        'salary': 70000,
        'skill_sets': ['SQL', 'Excel', 'Tableau'],
        'qualification': 'B.Sc',
        'year_of_passing': 2022,
        'percentage_criteria': '65%',
        'interview_mode': 'In-person',
        'interview_rounds': 2,
        'url': 'https://datacorp.com/careers'
    },
    {
        'id': 3,
        'title': 'Web Developer',
        'description': 'Build responsive websites and applications.',
        'requirements': 'Experience with HTML, CSS, and JavaScript, familiarity with front-end frameworks.',
        'designation': 'Front-end Web Developer',
        'company': 'WebWorks',
        'location': 'Austin',
        'salary': 75000,
        'skill_sets': ['HTML', 'CSS', 'JavaScript'],
        'qualification': 'B.Tech',
        'year_of_passing': 2023,
        'percentage_criteria': '70%',
        'interview_mode': 'Online',
        'interview_rounds': 2,
        'url': 'https://webworks.com/careers'
    },
    {
        'id': 4,
        'title': 'Machine Learning Engineer',
        'description': 'Develop ML models and algorithms.',
        'requirements': 'Strong background in statistics and machine learning algorithms.',
        'designation': 'Machine Learning Researcher',
        'company': 'AI Innovations',
        'location': 'Seattle',
        'salary': 90000,
        'skill_sets': ['Python', 'TensorFlow', 'Scikit-Learn'],
        'qualification': 'M.Tech',
        'year_of_passing': 2022,
        'percentage_criteria': '75%',
        'interview_mode': 'Online',
        'interview_rounds': 4,
        'url': 'https://aiinnovations.com/careers'
    },
    {
        'id': 5,
        'title': 'Project Manager',
        'description': 'Manage project timelines and deliverables.',
        'requirements': '5+ years experience in project management, PMP certification preferred.',
        'designation': 'Senior Project Manager',
        'company': 'Business Solutions',
        'location': 'Chicago',
        'salary': 100000,
        'skill_sets': ['Project Management'],
        'qualification': 'MBA',
        'year_of_passing': 2021,
        'percentage_criteria': '70%',
        'interview_mode': 'In-person',
        'interview_rounds': 3,
        'url': 'https://businesssolutions.com/careers'
    },
    {
        'id': 6,
        'title': 'UX/UI Designer',
        'description': 'Create user-friendly interfaces.',
        'requirements': 'Experience with design tools like Figma and Adobe XD.',
        'designation': 'UX/UI Designer Intern',
        'company': 'Design Studio',
        'location': 'Los Angeles',
        'salary': 70000,
        'skill_sets': ['Figma', 'Adobe XD'],
        'qualification': 'B.Des',
        'year_of_passing': 2023,
        'percentage_criteria': '65%',
        'interview_mode': 'In-person',
        'interview_rounds': 2,
        'url': 'https://designstudio.com/careers'
    },
    {
        'id': 7,
        'title': 'Network Engineer',
        'description': 'Design and implement network solutions.',
        'requirements': 'CCNA certification and knowledge of networking protocols.',
        'designation': 'Network Engineer Associate',
        'company': 'NetWorks',
        'location': 'Miami',
        'salary': 80000,
        'skill_sets': ['Networking'],
        'qualification': 'B.Tech',
        'year_of_passing': 2022,
        'percentage_criteria': '70%',
        'interview_mode': 'Online',
        'interview_rounds': 3,
        'url': 'https://networks.com/careers'
    },
    {
        'id': 8,
        'title': 'Quality Assurance Engineer',
        'description': 'Ensure product quality through testing.',
        'requirements': 'Experience in manual and automated testing.',
        'designation': 'Quality Assurance Tester',
        'company': 'Testify',
        'location': 'Boston',
        'salary': 60000,
        'skill_sets': ['QA Testing', 'Automation'],
        'qualification': 'B.Tech',
        'year_of_passing': 2022,
        'percentage_criteria': '60%',
        'interview_mode': 'In-person',
        'interview_rounds': 2,
        'url': 'https://testify.com/careers'
    },
    {
        'id': 9,
        'title': 'DevOps Engineer',
        'description': 'Implement and manage DevOps practices.',
        'requirements': 'Experience with CI/CD pipelines and cloud platforms.',
        'designation': 'DevOps Engineer Trainee',
        'company': 'Cloud Services',
        'location': 'Dallas',
        'salary': 90000,
        'skill_sets': ['AWS', 'Docker', 'Jenkins'],
        'qualification': 'B.Tech',
        'year_of_passing': 2023,
        'percentage_criteria': '75%',
        'interview_mode': 'Online',
        'interview_rounds': 4,
        'url': 'https://cloudservices.com/careers'
    },
    {
        'id': 10,
        'title': 'Cybersecurity Analyst',
        'description': 'Protect company data and systems.',
        'requirements': 'Knowledge of security protocols and threat analysis.',
        'designation': 'Cybersecurity Specialist',
        'company': 'SecureCorp',
        'location': 'Phoenix',
        'salary': 85000,
        'skill_sets': ['Cybersecurity'],
        'qualification': 'B.Tech',
        'year_of_passing': 2022,
        'percentage_criteria': '70%',
        'interview_mode': 'In-person',
        'interview_rounds': 3,
        'url': 'https://securecorp.com/careers'
    },

]


// Dark mode toggle functionality
function toggleDarkMode() {
    const body = document.body;
    const header = document.querySelector('header');
    const searchInputs = document.querySelectorAll('input[type="text"], #sort-options');
    const buttons = document.querySelectorAll('button');

    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    searchInputs.forEach(input => {
        input.classList.toggle('dark-mode');
    });
    buttons.forEach(button => {
        button.classList.toggle('dark-mode');
    });

    // Save dark mode preference to local storage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // Check local storage for dark mode preference
    if (localStorage.getItem("darkMode") === "enabled") {
        toggleDarkMode(); // Apply dark mode if it was enabled
        document.getElementById("dark-mode-toggle").checked = true; // Check the toggle switch
    }

    const darkModeSwitch = document.getElementById("dark-mode-toggle");

    // Dark mode toggle switch event listener
    darkModeSwitch.addEventListener("change", toggleDarkMode);

    // Render jobs immediately from the variable
    renderContent();
});

// Function to render content without authentication check
function renderContent() {
    const jobContainer = document.getElementById('job-container');
    if (jobContainer) {
        jobContainer.style.display = 'block'; // Show jobs section
    }
    renderPaginatedJobs(currentPage); // Render jobs from the global variable
}

// Function to render jobs with pagination
function renderPaginatedJobs(page) {
    const startIndex = (page - 1) * jobsPerPage;
    const endIndex = startIndex + jobsPerPage;
    const paginatedJobs = jobs.slice(startIndex, endIndex);

    renderJobs(paginatedJobs);
    document.getElementById('page-info').textContent = `Page ${page} of ${Math.ceil(jobs.length / jobsPerPage)}`;
}

// Function to render job listings
function renderJobs(jobList) {
    const jobListContainer = document.getElementById('job-list');
    if (jobListContainer) {
        jobListContainer.innerHTML = ''; // Clear the existing content

        if (jobList.length === 0) {
            jobListContainer.innerHTML = '<p>No jobs found.</p>'; // Display message if no jobs match the search
        } else {
            jobList.forEach(job => {
                const jobElement = document.createElement('div');
                jobElement.classList.add('job-item');

                jobElement.innerHTML = `
                    <h3 class="job-title">${job.designation}</h3>
                    <p class="company">${job.company}</p>
                    <p class="requirements">Requirements: ${job.requirements}</p>
                    <p class="salary">Salary: ${job.salary}</p>
                `;

                // Add click event to open modal
                jobElement.addEventListener('click', () => {
                    openModal(job); // Directly open the modal with the clicked job
                });

                jobListContainer.appendChild(jobElement);
            });
        }
    }
}

// Get modal element
const modal = document.getElementById('job-modal');
const closeButton = document.getElementById('close-button');

// Function to open modal and set job details
function openModal(job) {
    document.getElementById('modal-title').innerText = job.title || "No Title";
    document.getElementById('modal-company').innerText = job.company || "No Company";
    document.getElementById('modal-description').innerText = job.description || "No Description";
    document.getElementById('modal-requirements').innerText = job.requirements || "No Requirements";
    document.getElementById('modal-location').innerText = job.location || "No Location";
    document.getElementById('modal-salary').innerText = job.salary || "No Salary";

    document.getElementById('modal-skills').innerText = job.skill_sets || "No Skills";
    document.getElementById('modal-qualification').innerText = job.qualification || "No Qualification";
    document.getElementById('modal-year').innerText = job.year_of_passing || "No Year of Passing";
    document.getElementById('modal-percentage').innerText = job.percentage_criteria || "No Percentage Criteria";
    document.getElementById('modal-interview-mode').innerText = job.interview_mode || "No Interview Mode";
    document.getElementById('modal-interview-rounds').innerText = job.interview_rounds || "No Interview Rounds";

    // Set the career page link
    const careerPageLink = document.getElementById('modal-career-page');
    if (careerPageLink) {
        careerPageLink.href = job.url || "#"; // Use job.url for the link
        careerPageLink.innerText = job.url ? "View Company Career Page" : "No Career Page Available";
    }

    if (modal) {
        modal.style.display = "block"; // Show the modal
    }
}

// Event listener for close button
if (closeButton) {
    closeButton.addEventListener('click', () => {
        modal.style.display = "none"; // Hide the modal
    });
}

// Event listener for clicking outside the modal to close
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = "none"; // Hide the modal
    }
});

// Pagination: Previous Page
document.getElementById('prev-button').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderPaginatedJobs(currentPage);
    }
});

// Pagination: Next Page
document.getElementById('next-button').addEventListener('click', () => {
    if (currentPage < Math.ceil(jobs.length / jobsPerPage)) {
        currentPage++;
        renderPaginatedJobs(currentPage);
    }
});

// Search functionality
document.getElementById('search-button').addEventListener('click', () => {
    searchJobs();
});

// Event listener for Enter key on search
document.getElementById('search').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        searchJobs();
    }
});

// Function to search jobs
function searchJobs() {
    const searchTerm = document.getElementById('search').value.toLowerCase();

    // Filter jobs based on search term
    const filteredJobs = jobs.filter(job =>
        job.title.toLowerCase().includes(searchTerm) ||
        job.description.toLowerCase().includes(searchTerm) ||
        job.company.toLowerCase().includes(searchTerm)
    );

    currentPage = 1; // Reset to the first page for new search
    renderJobs(filteredJobs);
    document.getElementById('page-info').textContent = `Page 1 of ${Math.ceil(filteredJobs.length / jobsPerPage)}`;
}

// Function to sort jobs based on selected criteria
function sortJobs(criteria) {
    if (criteria === 'title-asc') {
        jobs.sort((a, b) => a.title.localeCompare(b.title));
    } else if (criteria === 'title-desc') {
        jobs.sort((a, b) => b.title.localeCompare(a.title));
    } else if (criteria === "experience") {
        jobs.sort((a, b) => {
            const expA = extractExperience(a.requirements);
            const expB = extractExperience(b.requirements);
            return expA - expB; // Sort numerically by experience
        });
    }
    renderPaginatedJobs(currentPage);
}

// Example function to extract experience from requirements (assumes job requirements include "X+ years")
function extractExperience(requirements) {
    const match = requirements.match(/(\d+)\+/); // Matches "2+" or "3+" years
    return match ? parseInt(match[1]) : 0; // Return numeric experience
}

// Add event listener for sorting
document.getElementById('sort-options').addEventListener('change', (event) => {
    sortJobs(event.target.value);
});
