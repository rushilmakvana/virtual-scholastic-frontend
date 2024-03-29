// // import { AdminNavbar } from "../../components/navbar.js";
// AdminNavbar;
// import { AdminNavbar } from "../../components/adminNav.js";
// import { noteContainer } from "../../components/noteContainer.js";

// document.getElementById("preloader").style.display = "block";

// window.onload = () => {
//   document.getElementById("preloader").style.display = "none";
//   //   const identifier = localStorage.getItem("identifier");

//   // Sidebar change as per teacher or student
//   //   if (identifier?.toLowerCase().charAt(0) === "t") {
//   //     document.getElementsByClassName("sidebar")[0].innerHTML = Navbar({
//   //       isTeacher: true,
//   //       activeSection: "MyCourse",
//   //     });
//   //   } else {
//   //     document.getElementsByClassName("sidebar")[0].innerHTML = Navbar({
//   //       activeSection: "MyCourse",
//   //     });
//   document.getElementsByClassName("sidebar")[0].innerHTML = AdminNavbar({
//     activeSection: "MyCourse",
//   });
//   //   }

//   //Notes
//   document.getElementById("note-taking").innerHTML = noteContainer();
// };

document.getElementById("preloader").style.display = "block";
window.onload = function () {
  document.getElementById("preloader").style.display = "none";

  document
    .getElementById("login-button")
    .addEventListener("click", function (e) {
      var id = document.getElementById("instid").value;
      var password = document.getElementById("password").value;
      var email = document.getElementById("admin-email").value;
      let status = [];

      if (id.length <= 1) {
        document.getElementById("instid").value = "";
        document.getElementById("instid").placeholder = "Please enter valid ID";
        status.push("false");
      } else {
        status.push("true");
      }

      if (password.length <= 1) {
        document.getElementById("password").value = "";
        document.getElementById("password").placeholder =
          "Please enter valid Password";
        status.push("false");
      } else {
        status.push("true");
      }

      if (status.includes("false")) {
        return false;
      } else {
        document.getElementById("login-button").value = "Loading...";
        // try {
        fetch("http://localhost:3000/admin/addAdmin", {
          method: "POST",
          headers: new Headers({
            "content-type": "application/json",
          }),
          body: JSON.stringify({
            email: email,
            name: id,
            password: password,
          }),
        })
          .then((res) => {
            if (res.status === 400) {
              // console.log("satus", res.status==);
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Invalid email or password.",
              });
            }
            document.getElementById("login-button").value = "Login";
            return res.json();
          })
          .then((data) => {
            if (data) {
              console.log("data = ", data);
              // if (data.message.includes("successfully")) {
              //   window.location.href = "adminPage.html";
              //   // console.log("data = ", data);
              // } else {
              // }
            }
            // console.log("response = ", data.message.includes("successfully"));
            document.getElementById("login-button").value = "Login";
          });
        // } catch (err) {
        //   console.log("here");
        //   Swal.fire({
        //     icon: "error",
        //     title: "Oops...",
        //     text: "Invalid password.",
        //   });
        //   document.getElementById("login-button").value = "Login";
        // }

        // if (document.getElementById("student-radio").checked) {
        //   fetch("http://localhost:3000/auth/login", {
        //     method: "POST",
        //     headers: new Headers({
        //       "content-type": "application/json",
        //     }),
        //     body: JSON.stringify({
        //       studentId: id,
        //       password: password,
        //     }),
        //   })
        //     .then((response) => {
        //       return response.json();
        //     })
        //     .then((response) => {
        //       if (response.token) {
        //         localStorage.setItem("name", response.name);
        //         localStorage.setItem("token", response.token);
        //         localStorage.setItem("identifier", id);
        //         document.getElementById("login-button").value = "Login";
        //         window.location.href = "myCoursesPage.html";
        //       } else if (response.errorMessage === "Invalid password") {
        //         Swal.fire({
        //           icon: "error",
        //           title: "Oops...",
        //           text: "Invalid password.",
        //         });
        //         document.getElementById("login-button").value = "Login";
        //       } else {
        //         Swal.fire({
        //           icon: "error",
        //           title: "Oops...",
        //           text: "It's not you, it's us! Please try again after a while.",
        //         });
        //         document.getElementById("login-button").value = "Login";
        //       }
        //     })
        //     .catch((err) => {
        //       Swal.fire({
        //         icon: "error",
        //         title: "Oops...",
        //         text: "It's not you, it's us! Please try again after a while.",
        //       });

        //       document.getElementById("login-button").value = "Login";
        //     });
        // } else {
        //   fetch("http://localhost:3000/auth/login", {
        //     method: "POST",
        //     headers: new Headers({
        //       "content-type": "application/json",
        //     }),
        //     body: JSON.stringify({
        //       teacherId: id,
        //       password: password,
        //     }),
        //   })
        //     .then((response) => {
        //       return response.json();
        //     })
        //     .then((response) => {
        //       if (response.token) {
        //         localStorage.setItem("name", response.name);
        //         localStorage.setItem("token", response.token);
        //         localStorage.setItem("identifier", id);
        //         document.getElementById("login-button").value = "Login";
        //         window.location.href = "myCoursesPage.html";
        //       } else if (response.errorMessage === "Invalid password") {
        //         Swal.fire({
        //           icon: "error",
        //           title: "Oops...",
        //           text: "Invalid password.",
        //         });
        //         document.getElementById("login-button").value = "Login";
        //       } else {
        //         Swal.fire({
        //           icon: "error",
        //           title: "Oops...",
        //           text: "It's not you, it's us! Please try again after a while.",
        //         });
        //         document.getElementById("login-button").value = "Login";
        //       }
        //     })
        //     .catch((err) => {
        //       Swal.fire({
        //         icon: "error",
        //         title: "Oops...",
        //         text: "It's not you, it's us! Please try again after a while.",
        //       });
        //       document.getElementById("login-button").value = "Login";
        //     });
        // }
      }
    });
};
