let P2_myGraph = document.getElementById('P2_myGraph');
let P2_trace1 ={};
P2_trace1.mode ="lines+markers";
P2_trace1.type ="scatter";
P2_trace1.visible = true;
P2_trace1.x =[];
P2_trace1.y =[];
P2_trace1.text = [];
P2_trace1.textposition = "bottom center";
P2_trace1.textfont = {
    family: "Raleway, sans-serif",
    size:5
}
P2_trace1.name = "男生";
P2_trace1.marker = {
    size:10
};
for(let i=0;i < P2_set1.length;i++){
    P2_trace1.x[i] = P2_set1 [i][0];
    P2_trace1.y[i] = P2_set1 [i][1];
    P2_trace1.text[i] = P2_set1[i][2];
}
let P2_trace2={};
P2_trace2.mode ="lines+markers";
P2_trace2.type ="scatter";
P2_trace2.visible = false;
P2_trace2.x =[];
P2_trace2.y =[];
P2_trace2.text = [];
P2_trace2.name = "女生";
P2_trace2.marker = {
    size:10
};
P2_trace2.textfont = {
    family: "Raleway, sans-serif",
    size:5
}
for(let i=0; i<P2_set2.length; i++) {
    P2_trace2.x[i] =P2_set2[i][0];
    P2_trace2.y[i] =P2_set2[i][1];
    P2_trace2.text[i] = P2_set2[i][2];
}
let P2_trace3 ={};
P2_trace3.mode ="lines+markers";
P2_trace3.type ="scatter";
P2_trace3.visible = false;
P2_trace3.x =[];
P2_trace3.y =[];
P2_trace3.text = [];
P2_trace3.name = "合計";
P2_trace3.marker = {
    size:10
};
P2_trace3.textfont = {
    family: "Raleway, sans-serif",
    size:5
}
for(let i=0; i<P2_set3.length; i++) {
    P2_trace3.x[i] =P2_set3[i][0];
    P2_trace3.y[i] =P2_set3[i][1];
    P2_trace3.text[i] = P2_set3[i][2];
}
let P2_data =[];
P2_data.push(P2_trace1);
P2_data.push(P2_trace2);
P2_data.push(P2_trace3);
let P2_layout ={
    margin:{
        t:0
    },
    
    title : '公教人員保險育嬰留職停薪津貼統計',
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
Plotly.newPlot(P2_myGraph, P2_data, P2_layout);
