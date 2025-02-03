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
  document.querySelector("#content").innerHTML = " ";
  var response = await fetch(
    `http://localhost/schedule/php/script.php?day=${day}&group=L4CG${group}`,
  );

  var data = await response.json();
  // console.log(data);
  data.forEach((item) => {
    // console.log(item["Lecturer"]);
    document.querySelector("#content").innerHTML +=
      `Group: ${item["Group_Name"]}<br>Day: ${item["Day"]}<br>Time: ${item["Time"]}<br>${item["Lecturer"]}<br>${item["Room"]}<hr><br>`;
  });
}

console.log(`${day} L4CG${group}`);
