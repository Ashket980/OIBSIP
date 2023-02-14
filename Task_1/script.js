
function allclear()
{
    document.getElementById("res").value="";
}

function s(input)
{
    document.getElementById("res").value+=input;
}

function res()
{
    var out=eval(document.getElementById("res").value);
    document.getElementById("res").value=out;
}        