// write js code here corresponding to favourites.html

var matchesArr=JSON.parse(localStorage.getItem("favourites"));

displayData(matchesArr);

function displayData(data)
{
    data.forEach(function(ele,i)
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

        var td6=document.createElement("td")
        td6.innerText="Delete";
        td6.style.color="red"
        td6.style.cursor="pointer"
        td6.setAttribute("class","deleteText");
        td6.addEventListener("click",function()
        {
            deleteItem(ele,i);
        });

        tr.append(td1,td2,td3,td4,td5,td6);
        document.querySelector("tbody").append(tr);

    });
}

function deleteItem(ele,i)
{
    matchesArr.splice(index,1);
    localStorage.setItem("favourites",JSON.stringify(matchesArr));

}