// Wait for page to load
document.addEventListener('DOMContentLoaded', function() {

    // Select the "submit button", "Tasks" and "new task" to be used later
    const newTask = document.querySelector('#task');
    const taskList = document.querySelector('#tasks');
    const sbtn = document.querySelector('#submit');

    // Disable submit button by default
        sbtn.disabled = true;

    // Enable submit button only when there is something typed in 
    newTask.onkeyup = function() {
        if (newTask.value.length > 0) {
            sbtn.disabled = false;
        }
        else {
            sbtn.disabled = true;
        }
    }
    // Listen for submission of form
    document.querySelector('form').onsubmit = function() {
        
        const li = document.createElement('li');    // Create a list item for the new task

        li.innerHTML = newTask.value;   // Add task value to li

        taskList.append(li) //  Add new element to our unordered list

        newTask.value = ''; // Clear out the input field
        sbtn.disabled = true;   // Disable submit button again
        return false;   //  Stop the formfrom submitting
    }

});