/**
 * 创建柱状图
 * @param id dom ID
 * @param keyValues 图表数据 [{'key':'value','key':'value'},{...}]
 * @param colors 颜色列表 array
 */
function createBar(id, keyValues, colors) {
    // 图表数据
    let valueName = []
    let valueCount = []
    for (let i = 0, length = keyValues.length; i < length; i++) {
        let keyValue = Object.values(keyValues[i])
        if (typeof keyValue[0] !== 'number') {
            valueName.push(keyValue[0])
            valueCount.push(keyValue[1])
        } else {
            valueName.push(keyValue[1])
            valueCount.push(keyValue[0])
        }
    }
    // console.log(valueName)
    // console.log(valueCount)

    // 基于准备好的dom，初始化echarts实例
    let myChart = this.echarts.init(document.getElementById(id))
    myChart.setOption({
        // 标题
        // x轴
        xAxis: {
            data: valueName,
            // x轴刻度标签
            axisLabel: {
                padding: [5, 0, 0, 0],
                fontFamily: 'PingFangSC-Medium',
                fontSize: 12,
                color: 'rgba(255, 255, 255, 0.71)',
                letterSpacing: 0
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(144,215,255,0.38)'
                }
            }
        },
        // y轴
        yAxis: {
            // y轴刻度标签
            axisLabel: {
                fontFamily: 'PingFangSC-Medium',
                fontSize: 12,
                color: 'rgba(255, 255, 255, 0.70)',
                letterSpacing: 0,
                textAlign: 'right'
            },
            // 分割线
            splitLine: {
                lineStyle: {
                    type: 'solid',
                    color: 'rgba(144,215,255,0.38)'
                }
            },
            // 最小间隔
            // minInterval: 500
            // 分隔段数
            splitNumber: 4
        },
        // 数据
        series: [
            {
                type: 'bar',
                data: valueCount,
                barMaxWidth: 60,
                barMinHeight: 20,
                itemStyle: {
                    // 修改柱状颜色
                    normal: {
                        color: function (v) {
                            return colors[v.dataIndex]
                        },
                        // 图形上的文本标签
                        label: {
                            fontFamily: 'PingFangSC-Medium',
                            fontSize: 12,
                            color: '#FFF',
                            letterSpacing: 0,
                            show: true,
                            position: 'insideTop'
                        }
                    }
                }
            }
        ],
        // 背景色
        backgroundColor: '#143054'
    })
}


/**
 * 创建饼图
 * @param id dom ID
 * @param keyValues 图表数据 [{'key':'value','key':'value'},{...}]
 * @param colors 颜色列表 array
 */
function createPie(id, keyValues, colors) {
    // 图表数据
    let legendData = []
    let seriesData = []
    for (let i = 0, length = keyValues.length; i < length; i++) {
        let keyValue = Object.values(keyValues[i])
        if (typeof keyValue[0] !== 'number') {
            legendData.push(keyValue[0])
            seriesData.push({name: keyValue[0], value: keyValue[1]})
        } else {
            legendData.push(keyValue[1])
            seriesData.push({name: keyValue[1], value: keyValue[0]})
        }
    }
    console.log(legendData)
    console.log(seriesData)

    // 基于准备好的dom，初始化echarts实例
    let myChart = this.echarts.init(document.getElementById(id))
    myChart.setOption({
        // 工具栏组件
        tooltip: {
            trigger: 'item',
            // 字符串模版，饼图、仪表盘、漏斗图: {a}（系列名称），{b}（数据项名称），{c}（数值）, {d}（百分比）
            formatter: '{b} : {c} ({d}%)'
        },
        // 图例组件
        legend: {
            data: legendData,
            orient: 'vertical',
            top: '10%',
            left: '65%',
            align: 'left',
            itemWidth: 16,
            itemHeight: 16,
            textStyle: {
                fontFamily: 'PingFangSC-Medium',
                fontSize: 12,
                color: 'rgba(255, 255, 255, 0.70)',
                letterSpacing: 0
            }
        },
        // 数据
        series: [
            {
                type: 'pie',
                data: seriesData,
                radius: ['1%', '65%'],
                center: ['30%', '50%'],
                itemStyle: {
                    normal: {
                        borderColor: '#143054',
                        borderWidth: 2,
                        label: {
                            show: false
                        }
                    }
                }
            }
        ],
        // 调色盘颜色列表
        color: colors,
        // 背景色
        backgroundColor: '#143054'
    })
}