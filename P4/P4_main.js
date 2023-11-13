let P4_myGraph = document.getElementById('P4_myGraph');
let P4_trace1 ={};
P4_trace1.type ="pie";
P4_trace1.title = "國軍退除役官兵輔導委員會就學補助獎勵統計" ;
P4_trace1.labels = [];
P4_trace1.values = [];
P4_trace1.hole = 0.5;
P4_trace1.domain = {
    row : 0,
    column : 0
};
for(let i=0;i < evaluation_ratio_1.length;i++){
    P4_trace1.labels[i] = evaluation_ratio_1 [i]['name'];
    P4_trace1.values[i] = evaluation_ratio_1 [i]['count'];
}

let P4_data =[];
P4_data.push(P4_trace1);


let P4_layout ={
    margin:{
        t:10,
        l:0,
    }
    
};
Plotly.newPlot(P4_myGraph, P4_data, P4_layout);
