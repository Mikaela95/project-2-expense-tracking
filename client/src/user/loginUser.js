import newUser from "./newUser";
import expenseForm from "../expenses/expenseForm";
import "./style.css";

const form = `
  <main class="form-signin" id="login">
    <form id="login-user">
      <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
      <label for="username" class="visually-hidden">Username</label>
      <input type="text" id="username" name="username" class="form-control" placeholder="Username" required autofocus>
      <label for="inputPassword" class="visually-hidden">Password</label>
      <input type="password" id="inputPassword" name="password" class="form-control" placeholder="Password" required>
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> Remember me
        </label>
      </div>
      <button class="w-100 btn btn-lg btn-primary" type="submit">Login</button>
      <label for="username" class="visually-hidden" id="signup">Don't have an account? <a href="#signup" >Signup here</a></label>
      <p class="mt-5 mb-3 text-muted">&copy; 2017-2021</p>
    </form>
  </main>
`;

const loginUser = () => {
  // Sign up option
  $(document).ready(function () {
    $("#signup a").click(function () {
      console.log("You just clicked the signup button");
      $("body").empty();
      $("body").append(newUser);
    });
  });

  // Sign in option
  $(document).on("submit", "#login-user", async (event) => {
    console.log("event", event);
    event.preventDefault();

    const formData = {
      username: $("input[name='username']").val(),
      password: $("input[name='password']").val(),
    };
    console.log("formData", formData);
    const response = await $.ajax({
      type: "POST",
      url: "/api/users/login",
      contentType: "application/json",
      data: JSON.stringify(formData),
    });
    console.log("response: ", response);
    //Have an ok message or incorrect username/pwd displayed on the screen
    if (response != 401) {
      $("body").empty();
      $("body").append(expenseForm);
    }
  });
  return form;
};

export default loginUser;
