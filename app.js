// Data array of squad members
let squad = [
  { name: "John", age: 25, role: "Team Captain", avatar: "⚡" },
  { name: "Sarah", age: 22, role: "Lead Designer", avatar: "🎨" },
  { name: "Mike", age: 28, role: "Full-Stack Dev", avatar: "💻" },
  { name: "Emily", age: 24, role: "Strategist", avatar: "🚀" },
  { name: "David", age: 30, role: "Security Lead", avatar: "🛡️" },
  { name: "Jessica", age: 26, role: "UX Researcher", avatar: "🔍" }
];

// Select HTML elements
const squadList = document.querySelector("#squad-list");
const sortBtn = document.querySelector("#sort-age");
const randomBtn = document.querySelector("#random-highlight");

// Render card items dynamically into the container
function renderSquad(data) {
  const cardsHTML = data.map(function(person) {
    return `
      <div class="squad-box">
        <div class="avatar">${person.avatar}</div>
        <div class="bio">${person.name} is ${person.age} years old.</div>
        <span class="role-badge">${person.role}</span>
      </div>
    `;
  });

  squadList.innerHTML = cardsHTML.join("\n");
  attachCardEvents();
}

// Add click listener to each box
function attachCardEvents() {
  const boxes = document.querySelectorAll(".squad-box");
  boxes.forEach(function(box) {
    box.addEventListener("click", function() {
      boxes.forEach(b => b.classList.remove("active"));
      box.classList.add("active");
    });
  });
}

// Sort squad by age on button click
sortBtn.addEventListener("click", function() {
  squad.sort((a, b) => a.age - b.age);
  renderSquad(squad);
});

// Pick a random squad member highlight
randomBtn.addEventListener("click", function() {
  const boxes = document.querySelectorAll(".squad-box");
  boxes.forEach(b => b.classList.remove("active"));
  
  const randomIndex = Math.floor(Math.random() * boxes.length);
  boxes[randomIndex].classList.add("active");
});

// Initial run
renderSquad(squad);