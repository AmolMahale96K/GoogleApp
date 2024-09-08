function search()
{
    var text = document.getElementById('input').value;
    var googleWeb = "https://www.google.com/search?q="+text;
    window.open(googleWeb);
}