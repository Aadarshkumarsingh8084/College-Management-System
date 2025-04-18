// Main Application Script
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    initApp();
});

function initApp() {
    // Set up navigation
    setupNavigation();
    
    // Load dashboard data
    loadDashboardData();
    
    // Initialize all modules
    initStudentsModule();
    initFacultyModule();
    initCoursesModule();
    initAttendanceModule();
}

function setupNavigation() {
    // Handle sidebar navigation clicks
    const navLinks = document.querySelectorAll('.sidebar nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(navLink => {
                navLink.parentElement.classList.remove('active');
            });
            
            // Add active class to clicked link
            this.parentElement.classList.add('active');
            
            // Show the corresponding section
            const sectionId = this.getAttribute('href').substring(1);
            showSection(sectionId);
        });
    });
}

function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show the selected section
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('active');
        
        // Refresh section data if needed
        switch(sectionId) {
            case 'students':
                refreshStudentsTable();
                break;
            case 'faculty':
                refreshFacultyTable();
                break;
            case 'courses':
                refreshCoursesTable();
                break;
            case 'attendance':
                loadCoursesForAttendance();
                break;
        }
    }
}

function loadDashboardData() {
    // Simulate loading data from an API
    setTimeout(() => {
        // Update stats
        document.getElementById('total-students').textContent = '1,245';
        document.getElementById('total-faculty').textContent = '85';
        document.getElementById('total-courses').textContent = '42';
        document.getElementById('todays-classes').textContent = '18';
        
        // Create charts
        createEnrollmentChart();
        createAttendanceChart();
        
        // Load recent activity
        loadRecentActivity();
    }, 500);
}

function createEnrollmentChart() {
    const ctx = document.getElementById('enrollment-chart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Computer Science', 'Electrical Eng', 'Mechanical Eng', 'Business Admin'],
            datasets: [{
                label: 'Students by Department',
                data: [420, 380, 290, 155],
                backgroundColor: [
                    'rgba(52, 152, 219, 0.7)',
                    'rgba(46, 204, 113, 0.7)',
                    'rgba(155, 89, 182, 0.7)',
                    'rgba(241, 196, 15, 0.7)'
                ],
                borderColor: [
                    'rgba(52, 152, 219, 1)',
                    'rgba(46, 204, 113, 1)',
                    'rgba(155, 89, 182, 1)',
                    'rgba(241, 196, 15, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function createAttendanceChart() {
    const ctx = document.getElementById('attendance-chart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Attendance Rate (%)',
                data: [92, 88, 95, 89, 93, 91],
                fill: false,
                backgroundColor: 'rgba(52, 152, 219, 0.7)',
                borderColor: 'rgba(52, 152, 219, 1)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: false,
                    min: 80,
                    max: 100
                }
            }
        }
    });
}

function loadRecentActivity() {
    const activities = [
        { icon: 'fas fa-user-plus', text: '5 new students registered' },
        { icon: 'fas fa-chalkboard-teacher', text: 'Prof. Smith added a new course' },
        { icon: 'fas fa-clipboard-check', text: 'Attendance marked for CS101' },
        { icon: 'fas fa-exclamation-circle', text: '3 pending approval requests' },
        { icon: 'fas fa-calendar-alt', text: 'Exam schedule updated' }
    ];
    
    const activityList = document.getElementById('activity-list');
    activityList.innerHTML = '';
    
    activities.forEach(activity => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="${activity.icon}"></i> ${activity.text}`;
        activityList.appendChild(li);
    });
}

// Modal handling
function openModal(modalId, title = '') {
    const modal = document.getElementById(modalId);
    if (modal) {
        if (title) {
            const titleElement = modal.querySelector('h3');
            if (titleElement) {
                titleElement.textContent = title;
            }
        }
        modal.style.display = 'flex';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

// Close modal when clicking outside content
window.addEventListener('click', function(e) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// Close buttons
document.querySelectorAll('.close-btn, .cancel-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const modal = this.closest('.modal');
        if (modal) {
            modal.style.display = 'none';
        }
    });
});