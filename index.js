
let myDataArray = [];

function addItemToArray() {
    const inputNames = document.getElementById("name-input");
    const nameValue = inputNames.value.trim();
    const outputList = document.getElementById("outputList")

    if (nameValue !=='') {
        myDataArray.push(nameValue);
        inputNames.value = '';

        localStorage.setItem('names', JSON.stringify(myDataArray));

        displayArray();

    }else {
        alert('Please enter a value');
    }

    function goToOutputPage() {
      window.location.href = "output.html";
    }
}

function displayArray() {
    const outputList = document.getElementById("outputList");
    outputList.innerHTML = '';

    myDataArray.forEach(name => {
        const li = document.createElement("li");
        li.textContent = name;
        outputList.appendChild(li);
    });
}
function goToOutputPage() {
    window.location.href = "output.html";
}







