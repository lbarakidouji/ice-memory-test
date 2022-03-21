export const setEchartsTheme = (theme, isNeedSplitLine, splitLineColor) => {
  return theme === 'light'
    ? {
      color: [
        '#295ef3',
        '#ffa210',
        '#2aab16',
        '#f01f1f',
        '#FFB6C1',
        '#40E0D0',
        '#d87a80',
        '#8d98b3',
        '#e5cf0d',
        '#97b552',
        '#95706d',
        '#dc69aa',
        '#07a2a4',
        '#9a7fd1',
        '#588dd5',
        '#f5994e',
        '#c05050',
        '#59678c',
        '#c9ab00',
        '#7eb00a',
        '#6f5553',
        '#c14089',
      ],
      backgroundColor: 'rgba(0,0,0,0)',
      textStyle: {},
      title: {
        textStyle: {
          color: '#006f6b',
        },
        subtextStyle: {
          color: '#006f6b',
        },
      },
      line: {
        itemStyle: {
          borderWidth: 1,
        },
        lineStyle: {
          width: 2,
        },
        symbolSize: 3,
        symbol: 'emptyCircle',
        smooth: true,
      },
      radar: {
        itemStyle: {
          borderWidth: 1,
        },
        lineStyle: {
          width: 2,
        },
        symbolSize: 3,
        symbol: 'emptyCircle',
        smooth: true,
      },
      bar: {
        itemStyle: {
          barBorderWidth: 0,
          barBorderColor: '#ccc',
        },
      },
      pie: {
        itemStyle: {
          borderWidth: 0,
          borderColor: '#ccc',
        },
      },
      scatter: {
        itemStyle: {
          borderWidth: 0,
          borderColor: '#ccc',
        },
      },
      boxplot: {
        itemStyle: {
          borderWidth: 0,
          borderColor: '#ccc',
        },
      },
      parallel: {
        itemStyle: {
          borderWidth: 0,
          borderColor: '#ccc',
        },
      },
      sankey: {
        itemStyle: {
          borderWidth: 0,
          borderColor: '#ccc',
        },
      },
      funnel: {
        itemStyle: {
          borderWidth: 0,
          borderColor: '#ccc',
        },
      },
      gauge: {
        itemStyle: {
          borderWidth: 0,
          borderColor: '#ccc',
        },
      },
      candlestick: {
        itemStyle: {
          color: '#d87a80',
          color0: '#2ec7c9',
          borderColor: '#d87a80',
          borderColor0: '#2ec7c9',
          borderWidth: 1,
        },
      },
      graph: {
        itemStyle: {
          borderWidth: 0,
          borderColor: '#ccc',
        },
        lineStyle: {
          width: 1,
          color: '#aaaaaa',
        },
        symbolSize: 3,
        symbol: 'emptyCircle',
        smooth: true,
        color: [
          '#2ec7c9',
          '#b6a2de',
          '#5ab1ef',
          '#ffb980',
          '#d87a80',
          '#8d98b3',
          '#e5cf0d',
          '#97b552',
          '#95706d',
          '#dc69aa',
          '#07a2a4',
          '#9a7fd1',
          '#588dd5',
          '#f5994e',
          '#c05050',
          '#59678c',
          '#c9ab00',
          '#7eb00a',
          '#6f5553',
          '#c14089',
        ],
        label: {
          color: '#eeeeee',
        },
      },
      map: {
        itemStyle: {
          normal: {
            areaColor: '#dddddd',
            borderColor: '#eeeeee',
            borderWidth: 0.5,
          },
          emphasis: {
            areaColor: 'rgba(254,153,78,1)',
            borderColor: '#444',
            borderWidth: 1,
          },
        },
        label: {
          normal: {
            textStyle: {
              color: '#d87a80',
            },
          },
          emphasis: {
            textStyle: {
              color: 'rgb(100,0,0)',
            },
          },
        },
      },
      geo: {
        itemStyle: {
          normal: {
            areaColor: '#dddddd',
            borderColor: '#eeeeee',
            borderWidth: 0.5,
          },
          emphasis: {
            areaColor: 'rgba(254,153,78,1)',
            borderColor: '#444',
            borderWidth: 1,
          },
        },
        label: {
          normal: {
            textStyle: {
              color: '#d87a80',
            },
          },
          emphasis: {
            textStyle: {
              color: 'rgb(100,0,0)',
            },
          },
        },
      },
      categoryAxis: {
        axisLine: {
          show: true,
          lineStyle: {
            color: '#333333',
          },
        },
        axisTick: {
          show: false,
          lineStyle: {
            color: '#333333',
          },
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: '#333',
          },
        },
        splitLine: {
          show: isNeedSplitLine === '1',
          lineStyle: {
            color: [
              splitLineColor,
            ],
          },
        },
        splitArea: {
          show: false,
          areaStyle: {
            color: [
              'rgba(250,250,250,0.3)',
              'rgba(200,200,200,0.3)',
            ],
          },
        },
      },
      valueAxis: {
        axisLine: {
          show: true,
          lineStyle: {
            color: '#333333',
          },
        },
        axisTick: {
          show: false,
          lineStyle: {
            color: '#333333',
          },
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: '#333',
          },
        },
        splitLine: {
          show: isNeedSplitLine === '1',
          lineStyle: {
            color: [
              splitLineColor,
            ],
          },
        },
        splitArea: {
          show: false,
          areaStyle: {
            color: [
              'rgba(250,250,250,0.3)',
              'rgba(200,200,200,0.3)',
            ],
          },
        },
      },
      logAxis: {
        axisLine: {
          show: true,
          lineStyle: {
            color: '#333333',
          },
        },
        axisTick: {
          show: false,
          lineStyle: {
            color: '#333333',
          },
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: '#333',
          },
        },
        splitLine: {
          show: isNeedSplitLine === '1',
          lineStyle: {
            color: [
              splitLineColor,
            ],
          },
        },
        splitArea: {
          show: false,
          areaStyle: {
            color: [
              'rgba(250,250,250,0.3)',
              'rgba(200,200,200,0.3)',
            ],
          },
        },
      },
      timeAxis: {
        axisLine: {
          show: true,
          lineStyle: {
            color: '#008acd',
          },
        },
        axisTick: {
          show: false,
          lineStyle: {
            color: '#333',
          },
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: '#333',
          },
        },
        splitLine: {
          show: isNeedSplitLine === '1',
          lineStyle: {
            color: [
              splitLineColor,
            ],
          },
        },
        splitArea: {
          show: false,
          areaStyle: {
            color: [
              'rgba(250,250,250,0.3)',
              'rgba(200,200,200,0.3)',
            ],
          },
        },
      },
      toolbox: {
        iconStyle: {
          normal: {
            borderColor: '#2ec7c9',
          },
          emphasis: {
            borderColor: '#18a4a6',
          },
        },
      },
      legend: {
        textStyle: {
          color: '#333333',
        },
      },
      tooltip: {
        axisPointer: {
          lineStyle: {
            color: '#008acd',
            width: '1',
          },
          crossStyle: {
            color: '#008acd',
            width: '1',
          },
        },
      },
      timeline: {
        lineStyle: {
          color: '#006f6b',
          width: 1,
        },
        itemStyle: {
          normal: {
            color: '#006f6b',
            borderWidth: 1,
          },
          emphasis: {
            color: '#006f6b',
          },
        },
        controlStyle: {
          normal: {
            color: '#006f6b',
            borderColor: '#006f6b',
            borderWidth: 0.5,
          },
          emphasis: {
            color: '#006f6b',
            borderColor: '#006f6b',
            borderWidth: 0.5,
          },
        },
        checkpointStyle: {
          color: '#2ec7c9',
          borderColor: 'rgba(46,199,201,0.4)',
        },
        label: {
          normal: {
            textStyle: {
              color: '#006f6b',
            },
          },
          emphasis: {
            textStyle: {
              color: '#006f6b',
            },
          },
        },
      },
      visualMap: {
        color: [
          '#5ab1ef',
          '#e0ffff',
        ],
      },
      dataZoom: {
        backgroundColor: 'rgba(47,69,84,0)',
        dataBackgroundColor: 'rgba(239,239,255,1)',
        fillerColor: 'rgba(182,162,222,0.2)',
        handleColor: '#008acd',
        handleSize: '100%',
        textStyle: {
          color: '#333333',
        },
      },
      markPoint: {
        label: {
          color: '#eeeeee',
        },
        emphasis: {
          label: {
            color: '#eeeeee',
          },
        },
      },
    }
    : {
      color: [
        '#295ef3',
        '#ffa210',
        '#2aab16',
        '#f01f1f',
        '#FFB6C1',
        '#40E0D0',
        '#d87a80',
        '#8d98b3',
        '#e5cf0d',
        '#97b552',
        '#95706d',
        '#dc69aa',
        '#07a2a4',
        '#9a7fd1',
        '#588dd5',
        '#f5994e',
        '#c05050',
        '#59678c',
        '#c9ab00',
        '#7eb00a',
        '#6f5553',
        '#c14089',
      ],
      backgroundColor: 'rgba(0,0,0,0)',
      textStyle: {},
      title: {
        textStyle: {
          color: '#295ef3',
        },
        subtextStyle: {
          color: '#295ef3',
        },
      },
      line: {
        itemStyle: {
          borderWidth: 1,
        },
        lineStyle: {
          width: 2,
        },
        symbolSize: 3,
        symbol: 'emptyCircle',
        smooth: true,
      },
      radar: {
        itemStyle: {
          borderWidth: 1,
        },
        lineStyle: {
          width: 2,
        },
        symbolSize: 3,
        symbol: 'emptyCircle',
        smooth: true,
      },
      bar: {
        itemStyle: {
          barBorderWidth: 0,
          barBorderColor: '#ccc',
        },
      },
      pie: {
        itemStyle: {
          borderWidth: 0,
          borderColor: '#ccc',
        },
      },
      scatter: {
        itemStyle: {
          borderWidth: 0,
          borderColor: '#ccc',
        },
      },
      boxplot: {
        itemStyle: {
          borderWidth: 0,
          borderColor: '#ccc',
        },
      },
      parallel: {
        itemStyle: {
          borderWidth: 0,
          borderColor: '#ccc',
        },
      },
      sankey: {
        itemStyle: {
          borderWidth: 0,
          borderColor: '#ccc',
        },
      },
      funnel: {
        itemStyle: {
          borderWidth: 0,
          borderColor: '#ccc',
        },
      },
      gauge: {
        itemStyle: {
          borderWidth: 0,
          borderColor: '#ccc',
        },
      },
      candlestick: {
        itemStyle: {
          color: '#d87a80',
          color0: '#2ec7c9',
          borderColor: '#d87a80',
          borderColor0: '#2ec7c9',
          borderWidth: 1,
        },
      },
      graph: {
        itemStyle: {
          borderWidth: 0,
          borderColor: '#ccc',
        },
        lineStyle: {
          width: 1,
          color: '#aaa',
        },
        symbolSize: 3,
        symbol: 'emptyCircle',
        smooth: true,
        color: [
          '#295ef3',
          '#ffa210',
          '#2aab16',
          '#f01f1f',
        ],
        label: {
          color: '#eee',
        },
      },
      map: {
        itemStyle: {
          normal: {
            areaColor: '#dddddd',
            borderColor: '#eeeeee',
            borderWidth: 0.5,
          },
          emphasis: {
            areaColor: 'rgba(254,153,78,1)',
            borderColor: '#444',
            borderWidth: 1,
          },
        },
        label: {
          normal: {
            textStyle: {
              color: '#d87a80',
            },
          },
          emphasis: {
            textStyle: {
              color: 'rgb(100,0,0)',
            },
          },
        },
      },
      geo: {
        itemStyle: {
          normal: {
            areaColor: '#dddddd',
            borderColor: '#eeeeee',
            borderWidth: 0.5,
          },
          emphasis: {
            areaColor: 'rgba(254,153,78,1)',
            borderColor: '#444',
            borderWidth: 1,
          },
        },
        label: {
          normal: {
            textStyle: {
              color: '#d87a80',
            },
          },
          emphasis: {
            textStyle: {
              color: 'rgb(100,0,0)',
            },
          },
        },
      },
      categoryAxis: {
        axisLine: {
          show: true,
          lineStyle: {
            color: '#ffffff',
          },
        },
        axisTick: {
          show: false,
          lineStyle: {
            color: '#ffffff',
          },
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: '#ffffff',
          },
        },
        splitLine: {
          show: isNeedSplitLine === '1',
          lineStyle: {
            color: [
              splitLineColor,
            ],
          },
        },
        splitArea: {
          show: false,
          areaStyle: {
            color: [
              'rgba(250,250,250,0.3)',
              'rgba(200,200,200,0.3)',
            ],
          },
        },
      },
      valueAxis: {
        axisLine: {
          show: true,
          lineStyle: {
            color: '#ffffff',
          },
        },
        axisTick: {
          show: false,
          lineStyle: {
            color: '#ffffff',
          },
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: '#ffffff',
          },
        },
        splitLine: {
          show: isNeedSplitLine === '1',
          lineStyle: {
            color: [
              splitLineColor,
            ],
          },
        },
        splitArea: {
          show: false,
          areaStyle: {
            color: [
              'rgba(250,250,250,0.3)',
              'rgba(200,200,200,0.3)',
            ],
          },
        },
      },
      logAxis: {
        axisLine: {
          show: true,
          lineStyle: {
            color: '#ffffff',
          },
        },
        axisTick: {
          show: false,
          lineStyle: {
            color: '#ffffff',
          },
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: '#ffffff',
          },
        },
        splitLine: {
          show: isNeedSplitLine === '1',
          lineStyle: {
            color: [
              splitLineColor,
            ],
          },
        },
        splitArea: {
          show: false,
          areaStyle: {
            color: [
              'rgba(250,250,250,0.3)',
              'rgba(200,200,200,0.3)',
            ],
          },
        },
      },
      timeAxis: {
        axisLine: {
          show: true,
          lineStyle: {
            color: '#ffffff',
          },
        },
        axisTick: {
          show: false,
          lineStyle: {
            color: '#ffffff',
          },
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: '#ffffff',
          },
        },
        splitLine: {
          show: isNeedSplitLine === '1',
          lineStyle: {
            color: [
              splitLineColor,
            ],
          },
        },
        splitArea: {
          show: false,
          areaStyle: {
            color: [
              'rgba(250,250,250,0.3)',
              'rgba(200,200,200,0.3)',
            ],
          },
        },
      },
      toolbox: {
        iconStyle: {
          normal: {
            borderColor: '#2ec7c9',
          },
          emphasis: {
            borderColor: '#18a4a6',
          },
        },
      },
      legend: {
        textStyle: {
          color: '#fff',
        },
      },
      tooltip: {
        axisPointer: {
          label: {
            color: '#fff',
            backgroundColor: '#295EF3',
          },
          lineStyle: {
            color: '#008acd',
            width: '1',
          },
          crossStyle: {
            color: '#008acd',
            width: '1',
          },
        },
      },
      timeline: {
        lineStyle: {
          color: '#295ef3',
          width: 1,
        },
        itemStyle: {
          normal: {
            color: '#295ef3',
            borderWidth: 1,
          },
          emphasis: {
            color: '#295ef3',
          },
        },
        controlStyle: {
          normal: {
            color: '#295ef3',
            borderColor: '#295ef3',
            borderWidth: 0.5,
          },
          emphasis: {
            color: '#295ef3',
            borderColor: '#295ef3',
            borderWidth: 0.5,
          },
        },
        checkpointStyle: {
          color: '#295ef3',
          borderColor: 'rgba(46,199,201,0.4)',
        },
        label: {
          normal: {
            textStyle: {
              color: '#295ef3',
            },
          },
          emphasis: {
            textStyle: {
              color: '#295ef3',
            },
          },
        },
      },
      visualMap: {
        color: [
          '#1e557d',
          '#333333',
        ],
      },
      dataZoom: {
        backgroundColor: 'rgba(47,69,84,0)',
        dataBackgroundColor: 'rgba(239,239,255,1)',
        fillerColor: 'rgba(182,162,222,0.2)',
        handleColor: '#008acd',
        handleSize: '100%',
        textStyle: {
          color: '#333333',
        },
      },
      markPoint: {
        label: {
          color: '#eee',
        },
        emphasis: {
          label: {
            color: '#eee',
          },
        },
      },
    };
};
