// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit",mplsubmit);

var mplArr=JSON.parse(localStorage.getItem("schedule")) || [];

function mplsubmit()
{
    event.preventDefault();

    var mplobj={
        MatchNumber: masaiForm.matchNum.value,
        SelectTeamA:masaiForm.teamA.value,
        SelectTeamB:masaiForm.teamB.value,
        SelectDate:masaiForm.date.value,
        SelectVenue:masaiForm.venue.value,
        
    };

    mplArr.push(mplobj);
    // console.log(mplArr);

    localStorage.setItem("schedule",JSON.stringify(mplArr));

}
