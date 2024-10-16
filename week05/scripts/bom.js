const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("ul");

let chaptersArray = getChapterList() || [];

chaptersArray.forEach((chapter) => {
  displayList(chapter);
});

button.addEventListener("click", () => {
  if (input.value != "") {
    // make sure the input is not empty
    displayList(input.value); // call the function that outputs the submitted chapter
    chaptersArray.push(input.value); // add the chapter to the array
    setChapterList(); // update the localStorage with the new array
    input.value = ""; // clear the input
    input.focus(); // set the focus back to the input
  }
});

// Display List Function
function displayList(item) {
  let li = document.createElement("li");
  let deletebutton = document.createElement("button");
  li.textContent = item; // note the use of the displayList parameter 'item'
  deletebutton.textContent = "❌";
  deletebutton.classList.add("delete"); // this references the CSS rule .delete{width:fit-content;} to size the delete button
  li.append(deletebutton);
  list.append(li);
  deletebutton.addEventListener("click", function () {
    list.removeChild(li);
    deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and localStorage.
    input.focus(); // set the focus back to the input
  });
  console.log(
    "I like to copy code instead of typing it out myself and trying to understand it."
  );
}

// Set Chapter List Function
function setChapterList() {
  localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

// Get Chapter List Function
function getChapterList() {
  return JSON.parse(localStorage.getItem("myFavBOMList"));
}

chapter = chapter.slice(0, chapter.length - 1); // this slices off the last character

// Delete Chapter Function
function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter((item) => item !== chapter);
  setChapterList();
}

// Old to refactor

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
