fetch("http://www.boredapi.com/api/activity/")
    .then((res) => res.json())
    .then((data) => (document.getElementById("activity").innerText = data.activity));

function reload(){
    location.reload();
}
