// write js code here corresponding to matches.html

var mplArr=JSON.parse(localStorage.getItem("schedule"));

dispalyData(mplArr);

var matchesArr=JSON.parse(localStorage.getItem("favourites")) || [];

function dispalyData(mplArr)
{
    mplArr.forEach(function(ele)
    {
        var tr=document.createElement("tr");

        var td1=document.createElement("td");
        td1.innerText=ele.MatchNumber;

        var td2=document.createElement("td");
        td2.innerText=ele.SelectTeamA;

        var td3=document.createElement("td");
        td3.innerText=ele.SelectTeamB;

        var td4=document.createElement("td");
        td4.innerText=ele.SelectDate;

        var td5=document.createElement("td");
        td5.innerText=ele.SelectVenue;
        
        var td6=document.createElement("td");
        td6.innerText="favourites";
        td6.style.color="green";
        td6.style.cursor="pointer";
        td6.addEventListener("click",function()
        {
            favouritesFun(ele);
        });

        tr.append(td1,td2,td3,td4,td5,td6);

        document.querySelector("tbody").append(tr);
    });

    function favouritesFun(ele)
    {
        console.log(ele)
        matchesArr.push(ele);
        localStorage.setItem("favourites",JSON.stringify(matchesArr));
    }
}
// var venue=[masaiForm.venue.value]

// var out=venue.sort(function (p,q)
// {
//     return p-q
// });