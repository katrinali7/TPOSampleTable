class Teacher {
    constructor(location, firstName, lastName, teacherID, overall, mosl, motp, oneA, oneE, twoA, twoD, threeB, threeC, threeD, fourE) {
    this.location = location;
    this.firstName = firstName;
    this.lastName = lastName;
    this.teacherID = teacherID;
    this.overall = overall;
    this.mosl = mosl;
    this.motp = motp;
    this.oneA = oneA;
    this.oneE = oneE;
    this.twoA = twoA;
    this.twoD = twoD;
    this.threeB = threeB;
    this.threeC = threeC;
    this.threeD = threeD;
    this.fourE = fourE;
    }
}

var bobby = new Teacher("01K123", "BUTLER", "BOBBY", 123456789, "Effective", "E", 3.60, 3.75, 3.00, 3.00, 3.00, 3.00, 3.00, 3.00, 3.75);
var carol = new Teacher("02M123", "CARTWRIGHT", "CAROL", 123456780, "Effective", "E", 3.00, 3.00, 3.00, 3.20, 3.00, 3.00, 3.00, 3.00, 3.00);
var diana = new Teacher("03Q123", "DIAZ", "DIANA", 123456781, "Effective", "E", 3.60, 3.00, 3.10, 3.00, 3.00, 3.20, 3.00, 3.75, 3.75);
var elizabeth = new Teacher("04R123", "EVANS", "ELIZABETH", 123456782, "Ineffective", "I", 2.88, 3.00, 3.00, 3.00, 2.32, 3.00, 3.50, 2.32, 3.00);

var fullList = [bobby, carol, diana, elizabeth];

// alert('Hello ' + fullList[1].lastName + " " + fullList[1].firstName);

function setBackground(cel) {
    if (cel > 3.25) {
        document.write("<td bgcolor=\"bisque\">"+ cel +"</td>");
    } else if (cel >= 3) {
        document.write("<td bgcolor=\"aquamarine\">"+ cel +"</td>");
    } else {
        document.write("<td bgcolor=\"aliceblue\">"+ cel +"</td>");
    }
}

function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("teacherTable");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc"; 
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
      // Start by saying: no switching is done:
      switching = false;
      rows = table.getElementsByTagName("tr");
      /* Loop through all table rows (except the
      first, which contains table headers): */
      for (i = 2; i < (rows.length - 1); i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        /* Get the two elements you want to compare,
        one from current row and one from the next: */
        x = rows[i].getElementsByTagName("td")[n];
        y = rows[i + 1].getElementsByTagName("td")[n];
        /* Check if the two rows should switch place,
        based on the direction, asc or desc: */
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch= true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch= true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark that a switch has been done: */
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        // Each time a switch is done, increase this count by 1:
        switchcount ++; 
      } else {
        /* If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again. */
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }
