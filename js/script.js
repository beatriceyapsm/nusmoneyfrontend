//Buttons
function addaccountButton() {
    location.href = "/addaccount.html"
}
function monthlycontButton() {
    location.href = "/monthlycont.html"
}
function dashboardButton() {
    location.href = "/dashboard.html"
}
function savehouseButton() {
    location.href = "/savehouse.html"
}

//Redirect click on icon to welcome page
function homeIconClick() {
    location.href = "/index.html"
}

//Add name


function renderUser() {
    $.getJSON.parse('https://nus-money.herokuapp.com/user', function (data) {
      // JSON result in `data` variable
  
      var FirstName = data.FirstName;
        
        $(".userName").html(FirstName);
    });
  }

  addEventListener("load", renderUser);

