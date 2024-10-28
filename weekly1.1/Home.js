
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    //document.getElementById("header").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    //document.getElementById("header").style.marginLeft= "0";
};

function categoryClicked(categoryName) {
    alert('You clicked on ' + categoryName); // Displays an alert with the category name
    console.log('Category clicked:', categoryName); // Logs the category name to the console
}