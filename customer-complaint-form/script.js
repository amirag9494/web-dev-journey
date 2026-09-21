const fullNameInput = document.getElementById("full-name");
const emailInput = document.getElementById("email");
const orderNoInput = document.getElementById("order-no");
const productCodeInput = document.getElementById("product-code");
const quantityInput = document.getElementById("quantity");
const complaintsGroup = document.getElementById("complaints-group");
const complaintDescInput = document.getElementById("complaint-description");
const otherComplaint = document.getElementById("other-complaint");
const solutionsGroup = document.getElementById("solutions-group");
const solutionDescInput = document.getElementById("solution-description");
const otherSolution = document.getElementById("other-solution");
const form = document.getElementById("complaint-form");

function validateForm() {
  const isFullNameValid = fullNameInput.value.trim() !== "";
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailRegex.test(emailInput.value);

  const orderNoRegex = /^2024\d{6}$/;
  const isOrderNoValid = orderNoRegex.test(orderNoInput.value);

  const productCodeRegex = /^[a-zA-Z]{2}\d{2}-[a-zA-Z]\d{3}-[a-zA-Z]{2}\d$/;
  const isProductCodeValid = productCodeRegex.test(productCodeInput.value);

  const quantityVal = Number(quantityInput.value);
  const isQuantityValid = Number.isInteger(quantityVal) && quantityVal > 0;

  const checkboxes = complaintsGroup.querySelectorAll('input[type="checkbox"]');
  const isComplaintsValid = Array.from(checkboxes).some(cb => cb.checked);

  const isComplaintDescValid = !otherComplaint.checked || complaintDescInput.value.length >= 20;

  const radios = solutionsGroup.querySelectorAll('input[type="radio"]');
  const isSolutionsValid = Array.from(radios).some(r => r.checked);

  const isSolutionDescValid = !otherSolution.checked || solutionDescInput.value.length >= 20;

  return {
    "full-name": isFullNameValid,
    "email": isEmailValid,
    "order-no": isOrderNoValid,
    "product-code": isProductCodeValid,
    "quantity": isQuantityValid,
    "complaints-group": isComplaintsValid,
    "complaint-description": isComplaintDescValid,
    "solutions-group": isSolutionsValid,
    "solution-description": isSolutionDescValid
  };
}

function isValid(validationObj) {
  return Object.values(validationObj).every(value => value === true);
}

function updateFieldBorder(element, isValidState) {
  element.style.borderColor = isValidState ? "green" : "red";
}

fullNameInput.addEventListener("change", () => {
  updateFieldBorder(fullNameInput, fullNameInput.value.trim() !== "");
});

emailInput.addEventListener("change", () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  updateFieldBorder(emailInput, emailRegex.test(emailInput.value));
});

orderNoInput.addEventListener("change", () => {
  const orderNoRegex = /^2024\d{6}$/;
  updateFieldBorder(orderNoInput, orderNoRegex.test(orderNoInput.value));
});

productCodeInput.addEventListener("change", () => {
  const productCodeRegex = /^[a-zA-Z]{2}\d{2}-[a-zA-Z]\d{3}-[a-zA-Z]{2}\d$/;
  updateFieldBorder(productCodeInput, productCodeRegex.test(productCodeInput.value));
});

quantityInput.addEventListener("change", () => {
  const q = Number(quantityInput.value);
  updateFieldBorder(quantityInput, Number.isInteger(q) && q > 0);
});

complaintsGroup.addEventListener("change", () => {
  const checkboxes = complaintsGroup.querySelectorAll('input[type="checkbox"]');
  const checked = Array.from(checkboxes).some(cb => cb.checked);
  updateFieldBorder(complaintsGroup, checked);
});

complaintDescInput.addEventListener("change", () => {
  const isValidDesc = !otherComplaint.checked || complaintDescInput.value.length >= 20;
  updateFieldBorder(complaintDescInput, isValidDesc);
});

solutionsGroup.addEventListener("change", () => {
  const radios = solutionsGroup.querySelectorAll('input[type="radio"]');
  const selected = Array.from(radios).some(r => r.checked);
  updateFieldBorder(solutionsGroup, selected);
});

solutionDescInput.addEventListener("change", () => {
  const isValidSol = !otherSolution.checked || solutionDescInput.value.length >= 20;
  updateFieldBorder(solutionDescInput, isValidSol);
});

if (form) {
  form.addEventListener("submit", (e) => {
    const validationResults = validateForm();
    if (!isValid(validationResults)) {
      e.preventDefault();
      updateFieldBorder(fullNameInput, validationResults["full-name"]);
      updateFieldBorder(emailInput, validationResults["email"]);
      updateFieldBorder(orderNoInput, validationResults["order-no"]);
      updateFieldBorder(productCodeInput, validationResults["product-code"]);
      updateFieldBorder(quantityInput, validationResults["quantity"]);
      updateFieldBorder(complaintsGroup, validationResults["complaints-group"]);
      updateFieldBorder(complaintDescInput, validationResults["complaint-description"]);
      updateFieldBorder(solutionsGroup, validationResults["solutions-group"]);
      updateFieldBorder(solutionDescInput, validationResults["solution-description"]);
    }
  });
}