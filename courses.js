// Courses Management Module
function initCoursesModule() {
    // Add event listeners
    document.getElementById('add-course-btn').addEventListener('click', () => {
        openCourseModal('Add New Course');
    });
    
    // Load initial course data
    refreshCoursesTable();
}

function openCourseModal(title, courseData = null) {
    // Similar to student modal, but for courses
    console.log('Opening course modal:', title, courseData);
    alert('Course modal would open here. Implementation similar to students.');
}

function refreshCoursesTable() {
    // In a real app, this would fetch data from an API
    const courses = [
        { code: 'CS101', name: 'Introduction to Programming', department: 'Computer Science', credits: '4', instructor: 'Dr. Sarah Johnson', schedule: 'Mon/Wed 10:00-11:30' },
        { code: 'EE201', name: 'Circuit Theory', department: 'Electrical Engineering', credits: '3', instructor: 'Prof. David Lee', schedule: 'Tue/Thu 13:00-14:30' },
        { code: 'BA301', name: 'Business Management', department: 'Business Administration', credits: '3', instructor: 'Dr. Maria Garcia', schedule: 'Mon/Fri 09:00-10:30' },
        { code: 'ME401', name: 'Thermodynamics', department: 'Mechanical Engineering', credits: '4', instructor: 'Prof. James Wilson', schedule: 'Wed/Fri 14:00-15:30' },
        { code: 'CS202', name: 'Data Structures', department: 'Computer Science', credits: '4', instructor: 'Dr. Lisa Chen', schedule: 'Tue/Thu 10:00-11:30' }
    ];
    
    renderCoursesTable(courses);
}

function renderCoursesTable(courses) {
    const tbody = document.getElementById('courses-table-body');
    tbody.innerHTML = '';
    
    courses.forEach(course => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${course.code}</td>
            <td>${course.name}</td>
            <td>${course.department}</td>
            <td>${course.credits}</td>
            <td>${course.instructor}</td>
            <td>${course.schedule}</td>
            <td>
                <button class="btn edit-btn" onclick="editCourse('${course.code}')"><i class="fas fa-edit"></i> Edit</button>
                <button class="btn delete-btn" onclick="deleteCourse('${course.code}')"><i class="fas fa-trash"></i> Delete</button>
            </td>
        `;
        
        tbody.appendChild(row);
    });
}

function editCourse(courseCode) {
    // In a real app, this would fetch the course data from an API
    const courses = [
        { code: 'CS101', name: 'Introduction to Programming', department: 'Computer Science', credits: '4', instructor: 'Dr. Sarah Johnson', schedule: 'Mon/Wed 10:00-11:30' },
        { code: 'EE201', name: 'Circuit Theory', department: 'Electrical Engineering', credits: '3', instructor: 'Prof. David Lee', schedule: 'Tue/Thu 13:00-14:30' },
        { code: 'BA301', name: 'Business Management', department: 'Business Administration', credits: '3', instructor: 'Dr. Maria Garcia', schedule: 'Mon/Fri 09:00-10:30' },
        { code: 'ME401', name: 'Thermodynamics', department: 'Mechanical Engineering', credits: '4', instructor: 'Prof. James Wilson', schedule: 'Wed/Fri 14:00-15:30' },
        { code: 'CS202', name: 'Data Structures', department: 'Computer Science', credits: '4', instructor: 'Dr. Lisa Chen', schedule: 'Tue/Thu 10:00-11:30' }
    ];
    
    const course = courses.find(c => c.code === courseCode);
    if (course) {
        openCourseModal('Edit Course', course);
    }
}

function deleteCourse(courseCode) {
    if (confirm(`Are you sure you want to delete course ${courseCode}?`)) {
        // In a real app, this would call an API to delete the course
        alert(`Course ${courseCode} deleted successfully!`);
        refreshCoursesTable();
    }
}

// Make functions available globally
window.editCourse = editCourse;
window.deleteCourse = deleteCourse;