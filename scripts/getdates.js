const today = new Date();
currentyear.innerHTML = `<span class="currentyear">© ${today.getFullYear()}</span>`;

const lastModified = document.lastModified;

document.getElementById("lastModified").textContent = lastModified;
