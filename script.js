function getFormvalue(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    
    // Get the values from the form fields
    const firstName = document.forms["form1"]["fname"].value;
    const lastName = document.forms["form1"]["lname"].value;
    
    // Combine the first name and last name
    const fullName = firstName + " " + lastName;
    
    // Display the full name using an alert
    alert(fullName);
}
