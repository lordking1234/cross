let children_data = 
[{"decade":"18th","com_num":2,"com_loc":3,"com_job":7,"com_jobs":15,"cum_num":2,"cum_loc":3,"cum_job":7,"cum_jobs":15},{"decade":"19th","com_num":20,"com_loc":16,"com_job":30,"com_jobs":68,"cum_num":22,"cum_loc":19,"cum_job":37,"cum_jobs":83},{"decade":"20th","com_num":164,"com_loc":37,"com_job":145,"com_jobs":348,"cum_num":186,"cum_loc":56,"cum_job":182,"cum_jobs":431},{"decade":"21th","com_num":130,"com_loc":23,"com_job":85,"com_jobs":258,"cum_num":316,"cum_loc":79,"cum_job":267,"cum_jobs":689}]
const newData = children_data.reduce((t,i)=>{
  return {...t,
    date:[...t.date,i.decade],
    com_nums:[...t.com_nums,i.com_num] ,
    com_locs:[...t.com_locs,i.com_loc] ,
    com_jobs:[...t.com_jobs,i.com_job] ,
    cum_nums:[...t.cum_nums,i.cum_num] ,
    cum_locs:[...t.cum_locs,i.cum_loc] ,
    cum_jobs:[...t.cum_jobs,i.cum_job] ,
    com_jobss:[...t.com_jobss,i.com_jobs] ,
    cum_jobss:[...t.cum_jobss,i.cum_jobs] 

  }

},{date:[],com_nums:[],com_locs:[],com_jobs:[],cum_nums:[],cum_locs:[],cum_jobs:[],com_jobss:[],cum_jobss:[]});

  
        var chart000 = {
          series: [{
          name: '',
          type: 'area',
          data: newData.com_nums
        },{
          name: '',
          type: 'area',
          data: newData.cum_nums
        }],
          chart: {
          height: 350,
          type: 'line',
          stacked: false,
        },
        stroke: {
          width: [0, 2, 5],
          curve: 'smooth'
        },
        plotOptions: {
          bar: {
            columnWidth: '50%'
          }
        },
        
        fill: {
          opacity: [0.85, 0.25, 1],
          gradient: {
            inverseColors: false,
            shade: 'light',
            type: "vertical",
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100]
          }
        },
        labels: newData.date,
        markers: {
          size: 0
        },
        xaxis: {
          type: 'Century'
        },
        yaxis: {
          title: {
            text: 'Number of Companies',
          },
          min: 0
        },
        annotations: {
          xaxis: [{
            x: 1976 ,
            borderColor: '#999',
            yAxisIndex: 0,
            label: {
              show: true,
              text: 'Jump',
              style: {
                color: "#fff",
                background: '#775DD0'
              }
            }
          }]
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 100]
          }
        },
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function (y) {
              if (typeof y !== "undefined") {
                return y.toFixed(0) + " Company";
              }
              return y;
        
            }
          }
        }
        };

        var chart = new ApexCharts(document.getElementById("chart000"), chart000);
        chart.render();
  
//------------------------------------------------------------------------------



var chart1112 = {
  series: [{
  name: '',
  type: 'area',
  data: newData.com_jobss
},{
  name: '',
  type: 'area',
  data:  newData.cum_jobss
}],
  chart: {
  height: 350,
  type: 'line',
  stacked: false,
},
stroke: {
  width: [0, 2, 5],
  curve: 'smooth'
},
plotOptions: {
  bar: {
    columnWidth: '50%'
  }
},

fill: {
  opacity: [0.85, 0.25, 1],
  gradient: {
    inverseColors: false,
    shade: 'light',
    type: "vertical",
    opacityFrom: 0.85,
    opacityTo: 0.55,
    stops: [0, 100, 100, 100]
  }
},
labels:  newData.date,
markers: {
  size: 0
},
xaxis: {
  type: 'year'
},
yaxis: {
  title: {
    text: 'Number of jobs',
  },
  min: 0
},
annotations: {
  xaxis: [{
    x: 1977 ,
    borderColor: '#999',
    yAxisIndex: 0,
    label: {
      show: true,
      text: 'First Jump',
      style: {
        color: "#fff",
        background: '#775DD0'
      }
    }
  },{
    x: 2001 ,
    borderColor: '#999',
    yAxisIndex: 0,
    label: {
      show: true,
      text: 'Second Jump',
      style: {
        color: "#fff",
        background: '#708DD0'
      }
    }
  },{
    x: 2010 ,
    borderColor: '#999',
    yAxisIndex: 0,
    label: {
      show: true,
      text: 'Third Jump',
      style: {
        color: "#fff",
        background: '#757DD0'
      }
    }
  }]
},
fill: {
  type: 'gradient',
  gradient: {
    shadeIntensity: 1,
    opacityFrom: 0.7,
    opacityTo: 0.9,
    stops: [0, 100]
  }
},
tooltip: {
  shared: true,
  intersect: false,
  y: {
    formatter: function (y) {
      if (typeof y !== "undefined") {
        return y.toFixed(0) + " jobs";
      }
      return y;

    }
  }
}
};

var chart = new ApexCharts(document.getElementById("chart1112"), chart1112);
chart.render();



//------------------------------------------------------------------------------------------
        

let childrens = 

[{"jj":"CA","maxs":155},{"jj":"IL","maxs":145},{"jj":"MA","maxs":136},{"jj":"NJ","maxs":132},{"jj":"DC","maxs":132},{"jj":"NC","maxs":128},{"jj":"KY","maxs":128},{"jj":"RI","maxs":126},{"jj":"MD","maxs":126},{"jj":"NY","maxs":125}]
const new2= childrens.reduce((t,i)=>{
  return {...t,
    jjs:[...t.jjs,i.jj],
    maxss:[...t.maxss,i.maxs] 
  }

},{maxss:[],jjs:[]});


var chart88 = {
  series: [{
    data: new2.maxss
  }],
    chart: {
    type: 'area',
    height: 350
  },
  annotations: {
    xaxis: [{
      x: 10,
      borderColor: '#00E396',
      label: {
        borderColor: '#00E396',
        style: {
          color: '#fff',
          background: '#00E396',
        },
        text: 'Under 10',
      }
    }],
    yaxis: [{
      y: '',
      y2: '',
      label: {
        text: ''
      }
    }]
  },
  plotOptions: {
    bar: {
      horizontal: true
    }
  },
  dataLabels: {
    enabled: true
  },
  xaxis: {
    categories:new2.jjs ,
  },
  grid: {
    xaxis: {
      lines: {
        show: true
      }
    }
  },
  yaxis: {
    reversed: false,
    axisTicks: {
      show: true
    }
  }
  };

var chart = new ApexCharts(document.getElementById("chart88"), chart88);
chart.render();





let childrenss = 

[{"jj":"NE","mins":39},{"jj":"SC","mins":39},{"jj":"ID","mins":40},{"jj":"LA","mins":40},{"jj":"AL","mins":41},{"jj":"DE","mins":42},{"jj":"WI","mins":54},{"jj":"NM","mins":55},{"jj":"GA","mins":56},{"jj":"IA","mins":56}]
const new3= childrenss.reduce((t,i)=>{
  return {...t,
    jjss:[...t.jjss,i.jj],
    minss:[...t.minss,i.mins] 
  }

},{minss:[],jjss:[]});


var chart99 = {
  series: [{
    data: new3.minss
  }],
    chart: {
    type: 'area',
    height: 350
  },
  annotations: {
    xaxis: [{
      x: 10,
      borderColor: '#00E396',
      label: {
        borderColor: '#00E396',
        style: {
          color: '#fff',
          background: '#00E396',
        },
        text: 'Under 10',
      }
    }],
    yaxis: [{
      y: '',
      y2: '',
      label: {
        text: ''
      }
    }]
  },
  plotOptions: {
    bar: {
      horizontal: true
    }
  },
  dataLabels: {
    enabled: true
  },
  xaxis: {
    categories:new3.jjss ,
  },
  grid: {
    xaxis: {
      lines: {
        show: true
      }
    }
  },
  yaxis: {
    reversed: false,
    axisTicks: {
      show: true
    }
  }
  };

var chart = new ApexCharts(document.getElementById("chart99"), chart99);
chart.render();




let children = 
[{"job_state":"CA","com_numm":81},{"job_state":"NY","com_numm":40},{"job_state":"MA","com_numm":33},{"job_state":"VA","com_numm":19},{"job_state":"IL","com_numm":18},{"job_state":"MD","com_numm":17},{"job_state":"TX","com_numm":16},{"job_state":"NJ","com_numm":12},{"job_state":"PA","com_numm":11},{"job_state":"WA","com_numm":9}]
const new1= children.reduce((t,i)=>{
  return {...t,
    job_states:[...t.job_states,i.job_state],
    com_numms:[...t.com_numms,i.com_numm] 
  }

},{job_states:[],com_numms:[]});

var chart00 = {
  series: [{
    data: new1.com_numms
  }],
    chart: {
    type: 'bar',
    height: 350
  },
  annotations: {
    xaxis: [{
      x: 10,
      borderColor: '#00E396',
      label: {
        borderColor: '#00E396',
        style: {
          color: '#fff',
          background: '#00E396',
        },
        text: 'Under 10',
      }
    }],
    yaxis: [{
      y: '',
      y2: '',
      label: {
        text: ''
      }
    }]
  },
  plotOptions: {
    bar: {
      horizontal: true
    }
  },
  dataLabels: {
    enabled: true
  },
  xaxis: {
    categories:new1.job_states ,
  },
  grid: {
    xaxis: {
      lines: {
        show: true
      }
    }
  },
  yaxis: {
    reversed: false,
    axisTicks: {
      show: true
    }
  }
  };

var chart = new ApexCharts(document.getElementById("chart00"), chart00);
chart.render();



//----------------------------------------------------------------------------------



  
        var chart11 = {
          series: [{
          name: '',
          type: 'area',
          data: newData.com_locs
        },{
          name: '',
          type: 'area',
          data: newData.cum_locs
        }],
          chart: {
          height: 350,
          type: 'line',
          stacked: false,
        },
        stroke: {
          width: [0, 2, 5],
          curve: 'smooth'
        },
        plotOptions: {
          bar: {
            columnWidth: '50%'
          }
        },
        
        fill: {
          opacity: [0.85, 0.25, 1],
          gradient: {
            inverseColors: false,
            shade: 'light',
            type: "vertical",
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100]
          }
        },
        labels: newData.date,
        markers: {
          size: 0
        },
        xaxis: {
          type: 'Century'
        },
        yaxis: {
          title: {
            text: 'Number of States',
          },
          min: 0
        },
        annotations: {
          xaxis: [{
            x: 1981 ,
            borderColor: '#999',
            yAxisIndex: 0,
            label: {
              show: true,
              text: 'First Jump',
              style: {
                color: "#fff",
                background: '#775DD0'
              }
            }
          },{
            x: 1994 ,
            borderColor: '#999',
            yAxisIndex: 0,
            label: {
              show: true,
              text: 'Second Jump',
              style: {
                color: "#fff",
                background: '#775DD0'
              }
            }
          }]
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 100]
          }
        },
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function (y) {
              if (typeof y !== "undefined") {
                return y.toFixed(0) + " state";
              }
              return y;
        
            }
          }
        }
        };

        var chart = new ApexCharts(document.getElementById("chart11"), chart11);
        chart.render();
  //-----------------------------------------------------------------------------


  var chart111 = {
    series: [{
    name: '',
    type: 'area',
    data: newData.com_jobs
  },{
    name: '',
    type: 'area',
    data:  newData.cum_jobs
  }],
    chart: {
    height: 350,
    type: 'line',
    stacked: false,
  },
  stroke: {
    width: [0, 2, 5],
    curve: 'smooth'
  },
  plotOptions: {
    bar: {
      columnWidth: '50%'
    }
  },
  
  fill: {
    opacity: [0.85, 0.25, 1],
    gradient: {
      inverseColors: false,
      shade: 'light',
      type: "vertical",
      opacityFrom: 0.85,
      opacityTo: 0.55,
      stops: [0, 100, 100, 100]
    }
  },
  labels:  newData.date,
  markers: {
    size: 0
  },
  xaxis: {
    type: 'year'
  },
  yaxis: {
    title: {
      text: 'Number of jobs',
    },
    min: 0
  },
  annotations: {
    xaxis: [{
      x: 1977 ,
      borderColor: '#999',
      yAxisIndex: 0,
      label: {
        show: true,
        text: 'First Jump',
        style: {
          color: "#fff",
          background: '#775DD0'
        }
      }
    },{
      x: 2001 ,
      borderColor: '#999',
      yAxisIndex: 0,
      label: {
        show: true,
        text: 'Second Jump',
        style: {
          color: "#fff",
          background: '#708DD0'
        }
      }
    },{
      x: 2010 ,
      borderColor: '#999',
      yAxisIndex: 0,
      label: {
        show: true,
        text: 'Third Jump',
        style: {
          color: "#fff",
          background: '#757DD0'
        }
      }
    }]
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 100]
    }
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (y) {
        if (typeof y !== "undefined") {
          return y.toFixed(0) + " jobs";
        }
        return y;
  
      }
    }
  }
  };

  var chart = new ApexCharts(document.getElementById("chart111"), chart111);
  chart.render();





//-------------------------------------------------------------------------



var chart22 = {
  title: {
    text: '',
    subtext: '',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'horizontal',
    left: 'left'
  },
  series: [
    {
      name: '',
      type: 'pie',
      label: {  show: false
      },
      color: [
        '#ccf9ff',
        '#7ce8ff',
       '#55d0ff',
       '#00acdf',
       '#0080bf',
       '#0040bf'],
      radius: ['50%','10'],
      data: [

        { value: 929, name: '0-10' },
        { value: 120, name: '10-50' },
        { value: 31, name: '50-100' },
        { value: 16, name: '100-200' },
        { value: 11, name: '200-500' },
        { value: 5, name: 'more than 500' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};

echarts.init(document.getElementById('chart22')).setOption(chart22);



//-------------------------------------------------------------------------


chart222 = {
  title: {
    text: '',
    subtext: '',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'horizontal',
    left: 'left'
  },
  series: [
    {
      name: '',
      type: 'pie',
      label: {  show: false
      },
      color: [
        '#ccf9ff',
        '#7ce8ff',
       '#55d0ff',
       '#00acdf',
       '#0080bf',
       '#0040bf'],
      radius: ['50%','10'],
      data: [

        { value: 141, name: '0-10k' },
        { value: 311, name: '10k-100k' },
        { value: 281, name: '100k-1m' },
        { value: 206, name: '1m-10m' },
        { value: 101, name: '10m-100m' },
        { value: 45, name: '100m-1b' },
        { value: 2, name: 'more than 1b' }

      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};

echarts.init(document.getElementById('chart222')).setOption(chart222);












