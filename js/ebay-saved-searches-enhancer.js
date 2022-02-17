let newHtml = "<a id=\"openAllWatchList\" href=\"#\">Open all →</a>";
let tableHeader = document.getElementsByClassName("save-search-title")[0];
tableHeader.innerHTML = tableHeader.innerHTML + newHtml;

$("#openAllWatchList").click(function(event) {
    event.preventDefault();
    
    let viewItemLinks = document.getElementsByClassName("search-item__title-section");
    let urls = Array.from(viewItemLinks).map(link => link.href);
    
    urls.forEach(function(url) {
        window.open(url);
    });
});
