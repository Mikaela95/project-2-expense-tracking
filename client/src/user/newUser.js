import './style.css';

const form = `
<main class="form-signin" id="newUser">
  <form id="new-user">
    <h1>Hello There</h1>
    <div class="form-group">
      <label for="username">Name</label>
      <input type="text" class="form-control" placeholder="Please enter a username" name="username" autofocus required>
    </div>
    <div class="form-group">
      <label for="password">Email address</label>
      <input type="email" class="form-control" placeholder="Enter your email address" name="email" required>
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" class="form-control" placeholder="Please enter a password" name="password" required>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</main>
`;

const registeredUser = `
  <main class="form-signin" id="home">
    <h1>Congratulations!</h1>
    <button class="btn btn-primary">You can now login</button>
  </main>
`;

const newUser = () => {
  $(document).on("submit", "#new-user", async (event) => {
    console.log("event", event);
    event.preventDefault();

    const formData = {
      username: $("input[name='username']").val(),
      password: $("input[name='password']").val(),
    };
    console.log("formData", formData);
    const response = await $.ajax({
      type: "POST",
      url: "/api/users/register",
      contentType: "application/json",
      data: JSON.stringify(formData),
    });
    $("body").empty();
    $("body").append(registeredUser);
  });

  $(document).on("click", "#home", async (e) => {
    location.reload();
  });

  return form;
};

export default newUser;
