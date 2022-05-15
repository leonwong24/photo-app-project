function searchOnClick(){
    var searchLink = document.getElementById('searchLink');
    var searchInput = document.getElementById('searchInput');

    //searchLink.setAttribute("href","/search/");
    searchLink.setAttribute("href","/search/"+searchInput.value);
    return false;
}
