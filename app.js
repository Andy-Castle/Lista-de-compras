//Un validador para que no agregue vacio
//crear la carta ose al li, span y button que guardan las variables
//ponerlos de hijo de ul
//hacer el boton de delte

const inputText = document.querySelector("#inputText");

const addItem = document.querySelector("#addItem");

const list = document.querySelector("ul");

let newItem = "";
let numberId = 0;

function Main() {
  // Aqui verificamos que el input no este vacio
  if (!inputText.value) return alert("No agregado nada");
  // Colocamos el valor del input en una varible
  newItem = inputText.value;
  let putId = numberId++;
  // Creamos los elementos correspondientes
  const li = document.createElement("li");
  const span = document.createElement("span");
  const deleteButton = document.createElement("button");

  // Colocamos el valor del input en el span
  span.textContent = newItem;
  deleteButton.textContent = "Eliminar";
  deleteButton.setAttribute("style", "margin:10px 15px;");
  li.setAttribute("id", `${putId}`);
  deleteButton.setAttribute("id", `${putId}`);

  // Añadimos o hacemos hijo la que necesitamos
  list.appendChild(li);
  li.appendChild(span);
  li.appendChild(deleteButton);

  inputText.value = "";

  deleteButton.addEventListener("click", () => {
    let getLiId = li.getAttribute("id");
    let getButtonId = deleteButton.getAttribute("id");

    if (getLiId === getButtonId) {
      list.removeChild(li);
    }
  });
}

addItem.addEventListener("click", Main);
