let myGraph = document.getElementById('myGraph');
let trace1 ={};
trace1.mode ="lines+markers";
trace1.type ="scatter";
trace1.visible = true;
trace1.x =[];
trace1.y =[];
trace1.text = [];
trace1.textposition = "bottom center";
trace1.textfont = {
    family: "Raleway, sans-serif",
    size:5
}
trace1.name = "男生";
trace1.marker = {
    size:10
};
for(let i=0;i < set1.length;i++){
    trace1.x[i] = set1 [i][0];
    trace1.y[i] = set1 [i][1];
    trace1.text[i] = set1[i][2];
}
let trace2={};
trace2.mode ="lines+markers";
trace2.type ="scatter";
trace2.visible = false;
trace2.x =[];
trace2.y =[];
trace2.text = [];
trace2.name = "女生";
trace2.marker = {
    size:10
};
trace2.textfont = {
    family: "Raleway, sans-serif",
    size:5
}
for(let i=0; i<set2.length; i++) {
    trace2.x[i] =set2[i][0];
    trace2.y[i] =set2[i][1];
    trace2.text[i] = set2[i][2];
}
let trace3 ={};
trace3.mode ="lines+markers";
trace3.type ="scatter";
trace3.visible = false;
trace3.x =[];
trace3.y =[];
trace3.text = [];
trace3.name = "合計";
trace3.marker = {
    size:10
};
trace3.textfont = {
    family: "Raleway, sans-serif",
    size:5
}
for(let i=0; i<set3.length; i++) {
    trace3.x[i] =set3[i][0];
    trace3.y[i] =set3[i][1];
    trace3.text[i] = set3[i][2];
}
let data =[];
data.push(trace1);
data.push(trace2);
data.push(trace3);
let layout ={
    margin:{
        t:50
    },
    xaxis:{
        range:[99,110]
    },
    yaxis:{
        range:[7,19]
    },
    title : '30-70歲四大非傳染病之死亡機率',
    updatemenus:[
        {
            y:2,
            x:2,
            yanchor:'top',
            buttons:[
                {
                    method:'restyle',
                    args:['visible',[true, false, false]],
                    label:'男生'
                },
                {
                    method:'restyle',
                    args:['visible',[false, true, false]],
                    label:'女生'
                },
                {
                    method:'restyle',
                    args:['visible',[false, false, true]],
                    label:'合計'
                },
                {
                    method:'restyle',
                    args:['visible',[true, true, true]],
                    label:'全部展示'
                },
            ]
        }
    ]


};
Plotly.newPlot(myGraph, data, layout);
