// Students Management Module
function initStudentsModule() {
    // Add event listeners
    document.getElementById('add-student-btn').addEventListener('click', () => {
        openStudentModal('Add New Student');
    });
    
    document.getElementById('student-filter-btn').addEventListener('click', filterStudents);
    
    document.getElementById('student-form').addEventListener('submit', handleStudentFormSubmit);
    
    // Load initial student data
    refreshStudentsTable();
}

function openStudentModal(title, studentData = null) {
    const form = document.getElementById('student-form');
    
    if (studentData) {
        // Fill form with student data for editing
        document.getElementById('student-id').value = studentData.id;
        document.getElementById('student-name').value = studentData.name;
        document.getElementById('student-email').value = studentData.email;
        document.getElementById('student-phone').value = studentData.phone;
        document.getElementById('student-department').value = studentData.department;
        document.getElementById('student-year').value = studentData.year;
        document.getElementById('student-address').value = studentData.address || '';
    } else {
        // Reset form for new student
        form.reset();
        document.getElementById('student-id').value = '';
    }
    
    openModal('student-modal', title);
}

function refreshStudentsTable() {
    // In a real app, this would fetch data from an API
    const students = [
        { id: 'S1001', name: 'John Doe', email: 'john.doe@college.edu', phone: '555-0101', department: 'Computer Science', year: '3', address: '123 Main St' },
        { id: 'S1002', name: 'Jane Smith', email: 'jane.smith@college.edu', phone: '555-0102', department: 'Electrical Engineering', year: '2', address: '456 Oak Ave' },
        { id: 'S1003', name: 'Robert Johnson', email: 'robert.j@college.edu', phone: '555-0103', department: 'Computer Science', year: '4', address: '789 Pine Rd' },
        { id: 'S1004', name: 'Emily Davis', email: 'emily.d@college.edu', phone: '555-0104', department: 'Business Administration', year: '1', address: '321 Elm St' },
        { id: 'S1005', name: 'Michael Wilson', email: 'michael.w@college.edu', phone: '555-0105', department: 'Mechanical Engineering', year: '3', address: '654 Maple Ave' }
    ];
    
    renderStudentsTable(students);
}

function renderStudentsTable(students) {
    const tbody = document.getElementById('students-table-body');
    tbody.innerHTML = '';
    
    students.forEach(student => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.department}</td>
            <td>Year ${student.year}</td>
            <td>${student.email}</td>
            <td>${student.phone}</td>
            <td>
                <button class="btn edit-btn" onclick="editStudent('${student.id}')"><i class="fas fa-edit"></i> Edit</button>
                <button class="btn delete-btn" onclick="deleteStudent('${student.id}')"><i class="fas fa-trash"></i> Delete</button>
            </td>
        `;
        
        tbody.appendChild(row);
    });
}

function filterStudents() {
    const departmentFilter = document.getElementById('student-department-filter').value;
    const yearFilter = document.getElementById('student-year-filter').value;
    
    // In a real app, this would send filter criteria to the API
    const allStudents = [
        { id: 'S1001', name: 'John Doe', email: 'john.doe@college.edu', phone: '555-0101', department: 'Computer Science', year: '3', address: '123 Main St' },
        { id: 'S1002', name: 'Jane Smith', email: 'jane.smith@college.edu', phone: '555-0102', department: 'Electrical Engineering', year: '2', address: '456 Oak Ave' },
        { id: 'S1003', name: 'Robert Johnson', email: 'robert.j@college.edu', phone: '555-0103', department: 'Computer Science', year: '4', address: '789 Pine Rd' },
        { id: 'S1004', name: 'Emily Davis', email: 'emily.d@college.edu', phone: '555-0104', department: 'Business Administration', year: '1', address: '321 Elm St' },
        { id: 'S1005', name: 'Michael Wilson', email: 'michael.w@college.edu', phone: '555-0105', department: 'Mechanical Engineering', year: '3', address: '654 Maple Ave' }
    ];
    
    let filteredStudents = allStudents;
    
    if (departmentFilter) {
        filteredStudents = filteredStudents.filter(student => student.department === departmentFilter);
    }
    
    if (yearFilter) {
        filteredStudents = filteredStudents.filter(student => student.year === yearFilter);
    }
    
    renderStudentsTable(filteredStudents);
}

function editStudent(studentId) {
    // In a real app, this would fetch the student data from an API
    const students = [
        { id: 'S1001', name: 'John Doe', email: 'john.doe@college.edu', phone: '555-0101', department: 'Computer Science', year: '3', address: '123 Main St' },
        { id: 'S1002', name: 'Jane Smith', email: 'jane.smith@college.edu', phone: '555-0102', department: 'Electrical Engineering', year: '2', address: '456 Oak Ave' },
        { id: 'S1003', name: 'Robert Johnson', email: 'robert.j@college.edu', phone: '555-0103', department: 'Computer Science', year: '4', address: '789 Pine Rd' },
        { id: 'S1004', name: 'Emily Davis', email: 'emily.d@college.edu', phone: '555-0104', department: 'Business Administration', year: '1', address: '321 Elm St' },
        { id: 'S1005', name: 'Michael Wilson', email: 'michael.w@college.edu', phone: '555-0105', department: 'Mechanical Engineering', year: '3', address: '654 Maple Ave' }
    ];
    
    const student = students.find(s => s.id === studentId);
    if (student) {
        openStudentModal('Edit Student', student);
    }
}

function deleteStudent(studentId) {
    if (confirm(`Are you sure you want to delete student ${studentId}?`)) {
        // In a real app, this would call an API to delete the student
        alert(`Student ${studentId} deleted successfully!`);
        refreshStudentsTable();
    }
}

function handleStudentFormSubmit(e) {
    e.preventDefault();
    
    const studentId = document.getElementById('student-id').value;
    const isEdit = !!studentId;
    
    // Get form values
    const studentData = {
        id: studentId || `S${Math.floor(1000 + Math.random() * 9000)}`,
        name: document.getElementById('student-name').value,
        email: document.getElementById('student-email').value,
        phone: document.getElementById('student-phone').value,
        department: document.getElementById('student-department').value,
        year: document.getElementById('student-year').value,
        address: document.getElementById('student-address').value
    };
    
    // In a real app, this would send data to an API
    console.log('Student data to save:', studentData);
    
    // Show success message
    alert(`Student ${isEdit ? 'updated' : 'added'} successfully!`);
    
    // Close modal and refresh table
    closeModal('student-modal');
    refreshStudentsTable();
}

// Make functions available globally
window.editStudent = editStudent;
window.deleteStudent = deleteStudent;