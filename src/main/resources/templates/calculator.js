//All inputted values

//Variable for number of assignments. Incremented/Decremented with adding/removing assignments
var numAss = 4;

function addAssignment() {
    numAss++;
    var table = document.getElementById("maintable");
    var row = table.insertRow(-1);

    var 
    Name = document.createElement('th'),
    ShortName = document.createElement('th'),
    Weight = document.createElement('th'),
    Grade = document.createElement('th'),
    Percentage = document.createElement('th')
    IDtag = "A"+numAss;
    
    Name.innerHTML = "Activity " + numAss;
    ShortName.innerHTML = "A"+numAss;
    Weight.innerHTML =
    '<input type="number" '+"name="+IDtag+"weight "+"id="+IDtag+"weight "+'value="0"/>';
    Grade.innerHTML = 
    '<input type="number" '+"name="+IDtag+"score "+"id="+IDtag+"score "+'value="0" onchange="percentCalculator(this.id)"/>'
    +"/"+
    '<input type="number" '+"name="+IDtag+"total "+"id="+IDtag+"total "+'value="0" onchange="percentCalculator(this.id)"/>';
    Percentage.id = "P"+numAss;

    row.appendChild(Name);
    row.appendChild(ShortName);
    row.appendChild(Weight);
    row.appendChild(Grade);
    row.appendChild(Percentage);
}

function removeAssignment() {
    numAss--;
    var table = document.getElementById("maintable");
    table.deleteRow(-1);    
}


function percentCalculator(id) {
    let score;
    let total;
    switch(id.charAt(2)) {
        case "t":
            score = Number(document.getElementById("A"+id.charAt(1)+"score").value);
            total = Number(document.getElementById(id).value);
            if(total <= 0) {
                document.getElementById("P"+id.charAt(1)).innerHTML = "";
                break;
            }
            document.getElementById("P"+id.charAt(1)).innerHTML = ((score/total)*100).toFixed(2) + "%";
            break;

        case "s":
            score = Number(document.getElementById(id).value);
            total = Number(document.getElementById("A"+id.charAt(1)+"total").value);
            if(total <= 0) {
                document.getElementById("P"+id.charAt(1)).innerHTML = "";
                break;
            }
            document.getElementById("P"+id.charAt(1)).innerHTML = ((score/total)*100).toFixed(2) + "%";
            break;
    }
}

function getWeight2() {
    console.log(document.getElementById("P1").innerHTML);
    var totalscore = 0;
    var totalweight = 0;
    var flag = false;
    for(i=1; i<=numAss; i++) {
        let score = Number(document.getElementById("A" + i + "score").value);
        let total = Number(document.getElementById("A" + i + "total").value);
        if (total == 0) {
            flag = true;
            break;
        }
        let weight = Number(document.getElementById("A" + i + "weight").value);

        totalweight += weight;
        totalscore +=
            weight*(score/total);
    }
    if(flag == true) {
        return document.getElementById("result").innerHTML = "Invalid Input";
    }
    // document.getElementById("result").innerHTML += "Result: " + totalscore/totalweight;
    document.getElementById("result").innerHTML = "Result: " + (totalscore/totalweight)*100+"% weighted average";
}

function getMean2() {
    var totalscore = 0;
    var flag = false;
    for(i=1; i<=numAss; i++) {
        let score = Number(document.getElementById("A" + i + "score").value);
        let total = Number(document.getElementById("A" + i + "total").value);
        if (total == 0) { 
            flag = true; 
            break;
        }
    }
    if(flag == true) {
        return document.getElementById("result").innerHTML = "Invalid Input";
    }
    document.getElementById("result").innerHTML = "Result: " + (totalscore/numAss)*100+"% mean";
}


function getMean() {
    var totalscore = 0;
    var flag = false;
    for(i=1; i<=numAss; i++) {
        let score = Number(document.getElementById("A" + i + "score").value);
        let total = Number(document.getElementById("A" + i + "total").value);
        if (total == 0) { 
            flag = true; 
            break;
        }
    }
    if(flag == true) {
        return document.getElementById("result").innerHTML = "Invalid Input";
    }
    document.getElementById("result").innerHTML = "Result: " + (totalscore/numAss)*100+"% mean";
}

function getWeight() {
    console.log(document.getElementById("P1").innerHTML);
    var totalscore = 0;
    var totalweight = 0;
    var flag = false;
    for(i=1; i<=numAss; i++) {
        let score = Number(document.getElementById("A" + i + "score").value);
        let total = Number(document.getElementById("A" + i + "total").value);
        if (total == 0) {
            flag = true;
            break;
        }
        let weight = Number(document.getElementById("A" + i + "weight").value);

        totalweight += weight;
        totalscore +=
            weight*(score/total);
    }
    if(flag == true) {
        return document.getElementById("result").innerHTML = "Invalid Input";
    }
    // document.getElementById("result").innerHTML += "Result: " + totalscore/totalweight;
    document.getElementById("result").innerHTML = "Result: " + (totalscore/totalweight)*100+"% weighted average";
}