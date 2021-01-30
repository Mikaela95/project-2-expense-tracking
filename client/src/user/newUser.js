const form = `
<main class="form-signin">
  <form id="new-user">
    <div class="form-group">
      <label for="username">Name</label>
      <input type="text" class="form-control" placeholder="Please enter a username" name="username">
    </div>
    <div class="form-group">
      <label for="password">Email address</label>
      <input type="email" class="form-control" placeholder="Enter email address" name="email">
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" class="form-control" placeholder="Please enter a password" name="password">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</main>
`;

// add in more fields

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
    console.log("response", response);
  });
  return form;
};

export default newUser;
