// entry point
import "regenerator-runtime/runtime";
import loginUser from "./user/loginUser";
import "bootstrap/dist/js/bootstrap.bundle";

$("body").prepend(loginUser());
