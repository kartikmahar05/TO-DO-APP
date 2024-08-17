const Task = document.getElementById("task");
const list = document.getElementById("todo");

Task.addEventListener(
    "keyup",
    function (event) {
        if (event.key == "Enter") {
            addToDo(this.value)
            this.value = ""
        }
    }
)


const addToDo = (Task) => {
    const data = document.createElement("li");
    data.innerHTML = `
        <div class="childList1" style="width: 5%;">
            <input type="checkbox" name="" id="choose">
        </div>
        <div class="childList2" style="width: 89%; text-align: center;">
            <h2>${Task}</h2>
        </div>
        <div class="childList3" style="width: 5%;">
            <i class="fa-solid fa-trash-can"></i>
        </div>
    `;
    const h = document.createElement("hr");
    data.addEventListener(
        "click",
        function () {
            this.classList.toggle("done")
        }
    )
    data.querySelector("i").addEventListener(
        "click",
        function () {
            data.remove()
            h.remove()
        }
    );
    list.appendChild(data);
    list.appendChild(h)
}
