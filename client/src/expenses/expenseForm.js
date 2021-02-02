import "./dashboard.css";
import "bootstrap/dist/js/bootstrap.bundle";

// to-do - dynamically update username
let name = "Mikaela";

const form = `
<header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
  <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Contemporary Finance</a>
  <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search">
  <ul class="navbar-nav px-3">
    <li class="nav-item text-nowrap">
      <button type="button" class="btn btn-secondary" id="signout">Sign out</button>
    </li>
  </ul>
</header>

<div class="container">
  <div class="row">
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div class="position-sticky pt-3">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              <span data-feather="home"></span>
              Dashboard
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="file"></span>
              Housing
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="users"></span>
              Transportation
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="bar-chart-2"></span>
              Food
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="layers"></span>
              Utilities
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="layers"></span>
              Clothing
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="layers"></span>
              Medical/Healthcare
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="layers"></span>
              Insurance
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="layers"></span>
              Household Items/Supplies
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="layers"></span>
              Debt
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="layers"></span>
              Personal
            </a>
          </li>
        </ul>

        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Saved reports</span>
          <a class="link-secondary" href="#" aria-label="Add a new report">
            <span data-feather="plus-circle"></span>
          </a>
        </h6>
        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="file-text"></span>
              Current month
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="file-text"></span>
              Last quarter
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="file-text"></span>
              By year
            </a>
          </li>
        </ul>
      </div>
    </nav>
    
    <main class="col-md-12">
      <div class="border-bottom">
        <h1 class="h2">Welcome back ${name}</h1>
      </div>
    </main>

    <div class="container">
    <h1 class="display-5">Expenses</h1>
    <form class="form-row" id="expense-form">
      <div class="col-md-6 form-group">
          <label for="expenseId">Expense Id</label>
          <input type="text" class="form-control" id="expenseId" placeholder="Enter expense Id" name="expenseId">
      </div>
      <div class="form-group col-md-6">
        <label for="categoryId">Category</label>
        <select class="form-control" name="categoryId" id="categories"></select>
      </div>
      <div class="form-row">
        <div class="col-md-6">
          <label for="name" class="form-label">Expense name</label>
          <input type="text" class="form-control" id="name" placeholder="name" required>
        </div>
        <div class="col-3">
          <label for="projectedCost" class="form-label">Projected cost</label>
          <input type="text" class="form-control" id="projectedCost" placeholder="$" required>
        </div>
        <div class="col-3">
          <label for="actualCost" class="form-label">Actual cost</label>
          <input type="text" class="form-control" id="actualCost" placeholder="$" required>
        </div>
      
        <div class="form-group row" id="all-buttons">
          <div class="col-4">
            <button type="button" class="btn btn-primary" id="create">Create</button>
          </div>
          <div class="col-4">
            <button type="button" class="btn btn-primary" id="update">Update</button>
          </div>
          <div class="col-4">
            <button type="button" class="btn btn-danger" id="delete">Delete</button>
          </div> 
        </div>
      </div>
    </form>
  </div>
</div>
`;

const expenseForm = () => {
  const categoryResponse = $.ajax({
    type: "GET",
    url: "/api/categories/all-categories",
  }).done((expenseCategories) => {
    console.log("expenseCategories", expenseCategories);
    let optionsHtml = "";
    expenseCategories.forEach((expenseElement) => {
      console.log("expenseElement", expenseElement);
      optionsHtml += `<option value=${expenseElement._id}>${expenseElement.name}</option>`;
      console.log("optionsHtml", optionsHtml);
    });
    console.log("optionsHtml", optionsHtml);
    $("#categories").append(optionsHtml);
    $("#categories-update").append(optionsHtml);
  });
  // Create an expense item
  $(document).on("click", "#create", async (e) => {
    e.preventDefault();
    const requestBody = {
      name: $("#name").val(),
      projectedExpense: $("#projectedCost").val(),
      actualExpense: $("#actualCost").val(),
      categoryId: $("#categories").val(),
    };
    console.log("requestBody", requestBody);

    // Send to DB through a POST request
    const response = await $.ajax({
      type: "POST",
      url: "/api/expenses/new-expense",
      contentType: "application/json",
      data: JSON.stringify(requestBody),
    });
    if (response != 401) {
      const message = `
      <div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Successfully added expense item</strong>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      `;
      $("body").append(message);
      document.getElementById("expense-form").reset();
    } else {
      const message = `
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Unable to add expense item</strong>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      `;
      $("body").append(message);
    }
    console.log(`This is the response I get back ${response}`);
  });


  // Update form entry
  $(document).on("click", "#update", async (e) => {
    e.preventDefault();
    const requestBody = {
      name: $("#name").val(),
      projectedExpense: $("#projectedCost").val(),
      actualExpense: $("#actualCost").val(),
      categoryId: $("#categories").val(),
    };
    const response = await $.ajax({
      type: "PATCH",
      url: `/api/expenses/update-expense/${$("#expenseId").val()}`,
      contentType: "application/json",
      data: JSON.stringify(requestBody),
    });
    if (response != 404) {
      const message = `
      <div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Successfully updated expense item</strong>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      `;
      $("body").append(message);
      document.getElementById("expense-form").reset();
    } /* else {
      const message = `
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Unable to add expense item</strong>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      `;
      $("body").append(message);
    } */
    console.log(`Successfully updated expense item`);
  });

  // Delete an expense item
  $(document).on("click", "#delete", async (e) => {
    e.preventDefault();
    const requestBody = {
      name: $("#name").val(),
      projectedExpense: $("#projectedCost").val(),
      actualExpense: $("#actualCost").val(),
      categoryId: $("#categories").val(),
    };
    const response = await $.ajax({
      type: "DELETE",
      url: `/api/expenses/delete-expense/${$("#expenseId").val()}`,
      contentType: "application/json",
      data: JSON.stringify(requestBody),
    });
    if (response != 401) {
      const message = `
      <div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Successfully deleted expense item</strong>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      `;
      $("body").append(message);
      document.getElementById("expense-form").reset();
    }
    console.log(`Successfully deleted expense item`);
  });

  $(document).on("click", "#signout", async (e) => {
    location.reload();
  });

  return form;
};

export default expenseForm;
