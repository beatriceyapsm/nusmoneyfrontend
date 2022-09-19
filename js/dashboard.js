
let userurl = 'https://nus-money.herokuapp.com/user';
userurl = userurl + '?GoogleID=9';

function renderuserdata(e) {
    $.getJSON(userurl, function (data) {
        // JSON result in `data` variable

        var userdata = data;
        console.log(userdata);

        var text = "<table class='table table-striped table-hover'><thead><tr><th colspan='2'>Fund Distribution</th></tr></thead><tbody>"
        userdata.forEach(function (item) {
            text = text + `<tr>
        <th scope='row'>Saving towards Goal</th>
        <td>${item.GoalAmount}</td>
    <tr>
        <th scope='row'>Personal Savings</th>
        <td>${item.PersonalSavings}</td>
    </tr>
    <tr>
        <th scope='row'>Investment</th>
        <td>${item.Investment}</td>
    </tr>
    <tr>
        <th scope='row'>Housing</th>
        <td>${item.Housing}</td>
    </tr>
    <tr>
        <th scope='row'>Insurance</th>
        <td>${item.Insurance}</td>
    </tr>
    <tr>
        <th scope='row'>Mobile</th>
        <td>${item.Mobile}</td>
    </tr>
    <tr>
        <th scope='row'>Transport</th>
        <td>${item.Transport}</td>
    </tr>
    <tr>
        <th scope='row'>Food</th>
        <td>${item.Food}</td>
    </tr>
    <tr>
        <th scope='row'>Others</th>
        <td>${item.Others}</td>
    </tr>`
            result = [item.GoalAmount, item.PersonalSavings]
            // console.log(data);
            return result;
        });
        text += "</tbody></table>"
        document.getElementById("dashboard-data").innerHTML = text;
    });
};
addEventListener("load", renderuserdata);

function rendertotalContribution(e) {
    $.getJSON(userurl, function (data) {
        // JSON result in `data` variable

        var userdata = data;
        console.log(userdata);

        var text = "<p>Total Contribution</p>"
        userdata.forEach(function (item) {
            text = text + `<p class="text-center">${item.GoalAmount}`
        });
        text += "</p>"
        document.getElementById("total_contribution").innerHTML = text;
    });
};

addEventListener("load", rendertotalContribution);




fetch(userurl)
    // when we get a response map the body to json
    .then(response => response.json())
    // and pass the JSON data to mydata for rendering
    .then(data => captureData(data[0]));

function captureData(data) {    
    // savingsArray.push(data.SavingsTowardsGoal);
    var savingsArray = [data.SavingsTowardsGoal, data.PersonalSavings, data.Investment, data.Housing, data.Insurance, data.Mobile, data.Transport, data.Food, data.Others];
    console.log(savingsArray);
    // return savingsArray;
}




const labels = [
    'Saving towards Goal',
    'Personal Savings',
    'Investment	',
    'Housing',
    'Insurance',
    'Mobile',
    'Transport',
    'Food',
    'Other'
];

const data = {
    labels: labels,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: [
            'rgb(102, 204, 255)',
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(153, 102, 51)',
            'rgb(84, 194, 54)',
            'rgb(194, 54, 182)',
            'rgb(255, 153, 102)',
            'rgb(153, 153, 255)'
        ],
        data: [5000, 600, 600, 600, 600, 600, 600, 600, 600],
    }]
};

const config = {
    type: 'pie',
    data: data,
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Fund Distribution'
            },
            legend: {
                labels: {
                    font: {
                        size: 14
                    }
                }
            }
        }
    }
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);
