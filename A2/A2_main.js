A2_myGraph=document.getElementById('A2_myGraph');
let A2_trace1 ={};
A2_trace1.mode ="markers+text";
A2_trace1.type ="scatter";
A2_trace1.x =[];
A2_trace1.y =[];
A2_trace1.text = [];
A2_trace1.textposition = "bottom center";
A2_trace1.textfont = {
    family: "Raleway, sans-serif",
    size:10
}
A2_trace1.name = "Team A";
A2_trace1.marker = {
    size:10
};
for(let i=0;i < A2_set1.length;i++){
    A2_trace1.x[i] = A2_set1 [i][0];
    A2_trace1.y[i] = A2_set1 [i][1];
    A2_trace1.text[i] = A2_set1[i][2];
}
let A2_trace2={};
A2_trace2.mode ="lines";
A2_trace2.type ="scatter";
A2_trace2.x =[];
A2_trace2.y =[];
A2_trace2.text = [];
A2_trace2.name = "Team B";
for(let i=0; i<A2_set2.length; i++) {
    A2_trace2.x[i] =A2_set2[i][0];
    A2_trace2.y[i] =A2_set2[i][1];
    A2_trace2.text[i] = A2_set2[i][2];
}
let A2_trace3 ={};
A2_trace3.mode ="lines+markers";
A2_trace3.type ="scatter";
A2_trace3.x =[];
A2_trace3.y =[];
A2_trace3.text = [];
A2_trace3.name = "Team C";
for(let i=0; i<A2_set3.length; i++) {
    A2_trace3.x[i] =A2_set3[i][0];
    A2_trace3.y[i] =A2_set3[i][1];
    A2_trace3.text[i] = A2_set3[i][2];
}
let A2_data =[];
A2_data.push(A2_trace1);
A2_data.push(A2_trace2);
A2_data.push(A2_trace3);
let A2_layout ={
    margin:{
        t:0
    },
    xaxis:{
        range:[0,6]
    },
    yaxis:{
        range:[0,25]
    },
    title : 'Scatter& Line'

};
Plotly.newPlot(A2_myGraph, A2_data, A2_layout);
