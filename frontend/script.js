let datas;
const url = "http://localhost:3000/notes";
const notesArea = document.querySelector(".notes");
let elements = "";
document.querySelector("button").style.display = "none";

async function getData() {
  const res = await fetch(url + "/all");
  datas = await res.json();
  datas.forEach((data) => {
    const element = `<p>${data.notemsg}</p>`;
    elements += element;
  });
  notesArea.innerHTML = elements;
  if (datas[0]) {
    document.querySelector("button").style.display = "block";
  }
}

document.querySelector("input").addEventListener("keypress", async (event) => {
  const value = document.querySelector("#input").value;
  if (event.keyCode === 13) {
    const res = await fetch(url + "/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        notemsg: value,
      }),
    });
    const resData = await res.json();
    if (resData.success) {
      window.location.reload();
    }
  }
});

document.querySelector("button").addEventListener("click", async () => {
  const res = await fetch(url + "/remove", {
    method: "DELETE",
  });
  const resData = await res.json();
  if (resData.success) {
    window.location.reload();
  }
});
