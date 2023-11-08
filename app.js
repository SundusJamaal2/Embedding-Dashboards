console.log('B2S')

// let viz = new tableau.Viz(placeholderDiv, url, options);

let placeholderDiv = document.getElementById ("tableauViz");

let Viz;

//create variable to store URL
let url = "https://public.tableau.com/views/EmbeddingWorkbookProfitsAcrossME-Asia/OfficeSupplyProfitsacrossMEandAsia?:language=en-US&:display_count=n&:origin=viz_share_link";

// Create Variable to give Viz options
let options = {
    devive: "desktop",
    height: "900px",
    width: "1400px",
};

function initViz() {
    console.log("Viz is Ready!");
    Viz = new tableau.Viz(placeholderDiv, url, options);
}


// Listen to the content being loaded, when finished, load the viz

document.addEventListener("DOMContentLoaded", initViz)

// Find our buttons in the html file
let exportpdfbutton = document.getElementById("exportPDF");
let exportpptbutton = document.getElementById("exportPPT");

let filterValuesButton = document.getElementById
("FilterButton")

// Listen for a Click
exportpdfbutton.addEventListener("click", exportpdffunction)
exportpptbutton.addEventListener("click", exportpptfunction)

filterValuesButton.addEventListener("click", 
getRangevalues);

// Function when button is CLicked
function exportpdffunction() {
    Viz.showExportPDFDialog();
}
// Function when button is CLicked
function exportpptfunction() {
    Viz.showExportPowerPointDialog()
}

//get range values
function getRangevalues(){
    const minValue = document.getElementById
    ("minValue").value;
    const maxValue = document.getElementById
    ("maxValue").value;
    console.log(minValue, maxValue);

    const workbook = Viz.getWorkbook();
   
    let activeSheet = workbook.getActiveSheet();
    let sheets = activeSheet.getWorksheets();

    let sheetToFilter = sheets[0];
    console.log(sheetToFilter);

    //do the actual filtering
    sheetToFilter.applyRangeFilterAsync("SUM(Sales)",{min:minValue, max:maxValue}).then (alert("viz filtered"));
    


}