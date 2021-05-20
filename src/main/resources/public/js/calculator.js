//All inputted values
console.log("Test connection")

function getMean() {
    var totalscore = 0;
    for(i=1; i<=4; i++) {
        let score = Number(document.getElementById("A" + i + "score").value);
        let total = Number(document.getElementById("A" + i + "total").value);
        document.getElementById("P"+i).innerHTML = (score/total)*100 + "%";
        totalscore += score/total;
    }
    document.getElementById("result").innerHTML = "Result: " + (totalscore/4)*100+"% ";
}

function getWeight() {
    console.log("Running getWeight")
    var totalscore = 0;
    var totalweight = 0;
    for(i=1; i<=4; i++) {
        let score = Number(document.getElementById("A" + i + "score").value);
        let total = Number(document.getElementById("A" + i + "total").value);
        let weight = Number(document.getElementById("A" + i + "weight").value);
        document.getElementById("P"+i).innerHTML = (score/total)*100 + "%";

        totalweight += weight;
        totalscore +=
            weight*(score/total);
    }
    // document.getElementById("result").innerHTML += "Result: " + totalscore/totalweight;
    document.getElementById("result").innerHTML = "Result: " + (totalscore/totalweight)*100+"% weighted average";
}