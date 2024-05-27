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
        data: {"result": {"minY": 45.0, "minX": 0.0, "maxY": 129028.0, "series": [{"data": [[0.0, 45.0], [0.1, 46.0], [0.2, 46.0], [0.3, 46.0], [0.4, 47.0], [0.5, 47.0], [0.6, 47.0], [0.7, 47.0], [0.8, 47.0], [0.9, 47.0], [1.0, 48.0], [1.1, 48.0], [1.2, 48.0], [1.3, 48.0], [1.4, 48.0], [1.5, 48.0], [1.6, 48.0], [1.7, 48.0], [1.8, 48.0], [1.9, 49.0], [2.0, 49.0], [2.1, 49.0], [2.2, 49.0], [2.3, 49.0], [2.4, 49.0], [2.5, 49.0], [2.6, 49.0], [2.7, 49.0], [2.8, 49.0], [2.9, 49.0], [3.0, 49.0], [3.1, 49.0], [3.2, 49.0], [3.3, 49.0], [3.4, 49.0], [3.5, 50.0], [3.6, 50.0], [3.7, 50.0], [3.8, 50.0], [3.9, 50.0], [4.0, 50.0], [4.1, 50.0], [4.2, 50.0], [4.3, 50.0], [4.4, 50.0], [4.5, 50.0], [4.6, 50.0], [4.7, 50.0], [4.8, 50.0], [4.9, 50.0], [5.0, 50.0], [5.1, 50.0], [5.2, 50.0], [5.3, 51.0], [5.4, 51.0], [5.5, 51.0], [5.6, 51.0], [5.7, 51.0], [5.8, 51.0], [5.9, 51.0], [6.0, 51.0], [6.1, 51.0], [6.2, 51.0], [6.3, 52.0], [6.4, 52.0], [6.5, 52.0], [6.6, 52.0], [6.7, 52.0], [6.8, 52.0], [6.9, 52.0], [7.0, 54.0], [7.1, 54.0], [7.2, 54.0], [7.3, 54.0], [7.4, 54.0], [7.5, 54.0], [7.6, 54.0], [7.7, 54.0], [7.8, 54.0], [7.9, 55.0], [8.0, 55.0], [8.1, 55.0], [8.2, 55.0], [8.3, 55.0], [8.4, 55.0], [8.5, 55.0], [8.6, 55.0], [8.7, 55.0], [8.8, 55.0], [8.9, 55.0], [9.0, 55.0], [9.1, 55.0], [9.2, 55.0], [9.3, 55.0], [9.4, 55.0], [9.5, 55.0], [9.6, 55.0], [9.7, 55.0], [9.8, 55.0], [9.9, 55.0], [10.0, 55.0], [10.1, 55.0], [10.2, 56.0], [10.3, 56.0], [10.4, 56.0], [10.5, 56.0], [10.6, 56.0], [10.7, 56.0], [10.8, 56.0], [10.9, 56.0], [11.0, 56.0], [11.1, 56.0], [11.2, 56.0], [11.3, 56.0], [11.4, 56.0], [11.5, 56.0], [11.6, 56.0], [11.7, 56.0], [11.8, 57.0], [11.9, 57.0], [12.0, 57.0], [12.1, 57.0], [12.2, 57.0], [12.3, 57.0], [12.4, 57.0], [12.5, 57.0], [12.6, 57.0], [12.7, 57.0], [12.8, 57.0], [12.9, 57.0], [13.0, 57.0], [13.1, 57.0], [13.2, 57.0], [13.3, 58.0], [13.4, 58.0], [13.5, 58.0], [13.6, 58.0], [13.7, 58.0], [13.8, 58.0], [13.9, 58.0], [14.0, 58.0], [14.1, 58.0], [14.2, 58.0], [14.3, 59.0], [14.4, 59.0], [14.5, 59.0], [14.6, 59.0], [14.7, 59.0], [14.8, 59.0], [14.9, 59.0], [15.0, 59.0], [15.1, 60.0], [15.2, 60.0], [15.3, 60.0], [15.4, 60.0], [15.5, 60.0], [15.6, 60.0], [15.7, 61.0], [15.8, 61.0], [15.9, 61.0], [16.0, 62.0], [16.1, 62.0], [16.2, 62.0], [16.3, 62.0], [16.4, 62.0], [16.5, 62.0], [16.6, 63.0], [16.7, 64.0], [16.8, 64.0], [16.9, 64.0], [17.0, 65.0], [17.1, 65.0], [17.2, 65.0], [17.3, 65.0], [17.4, 65.0], [17.5, 66.0], [17.6, 66.0], [17.7, 66.0], [17.8, 67.0], [17.9, 67.0], [18.0, 68.0], [18.1, 69.0], [18.2, 69.0], [18.3, 70.0], [18.4, 71.0], [18.5, 74.0], [18.6, 75.0], [18.7, 85.0], [18.8, 85.0], [18.9, 85.0], [19.0, 85.0], [19.1, 85.0], [19.2, 87.0], [19.3, 87.0], [19.4, 89.0], [19.5, 90.0], [19.6, 90.0], [19.7, 90.0], [19.8, 91.0], [19.9, 91.0], [20.0, 91.0], [20.1, 92.0], [20.2, 93.0], [20.3, 94.0], [20.4, 94.0], [20.5, 94.0], [20.6, 94.0], [20.7, 94.0], [20.8, 94.0], [20.9, 94.0], [21.0, 94.0], [21.1, 94.0], [21.2, 95.0], [21.3, 95.0], [21.4, 95.0], [21.5, 95.0], [21.6, 95.0], [21.7, 95.0], [21.8, 95.0], [21.9, 95.0], [22.0, 95.0], [22.1, 95.0], [22.2, 95.0], [22.3, 95.0], [22.4, 95.0], [22.5, 95.0], [22.6, 95.0], [22.7, 95.0], [22.8, 95.0], [22.9, 95.0], [23.0, 95.0], [23.1, 95.0], [23.2, 95.0], [23.3, 95.0], [23.4, 96.0], [23.5, 96.0], [23.6, 97.0], [23.7, 98.0], [23.8, 98.0], [23.9, 98.0], [24.0, 99.0], [24.1, 99.0], [24.2, 99.0], [24.3, 99.0], [24.4, 99.0], [24.5, 99.0], [24.6, 99.0], [24.7, 99.0], [24.8, 99.0], [24.9, 99.0], [25.0, 99.0], [25.1, 99.0], [25.2, 99.0], [25.3, 100.0], [25.4, 100.0], [25.5, 100.0], [25.6, 100.0], [25.7, 100.0], [25.8, 100.0], [25.9, 100.0], [26.0, 100.0], [26.1, 100.0], [26.2, 100.0], [26.3, 100.0], [26.4, 100.0], [26.5, 100.0], [26.6, 100.0], [26.7, 100.0], [26.8, 100.0], [26.9, 100.0], [27.0, 100.0], [27.1, 100.0], [27.2, 100.0], [27.3, 100.0], [27.4, 100.0], [27.5, 100.0], [27.6, 100.0], [27.7, 100.0], [27.8, 100.0], [27.9, 100.0], [28.0, 100.0], [28.1, 100.0], [28.2, 100.0], [28.3, 100.0], [28.4, 100.0], [28.5, 100.0], [28.6, 100.0], [28.7, 100.0], [28.8, 100.0], [28.9, 100.0], [29.0, 100.0], [29.1, 100.0], [29.2, 100.0], [29.3, 100.0], [29.4, 100.0], [29.5, 100.0], [29.6, 100.0], [29.7, 100.0], [29.8, 100.0], [29.9, 100.0], [30.0, 100.0], [30.1, 100.0], [30.2, 100.0], [30.3, 100.0], [30.4, 100.0], [30.5, 100.0], [30.6, 100.0], [30.7, 100.0], [30.8, 100.0], [30.9, 100.0], [31.0, 100.0], [31.1, 100.0], [31.2, 100.0], [31.3, 100.0], [31.4, 100.0], [31.5, 100.0], [31.6, 100.0], [31.7, 100.0], [31.8, 100.0], [31.9, 100.0], [32.0, 100.0], [32.1, 100.0], [32.2, 100.0], [32.3, 100.0], [32.4, 100.0], [32.5, 100.0], [32.6, 100.0], [32.7, 100.0], [32.8, 100.0], [32.9, 100.0], [33.0, 100.0], [33.1, 100.0], [33.2, 100.0], [33.3, 100.0], [33.4, 100.0], [33.5, 100.0], [33.6, 100.0], [33.7, 100.0], [33.8, 100.0], [33.9, 100.0], [34.0, 100.0], [34.1, 100.0], [34.2, 100.0], [34.3, 100.0], [34.4, 100.0], [34.5, 100.0], [34.6, 100.0], [34.7, 100.0], [34.8, 100.0], [34.9, 100.0], [35.0, 100.0], [35.1, 100.0], [35.2, 100.0], [35.3, 100.0], [35.4, 100.0], [35.5, 100.0], [35.6, 100.0], [35.7, 100.0], [35.8, 100.0], [35.9, 100.0], [36.0, 100.0], [36.1, 100.0], [36.2, 101.0], [36.3, 101.0], [36.4, 101.0], [36.5, 101.0], [36.6, 102.0], [36.7, 102.0], [36.8, 103.0], [36.9, 103.0], [37.0, 103.0], [37.1, 103.0], [37.2, 103.0], [37.3, 103.0], [37.4, 103.0], [37.5, 103.0], [37.6, 103.0], [37.7, 103.0], [37.8, 103.0], [37.9, 103.0], [38.0, 104.0], [38.1, 104.0], [38.2, 104.0], [38.3, 104.0], [38.4, 104.0], [38.5, 104.0], [38.6, 104.0], [38.7, 104.0], [38.8, 104.0], [38.9, 104.0], [39.0, 104.0], [39.1, 105.0], [39.2, 105.0], [39.3, 105.0], [39.4, 105.0], [39.5, 105.0], [39.6, 105.0], [39.7, 105.0], [39.8, 105.0], [39.9, 105.0], [40.0, 105.0], [40.1, 105.0], [40.2, 105.0], [40.3, 105.0], [40.4, 105.0], [40.5, 105.0], [40.6, 105.0], [40.7, 105.0], [40.8, 105.0], [40.9, 105.0], [41.0, 106.0], [41.1, 106.0], [41.2, 107.0], [41.3, 107.0], [41.4, 108.0], [41.5, 108.0], [41.6, 109.0], [41.7, 109.0], [41.8, 109.0], [41.9, 109.0], [42.0, 109.0], [42.1, 109.0], [42.2, 109.0], [42.3, 109.0], [42.4, 109.0], [42.5, 109.0], [42.6, 109.0], [42.7, 109.0], [42.8, 109.0], [42.9, 109.0], [43.0, 109.0], [43.1, 109.0], [43.2, 109.0], [43.3, 110.0], [43.4, 110.0], [43.5, 110.0], [43.6, 110.0], [43.7, 110.0], [43.8, 110.0], [43.9, 110.0], [44.0, 110.0], [44.1, 110.0], [44.2, 110.0], [44.3, 110.0], [44.4, 110.0], [44.5, 110.0], [44.6, 110.0], [44.7, 110.0], [44.8, 110.0], [44.9, 110.0], [45.0, 110.0], [45.1, 110.0], [45.2, 110.0], [45.3, 110.0], [45.4, 110.0], [45.5, 110.0], [45.6, 110.0], [45.7, 110.0], [45.8, 110.0], [45.9, 110.0], [46.0, 110.0], [46.1, 110.0], [46.2, 110.0], [46.3, 110.0], [46.4, 110.0], [46.5, 110.0], [46.6, 110.0], [46.7, 110.0], [46.8, 110.0], [46.9, 110.0], [47.0, 110.0], [47.1, 110.0], [47.2, 110.0], [47.3, 110.0], [47.4, 110.0], [47.5, 110.0], [47.6, 110.0], [47.7, 110.0], [47.8, 110.0], [47.9, 110.0], [48.0, 110.0], [48.1, 110.0], [48.2, 110.0], [48.3, 110.0], [48.4, 110.0], [48.5, 110.0], [48.6, 110.0], [48.7, 110.0], [48.8, 110.0], [48.9, 110.0], [49.0, 110.0], [49.1, 110.0], [49.2, 110.0], [49.3, 110.0], [49.4, 110.0], [49.5, 110.0], [49.6, 110.0], [49.7, 110.0], [49.8, 110.0], [49.9, 111.0], [50.0, 111.0], [50.1, 112.0], [50.2, 112.0], [50.3, 112.0], [50.4, 113.0], [50.5, 113.0], [50.6, 114.0], [50.7, 114.0], [50.8, 117.0], [50.9, 118.0], [51.0, 118.0], [51.1, 118.0], [51.2, 119.0], [51.3, 119.0], [51.4, 120.0], [51.5, 120.0], [51.6, 120.0], [51.7, 120.0], [51.8, 120.0], [51.9, 120.0], [52.0, 120.0], [52.1, 120.0], [52.2, 120.0], [52.3, 120.0], [52.4, 122.0], [52.5, 122.0], [52.6, 123.0], [52.7, 124.0], [52.8, 125.0], [52.9, 129.0], [53.0, 129.0], [53.1, 129.0], [53.2, 130.0], [53.3, 130.0], [53.4, 130.0], [53.5, 130.0], [53.6, 130.0], [53.7, 130.0], [53.8, 130.0], [53.9, 130.0], [54.0, 130.0], [54.1, 130.0], [54.2, 130.0], [54.3, 130.0], [54.4, 130.0], [54.5, 130.0], [54.6, 131.0], [54.7, 133.0], [54.8, 138.0], [54.9, 140.0], [55.0, 140.0], [55.1, 140.0], [55.2, 140.0], [55.3, 140.0], [55.4, 140.0], [55.5, 142.0], [55.6, 143.0], [55.7, 143.0], [55.8, 144.0], [55.9, 145.0], [56.0, 145.0], [56.1, 150.0], [56.2, 150.0], [56.3, 150.0], [56.4, 150.0], [56.5, 150.0], [56.6, 150.0], [56.7, 150.0], [56.8, 153.0], [56.9, 154.0], [57.0, 154.0], [57.1, 155.0], [57.2, 158.0], [57.3, 159.0], [57.4, 159.0], [57.5, 160.0], [57.6, 297.0], [57.7, 370.0], [57.8, 483.0], [57.9, 483.0], [58.0, 483.0], [58.1, 727.0], [58.2, 770.0], [58.3, 775.0], [58.4, 1057.0], [58.5, 1067.0], [58.6, 1067.0], [58.7, 1075.0], [58.8, 1085.0], [58.9, 1085.0], [59.0, 1096.0], [59.1, 1096.0], [59.2, 1096.0], [59.3, 1096.0], [59.4, 1096.0], [59.5, 1099.0], [59.6, 1105.0], [59.7, 1106.0], [59.8, 1110.0], [59.9, 1115.0], [60.0, 1120.0], [60.1, 1120.0], [60.2, 1120.0], [60.3, 1120.0], [60.4, 1125.0], [60.5, 1130.0], [60.6, 1130.0], [60.7, 1130.0], [60.8, 1130.0], [60.9, 1134.0], [61.0, 1134.0], [61.1, 1135.0], [61.2, 1137.0], [61.3, 1138.0], [61.4, 1138.0], [61.5, 1138.0], [61.6, 1139.0], [61.7, 1140.0], [61.8, 1140.0], [61.9, 1140.0], [62.0, 1140.0], [62.1, 1140.0], [62.2, 1140.0], [62.3, 1141.0], [62.4, 1144.0], [62.5, 1147.0], [62.6, 1149.0], [62.7, 1149.0], [62.8, 1150.0], [62.9, 1150.0], [63.0, 1150.0], [63.1, 1150.0], [63.2, 1151.0], [63.3, 1154.0], [63.4, 1159.0], [63.5, 1160.0], [63.6, 1160.0], [63.7, 1160.0], [63.8, 1170.0], [63.9, 1170.0], [64.0, 1171.0], [64.1, 1174.0], [64.2, 1180.0], [64.3, 1180.0], [64.4, 1180.0], [64.5, 1180.0], [64.6, 1180.0], [64.7, 1180.0], [64.8, 1181.0], [64.9, 1189.0], [65.0, 1190.0], [65.1, 1190.0], [65.2, 1190.0], [65.3, 1190.0], [65.4, 1190.0], [65.5, 1190.0], [65.6, 1190.0], [65.7, 1190.0], [65.8, 1192.0], [65.9, 1197.0], [66.0, 1200.0], [66.1, 1200.0], [66.2, 1207.0], [66.3, 1212.0], [66.4, 1277.0], [66.5, 1320.0], [66.6, 1338.0], [66.7, 1349.0], [66.8, 1350.0], [66.9, 1353.0], [67.0, 1354.0], [67.1, 1357.0], [67.2, 1360.0], [67.3, 1360.0], [67.4, 1363.0], [67.5, 1370.0], [67.6, 1378.0], [67.7, 1379.0], [67.8, 1404.0], [67.9, 1406.0], [68.0, 1410.0], [68.1, 1410.0], [68.2, 1420.0], [68.3, 1496.0], [68.4, 1533.0], [68.5, 1540.0], [68.6, 1543.0], [68.7, 1545.0], [68.8, 1547.0], [68.9, 1560.0], [69.0, 1569.0], [69.1, 1853.0], [69.2, 1905.0], [69.3, 1949.0], [69.4, 1974.0], [69.5, 1980.0], [69.6, 1980.0], [69.7, 1991.0], [69.8, 1993.0], [69.9, 1993.0], [70.0, 1993.0], [70.1, 1993.0], [70.2, 2024.0], [70.3, 2024.0], [70.4, 2029.0], [70.5, 2030.0], [70.6, 2034.0], [70.7, 2043.0], [70.8, 2046.0], [70.9, 2052.0], [71.0, 2116.0], [71.1, 2119.0], [71.2, 2125.0], [71.3, 2147.0], [71.4, 2165.0], [71.5, 2179.0], [71.6, 2180.0], [71.7, 2200.0], [71.8, 2206.0], [71.9, 2209.0], [72.0, 2293.0], [72.1, 2403.0], [72.2, 2795.0], [72.3, 2798.0], [72.4, 2808.0], [72.5, 2814.0], [72.6, 2818.0], [72.7, 2819.0], [72.8, 2830.0], [72.9, 2834.0], [73.0, 2849.0], [73.1, 2854.0], [73.2, 2856.0], [73.3, 2859.0], [73.4, 2878.0], [73.5, 3100.0], [73.6, 3147.0], [73.7, 3149.0], [73.8, 3155.0], [73.9, 3157.0], [74.0, 3165.0], [74.1, 3178.0], [74.2, 3180.0], [74.3, 3195.0], [74.4, 3195.0], [74.5, 3197.0], [74.6, 3202.0], [74.7, 3206.0], [74.8, 3206.0], [74.9, 3206.0], [75.0, 3210.0], [75.1, 3212.0], [75.2, 3219.0], [75.3, 3220.0], [75.4, 3220.0], [75.5, 3220.0], [75.6, 3220.0], [75.7, 3221.0], [75.8, 3228.0], [75.9, 3230.0], [76.0, 3230.0], [76.1, 3239.0], [76.2, 3240.0], [76.3, 3240.0], [76.4, 3245.0], [76.5, 3249.0], [76.6, 3250.0], [76.7, 3255.0], [76.8, 3259.0], [76.9, 3259.0], [77.0, 3260.0], [77.1, 3260.0], [77.2, 3260.0], [77.3, 3270.0], [77.4, 3270.0], [77.5, 3270.0], [77.6, 3289.0], [77.7, 3289.0], [77.8, 3357.0], [77.9, 3360.0], [78.0, 3413.0], [78.1, 3415.0], [78.2, 3420.0], [78.3, 3428.0], [78.4, 3430.0], [78.5, 3433.0], [78.6, 3434.0], [78.7, 3438.0], [78.8, 3439.0], [78.9, 3454.0], [79.0, 3463.0], [79.1, 3469.0], [79.2, 3476.0], [79.3, 3480.0], [79.4, 3555.0], [79.5, 3556.0], [79.6, 3615.0], [79.7, 3659.0], [79.8, 3668.0], [79.9, 3678.0], [80.0, 3985.0], [80.1, 4020.0], [80.2, 4100.0], [80.3, 4100.0], [80.4, 4113.0], [80.5, 4167.0], [80.6, 4172.0], [80.7, 4871.0], [80.8, 4890.0], [80.9, 4894.0], [81.0, 4934.0], [81.1, 4989.0], [81.2, 4994.0], [81.3, 4999.0], [81.4, 5005.0], [81.5, 5197.0], [81.6, 5540.0], [81.7, 6189.0], [81.8, 6217.0], [81.9, 6227.0], [82.0, 6255.0], [82.1, 6290.0], [82.2, 6290.0], [82.3, 6450.0], [82.4, 6555.0], [82.5, 6600.0], [82.6, 6613.0], [82.7, 6649.0], [82.8, 6740.0], [82.9, 6754.0], [83.0, 6764.0], [83.1, 6774.0], [83.2, 7234.0], [83.3, 7235.0], [83.4, 7239.0], [83.5, 7244.0], [83.6, 7245.0], [83.7, 7268.0], [83.8, 7270.0], [83.9, 7270.0], [84.0, 7290.0], [84.1, 7290.0], [84.2, 7290.0], [84.3, 7290.0], [84.4, 7295.0], [84.5, 7298.0], [84.6, 7299.0], [84.7, 7299.0], [84.8, 7300.0], [84.9, 7300.0], [85.0, 7300.0], [85.1, 7310.0], [85.2, 7323.0], [85.3, 7325.0], [85.4, 7328.0], [85.5, 7329.0], [85.6, 7330.0], [85.7, 7339.0], [85.8, 7340.0], [85.9, 7340.0], [86.0, 7350.0], [86.1, 7445.0], [86.2, 7455.0], [86.3, 7456.0], [86.4, 7479.0], [86.5, 7502.0], [86.6, 7524.0], [86.7, 7528.0], [86.8, 7529.0], [86.9, 7532.0], [87.0, 7549.0], [87.1, 7555.0], [87.2, 7560.0], [87.3, 7635.0], [87.4, 7644.0], [87.5, 7707.0], [87.6, 7714.0], [87.7, 7728.0], [87.8, 7760.0], [87.9, 7760.0], [88.0, 7765.0], [88.1, 7768.0], [88.2, 7784.0], [88.3, 7809.0], [88.4, 7809.0], [88.5, 7824.0], [88.6, 7853.0], [88.7, 7865.0], [88.8, 8123.0], [88.9, 8133.0], [89.0, 8138.0], [89.1, 8202.0], [89.2, 8967.0], [89.3, 8992.0], [89.4, 9000.0], [89.5, 9020.0], [89.6, 9028.0], [89.7, 9057.0], [89.8, 10606.0], [89.9, 10614.0], [90.0, 10654.0], [90.1, 10672.0], [90.2, 10701.0], [90.3, 14456.0], [90.4, 14552.0], [90.5, 14630.0], [90.6, 14710.0], [90.7, 14807.0], [90.8, 14822.0], [90.9, 14843.0], [91.0, 14844.0], [91.1, 14858.0], [91.2, 14861.0], [91.3, 15034.0], [91.4, 15049.0], [91.5, 15348.0], [91.6, 15356.0], [91.7, 15404.0], [91.8, 15409.0], [91.9, 15684.0], [92.0, 15736.0], [92.1, 15804.0], [92.2, 15920.0], [92.3, 15999.0], [92.4, 16000.0], [92.5, 16000.0], [92.6, 16224.0], [92.7, 16244.0], [92.8, 16246.0], [92.9, 16278.0], [93.0, 16283.0], [93.1, 16289.0], [93.2, 16289.0], [93.3, 16320.0], [93.4, 16345.0], [93.5, 16421.0], [93.6, 16437.0], [93.7, 16469.0], [93.8, 16766.0], [93.9, 16822.0], [94.0, 16889.0], [94.1, 17290.0], [94.2, 19476.0], [94.3, 19549.0], [94.4, 22303.0], [94.5, 22319.0], [94.6, 22848.0], [94.7, 22903.0], [94.8, 22913.0], [94.9, 22926.0], [95.0, 22999.0], [95.1, 28250.0], [95.2, 28259.0], [95.3, 29912.0], [95.4, 30099.0], [95.5, 30099.0], [95.6, 30982.0], [95.7, 31329.0], [95.8, 31460.0], [95.9, 32170.0], [96.0, 32219.0], [96.1, 32445.0], [96.2, 32461.0], [96.3, 32499.0], [96.4, 32529.0], [96.5, 32577.0], [96.6, 32591.0], [96.7, 32669.0], [96.8, 32698.0], [96.9, 32732.0], [97.0, 32842.0], [97.1, 32869.0], [97.2, 32879.0], [97.3, 32899.0], [97.4, 33017.0], [97.5, 33032.0], [97.6, 33091.0], [97.7, 33099.0], [97.8, 33099.0], [97.9, 33109.0], [98.0, 33119.0], [98.1, 33422.0], [98.2, 33529.0], [98.3, 33529.0], [98.4, 34201.0], [98.5, 34262.0], [98.6, 35877.0], [98.7, 36003.0], [98.8, 39278.0], [98.9, 43538.0], [99.0, 43544.0], [99.1, 44018.0], [99.2, 54474.0], [99.3, 54538.0], [99.4, 65090.0], [99.5, 65160.0], [99.6, 71089.0], [99.7, 71698.0], [99.8, 71699.0], [99.9, 129028.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 323.0, "series": [{"data": [[0.0, 252.0], [100.0, 323.0], [33100.0, 2.0], [33500.0, 2.0], [43500.0, 2.0], [200.0, 1.0], [54500.0, 1.0], [65100.0, 1.0], [71000.0, 1.0], [300.0, 1.0], [400.0, 3.0], [129000.0, 1.0], [700.0, 3.0], [1000.0, 12.0], [1100.0, 64.0], [1200.0, 5.0], [1300.0, 14.0], [1400.0, 6.0], [1500.0, 7.0], [1800.0, 1.0], [1900.0, 10.0], [2000.0, 8.0], [2100.0, 7.0], [2200.0, 4.0], [2400.0, 1.0], [2800.0, 11.0], [2700.0, 2.0], [3100.0, 11.0], [3200.0, 32.0], [3300.0, 2.0], [3400.0, 14.0], [3500.0, 2.0], [3600.0, 4.0], [3900.0, 1.0], [4000.0, 1.0], [4100.0, 5.0], [4800.0, 3.0], [5000.0, 1.0], [5100.0, 1.0], [4900.0, 4.0], [5500.0, 1.0], [6100.0, 1.0], [6200.0, 5.0], [6600.0, 3.0], [6400.0, 1.0], [6500.0, 1.0], [6700.0, 4.0], [7300.0, 13.0], [7200.0, 16.0], [7400.0, 4.0], [7500.0, 8.0], [7600.0, 2.0], [7800.0, 5.0], [7700.0, 8.0], [8100.0, 3.0], [8200.0, 1.0], [9000.0, 4.0], [8900.0, 2.0], [10600.0, 4.0], [10700.0, 1.0], [14800.0, 6.0], [14500.0, 1.0], [14400.0, 1.0], [14700.0, 1.0], [14600.0, 1.0], [15300.0, 2.0], [15000.0, 2.0], [15400.0, 2.0], [15600.0, 1.0], [15700.0, 1.0], [15800.0, 1.0], [16200.0, 7.0], [16300.0, 2.0], [16000.0, 2.0], [15900.0, 2.0], [16400.0, 3.0], [16800.0, 2.0], [16700.0, 1.0], [17200.0, 1.0], [19400.0, 1.0], [19500.0, 1.0], [22300.0, 2.0], [22900.0, 4.0], [22800.0, 1.0], [28200.0, 2.0], [29900.0, 1.0], [30000.0, 2.0], [30900.0, 1.0], [31400.0, 1.0], [31300.0, 1.0], [32500.0, 3.0], [32600.0, 2.0], [32100.0, 1.0], [32200.0, 1.0], [32700.0, 1.0], [32400.0, 3.0], [32800.0, 4.0], [33000.0, 5.0], [33400.0, 1.0], [34200.0, 2.0], [35800.0, 1.0], [36000.0, 1.0], [39200.0, 1.0], [44000.0, 1.0], [54400.0, 1.0], [65000.0, 1.0], [71600.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 129000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 580.0, "series": [{"data": [[0.0, 580.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 104.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 315.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.71566202E12, "maxY": 121.4962566844918, "series": [{"data": [[1.71566202E12, 121.4962566844918], [1.71566214E12, 1.0], [1.71566208E12, 9.216666666666665]], "isOverall": false, "label": "ConTest", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71566214E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 49.0, "minX": 1.0, "maxY": 65160.0, "series": [{"data": [[2.0, 100.0], [3.0, 100.0], [4.0, 17934.75], [5.0, 21773.333333333336], [6.0, 65160.0], [7.0, 100.0], [8.0, 15649.571428571428], [9.0, 99.0], [10.0, 105.0], [11.0, 10997.333333333332], [12.0, 98.33333333333333], [13.0, 110.0], [14.0, 8190.0], [15.0, 5477.0], [16.0, 7935.2], [17.0, 615.0], [18.0, 100.0], [20.0, 755.7142857142858], [21.0, 1153.0], [22.0, 80.5], [23.0, 8741.333333333334], [24.0, 110.0], [25.0, 645.0], [26.0, 57.0], [27.0, 484.83333333333337], [28.0, 16198.0], [29.0, 79.0], [30.0, 1453.3333333333333], [31.0, 1130.0], [33.0, 79.0], [32.0, 106.0], [35.0, 358.75], [34.0, 348.75], [37.0, 8806.625], [36.0, 57.0], [39.0, 8710.0], [38.0, 4067.7777777777787], [41.0, 120.0], [40.0, 16065.5], [43.0, 105.0], [42.0, 10317.538461538465], [45.0, 100.0], [44.0, 16432.684210526317], [47.0, 9072.900000000001], [46.0, 127.5], [49.0, 6353.000000000001], [48.0, 100.0], [51.0, 103.33333333333333], [50.0, 5373.333333333334], [53.0, 351.0], [52.0, 110.0], [55.0, 625.0], [54.0, 437.5], [57.0, 98.0], [56.0, 1137.0], [59.0, 90.33333333333333], [61.0, 3425.0], [60.0, 2293.75], [63.0, 130.0], [62.0, 65.0], [67.0, 3800.0], [66.0, 80.5], [65.0, 10372.562500000002], [64.0, 97.6], [71.0, 100.0], [70.0, 110.0], [69.0, 5343.222222222223], [68.0, 83.0], [75.0, 7480.75], [74.0, 50.0], [73.0, 1655.0], [72.0, 2483.75], [79.0, 103.0], [78.0, 995.5714285714284], [77.0, 55.0], [76.0, 3220.0], [83.0, 1160.0], [82.0, 3824.090909090909], [81.0, 65.0], [80.0, 1633.5], [86.0, 705.0], [85.0, 1665.0], [84.0, 56.0], [91.0, 100.0], [90.0, 99.0], [89.0, 95.0], [88.0, 5702.000000000001], [95.0, 111.5], [94.0, 527.0], [93.0, 3696.0000000000005], [92.0, 1820.777777777778], [99.0, 1914.5], [98.0, 9113.0], [97.0, 2633.1666666666665], [96.0, 4155.5], [103.0, 110.0], [102.0, 100.0], [101.0, 7903.666666666666], [100.0, 9201.043478260868], [107.0, 2490.3333333333335], [106.0, 5018.666666666666], [105.0, 95.0], [104.0, 5892.526315789472], [111.0, 3306.0], [110.0, 3890.0], [109.0, 103.0], [108.0, 56.0], [115.0, 159.0], [114.0, 110.0], [113.0, 1670.0], [112.0, 4919.666666666666], [119.0, 389.75], [118.0, 3960.0], [117.0, 936.25], [116.0, 57.0], [123.0, 655.0], [122.0, 1632.0], [121.0, 622.0], [120.0, 3531.333333333333], [127.0, 645.0], [126.0, 709.8333333333334], [125.0, 443.66666666666663], [130.0, 113.0], [134.0, 3526.7500000000005], [135.0, 99.0], [133.0, 650.8333333333334], [132.0, 74.5], [131.0, 441.6666666666667], [129.0, 1326.25], [128.0, 130.0], [143.0, 2021.5000000000002], [142.0, 55.0], [141.0, 51.0], [140.0, 1742.1999999999998], [139.0, 71.66666666666667], [138.0, 3810.0], [137.0, 1315.6666666666667], [136.0, 3679.0], [144.0, 2637.0], [145.0, 408.7142857142858], [148.0, 1331.0], [151.0, 6227.0], [150.0, 2506.0000000000005], [149.0, 3725.0], [147.0, 3260.0], [146.0, 1129.2], [156.0, 2536.083333333333], [158.0, 3861.4], [159.0, 1615.0], [157.0, 4871.0], [155.0, 100.0], [154.0, 49.0], [153.0, 2161.625], [161.0, 942.2499999999999], [167.0, 57.0], [166.0, 4548.749999999999], [165.0, 5120.875000000001], [164.0, 2465.333333333333], [163.0, 49.0], [162.0, 104.5], [168.0, 1180.1666666666667], [175.0, 99.0], [174.0, 1742.4], [172.0, 1296.0], [171.0, 1331.8], [170.0, 2236.333333333333], [169.0, 1991.0769230769233], [182.0, 112.2], [183.0, 650.5], [181.0, 100.0], [180.0, 1091.0], [179.0, 1014.6666666666667], [178.0, 426.66666666666663], [177.0, 866.25], [176.0, 49.0], [191.0, 62.0], [190.0, 968.263157894737], [189.0, 2044.1707317073167], [188.0, 91.0], [187.0, 2110.5416666666665], [186.0, 2209.0], [185.0, 378.5], [184.0, 3142.0], [194.0, 107.0], [199.0, 628.0], [198.0, 88.33333333333333], [197.0, 530.0], [196.0, 998.6097560975609], [195.0, 94.0], [193.0, 1609.4], [192.0, 1452.0], [200.0, 85.73333333333333], [1.0, 25901.2]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[114.15699999999984, 4005.4609999999993]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 200.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 7.733333333333333, "minX": 1.71566202E12, "maxY": 2290.75, "series": [{"data": [[1.71566202E12, 2290.75], [1.71566214E12, 62.483333333333334], [1.71566208E12, 147.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71566202E12, 1807.6666666666667], [1.71566214E12, 7.733333333333333], [1.71566208E12, 116.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71566214E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 3415.1711229946536, "minX": 1.71566202E12, "maxY": 25901.2, "series": [{"data": [[1.71566202E12, 3415.1711229946536], [1.71566214E12, 25901.2], [1.71566208E12, 11379.499999999998]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71566214E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 95.6, "minX": 1.71566202E12, "maxY": 11379.466666666664, "series": [{"data": [[1.71566202E12, 3415.064171122998], [1.71566214E12, 95.6], [1.71566208E12, 11379.466666666664]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71566214E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 3356.1465240641714, "minX": 1.71566202E12, "maxY": 25820.200000000004, "series": [{"data": [[1.71566202E12, 3356.1465240641714], [1.71566214E12, 25820.200000000004], [1.71566208E12, 11304.9]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71566214E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 45.0, "minX": 1.71566202E12, "maxY": 71699.0, "series": [{"data": [[1.71566202E12, 36003.0], [1.71566214E12, 138.0], [1.71566208E12, 71699.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71566202E12, 45.0], [1.71566214E12, 100.0], [1.71566208E12, 49.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71566202E12, 8995.2], [1.71566214E12, 138.0], [1.71566208E12, 54531.6]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71566202E12, 33105.4], [1.71566214E12, 138.0], [1.71566208E12, 71699.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71566202E12, 119.0], [1.71566214E12, 120.0], [1.71566208E12, 100.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71566202E12, 16969.19999999997], [1.71566214E12, 138.0], [1.71566208E12, 70792.54999999997]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71566214E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 97.5, "minX": 2.0, "maxY": 129028.0, "series": [{"data": [[32.0, 106.5], [2.0, 615.0], [34.0, 111.0], [36.0, 120.0], [37.0, 110.0], [38.0, 104.5], [41.0, 111.5], [40.0, 15376.0], [43.0, 125.0], [42.0, 110.0], [45.0, 1106.0], [48.0, 1165.0], [3.0, 100.0], [50.0, 3199.5], [4.0, 14190.0], [5.0, 100.0], [6.0, 100.0], [9.0, 105.0], [10.0, 97.5], [12.0, 107.5], [13.0, 100.0], [15.0, 110.0], [17.0, 6189.0], [18.0, 142.5], [20.0, 110.0], [22.0, 135.0], [23.0, 120.0], [24.0, 110.0], [29.0, 113.0], [30.0, 102.0], [31.0, 3212.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[5.0, 129028.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 50.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 2.0, "maxY": 15376.0, "series": [{"data": [[32.0, 106.5], [2.0, 615.0], [34.0, 111.0], [36.0, 120.0], [37.0, 110.0], [38.0, 104.5], [41.0, 111.5], [40.0, 15376.0], [43.0, 124.0], [42.0, 109.5], [45.0, 1106.0], [48.0, 1165.0], [3.0, 100.0], [50.0, 3199.5], [4.0, 14189.5], [5.0, 100.0], [6.0, 100.0], [9.0, 105.0], [10.0, 97.5], [12.0, 106.5], [13.0, 100.0], [15.0, 110.0], [17.0, 6189.0], [18.0, 142.5], [20.0, 110.0], [22.0, 135.0], [23.0, 120.0], [24.0, 110.0], [29.0, 113.0], [30.0, 102.0], [31.0, 3212.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[5.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 50.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.71566202E12, "maxY": 15.85, "series": [{"data": [[1.71566202E12, 15.85], [1.71566214E12, 0.06666666666666667], [1.71566208E12, 0.75]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71566214E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.71566202E12, "maxY": 15.583333333333334, "series": [{"data": [[1.71566202E12, 15.583333333333334], [1.71566214E12, 0.06666666666666667], [1.71566208E12, 1.0]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.71566214E12, 0.016666666666666666]], "isOverall": false, "label": "Non HTTP response code: javax.net.ssl.SSLHandshakeException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71566214E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.71566202E12, "maxY": 15.583333333333334, "series": [{"data": [[1.71566202E12, 15.583333333333334], [1.71566214E12, 0.06666666666666667], [1.71566208E12, 1.0]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.71566214E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71566214E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.71566202E12, "maxY": 15.583333333333334, "series": [{"data": [[1.71566202E12, 15.583333333333334], [1.71566214E12, 0.06666666666666667], [1.71566208E12, 1.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.71566214E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71566214E12, "title": "Total Transactions Per Second"}},
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

