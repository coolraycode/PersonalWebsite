// for the tab buttons on nav bar
function selectPage(button, sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.tab');
    sections.forEach((section) => {
        section.style.display = 'none';
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }

    // Add bar for active button
    const btns = document.querySelectorAll(".btn");
    btns.forEach((btn) => {
        btn.classList.remove('active');
    })

    button.classList.add('active');
}
// Default select Home
selectPage(btn1, 'homePage');


// for scrolling to contact footer at the bottom
function scrollToElement(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView();
    }
}