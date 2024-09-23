// Define university timetable for each day with subject, teacher, time, and location link
const timetable = {
    Monday: [
        {
            subject: "SSH-303",
            time: "2:00 - 3:30",
            teacher: "not mentioned",
            Class: "(COMBINE)",
            Address: "DSA Building R#2",
            location: "https://maps.app.goo.gl/jcnUDAS66e6rGkJi8"
        },
        {
            subject: "FA-310",
            time: "3:30 - 5:00",
            teacher: "not mentioned",
            Class: "(COMBINE)",
            Address: "Eng-Block 3F #R-1",
            location: "/"
        },
        {
            subject: "CS-305-P",
            time: "5:00 - 6:30",
            teacher: "not mentioned",
            Class: "(E-1)",
            Address: "First Floor Lab#2",
            location: "/"
        },
    ],
    Tuesday: [
        {
            subject: "ENG-313",
            time: "2:00 - 4:15",
            teacher: "Ms. Ayesha Kokab",
            Class: "(COMBINE)",
            Address: "Engineer-Block GF # R-1",
            location: "/"
        },
        {
            subject: "PY-305-T",
            time: "5:45 - 7:15",
            teacher: "Mr. M. Azam",
            Class: "(E-1)",
            Address: "Old Building Math Dept R #1",
            location: "/"
        }
    ],
    Wednesday: [
        {
            subject: "Econ-305",
            time: "2:00 - 3:30",
            teacher: "Dr. Javaria Nasir",
            Class: "(COMBINE)",
            Address: "Eng-Block 3F # R-1",
            location: "/"
        },
        {
            subject: "SOC-311",
            time: "3:30 - 5:00",
            teacher: "Dr. M. Atif",
            Class: "(COMBINE)",
            Address: "Eng-Block 3F # R-1",
            location: "/"
        }
    ],
    Thursday: [
        {
            subject: "Math-301",
            time: "2:00 - 4:15",
            teacher: "not mentioned",
            Class: "(COMBINE)",
            Address: "Eng-Block 3F # R-1",
            location: "/"
        },
        {
            subject: "PY-305-P",
            time: "4:15 - 5:45",
            teacher: "Mr M Azam",
            Class: "(E-1)",
            Address: "Phy Dept",
            location: "/"
        },
        {
            subject: "CS-305-T",
            time: "5:45 - 7:15",
            teacher: "not mentioned",
            Class: "(E-1)",
            Address: "IT Building CS Lab",
            location: "/"
        }
    ],
    Friday: [
        {
            subject: "Math-408",
            time: "2:00 - 4:15",
            teacher: "Dr. M. Kashif",
            Class: "(COMBINE)",
            Address: "CS-LTR",
            location: "/"
        }
    ]
    // Add for other days as needed...
};

// Function to add timetable details to the modal
const days = document.querySelectorAll('.day');
const timetableContainer = document.getElementById('timetableContainer');
const dayTitle = document.getElementById('dayTitle');
const timeTableContent = document.getElementById('timeTableContent');
const closeBtn = document.getElementById('closeBtn');

// Add event listener to each day
days.forEach(day => {
    day.addEventListener('click', function() {
        const dayName = day.getAttribute('data-day');
        
        // Set the title and content based on the clicked day
        dayTitle.innerText = dayName;
        timeTableContent.innerHTML = ''; // Clear previous content

        // Populate the timetable with detailed information for each class
        timetable[dayName].forEach(classDetail => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <strong>Subject:</strong> ${classDetail.subject} <br>
                <strong>Teacher:</strong> ${classDetail.teacher} <br>
                <strong>Class:</strong> ${classDetail.Class} <br>
                <strong>Time:</strong> ${classDetail.time} <br>
                <strong>Address:</strong> ${classDetail.Address} <br>
                <a href="${classDetail.location}" target="_blank">Class Location</a>
            `;
            timeTableContent.appendChild(listItem);
        });

        // Show the timetable container
        timetableContainer.style.display = 'flex';
    });
});

// Close the timetable box when clicking the close button
closeBtn.addEventListener('click', function() {
    timetableContainer.style.display = 'none';
});

// Optional: Close the timetable box when clicking outside the timetable
timetableContainer.addEventListener('click', function(e) {
    if (e.target === timetableContainer) {
        timetableContainer.style.display = 'none';
    }
});
