const body = document.body;
body.style.margin = "0";

const groupDiv = document.createElement("div");

groupDiv.style.padding = "0";
groupDiv.style.maxWidth = "640px";
groupDiv.style.margin = "0 auto";
groupDiv.style.listStyle = "none";
body.appendChild(groupDiv);

const numberOfCase = 64;

for (let o = 0; o < numberOfCase / 8; o++) {
  const group8Div = document.createElement("div");
  group8Div.className = "GroupAllDiv";
  groupDiv.appendChild(group8Div);

  for (let i = 0; i < 8; i++) {
    const element = document.createElement("div");
    group8Div.appendChild(element);

    if ((o + i) % 2 === 0) {
      element.style.background = "black";
    }
  }
}

const allDiv = document.querySelectorAll("div div div");

allDiv.forEach((e) => {
  e.style.content = "";
  e.style.width = "5rem";
  e.style.height = "5rem";
  e.style.display = "inline-block";
});
