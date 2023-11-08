let A5_myGraph = document.getElementById('A5_myGraph');
let A5_trace1 ={};
A5_trace1.type ="pie";
A5_trace1.title = "機器學習概論" ;
A5_trace1.labels = [];
A5_trace1.values = [];
A5_trace1.hole = 0.5;
A5_trace1.domain = {
    row : 0,
    column : 0
};
for(let i=0;i < A5_evaluation_ratio_1.length;i++){
    A5_trace1.labels[i] = A5_evaluation_ratio_1 [i]['name'];
    A5_trace1.values[i] = A5_evaluation_ratio_1 [i]['count'];
    
}
let A5_trace2 ={};
A5_trace2.type ="pie";
A5_trace2.title = " 資料視覺化" ;
A5_trace2.hole = 0.5;
A5_trace2.labels = [];
A5_trace2.values = [];
A5_trace2.domain = {
    row : 0,
    column : 1
};
for(let x=0;x < A5_evaluation_ratio_2.length;x++){
    A5_trace2.labels[x] = A5_evaluation_ratio_2 [x]['name'];
    A5_trace2.values[x] = A5_evaluation_ratio_2 [x]['count'];
    
}
let A5_trace3 ={};
A5_trace3.type ="pie";
A5_trace3.title = "人工智慧與永續發展" ;
A5_trace3.labels = [];
A5_trace3.hole = 0.5;
A5_trace3.values = [];
A5_trace3.domain = {
    row : 1,
    column : 0
};
for(let i=0;i < A5_evaluation_ratio_3.length;i++){
    A5_trace3.labels[i] = A5_evaluation_ratio_3 [i]['name'];
    A5_trace3.values[i] = A5_evaluation_ratio_3 [i]['count'];
    
}
let A5_trace4 ={};
A5_trace4.type ="pie";
A5_trace4.title = "Python程式設計" ;
A5_trace4.labels = [];
A5_trace4.hole = 0.5;
A5_trace4.values = [];
A5_trace4.domain = {
    row : 1,
    column : 1
};
for(let i=0;i < A5_evaluation_ratio_4.length;i++){
    A5_trace4.labels[i] = A5_evaluation_ratio_4 [i]['name'];
    A5_trace4.values[i] = A5_evaluation_ratio_4 [i]['count'];
    
}
let A5_data =[];
A5_data.push(A5_trace1);
A5_data.push(A5_trace2);
A5_data.push(A5_trace3);
A5_data.push(A5_trace4);
//data.push(trace2);
//data.push(trace3);
let A5_layout ={
    margin:{
        t:10,
        l:0,
    },
    grid:{
        rows :2,
        columns :2
    }
};
Plotly.newPlot(A5_myGraph, A5_data, A5_layout);
