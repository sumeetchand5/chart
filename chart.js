import {Dimensions, ScrollView, Text, View} from "react-native";
import {ProgressChart} from "react-native-chart-kit";
import {progressChartDat2, progressChartData} from "./data";
import expo from 'expo'
import React from "react";
import {chartConfigs} from './env';

export const chart = () => {

    const width = Dimensions.get('window').width;
    const height = 180;
    chartConfigs.map(chartConfig => {
        const labelStyle = {
            color: chartConfig.color(),
            fontSize: 11
        }
        const graphStyle = {
            margin: 10,
            ...chartConfig.style
        }
    }

    return <View>
        <View style = {{flexDirection:'row' ,justifyContent: 'space-around'}}>
            <View style={{alignItems:'center'}}>
                <Text style={labelStyle}>Annual Leave</Text>
                <ProgressChart
                    data={progressChartData}
                    width={ Dimensions.get('window').width/2.3}
                    height={height}
                    chartConfig={chartConfig}
                    style={graphStyle}
                />


            </View>
            <View style={{alignItems:'center'}}>
                <Text style={labelStyle}>Sick Leave</Text>
                <ProgressChart
                    data={progressChartDat2}
                    width={ Dimensions.get('window').width/2.3}
                    height={height}
                    chartConfig={chartConfig}
                    style={graphStyle}
                />
            </View>
        </View>

        <View style = {{flexDirection:'row' ,justifyContent: 'space-around'}}>
            <View style={{alignItems:'center'}}>
                <Text style={labelStyle}>Annual Leave</Text>
                <ProgressChart
                    data={progressChartData}
                    width={ Dimensions.get('window').width/2.3}
                    height={height}
                    chartConfig={chartConfig}
                    style={graphStyle}
                />


            </View>
            <View style={{alignItems:'center'}}>
                <Text style={labelStyle}>Sick Leave</Text>
                <ProgressChart
                    data={progressChartDat2}
                    width={ Dimensions.get('window').width/2.3}
                    height={height}
                    chartConfig={chartConfig}
                    style={graphStyle}
                />
            </View>
        </View>
        <View style = {{flexDirection:'row' ,justifyContent: 'space-around'}}>
            <View style={{alignItems:'center'}}>
                <Text style={labelStyle}>Annual Leave</Text>
                <ProgressChart
                    data={progressChartData}
                    width={ Dimensions.get('window').width/2.3}
                    height={height}
                    chartConfig={chartConfig}
                    style={graphStyle}
                />


            </View>
            <View style={{alignItems:'center'}}>
                <Text style={labelStyle}>Sick Leave</Text>
                <ProgressChart
                    data={progressChartDat2}
                    width={ Dimensions.get('window').width/2.3}
                    height={height}
                    chartConfig={chartConfig}
                    style={graphStyle}
                />
            </View>
        </View>

        <View style = {{flexDirection:'row' ,justifyContent: 'space-around'}}>
            <View style={{alignItems:'center'}}>
                <Text style={labelStyle}>Family Care Leave</Text>
                <ProgressChart
                    data={progressChartData}
                    width={ Dimensions.get('window').width/2.3}
                    height={height}
                    chartConfig={chartConfig}
                    style={graphStyle}
                />
            </View>
            <View style={{alignItems:'center'}}>
                <Text style={labelStyle}>Maternity/Paternity Leave</Text>
                <ProgressChart
                    data={progressChartDat2}
                    width={ Dimensions.get('window').width/2.3}
                    height={height}
                    chartConfig={chartConfig}
                    style={graphStyle}
                />
            </View>
        </View>

        <View style = {{flexDirection:'row' ,justifyContent: 'space-around'}}>
            <View style={{alignItems:'center'}}>
                <Text style={labelStyle}>Annual Leave</Text>
                <ProgressChart
                    data={progressChartData}
                    width={ Dimensions.get('window').width/2.3}
                    height={height}
                    chartConfig={chartConfig}
                    style={graphStyle}
                />
            </View>
        </View>

    </View>
}