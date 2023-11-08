let A4_myGraph = document.getElementById('A4_myGraph');
let A4_trace1 ={};
A4_trace1.type ="bar";
A4_trace1.name = "lion";
A4_trace1.x =[];
A4_trace1.y =[];

A4_trace1.x[0] = "Taipei_Zoo";
A4_trace1.y[0] = A4_animals_Taipei_Zoo[0]['count'];
A4_trace1.x[1] = "Taoyuan_Zoo";
A4_trace1.y[1] = A4_animals_Taoyuan_Zoo[0]['count'];
A4_trace1.text = A4_trace1.y;
A4_trace1.textfont = {
    color : 'white',
    size : 20
}
/*
for(let i=0;i < animals_Taipei_Zoo.length;i++){
    trace1.x[i] = animals_Taipei_Zoo [i]['name'];
    trace1.y[i] = animals_Taipei_Zoo [i]['count'];
    
}
*/
let A4_trace2 ={};
A4_trace2.type ="bar";
A4_trace2.name = "tiger";
A4_trace2.x =[];
A4_trace2.y =[];
A4_trace2.x[0] = "Taipei_Zoo";
A4_trace2.y[0] = A4_animals_Taipei_Zoo[1]['count'];
A4_trace2.x[1] = "Taoyuan_Zoo";
A4_trace2.y[1] = A4_animals_Taoyuan_Zoo[1]['count'];
A4_trace2.text = A4_trace2.y;
A4_trace2.textfont = {
    color : 'white',
    size : 20
}
/*
for(let i=0;i < animals_Taoyuan_Zoo.length;i++){
    trace2.x[i] = animals_Taoyuan_Zoo [i]['name'];
    trace2.y[i] = animals_Taoyuan_Zoo [i]['count'];
    
}
*/
let A4_trace3 ={};
A4_trace3.type ="bar";
A4_trace3.name = "monkey";
A4_trace3.x =[];
A4_trace3.y =[];
A4_trace3.x[0] = "Taipei_Zoo";
A4_trace3.y[0] = A4_animals_Taipei_Zoo[2]['count'];
A4_trace3.x[1] = "Taoyuan_Zoo";
A4_trace3.y[1] = A4_animals_Taoyuan_Zoo[2]['count'];
A4_trace3.text = A4_trace3.y;
A4_trace3.textfont = {
    color : 'white',
    size : 20
}
let A4_data =[];
A4_data.push(A4_trace1);
A4_data.push(A4_trace2);
A4_data.push(A4_trace3);
let A4_layout ={
    margin:{
        t:50
    } ,
    barmode : 'stack',
    title : 'Taipei Zoo VS. Taoyuan Zoo'
};
Plotly.newPlot(A4_myGraph, A4_data, A4_layout);
