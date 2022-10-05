// program to create a two dimensional array
const arr = [];
let pos = [];

let x = 0;

// creating two dimensional array
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        arr[i] = [];
    }
}

// inserting elements to array
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        arr[i][j] = '' + i + j;
    }
}

function position() {
    document.getElementById("searchbutton").style.display = "none"

    //location.reload();

    let i = document.querySelector('input').value;

    let input = Number(i)

    console.log(input)//The input position



    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {

            if ((input - 10) + 2 == arr[i][j]) {
                pos.push(arr[i][j])
            }
            if ((input + 10) + 2 == arr[i][j]) {
                pos.push(arr[i][j])
            }

            //condition 3
            if ((input - 10) - 2 == arr[i][j]) {
                pos.push(arr[i][j])
            }

            //condition4
            if ((input + 10) - 2 == arr[i][j]) {
                pos.push(arr[i][j])
            }

            //condition 5
            if ((input + 1) - 20 == arr[i][j]) {
                pos.push(arr[i][j])
            }

            //condition 6
            if ((input - 1) - 20 == arr[i][j]) {
                pos.push(arr[i][j])
            }

            //condition 7
            if ((input + 20) - 1 == arr[i][j]) {
                pos.push(arr[i][j])
            }

            //condition 8
            if ((input + 20) + 1 == arr[i][j]) {
                pos.push(arr[i][j])
            }

        }
    }

    console.log(pos)

    for (var k = 0; k < pos.length; k++) {
        document.getElementById(pos[k]).style.background = "red";
    }

    document.getElementById(input).style.background = "green";
}
