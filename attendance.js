// Attendance Management Module
function initAttendanceModule() {
    // Add event listeners
    document.getElementById('load-attendance-btn').addEventListener('click', loadAttendanceForCourse);
    document.getElementById('save-attendance-btn').addEventListener('click', saveAttendance);
    document.getElementById('attendance-report-btn').addEventListener('click', generateAttendanceReport);
    
    // Load courses for attendance
    loadCoursesForAttendance();
}

function loadCoursesForAttendance() {
    // In a real app, this would fetch courses from an API
    const courses = [
        { code: 'CS101', name: 'Introduction to Programming' },
        { code: 'EE201', name: 'Circuit Theory' },
        { code: 'BA301', name: 'Business Management' },
        { code: 'ME401', name: 'Thermodynamics' },
        { code: 'CS202', name: 'Data Structures' }
    ];
    
    const select = document.getElementById('attendance-course');
    select.innerHTML = '<option value="">-- Select Course --</option>';
    
    courses.forEach(course => {
        const option = document.createElement('option');
        option.value = course.code;
        option.textContent = `${course.code} - ${course.name}`;
        select.appendChild(option);
    });
}

function loadAttendanceForCourse() {
    const courseCode = document.getElementById('attendance-course').value;
    const date = document.getElementById('attendance-date').value;
    
    if (!courseCode) {
        alert('Please select a course');
        return;
    }
    
    if (!date) {
        alert('Please select a date');
        return;
    }
    
    // In a real app, this would fetch enrolled students from an API
    const students = [
        { id: 'S1001', name: 'John Doe' },
        { id: 'S1003', name: 'Robert Johnson' },
        { id: 'S1005', name: 'Michael Wilson' }
    ];
    
    renderAttendanceTable(students);
}

function renderAttendanceTable(students) {
    const tbody = document.getElementById('attendance-table-body');
    tbody.innerHTML = '';
    
    students.forEach(student => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>
                <select class="attendance-status">
                    <option value="present">Present</option>
                    <option value="absent">Absent</option>
                    <option value="late">Late</option>
                    <option value="excused">Excused</option>
                </select>
            </td>
            <td>
                <button class="btn edit-btn" onclick="markAllAsPresent()"><i class="fas fa-check"></i> Mark All Present</button>
            </td>
        `;
        
        tbody.appendChild(row);
    });
}

function saveAttendance() {
    const courseCode = document.getElementById('attendance-course').value;
    const date = document.getElementById('attendance-date').value;
    
    if (!courseCode || !date) {
        alert('Please select both course and date');
        return;
    }
    
    // In a real app, this would send attendance data to an API
    const attendanceRecords = [];
    const rows = document.querySelectorAll('#attendance-table-body tr');
    
    rows.forEach(row => {
        const studentId = row.cells[0].textContent;
        const status = row.querySelector('.attendance-status').value;
        
        attendanceRecords.push({
            studentId,
            status
        });
    });
    
    console.log('Attendance to save:', {
        courseCode,
        date,
        records: attendanceRecords
    });
    
    alert('Attendance saved successfully!');
}

function generateAttendanceReport() {
    const courseCode = document.getElementById('attendance-course').value;
    
    if (!courseCode) {
        alert('Please select a course');
        return;
    }
    
    // In a real app, this would generate a report from the API
    alert(`Attendance report for ${courseCode} would be generated here.`);
}

function markAllAsPresent() {
    const statusSelects = document.querySelectorAll('.attendance-status');
    statusSelects.forEach(select => {
        select.value = 'present';
    });
}

// Make functions available globally
window.markAllAsPresent = markAllAsPresent;