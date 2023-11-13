let P3_myGraph = document.getElementById('P3_myGraph');
let P3_trace1 ={};
P3_trace1.type ="bar";
P3_trace1.name = "男生";
P3_trace1.x =[];
P3_trace1.y =[];
/*
P3_trace1.x[0] = "Taipei_Zoo";
P3_trace1.y[0] = P3_boy[0]['count'];
P3_trace1.x[1] = "Taoyuan_Zoo";
P3_trace1.y[1] = P3_boy[0]['count'];
*/
P3_trace1.text = P3_trace1.y;
P3_trace1.textfont = {
    color : 'white',
    size : 10
}

for(let i=0;i < P3_boy.length;i++){
    P3_trace1.x[i] = P3_boy [i]['name'];
    P3_trace1.y[i] = P3_boy [i]['count'];
}

let P3_trace2 ={};
P3_trace2.type ="bar";
P3_trace2.name = "女生";
P3_trace2.x =[];
P3_trace2.y =[];
/*
P3_trace2.x[0] = "Taipei_Zoo";
P3_trace2.y[0] = P3_animals_Taipei_Zoo[1]['count'];
P3_trace2.x[1] = "Taoyuan_Zoo";
P3_trace2.y[1] = P3_animals_Taoyuan_Zoo[1]['count'];
*/
P3_trace2.text = P3_trace2.y;
P3_trace2.textfont = {
    color : 'white',
    size : 10
}

for(let i=0;i < P3_girl .length;i++){
    P3_trace2.x[i] = P3_girl  [i]['name'];
    P3_trace2.y[i] = P3_girl  [i]['count'];
}


let P3_data =[];
P3_data.push(P3_trace1);
P3_data.push(P3_trace2);

let P3_layout ={
    margin:{
        t:50
    } ,
    //barmode : 'stack',
    title : '桃園市各性別嬰兒出生數'
};
Plotly.newPlot(P3_myGraph, P3_data, P3_layout);
