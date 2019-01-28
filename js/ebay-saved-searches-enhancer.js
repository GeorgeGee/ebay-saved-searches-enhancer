let newHtml = "<a id=\"openAllWatchList\" href=\"#\">Open all →</a>";
let tableHeader = document.getElementsByClassName("container-header")[0];
tableHeader.innerHTML = tableHeader.innerHTML + newHtml;

$("#openAllWatchList").click(function(event) {
    event.preventDefault();
    
    let viewItemLinks = document.getElementsByClassName("paction");
    let urls = Array.from(viewItemLinks).map(link => link.href);
    
    urls.forEach(function(url) {
        window.open(url);
    });
});
