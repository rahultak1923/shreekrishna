const url = "https://opensheet.elk.sh/175kbZbYmBhhykD_Jq1vOkKucru85w-8UmcB-lsjJpWA/Sheet1?raw=true";

fetch(url)
.then(res => res.json())
.then(data => {

    if (!data.length) return;

    const tableHead = document.getElementById("tableHead");
    const tableBody = document.getElementById("tableBody");
    const mainHeading = document.getElementById("mainHeading");

    tableHead.innerHTML = "";
    tableBody.innerHTML = "";

    // 🔥 Heading Google Sheet ke first row ke first column se
    mainHeading.textContent = "आरती व मंदिर समय सारणी";

    // 🔥 Create Table Header (Dynamic)
    Object.keys(data[0]).forEach(key => {
        const th = document.createElement("th");
        th.textContent = key;
        tableHead.appendChild(th);
    });

    // 🔥 Create Table Rows (Fully Dynamic)
    data.forEach(row => {
        const tr = document.createElement("tr");

        Object.values(row).forEach(value => {
            const td = document.createElement("td");
            td.textContent = value;
            tr.appendChild(td);
        });

        tableBody.appendChild(tr);
    });

})
.catch(error => console.error("Error:", error));