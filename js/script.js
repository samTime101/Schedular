// <!-- AUTHOR : SAMIP REGMi -->
// <!-- SCHEDULER -->
var group = null;
var day = null;

const DATE = new Date();
let DAY_INDEX = DATE.getDay();
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const Today = days[DAY_INDEX];

document.querySelectorAll("input").forEach((item) => {
  item.addEventListener("change", async () => {
    if (item.checked) {
      group = item.value;
      if (day) {
        await updateContent();
      }
    }
  });
  if (item.checked) {
    group = item.value;
  }
});

var selection = document.querySelectorAll(".day");

selection.forEach((item) => {
  if (item.innerText === Today) {
    item.style.backgroundColor = "#013a3d";
    day = item.innerText;
    updateContent();
  }
  item.addEventListener("click", async (e) => {
    day = e.target.innerText;
    if (!group) {
      alert("Select a group first!");
      return;
    }
    await updateContent();
  });
});

async function updateContent() {
  if (!day || !group) return;

  var response = await fetch(
    `http://localhost/schedule/php/script.php?day=${day}&group=${group}`,
  );

  var data = await response.json();
  document.querySelector("#content").innerText =
    `Day: ${data["day"]} Group: ${data["group"]}`;
}

console.log(`${day} ${group}`);
