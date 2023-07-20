// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
  };

const section1 = {sectionNum: 1, roomNum: 'STC 363', enrolled: 26, days: 'TTH', instructor: 'Brother John'}
const section2 = {sectionNum: 2, roomNum: 'STC 474', enrolled: 36, days: 'TTH', instructor: 'Brother Agbons'}
const section3 = {sectionNum: 3, roomNum: 'STC 585', enrolled: 43, days: 'TTH', instructor: 'Brother Bright'}
const section4 = {sectionNum: 4, roomNum: 'STC 696', enrolled: 268, days: 'TTH', instructor: 'Sister Edith'}
const section5 = {sectionNum: 5, roomNum: 'STC 707', enrolled: 292, days: 'TTH', instructor: 'Sister Blessing'}
const section6 = {sectionNum: 6, roomNum: 'STC 818', enrolled: 101, days: 'TTH', instructor: 'Sister Donna'}

function setCourseInfo(course) {
  // Get the elements in the HTML to display the course information
  const courseNameElement = document.getElementById('courseName');
  const courseNumberElement = document.getElementById('courseNumber');

  // Set the course name and course number in the HTML
  courseNameElement.textContent = course.name;
  courseNumberElement.textContent = course.code;
}
setCourseInfo(aCourse);


function outputSections(sections) {
  // Get the table element in the HTML to display the sections
  const sectionsTable = document.querySelector('#sections');

  const sections = [section1, section2, section3, section4, section5, section6];
  outputSections(sections);


  // Clear the existing table content
  sectionsTable.innerHTML = '';

  // Iterate over each section and create table rows
  sections.forEach(section => {
    const row = document.createElement('tr');

    // Create table cells for section properties
    const sectionNumberCell = document.createElement('td');
    sectionNumberCell.textContent = section.sectionNum;

    const instructorCell = document.createElement('td');
    instructorCell.textContent = section.instructor;

    const scheduleCell = document.createElement('td');
    scheduleCell.textContent = section.days;

    // Append the cells to the row
    row.appendChild(sectionNumberCell);
    row.appendChild(instructorCell);
    row.appendChild(scheduleCell);

    // Append the row to the table
    sectionsTable.appendChild(row);
  });
}

