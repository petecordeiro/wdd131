const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("ul");

// Handling events

// Create a click event listener for the Add Chapter button using an addEventListener.
button.addEventListener("click", function () {
  if (input.value.trim() !== "") {
    // Create <li> elements
    const li = document.createElement("li");

    // Delete button
    const deleteButton = document.createElement("button");

    // Populate <li> with the <input> value
    li.textContent = input.value;

    // Populate the <button> textContent with a ❌.
    deleteButton.textContent = "❌";

    // Append the <li> element variable with the delete <button>.
    li.append(deleteButton);

    // Append the <li> element variable to the unordered list in your HTML.
    list.append(li);

    // Add an event listener to the delete button that removes the li element when clicked.
    deleteButton.addEventListener("click", function () {
      list.removeChild(li);
      input.focus();
    });

    // Change the input value to nothing or the empty string to clean up the interface for the user.
    input.value = "";

    // Regardless if a list item was created or not, the focus (active cursor) should be sent to the input element.
    input.focus();
  }
});
