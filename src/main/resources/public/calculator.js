//All inputted values

//Variable for number of assignments. Incremented/Decremented with adding/removing assignments
var numAss = 4;
var percentages = [];
var weights = [];

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
    '<input type="number" '+"name="+IDtag+"weight "+"id="+IDtag+"weight "+'value="0" onchange="percentCalculator(this.id)"/>';
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
    if(numAss < 0) {
        numAss=0;
    }
    var table = document.getElementById("maintable");
    table.deleteRow(-1);    
}


function percentCalculator(id) {
    let score;
    let total;
    let percent;
    weights[Number(id.charAt(1))] = document.getElementById("A"+id.charAt(1)+"weight").value;
    switch(id.charAt(2)) {
        case "t":
            score = Number(document.getElementById("A"+id.charAt(1)+"score").value);
            total = Number(document.getElementById(id).value);
            if(total <= 0 || (score > total)) {
                document.getElementById("P"+id.charAt(1)).innerHTML = "";
                break;
            }
            percent = ((score/total)*100).toFixed(2);
            percentages[Number(id.charAt(1))] = percent;
            document.getElementById("P"+id.charAt(1)).innerHTML = percent + "%";
            break;

        case "s":
            score = Number(document.getElementById(id).value);
            total = Number(document.getElementById("A"+id.charAt(1)+"total").value);
            if(total <= 0 || (score > total)) {
                document.getElementById("P"+id.charAt(1)).innerHTML = "";
                break;
            }
            percent = ((score/total)*100).toFixed(2);
            percentages[Number(id.charAt(1))] = percent;
            document.getElementById("P"+id.charAt(1)).innerHTML = percent + "%";
            break;
    }
    console.log(percentages[Number(id.charAt(1))]);
}



function getWeight() {
    let i, rval = 0, 
    actualAss = numAss,
    totalweight = 0;

    for(i=1; i<=numAss; i++) {
        if(percentages[i] === undefined) {
            actualAss--;
            continue;
        }
        rval += Number(percentages[i])*Number(weights[i]);
        console.log(weights[i]);
        totalweight += Number(weights[i]);
    }
    document.getElementById("result").innerHTML = "Result: " + (rval/totalweight).toFixed(2)+"% is the weighted mean";
}

function getMean() {
    let i, rval = 0, actualAss = numAss;

    for(i=1; i<=numAss; i++) {
        if(percentages[i] === undefined) {
            actualAss--;
            continue;
        }
        rval += Number(percentages[i]);
    }
    document.getElementById("result").innerHTML = "Result: " + (rval/actualAss).toFixed(2) +"% is the mean";
    return;
}