// Faculty Management Module
function initFacultyModule() {
    // Add event listeners
    document.getElementById('add-faculty-btn').addEventListener('click', () => {
        openFacultyModal('Add New Faculty Member');
    });
    
    // Load initial faculty data
    refreshFacultyTable();
}

function openFacultyModal(title, facultyData = null) {
    // Similar to student modal, but for faculty
    console.log('Opening faculty modal:', title, facultyData);
    alert('Faculty modal would open here. Implementation similar to students.');
}

function refreshFacultyTable() {
    // In a real app, this would fetch data from an API
    const faculty = [
        { id: 'F2001', name: 'Dr. Sarah Johnson', email: 's.johnson@college.edu', phone: '555-0201', department: 'Computer Science', position: 'Professor' },
        { id: 'F2002', name: 'Prof. David Lee', email: 'd.lee@college.edu', phone: '555-0202', department: 'Electrical Engineering', position: 'Associate Professor' },
        { id: 'F2003', name: 'Dr. Maria Garcia', email: 'm.garcia@college.edu', phone: '555-0203', department: 'Business Administration', position: 'Professor' },
        { id: 'F2004', name: 'Prof. James Wilson', email: 'j.wilson@college.edu', phone: '555-0204', department: 'Mechanical Engineering', position: 'Assistant Professor' },
        { id: 'F2005', name: 'Dr. Lisa Chen', email: 'l.chen@college.edu', phone: '555-0205', department: 'Computer Science', position: 'Associate Professor' }
    ];
    
    renderFacultyTable(faculty);
}

function renderFacultyTable(faculty) {
    const tbody = document.getElementById('faculty-table-body');
    tbody.innerHTML = '';
    
    faculty.forEach(member => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${member.id}</td>
            <td>${member.name}</td>
            <td>${member.department}</td>
            <td>${member.position}</td>
            <td>${member.email}</td>
            <td>${member.phone}</td>
            <td>
                <button class="btn edit-btn" onclick="editFaculty('${member.id}')"><i class="fas fa-edit"></i> Edit</button>
                <button class="btn delete-btn" onclick="deleteFaculty('${member.id}')"><i class="fas fa-trash"></i> Delete</button>
            </td>
        `;
        
        tbody.appendChild(row);
    });
}

function editFaculty(facultyId) {
    // In a real app, this would fetch the faculty data from an API
    const faculty = [
        { id: 'F2001', name: 'Dr. Sarah Johnson', email: 's.johnson@college.edu', phone: '555-0201', department: 'Computer Science', position: 'Professor' },
        { id: 'F2002', name: 'Prof. David Lee', email: 'd.lee@college.edu', phone: '555-0202', department: 'Electrical Engineering', position: 'Associate Professor' },
        { id: 'F2003', name: 'Dr. Maria Garcia', email: 'm.garcia@college.edu', phone: '555-0203', department: 'Business Administration', position: 'Professor' },
        { id: 'F2004', name: 'Prof. James Wilson', email: 'j.wilson@college.edu', phone: '555-0204', department: 'Mechanical Engineering', position: 'Assistant Professor' },
        { id: 'F2005', name: 'Dr. Lisa Chen', email: 'l.chen@college.edu', phone: '555-0205', department: 'Computer Science', position: 'Associate Professor' }
    ];
    
    const member = faculty.find(f => f.id === facultyId);
    if (member) {
        openFacultyModal('Edit Faculty Member', member);
    }
}

function deleteFaculty(facultyId) {
    if (confirm(`Are you sure you want to delete faculty member ${facultyId}?`)) {
        // In a real app, this would call an API to delete the faculty member
        alert(`Faculty member ${facultyId} deleted successfully!`);
        refreshFacultyTable();
    }
}

// Make functions available globally
window.editFaculty = editFaculty;
window.deleteFaculty = deleteFaculty;