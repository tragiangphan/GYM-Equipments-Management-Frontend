async function getAllUser() {
    const data = await fetch("http://localhost:8070/api/v1/nhanvien").then(
        (res) => res.json()
    );
    const target = document.querySelector(".root");
    console.log(data);
    const ul = document.createElement("ul");
}

// getAllUser();
const btn = document.getElementById("button");
btn.addEventListener("click", () => getAllUser());
