const submittion=document.getElementById("submit");
const newDiv=document.getElementById("alert");

submittion.addEventListener('click',function(){
newDiv.style.display="block";
});
$(document).ready(function () {
  $("#addForm").submit(function (e) {
    e.preventDefault();
    let firstName = $("#firstName").val();
    let lastName = $("#lastName").val();
    let email = $("#email").val();
    let password = $("#password").val();
    let phoneNumber = $("#phoneNumber").val();
    let country = $("#country").val();
    let province = $("#province").val();
    let district = $("#district").val();
    let city = $("#city").val();
    $.ajax({
      url: "jquery.php",
      method: "POST",
      data: { firstName, lastName, email, password, phoneNumber, country, province, district, city },
      success: function (response) {      
        // alert("your account was created successfully.");
        // alert(newDiv);
      },
      error: function (xhr, status, error) {
        console.log("Error: " + error);
      },
    });
  });
});
function editUser(id) {
  let form = '<form id="editForm">';
  form += 'First Name: <input type="text" id="editFirstName"><br>';
  form += 'Last Name: <input type="text" id="editLastName"><br>';
  form += 'Email:<input type="text" id="editEmail"><br>';
  form += 'Password:<input type="text" id="editPassword"><br>';
  form += 'Phone Number:<input type="text" id="editPhoneNumber"><br>';
  form += 'Country:<input type="text" id="editCountry"><br>';
  form += 'Province:<input type="text" id="editProvince"><br>';
  form += 'District:<input type="text" id="editDistrict"><br>';
  form += 'City:<input type="text" id="editCity"><br>';
  form += 'finish:<button type="submit">finish</button><br>';
  form += "</form>";
  $("#members").html(form);
  $("#editForm").submit(function (e) {
    e.preventDefault();
    let firstName = $("#editFirstName").val();
    let lastName = $("#editLastName").val();
    let email = $("#editEmail").val();
    let password = $("#editPassword").val();
    let phoneNumber = $("#editPhoneNumber").val();
    let country = $("#editCountry").val();
    let province = $("#editProvince").val();
    let district = $("#editDistrict").val();
    let city = $("#editCity").val();

    $.ajax({
      url: "jquery.php",
      method: "PUT",
      data: { id: id, firstName, lastName, email, password, phoneNumber, country, province, district, city },
      success: function (response) {
        display(response);
      },
      error: function (xhr, status, error) {
        console.log("Error: " + error);
      },
    });
  });
}
function deleteUser(id) {
  const confirmation = document.getElementById("delete");
  if (confirmation) {
    confirmation.style.display = "block";
    document.getElementById("confirm-delete").addEventListener("click", function () {
      $.ajax({
        url: "jquery.php",
        type: "DELETE",
        data: { id, _method: "DELETE" },
        success: function (response) {
          display();
        },
        error: function (xhr, status, error) {
          console.log("Error: " + error);
        },
      });
      confirmation.style.display = "none";
    });
    document.getElementById("cancel-delete").addEventListener("click", function () {
      confirmation.style.display = "none";
    });
  }
}
const divs = document.querySelectorAll("#name,#email_password,#number_country,#province_district");
divs.forEach(div=> {
  div.addEventListener("mouseover", function () {
    div.style.background = "rgb(0,0,250,0.4)";
  });
  div.addEventListener("mouseleave", function () {
    div.style.background = "white";
  });
});
 