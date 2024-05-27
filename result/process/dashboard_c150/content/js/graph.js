/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 44.0, "minX": 0.0, "maxY": 115215.0, "series": [{"data": [[0.0, 44.0], [0.1, 45.0], [0.2, 45.0], [0.3, 45.0], [0.4, 45.0], [0.5, 45.0], [0.6, 46.0], [0.7, 46.0], [0.8, 46.0], [0.9, 46.0], [1.0, 46.0], [1.1, 46.0], [1.2, 47.0], [1.3, 47.0], [1.4, 47.0], [1.5, 47.0], [1.6, 48.0], [1.7, 48.0], [1.8, 48.0], [1.9, 48.0], [2.0, 48.0], [2.1, 48.0], [2.2, 48.0], [2.3, 48.0], [2.4, 49.0], [2.5, 49.0], [2.6, 49.0], [2.7, 49.0], [2.8, 49.0], [2.9, 49.0], [3.0, 49.0], [3.1, 49.0], [3.2, 49.0], [3.3, 49.0], [3.4, 49.0], [3.5, 49.0], [3.6, 49.0], [3.7, 49.0], [3.8, 49.0], [3.9, 49.0], [4.0, 49.0], [4.1, 49.0], [4.2, 49.0], [4.3, 49.0], [4.4, 49.0], [4.5, 49.0], [4.6, 49.0], [4.7, 49.0], [4.8, 49.0], [4.9, 49.0], [5.0, 49.0], [5.1, 49.0], [5.2, 49.0], [5.3, 50.0], [5.4, 50.0], [5.5, 50.0], [5.6, 50.0], [5.7, 50.0], [5.8, 50.0], [5.9, 50.0], [6.0, 50.0], [6.1, 50.0], [6.2, 50.0], [6.3, 50.0], [6.4, 50.0], [6.5, 50.0], [6.6, 50.0], [6.7, 50.0], [6.8, 50.0], [6.9, 50.0], [7.0, 50.0], [7.1, 50.0], [7.2, 50.0], [7.3, 50.0], [7.4, 50.0], [7.5, 50.0], [7.6, 50.0], [7.7, 50.0], [7.8, 50.0], [7.9, 50.0], [8.0, 50.0], [8.1, 50.0], [8.2, 50.0], [8.3, 50.0], [8.4, 50.0], [8.5, 50.0], [8.6, 50.0], [8.7, 51.0], [8.8, 51.0], [8.9, 51.0], [9.0, 51.0], [9.1, 51.0], [9.2, 51.0], [9.3, 51.0], [9.4, 51.0], [9.5, 51.0], [9.6, 51.0], [9.7, 51.0], [9.8, 51.0], [9.9, 51.0], [10.0, 53.0], [10.1, 53.0], [10.2, 53.0], [10.3, 53.0], [10.4, 53.0], [10.5, 53.0], [10.6, 53.0], [10.7, 53.0], [10.8, 53.0], [10.9, 53.0], [11.0, 53.0], [11.1, 53.0], [11.2, 53.0], [11.3, 53.0], [11.4, 54.0], [11.5, 54.0], [11.6, 54.0], [11.7, 54.0], [11.8, 54.0], [11.9, 54.0], [12.0, 54.0], [12.1, 54.0], [12.2, 54.0], [12.3, 54.0], [12.4, 54.0], [12.5, 54.0], [12.6, 54.0], [12.7, 54.0], [12.8, 54.0], [12.9, 54.0], [13.0, 54.0], [13.1, 54.0], [13.2, 54.0], [13.3, 54.0], [13.4, 54.0], [13.5, 54.0], [13.6, 54.0], [13.7, 54.0], [13.8, 54.0], [13.9, 54.0], [14.0, 54.0], [14.1, 54.0], [14.2, 54.0], [14.3, 55.0], [14.4, 55.0], [14.5, 55.0], [14.6, 55.0], [14.7, 55.0], [14.8, 55.0], [14.9, 55.0], [15.0, 55.0], [15.1, 55.0], [15.2, 55.0], [15.3, 55.0], [15.4, 55.0], [15.5, 55.0], [15.6, 55.0], [15.7, 55.0], [15.8, 55.0], [15.9, 55.0], [16.0, 55.0], [16.1, 55.0], [16.2, 55.0], [16.3, 56.0], [16.4, 56.0], [16.5, 56.0], [16.6, 56.0], [16.7, 56.0], [16.8, 56.0], [16.9, 57.0], [17.0, 57.0], [17.1, 57.0], [17.2, 58.0], [17.3, 58.0], [17.4, 58.0], [17.5, 58.0], [17.6, 59.0], [17.7, 59.0], [17.8, 59.0], [17.9, 59.0], [18.0, 59.0], [18.1, 59.0], [18.2, 59.0], [18.3, 60.0], [18.4, 60.0], [18.5, 60.0], [18.6, 60.0], [18.7, 61.0], [18.8, 61.0], [18.9, 62.0], [19.0, 63.0], [19.1, 63.0], [19.2, 63.0], [19.3, 63.0], [19.4, 64.0], [19.5, 64.0], [19.6, 64.0], [19.7, 64.0], [19.8, 64.0], [19.9, 64.0], [20.0, 64.0], [20.1, 65.0], [20.2, 65.0], [20.3, 65.0], [20.4, 65.0], [20.5, 65.0], [20.6, 65.0], [20.7, 65.0], [20.8, 65.0], [20.9, 66.0], [21.0, 69.0], [21.1, 74.0], [21.2, 74.0], [21.3, 74.0], [21.4, 74.0], [21.5, 74.0], [21.6, 87.0], [21.7, 89.0], [21.8, 90.0], [21.9, 90.0], [22.0, 90.0], [22.1, 90.0], [22.2, 90.0], [22.3, 92.0], [22.4, 93.0], [22.5, 93.0], [22.6, 93.0], [22.7, 93.0], [22.8, 93.0], [22.9, 93.0], [23.0, 93.0], [23.1, 94.0], [23.2, 94.0], [23.3, 94.0], [23.4, 94.0], [23.5, 94.0], [23.6, 94.0], [23.7, 94.0], [23.8, 94.0], [23.9, 94.0], [24.0, 94.0], [24.1, 94.0], [24.2, 94.0], [24.3, 94.0], [24.4, 94.0], [24.5, 94.0], [24.6, 95.0], [24.7, 95.0], [24.8, 95.0], [24.9, 95.0], [25.0, 95.0], [25.1, 95.0], [25.2, 95.0], [25.3, 95.0], [25.4, 95.0], [25.5, 95.0], [25.6, 95.0], [25.7, 95.0], [25.8, 95.0], [25.9, 95.0], [26.0, 95.0], [26.1, 95.0], [26.2, 95.0], [26.3, 95.0], [26.4, 95.0], [26.5, 95.0], [26.6, 95.0], [26.7, 95.0], [26.8, 95.0], [26.9, 95.0], [27.0, 95.0], [27.1, 95.0], [27.2, 95.0], [27.3, 95.0], [27.4, 95.0], [27.5, 95.0], [27.6, 95.0], [27.7, 95.0], [27.8, 95.0], [27.9, 95.0], [28.0, 95.0], [28.1, 95.0], [28.2, 95.0], [28.3, 96.0], [28.4, 96.0], [28.5, 96.0], [28.6, 96.0], [28.7, 96.0], [28.8, 96.0], [28.9, 96.0], [29.0, 96.0], [29.1, 96.0], [29.2, 96.0], [29.3, 96.0], [29.4, 96.0], [29.5, 96.0], [29.6, 96.0], [29.7, 96.0], [29.8, 96.0], [29.9, 96.0], [30.0, 97.0], [30.1, 97.0], [30.2, 97.0], [30.3, 97.0], [30.4, 98.0], [30.5, 98.0], [30.6, 98.0], [30.7, 98.0], [30.8, 99.0], [30.9, 99.0], [31.0, 99.0], [31.1, 99.0], [31.2, 99.0], [31.3, 99.0], [31.4, 99.0], [31.5, 99.0], [31.6, 99.0], [31.7, 99.0], [31.8, 99.0], [31.9, 99.0], [32.0, 99.0], [32.1, 99.0], [32.2, 99.0], [32.3, 99.0], [32.4, 99.0], [32.5, 99.0], [32.6, 99.0], [32.7, 99.0], [32.8, 99.0], [32.9, 99.0], [33.0, 99.0], [33.1, 99.0], [33.2, 99.0], [33.3, 99.0], [33.4, 99.0], [33.5, 99.0], [33.6, 99.0], [33.7, 99.0], [33.8, 99.0], [33.9, 99.0], [34.0, 99.0], [34.1, 99.0], [34.2, 99.0], [34.3, 99.0], [34.4, 99.0], [34.5, 99.0], [34.6, 99.0], [34.7, 99.0], [34.8, 99.0], [34.9, 99.0], [35.0, 99.0], [35.1, 99.0], [35.2, 99.0], [35.3, 99.0], [35.4, 99.0], [35.5, 99.0], [35.6, 99.0], [35.7, 99.0], [35.8, 99.0], [35.9, 99.0], [36.0, 99.0], [36.1, 99.0], [36.2, 99.0], [36.3, 99.0], [36.4, 99.0], [36.5, 99.0], [36.6, 99.0], [36.7, 99.0], [36.8, 99.0], [36.9, 99.0], [37.0, 99.0], [37.1, 99.0], [37.2, 99.0], [37.3, 99.0], [37.4, 99.0], [37.5, 99.0], [37.6, 99.0], [37.7, 99.0], [37.8, 99.0], [37.9, 99.0], [38.0, 100.0], [38.1, 100.0], [38.2, 100.0], [38.3, 100.0], [38.4, 100.0], [38.5, 100.0], [38.6, 100.0], [38.7, 100.0], [38.8, 100.0], [38.9, 100.0], [39.0, 100.0], [39.1, 100.0], [39.2, 100.0], [39.3, 100.0], [39.4, 100.0], [39.5, 100.0], [39.6, 100.0], [39.7, 100.0], [39.8, 100.0], [39.9, 100.0], [40.0, 100.0], [40.1, 100.0], [40.2, 100.0], [40.3, 100.0], [40.4, 100.0], [40.5, 100.0], [40.6, 100.0], [40.7, 100.0], [40.8, 100.0], [40.9, 100.0], [41.0, 100.0], [41.1, 100.0], [41.2, 100.0], [41.3, 100.0], [41.4, 100.0], [41.5, 100.0], [41.6, 100.0], [41.7, 100.0], [41.8, 100.0], [41.9, 100.0], [42.0, 100.0], [42.1, 100.0], [42.2, 100.0], [42.3, 100.0], [42.4, 100.0], [42.5, 100.0], [42.6, 100.0], [42.7, 100.0], [42.8, 100.0], [42.9, 100.0], [43.0, 100.0], [43.1, 100.0], [43.2, 100.0], [43.3, 100.0], [43.4, 100.0], [43.5, 100.0], [43.6, 100.0], [43.7, 100.0], [43.8, 100.0], [43.9, 100.0], [44.0, 100.0], [44.1, 100.0], [44.2, 100.0], [44.3, 100.0], [44.4, 100.0], [44.5, 100.0], [44.6, 100.0], [44.7, 100.0], [44.8, 100.0], [44.9, 100.0], [45.0, 100.0], [45.1, 100.0], [45.2, 100.0], [45.3, 100.0], [45.4, 100.0], [45.5, 100.0], [45.6, 100.0], [45.7, 100.0], [45.8, 100.0], [45.9, 100.0], [46.0, 100.0], [46.1, 100.0], [46.2, 100.0], [46.3, 100.0], [46.4, 100.0], [46.5, 100.0], [46.6, 100.0], [46.7, 100.0], [46.8, 100.0], [46.9, 100.0], [47.0, 100.0], [47.1, 100.0], [47.2, 100.0], [47.3, 100.0], [47.4, 100.0], [47.5, 100.0], [47.6, 100.0], [47.7, 100.0], [47.8, 100.0], [47.9, 100.0], [48.0, 100.0], [48.1, 100.0], [48.2, 100.0], [48.3, 100.0], [48.4, 100.0], [48.5, 100.0], [48.6, 100.0], [48.7, 100.0], [48.8, 100.0], [48.9, 100.0], [49.0, 100.0], [49.1, 100.0], [49.2, 100.0], [49.3, 100.0], [49.4, 100.0], [49.5, 100.0], [49.6, 100.0], [49.7, 100.0], [49.8, 100.0], [49.9, 100.0], [50.0, 100.0], [50.1, 100.0], [50.2, 100.0], [50.3, 100.0], [50.4, 100.0], [50.5, 100.0], [50.6, 100.0], [50.7, 100.0], [50.8, 100.0], [50.9, 100.0], [51.0, 100.0], [51.1, 100.0], [51.2, 100.0], [51.3, 100.0], [51.4, 100.0], [51.5, 100.0], [51.6, 100.0], [51.7, 101.0], [51.8, 101.0], [51.9, 101.0], [52.0, 101.0], [52.1, 101.0], [52.2, 101.0], [52.3, 101.0], [52.4, 102.0], [52.5, 102.0], [52.6, 103.0], [52.7, 103.0], [52.8, 103.0], [52.9, 104.0], [53.0, 104.0], [53.1, 104.0], [53.2, 104.0], [53.3, 105.0], [53.4, 105.0], [53.5, 105.0], [53.6, 105.0], [53.7, 105.0], [53.8, 105.0], [53.9, 105.0], [54.0, 105.0], [54.1, 105.0], [54.2, 105.0], [54.3, 105.0], [54.4, 105.0], [54.5, 105.0], [54.6, 105.0], [54.7, 105.0], [54.8, 106.0], [54.9, 106.0], [55.0, 106.0], [55.1, 106.0], [55.2, 106.0], [55.3, 106.0], [55.4, 107.0], [55.5, 108.0], [55.6, 109.0], [55.7, 109.0], [55.8, 109.0], [55.9, 109.0], [56.0, 109.0], [56.1, 109.0], [56.2, 109.0], [56.3, 109.0], [56.4, 109.0], [56.5, 109.0], [56.6, 109.0], [56.7, 109.0], [56.8, 109.0], [56.9, 109.0], [57.0, 109.0], [57.1, 109.0], [57.2, 109.0], [57.3, 109.0], [57.4, 109.0], [57.5, 109.0], [57.6, 109.0], [57.7, 109.0], [57.8, 109.0], [57.9, 109.0], [58.0, 109.0], [58.1, 109.0], [58.2, 109.0], [58.3, 110.0], [58.4, 110.0], [58.5, 110.0], [58.6, 110.0], [58.7, 110.0], [58.8, 110.0], [58.9, 110.0], [59.0, 110.0], [59.1, 110.0], [59.2, 110.0], [59.3, 110.0], [59.4, 110.0], [59.5, 110.0], [59.6, 110.0], [59.7, 110.0], [59.8, 110.0], [59.9, 110.0], [60.0, 110.0], [60.1, 110.0], [60.2, 110.0], [60.3, 110.0], [60.4, 110.0], [60.5, 110.0], [60.6, 110.0], [60.7, 110.0], [60.8, 110.0], [60.9, 110.0], [61.0, 110.0], [61.1, 110.0], [61.2, 110.0], [61.3, 110.0], [61.4, 110.0], [61.5, 110.0], [61.6, 110.0], [61.7, 110.0], [61.8, 110.0], [61.9, 110.0], [62.0, 110.0], [62.1, 110.0], [62.2, 110.0], [62.3, 110.0], [62.4, 110.0], [62.5, 110.0], [62.6, 110.0], [62.7, 110.0], [62.8, 110.0], [62.9, 110.0], [63.0, 110.0], [63.1, 110.0], [63.2, 110.0], [63.3, 110.0], [63.4, 110.0], [63.5, 110.0], [63.6, 110.0], [63.7, 110.0], [63.8, 110.0], [63.9, 110.0], [64.0, 110.0], [64.1, 110.0], [64.2, 110.0], [64.3, 111.0], [64.4, 111.0], [64.5, 111.0], [64.6, 112.0], [64.7, 112.0], [64.8, 113.0], [64.9, 113.0], [65.0, 114.0], [65.1, 115.0], [65.2, 115.0], [65.3, 116.0], [65.4, 116.0], [65.5, 116.0], [65.6, 116.0], [65.7, 116.0], [65.8, 116.0], [65.9, 117.0], [66.0, 118.0], [66.1, 119.0], [66.2, 119.0], [66.3, 119.0], [66.4, 119.0], [66.5, 120.0], [66.6, 120.0], [66.7, 120.0], [66.8, 120.0], [66.9, 120.0], [67.0, 120.0], [67.1, 120.0], [67.2, 120.0], [67.3, 120.0], [67.4, 120.0], [67.5, 120.0], [67.6, 120.0], [67.7, 120.0], [67.8, 121.0], [67.9, 121.0], [68.0, 124.0], [68.1, 126.0], [68.2, 126.0], [68.3, 129.0], [68.4, 129.0], [68.5, 130.0], [68.6, 130.0], [68.7, 130.0], [68.8, 130.0], [68.9, 131.0], [69.0, 135.0], [69.1, 135.0], [69.2, 140.0], [69.3, 149.0], [69.4, 149.0], [69.5, 150.0], [69.6, 150.0], [69.7, 150.0], [69.8, 156.0], [69.9, 159.0], [70.0, 159.0], [70.1, 170.0], [70.2, 175.0], [70.3, 332.0], [70.4, 434.0], [70.5, 449.0], [70.6, 449.0], [70.7, 639.0], [70.8, 639.0], [70.9, 670.0], [71.0, 671.0], [71.1, 674.0], [71.2, 1064.0], [71.3, 1066.0], [71.4, 1073.0], [71.5, 1074.0], [71.6, 1076.0], [71.7, 1084.0], [71.8, 1087.0], [71.9, 1090.0], [72.0, 1094.0], [72.1, 1099.0], [72.2, 1109.0], [72.3, 1109.0], [72.4, 1110.0], [72.5, 1110.0], [72.6, 1113.0], [72.7, 1115.0], [72.8, 1115.0], [72.9, 1116.0], [73.0, 1116.0], [73.1, 1117.0], [73.2, 1117.0], [73.3, 1120.0], [73.4, 1120.0], [73.5, 1125.0], [73.6, 1129.0], [73.7, 1130.0], [73.8, 1130.0], [73.9, 1131.0], [74.0, 1133.0], [74.1, 1140.0], [74.2, 1140.0], [74.3, 1141.0], [74.4, 1147.0], [74.5, 1149.0], [74.6, 1149.0], [74.7, 1149.0], [74.8, 1149.0], [74.9, 1150.0], [75.0, 1150.0], [75.1, 1155.0], [75.2, 1157.0], [75.3, 1159.0], [75.4, 1160.0], [75.5, 1160.0], [75.6, 1160.0], [75.7, 1160.0], [75.8, 1160.0], [75.9, 1160.0], [76.0, 1167.0], [76.1, 1169.0], [76.2, 1170.0], [76.3, 1170.0], [76.4, 1171.0], [76.5, 1175.0], [76.6, 1176.0], [76.7, 1178.0], [76.8, 1179.0], [76.9, 1180.0], [77.0, 1180.0], [77.1, 1180.0], [77.2, 1192.0], [77.3, 1200.0], [77.4, 1200.0], [77.5, 1210.0], [77.6, 1210.0], [77.7, 1219.0], [77.8, 1277.0], [77.9, 1319.0], [78.0, 1334.0], [78.1, 1355.0], [78.2, 1360.0], [78.3, 1375.0], [78.4, 1379.0], [78.5, 1380.0], [78.6, 1389.0], [78.7, 1391.0], [78.8, 1391.0], [78.9, 1391.0], [79.0, 1400.0], [79.1, 1410.0], [79.2, 1420.0], [79.3, 1429.0], [79.4, 1581.0], [79.5, 1585.0], [79.6, 1597.0], [79.7, 1601.0], [79.8, 1605.0], [79.9, 1610.0], [80.0, 1616.0], [80.1, 1647.0], [80.2, 1662.0], [80.3, 1990.0], [80.4, 2124.0], [80.5, 2125.0], [80.6, 2127.0], [80.7, 2744.0], [80.8, 2775.0], [80.9, 2788.0], [81.0, 2809.0], [81.1, 2818.0], [81.2, 2822.0], [81.3, 2829.0], [81.4, 2829.0], [81.5, 2843.0], [81.6, 2852.0], [81.7, 2860.0], [81.8, 2868.0], [81.9, 3161.0], [82.0, 3166.0], [82.1, 3184.0], [82.2, 3185.0], [82.3, 3187.0], [82.4, 3200.0], [82.5, 3200.0], [82.6, 3200.0], [82.7, 3206.0], [82.8, 3209.0], [82.9, 3210.0], [83.0, 3213.0], [83.1, 3219.0], [83.2, 3229.0], [83.3, 3231.0], [83.4, 3235.0], [83.5, 3250.0], [83.6, 3251.0], [83.7, 3256.0], [83.8, 3259.0], [83.9, 3260.0], [84.0, 3260.0], [84.1, 3280.0], [84.2, 3281.0], [84.3, 3290.0], [84.4, 3374.0], [84.5, 3387.0], [84.6, 3403.0], [84.7, 3410.0], [84.8, 3418.0], [84.9, 3430.0], [85.0, 3431.0], [85.1, 3450.0], [85.2, 3479.0], [85.3, 3500.0], [85.4, 3564.0], [85.5, 3565.0], [85.6, 3575.0], [85.7, 3680.0], [85.8, 3680.0], [85.9, 3977.0], [86.0, 4010.0], [86.1, 4044.0], [86.2, 4048.0], [86.3, 4086.0], [86.4, 4853.0], [86.5, 4929.0], [86.6, 4941.0], [86.7, 4944.0], [86.8, 4957.0], [86.9, 4964.0], [87.0, 4964.0], [87.1, 4977.0], [87.2, 4982.0], [87.3, 5010.0], [87.4, 5028.0], [87.5, 6579.0], [87.6, 6707.0], [87.7, 6714.0], [87.8, 6721.0], [87.9, 6732.0], [88.0, 6736.0], [88.1, 6763.0], [88.2, 6764.0], [88.3, 7233.0], [88.4, 7245.0], [88.5, 7247.0], [88.6, 7256.0], [88.7, 7266.0], [88.8, 7270.0], [88.9, 7270.0], [89.0, 7279.0], [89.1, 7280.0], [89.2, 7281.0], [89.3, 7301.0], [89.4, 7309.0], [89.5, 7339.0], [89.6, 7346.0], [89.7, 7428.0], [89.8, 7435.0], [89.9, 7464.0], [90.0, 7493.0], [90.1, 7513.0], [90.2, 7529.0], [90.3, 7530.0], [90.4, 7554.0], [90.5, 7555.0], [90.6, 7570.0], [90.7, 7669.0], [90.8, 7678.0], [90.9, 7745.0], [91.0, 7749.0], [91.1, 7793.0], [91.2, 7800.0], [91.3, 7830.0], [91.4, 7889.0], [91.5, 8109.0], [91.6, 8123.0], [91.7, 8913.0], [91.8, 8914.0], [91.9, 10163.0], [92.0, 13974.0], [92.1, 14486.0], [92.2, 14500.0], [92.3, 14524.0], [92.4, 14543.0], [92.5, 14550.0], [92.6, 14827.0], [92.7, 14850.0], [92.8, 15354.0], [92.9, 15389.0], [93.0, 15450.0], [93.1, 15484.0], [93.2, 15490.0], [93.3, 15565.0], [93.4, 15829.0], [93.5, 16014.0], [93.6, 16321.0], [93.7, 16343.0], [93.8, 16369.0], [93.9, 16401.0], [94.0, 16750.0], [94.1, 16780.0], [94.2, 16786.0], [94.3, 16786.0], [94.4, 16839.0], [94.5, 16841.0], [94.6, 17029.0], [94.7, 17119.0], [94.8, 17174.0], [94.9, 17595.0], [95.0, 18664.0], [95.1, 19208.0], [95.2, 19292.0], [95.3, 22076.0], [95.4, 22129.0], [95.5, 22594.0], [95.6, 28277.0], [95.7, 28280.0], [95.8, 28981.0], [95.9, 29359.0], [96.0, 29379.0], [96.1, 31435.0], [96.2, 31470.0], [96.3, 31480.0], [96.4, 31498.0], [96.5, 31944.0], [96.6, 32090.0], [96.7, 32237.0], [96.8, 32246.0], [96.9, 32253.0], [97.0, 32259.0], [97.1, 32291.0], [97.2, 32300.0], [97.3, 32382.0], [97.4, 32396.0], [97.5, 32404.0], [97.6, 32459.0], [97.7, 32464.0], [97.8, 32492.0], [97.9, 32559.0], [98.0, 32574.0], [98.1, 32759.0], [98.2, 32839.0], [98.3, 33024.0], [98.4, 33098.0], [98.5, 33190.0], [98.6, 33719.0], [98.7, 33980.0], [98.8, 54520.0], [98.9, 58882.0], [99.0, 58909.0], [99.1, 58909.0], [99.2, 64889.0], [99.3, 65114.0], [99.4, 65157.0], [99.5, 65253.0], [99.6, 65433.0], [99.7, 66030.0], [99.8, 115138.0], [99.9, 115157.0], [100.0, 115215.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 398.0, "series": [{"data": [[0.0, 398.0], [600.0, 5.0], [1000.0, 11.0], [1100.0, 53.0], [1200.0, 6.0], [1300.0, 12.0], [1400.0, 4.0], [1500.0, 3.0], [1600.0, 7.0], [1900.0, 1.0], [2100.0, 3.0], [2700.0, 3.0], [2800.0, 9.0], [3100.0, 6.0], [3200.0, 21.0], [3300.0, 2.0], [3400.0, 7.0], [3500.0, 4.0], [3600.0, 2.0], [3900.0, 1.0], [4000.0, 5.0], [4800.0, 1.0], [4900.0, 8.0], [5000.0, 2.0], [6500.0, 1.0], [6700.0, 8.0], [7300.0, 4.0], [7400.0, 4.0], [7200.0, 10.0], [115100.0, 2.0], [7500.0, 7.0], [7600.0, 2.0], [7800.0, 3.0], [7700.0, 3.0], [8100.0, 2.0], [8900.0, 2.0], [10100.0, 1.0], [13900.0, 1.0], [14800.0, 2.0], [14500.0, 4.0], [14400.0, 2.0], [15300.0, 2.0], [15400.0, 3.0], [15500.0, 1.0], [15800.0, 1.0], [16000.0, 1.0], [16300.0, 3.0], [16400.0, 1.0], [16700.0, 5.0], [16800.0, 2.0], [17000.0, 1.0], [17100.0, 2.0], [17500.0, 1.0], [18600.0, 1.0], [19200.0, 2.0], [22000.0, 1.0], [22500.0, 1.0], [22100.0, 1.0], [100.0, 340.0], [28200.0, 2.0], [29300.0, 2.0], [28900.0, 1.0], [30000.0, 1.0], [31400.0, 4.0], [32200.0, 5.0], [32400.0, 4.0], [32300.0, 3.0], [31900.0, 1.0], [32000.0, 1.0], [32500.0, 2.0], [32700.0, 2.0], [33000.0, 2.0], [32800.0, 1.0], [33700.0, 1.0], [33100.0, 1.0], [33900.0, 1.0], [54500.0, 1.0], [58900.0, 2.0], [58800.0, 1.0], [64800.0, 1.0], [65100.0, 2.0], [65200.0, 1.0], [65400.0, 1.0], [66000.0, 1.0], [300.0, 1.0], [400.0, 3.0], [115200.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 115200.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 3.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 742.0, "series": [{"data": [[0.0, 742.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 91.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 214.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 3.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 5.607142857142858, "minX": 1.71566178E12, "maxY": 143.52216748768467, "series": [{"data": [[1.7156619E12, 5.607142857142858], [1.71566184E12, 76.45764854614413], [1.71566178E12, 143.52216748768467]], "isOverall": false, "label": "ConTest", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7156619E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 47.0, "minX": 1.0, "maxY": 18265.210526315794, "series": [{"data": [[2.0, 110.0], [3.0, 18265.210526315794], [4.0, 13285.8], [5.0, 95.0], [6.0, 81.5], [7.0, 100.0], [8.0, 10947.999999999998], [9.0, 10902.500000000002], [10.0, 100.0], [11.0, 100.0], [12.0, 10470.411764705881], [13.0, 7874.285714285714], [14.0, 6531.599999999999], [15.0, 6876.0], [16.0, 109.0], [17.0, 83.33333333333333], [18.0, 806.6666666666667], [19.0, 3407.7000000000003], [20.0, 11060.0], [21.0, 95.25], [22.0, 59.0], [23.0, 400.2000000000001], [24.0, 79.66666666666667], [25.0, 15237.0], [26.0, 102.25], [27.0, 325.6], [28.0, 438.3333333333333], [29.0, 16909.5], [30.0, 62.25], [31.0, 259.6666666666667], [33.0, 636.5], [32.0, 7178.666666666666], [35.0, 5920.588235294118], [34.0, 103.33333333333333], [37.0, 16264.25], [36.0, 55.0], [39.0, 97.5], [38.0, 6518.55], [41.0, 7972.900000000003], [40.0, 77.0], [43.0, 110.0], [42.0, 5098.333333333333], [45.0, 9790.999999999998], [44.0, 101.0], [47.0, 4431.461538461537], [46.0, 100.0], [49.0, 4037.0000000000005], [48.0, 107.25], [50.0, 102.5], [53.0, 640.0], [52.0, 3995.4761904761904], [55.0, 100.0], [54.0, 615.0], [57.0, 1140.0], [56.0, 755.0], [59.0, 600.6666666666667], [58.0, 102.5], [61.0, 1676.75], [60.0, 106.66666666666667], [63.0, 94.0], [62.0, 587.0], [67.0, 69.0], [66.0, 722.8], [65.0, 1191.0], [64.0, 2189.0], [71.0, 565.3333333333333], [70.0, 96.33333333333333], [69.0, 129.5], [68.0, 2608.571428571429], [75.0, 236.28571428571428], [74.0, 135.0], [73.0, 370.0], [72.0, 6306.333333333334], [77.0, 546.0], [78.0, 4883.600000000001], [79.0, 100.0], [76.0, 6047.970588235294], [83.0, 54.0], [82.0, 923.3076923076923], [81.0, 53.0], [80.0, 110.0], [86.0, 274.0], [87.0, 77.0], [85.0, 109.0], [84.0, 1090.0], [88.0, 2867.625], [91.0, 5251.000000000002], [90.0, 100.75], [89.0, 64.0], [95.0, 3690.0], [94.0, 629.5], [93.0, 1990.3684210526314], [92.0, 1367.0], [96.0, 108.75], [98.0, 1391.3999999999999], [99.0, 2172.6666666666665], [97.0, 1652.0], [103.0, 2055.222222222222], [102.0, 53.0], [101.0, 98.33333333333334], [100.0, 629.5], [106.0, 326.8888888888889], [105.0, 1721.0000000000002], [104.0, 107.5], [111.0, 858.625], [110.0, 59.5], [109.0, 110.0], [108.0, 2223.0], [115.0, 686.2857142857143], [114.0, 79.0], [113.0, 459.33333333333337], [112.0, 4148.166666666667], [118.0, 317.2], [119.0, 740.0], [117.0, 92.0], [116.0, 64.0], [123.0, 5351.0], [122.0, 1999.0000000000005], [121.0, 110.0], [120.0, 1350.4166666666667], [125.0, 860.9], [127.0, 110.0], [126.0, 3073.4615384615377], [124.0, 76.0], [128.0, 663.2857142857142], [133.0, 81.4], [135.0, 87.66666666666667], [134.0, 857.3333333333333], [132.0, 99.0], [131.0, 105.0], [130.0, 4002.2222222222217], [129.0, 1488.7272727272725], [143.0, 101.28571428571429], [142.0, 929.2142857142858], [141.0, 287.2], [140.0, 2679.0], [139.0, 106.5], [138.0, 47.0], [137.0, 729.75], [136.0, 307.54545454545456], [149.0, 423.74999999999994], [150.0, 796.923076923077], [148.0, 1835.6875], [147.0, 1555.6304347826078], [146.0, 65.66666666666667], [145.0, 1613.2499999999998], [144.0, 48.0], [1.0, 99.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[85.64476190476213, 3317.1580952380928]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 150.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 102.46666666666667, "minX": 1.71566178E12, "maxY": 1937.95, "series": [{"data": [[1.7156619E12, 287.9], [1.71566184E12, 1937.95], [1.71566178E12, 497.35]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7156619E12, 102.46666666666667], [1.71566184E12, 1529.2666666666667], [1.71566178E12, 392.46666666666664]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7156619E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 1023.9458128078821, "minX": 1.71566178E12, "maxY": 12089.357142857141, "series": [{"data": [[1.7156619E12, 12089.357142857141], [1.71566184E12, 3284.640960809105], [1.71566178E12, 1023.9458128078821]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7156619E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 1023.7241379310349, "minX": 1.71566178E12, "maxY": 5919.51785714286, "series": [{"data": [[1.7156619E12, 5919.51785714286], [1.71566184E12, 3284.55625790139], [1.71566178E12, 1023.7241379310349]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7156619E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 971.6453201970443, "minX": 1.71566178E12, "maxY": 12024.0, "series": [{"data": [[1.7156619E12, 12024.0], [1.71566184E12, 3222.6472819216206], [1.71566178E12, 971.6453201970443]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7156619E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 44.0, "minX": 1.71566178E12, "maxY": 66030.0, "series": [{"data": [[1.7156619E12, 66030.0], [1.71566184E12, 64889.0], [1.71566178E12, 5028.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7156619E12, 50.0], [1.71566184E12, 44.0], [1.71566178E12, 45.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7156619E12, 39116.40000000009], [1.71566184E12, 8913.8], [1.71566178E12, 3400.7999999999997]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7156619E12, 66030.0], [1.71566184E12, 33232.32000000002], [1.71566178E12, 4981.8]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7156619E12, 100.0], [1.71566184E12, 100.0], [1.71566178E12, 110.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7156619E12, 65307.0], [1.71566184E12, 24867.19999999987], [1.71566178E12, 4023.6]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7156619E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 95.0, "minX": 1.0, "maxY": 115157.0, "series": [{"data": [[33.0, 109.0], [34.0, 149.5], [36.0, 100.0], [38.0, 100.0], [41.0, 100.0], [43.0, 101.0], [42.0, 100.0], [45.0, 95.0], [46.0, 98.0], [3.0, 100.0], [51.0, 110.0], [50.0, 103.0], [52.0, 107.0], [4.0, 100.0], [5.0, 100.5], [6.0, 29491.0], [8.0, 104.5], [10.0, 100.0], [14.0, 100.0], [15.0, 118.0], [16.0, 99.5], [1.0, 100.0], [17.0, 100.0], [19.0, 110.0], [21.0, 110.0], [23.0, 110.0], [25.0, 110.0], [26.0, 100.0], [30.0, 100.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[21.0, 115157.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 52.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 29491.0, "series": [{"data": [[33.0, 109.0], [34.0, 149.5], [36.0, 100.0], [38.0, 100.0], [41.0, 100.0], [43.0, 100.0], [42.0, 100.0], [45.0, 95.0], [46.0, 98.0], [3.0, 100.0], [51.0, 110.0], [50.0, 102.5], [52.0, 107.0], [4.0, 100.0], [5.0, 100.0], [6.0, 29491.0], [8.0, 104.5], [10.0, 100.0], [14.0, 100.0], [15.0, 118.0], [16.0, 99.5], [1.0, 100.0], [17.0, 100.0], [19.0, 110.0], [21.0, 109.0], [23.0, 110.0], [25.0, 110.0], [26.0, 100.0], [30.0, 100.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[21.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 52.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.7833333333333333, "minX": 1.71566178E12, "maxY": 10.966666666666667, "series": [{"data": [[1.7156619E12, 0.7833333333333333], [1.71566184E12, 10.966666666666667], [1.71566178E12, 5.75]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7156619E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.05, "minX": 1.71566178E12, "maxY": 13.183333333333334, "series": [{"data": [[1.7156619E12, 0.8833333333333333], [1.71566184E12, 13.183333333333334], [1.71566178E12, 3.3833333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.7156619E12, 0.05]], "isOverall": false, "label": "Non HTTP response code: javax.net.ssl.SSLHandshakeException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7156619E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.05, "minX": 1.71566178E12, "maxY": 13.183333333333334, "series": [{"data": [[1.7156619E12, 0.8833333333333333], [1.71566184E12, 13.183333333333334], [1.71566178E12, 3.3833333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.7156619E12, 0.05]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7156619E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.05, "minX": 1.71566178E12, "maxY": 13.183333333333334, "series": [{"data": [[1.7156619E12, 0.8833333333333333], [1.71566184E12, 13.183333333333334], [1.71566178E12, 3.3833333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.7156619E12, 0.05]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7156619E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

