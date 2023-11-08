let A1_myGraph = document.getElementById("A1_myGraph");
Plotly.newPlot(A1_myGraph, [{
    x:[1,2,3,4,5],
    y:[1,2,4,8,16]
}], {
    margin:{
        t:20
    }
});