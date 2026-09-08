class InventoryManager {
  constructor() {
    this.inventory = [];
  }

  findProductIndex(productName) {
    const lowerName = productName.toLowerCase();
    for (let i = 0; i < this.inventory.length; i++) {
      if (this.inventory[i].name === lowerName) {
        return i;
      }
    }
    return -1;
  }

  addProduct(productObj) {
    const lowerName = productObj.name.toLowerCase();
    const quantity = Number(productObj.quantity);
    const index = this.findProductIndex(lowerName);

    if (index !== -1) {
      this.inventory[index].quantity += quantity;
      logMessage(`${lowerName} quantity updated`);
    } else {
      this.inventory.push({
        name: lowerName,
        quantity: quantity,
        price: productObj.price ? Number(productObj.price) : 0,
        category: productObj.category || 'General'
      });
      logMessage(`${lowerName} added to inventory`);
    }
    updateTable();
  }

  removeProduct(productName, quantityToRemove) {
    const lowerName = productName.toLowerCase();
    const qtyToRemove = Number(quantityToRemove);
    const index = this.findProductIndex(lowerName);

    if (index === -1) {
      logMessage(`${lowerName} not found`, true);
      return;
    }

    const product = this.inventory[index];

    if (product.quantity < qtyToRemove) {
      logMessage(`Not enough ${lowerName} available, remaining pieces: ${product.quantity}`, true);
      return;
    }

    product.quantity -= qtyToRemove;

    if (product.quantity === 0) {
      this.inventory.splice(index, 1);
      logMessage(`Remaining ${lowerName} pieces: 0 (Removed)`);
    } else {
      logMessage(`Remaining ${lowerName} pieces: ${product.quantity}`);
    }
    updateTable();
  }
}

const manager = new InventoryManager();

function logMessage(text, isError = false) {
  const consoleBox = document.getElementById("consoleLog");
  const p = document.createElement("p");
  p.className = isError ? "log-item log-error" : "log-item";
  p.textContent = `> ${text}`;
  consoleBox.appendChild(p);
  consoleBox.scrollTop = consoleBox.scrollHeight;
}

function updateTable() {
  const tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";

  if (manager.inventory.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="4" style="text-align: center; color: #7c7c8a;">Inventory is empty</td></tr>`;
    return;
  }

  for (const item of manager.inventory) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${item.name}</td>
      <td>${item.quantity}</td>
      <td>$${item.price}</td>
      <td>${item.category}</td>
    `;
    tableBody.appendChild(tr);
  }
}

document.getElementById("addBtn").addEventListener("click", () => {
  const name = document.getElementById("addName").value.trim();
  const quantity = document.getElementById("addQty").value;
  const price = document.getElementById("addPrice").value;

  if (!name || !quantity) {
    alert("Please enter product name and quantity!");
    return;
  }

  manager.addProduct({ name, quantity, price });

  document.getElementById("addName").value = "";
  document.getElementById("addQty").value = "";
  document.getElementById("addPrice").value = "";
});

document.getElementById("removeBtn").addEventListener("click", () => {
  const name = document.getElementById("remName").value.trim();
  const quantity = document.getElementById("remQty").value;

  if (!name || !quantity) {
    alert("Please enter product name and quantity to remove!");
    return;
  }

  manager.removeProduct(name, quantity);

  document.getElementById("remName").value = "";
  document.getElementById("remQty").value = "";
});

updateTable();