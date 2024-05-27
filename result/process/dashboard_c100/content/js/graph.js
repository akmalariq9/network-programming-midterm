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
        data: {"result": {"minY": 45.0, "minX": 0.0, "maxY": 46178.0, "series": [{"data": [[0.0, 45.0], [0.1, 46.0], [0.2, 46.0], [0.3, 46.0], [0.4, 46.0], [0.5, 46.0], [0.6, 47.0], [0.7, 47.0], [0.8, 47.0], [0.9, 47.0], [1.0, 47.0], [1.1, 47.0], [1.2, 47.0], [1.3, 47.0], [1.4, 47.0], [1.5, 47.0], [1.6, 47.0], [1.7, 47.0], [1.8, 48.0], [1.9, 48.0], [2.0, 48.0], [2.1, 48.0], [2.2, 48.0], [2.3, 48.0], [2.4, 48.0], [2.5, 48.0], [2.6, 48.0], [2.7, 48.0], [2.8, 48.0], [2.9, 48.0], [3.0, 48.0], [3.1, 48.0], [3.2, 48.0], [3.3, 48.0], [3.4, 48.0], [3.5, 49.0], [3.6, 49.0], [3.7, 49.0], [3.8, 49.0], [3.9, 49.0], [4.0, 49.0], [4.1, 49.0], [4.2, 49.0], [4.3, 49.0], [4.4, 49.0], [4.5, 49.0], [4.6, 49.0], [4.7, 49.0], [4.8, 49.0], [4.9, 49.0], [5.0, 49.0], [5.1, 49.0], [5.2, 49.0], [5.3, 49.0], [5.4, 49.0], [5.5, 49.0], [5.6, 50.0], [5.7, 50.0], [5.8, 50.0], [5.9, 50.0], [6.0, 50.0], [6.1, 50.0], [6.2, 50.0], [6.3, 50.0], [6.4, 50.0], [6.5, 50.0], [6.6, 50.0], [6.7, 50.0], [6.8, 50.0], [6.9, 50.0], [7.0, 50.0], [7.1, 50.0], [7.2, 50.0], [7.3, 50.0], [7.4, 50.0], [7.5, 50.0], [7.6, 50.0], [7.7, 50.0], [7.8, 50.0], [7.9, 50.0], [8.0, 50.0], [8.1, 51.0], [8.2, 51.0], [8.3, 51.0], [8.4, 51.0], [8.5, 51.0], [8.6, 51.0], [8.7, 51.0], [8.8, 51.0], [8.9, 51.0], [9.0, 51.0], [9.1, 51.0], [9.2, 51.0], [9.3, 51.0], [9.4, 51.0], [9.5, 51.0], [9.6, 51.0], [9.7, 51.0], [9.8, 51.0], [9.9, 51.0], [10.0, 52.0], [10.1, 52.0], [10.2, 52.0], [10.3, 52.0], [10.4, 52.0], [10.5, 52.0], [10.6, 52.0], [10.7, 52.0], [10.8, 52.0], [10.9, 52.0], [11.0, 52.0], [11.1, 53.0], [11.2, 53.0], [11.3, 53.0], [11.4, 53.0], [11.5, 53.0], [11.6, 54.0], [11.7, 54.0], [11.8, 54.0], [11.9, 55.0], [12.0, 55.0], [12.1, 55.0], [12.2, 55.0], [12.3, 55.0], [12.4, 55.0], [12.5, 55.0], [12.6, 55.0], [12.7, 55.0], [12.8, 55.0], [12.9, 55.0], [13.0, 55.0], [13.1, 55.0], [13.2, 55.0], [13.3, 55.0], [13.4, 55.0], [13.5, 55.0], [13.6, 55.0], [13.7, 55.0], [13.8, 55.0], [13.9, 55.0], [14.0, 55.0], [14.1, 55.0], [14.2, 55.0], [14.3, 55.0], [14.4, 55.0], [14.5, 55.0], [14.6, 55.0], [14.7, 55.0], [14.8, 55.0], [14.9, 56.0], [15.0, 56.0], [15.1, 56.0], [15.2, 56.0], [15.3, 56.0], [15.4, 56.0], [15.5, 56.0], [15.6, 56.0], [15.7, 56.0], [15.8, 56.0], [15.9, 56.0], [16.0, 56.0], [16.1, 56.0], [16.2, 56.0], [16.3, 56.0], [16.4, 56.0], [16.5, 56.0], [16.6, 56.0], [16.7, 56.0], [16.8, 56.0], [16.9, 56.0], [17.0, 56.0], [17.1, 57.0], [17.2, 57.0], [17.3, 57.0], [17.4, 57.0], [17.5, 57.0], [17.6, 57.0], [17.7, 57.0], [17.8, 57.0], [17.9, 57.0], [18.0, 57.0], [18.1, 57.0], [18.2, 57.0], [18.3, 58.0], [18.4, 58.0], [18.5, 58.0], [18.6, 58.0], [18.7, 58.0], [18.8, 58.0], [18.9, 58.0], [19.0, 58.0], [19.1, 58.0], [19.2, 58.0], [19.3, 58.0], [19.4, 58.0], [19.5, 58.0], [19.6, 58.0], [19.7, 58.0], [19.8, 58.0], [19.9, 58.0], [20.0, 58.0], [20.1, 58.0], [20.2, 58.0], [20.3, 58.0], [20.4, 59.0], [20.5, 59.0], [20.6, 59.0], [20.7, 59.0], [20.8, 59.0], [20.9, 59.0], [21.0, 59.0], [21.1, 59.0], [21.2, 60.0], [21.3, 60.0], [21.4, 60.0], [21.5, 60.0], [21.6, 60.0], [21.7, 60.0], [21.8, 60.0], [21.9, 60.0], [22.0, 61.0], [22.1, 61.0], [22.2, 61.0], [22.3, 61.0], [22.4, 61.0], [22.5, 61.0], [22.6, 61.0], [22.7, 62.0], [22.8, 62.0], [22.9, 62.0], [23.0, 62.0], [23.1, 63.0], [23.2, 63.0], [23.3, 65.0], [23.4, 65.0], [23.5, 65.0], [23.6, 65.0], [23.7, 65.0], [23.8, 65.0], [23.9, 65.0], [24.0, 65.0], [24.1, 65.0], [24.2, 65.0], [24.3, 66.0], [24.4, 66.0], [24.5, 66.0], [24.6, 66.0], [24.7, 66.0], [24.8, 66.0], [24.9, 66.0], [25.0, 67.0], [25.1, 68.0], [25.2, 68.0], [25.3, 69.0], [25.4, 69.0], [25.5, 70.0], [25.6, 71.0], [25.7, 75.0], [25.8, 75.0], [25.9, 75.0], [26.0, 75.0], [26.1, 77.0], [26.2, 84.0], [26.3, 85.0], [26.4, 86.0], [26.5, 86.0], [26.6, 86.0], [26.7, 87.0], [26.8, 87.0], [26.9, 88.0], [27.0, 89.0], [27.1, 90.0], [27.2, 90.0], [27.3, 91.0], [27.4, 92.0], [27.5, 92.0], [27.6, 92.0], [27.7, 93.0], [27.8, 93.0], [27.9, 93.0], [28.0, 93.0], [28.1, 93.0], [28.2, 93.0], [28.3, 93.0], [28.4, 93.0], [28.5, 93.0], [28.6, 93.0], [28.7, 94.0], [28.8, 94.0], [28.9, 94.0], [29.0, 94.0], [29.1, 94.0], [29.2, 94.0], [29.3, 94.0], [29.4, 94.0], [29.5, 94.0], [29.6, 94.0], [29.7, 94.0], [29.8, 94.0], [29.9, 94.0], [30.0, 94.0], [30.1, 94.0], [30.2, 94.0], [30.3, 94.0], [30.4, 94.0], [30.5, 94.0], [30.6, 94.0], [30.7, 94.0], [30.8, 94.0], [30.9, 94.0], [31.0, 94.0], [31.1, 94.0], [31.2, 94.0], [31.3, 94.0], [31.4, 94.0], [31.5, 95.0], [31.6, 95.0], [31.7, 95.0], [31.8, 95.0], [31.9, 95.0], [32.0, 95.0], [32.1, 95.0], [32.2, 95.0], [32.3, 95.0], [32.4, 95.0], [32.5, 95.0], [32.6, 95.0], [32.7, 95.0], [32.8, 95.0], [32.9, 95.0], [33.0, 95.0], [33.1, 95.0], [33.2, 95.0], [33.3, 97.0], [33.4, 98.0], [33.5, 98.0], [33.6, 98.0], [33.7, 98.0], [33.8, 98.0], [33.9, 99.0], [34.0, 99.0], [34.1, 99.0], [34.2, 99.0], [34.3, 99.0], [34.4, 99.0], [34.5, 99.0], [34.6, 99.0], [34.7, 99.0], [34.8, 99.0], [34.9, 99.0], [35.0, 99.0], [35.1, 99.0], [35.2, 99.0], [35.3, 99.0], [35.4, 99.0], [35.5, 99.0], [35.6, 99.0], [35.7, 99.0], [35.8, 99.0], [35.9, 99.0], [36.0, 99.0], [36.1, 99.0], [36.2, 99.0], [36.3, 99.0], [36.4, 99.0], [36.5, 99.0], [36.6, 99.0], [36.7, 99.0], [36.8, 99.0], [36.9, 99.0], [37.0, 99.0], [37.1, 99.0], [37.2, 99.0], [37.3, 99.0], [37.4, 99.0], [37.5, 99.0], [37.6, 99.0], [37.7, 100.0], [37.8, 100.0], [37.9, 100.0], [38.0, 100.0], [38.1, 100.0], [38.2, 100.0], [38.3, 100.0], [38.4, 100.0], [38.5, 100.0], [38.6, 100.0], [38.7, 100.0], [38.8, 100.0], [38.9, 100.0], [39.0, 100.0], [39.1, 100.0], [39.2, 100.0], [39.3, 100.0], [39.4, 100.0], [39.5, 100.0], [39.6, 100.0], [39.7, 100.0], [39.8, 100.0], [39.9, 100.0], [40.0, 100.0], [40.1, 100.0], [40.2, 100.0], [40.3, 100.0], [40.4, 100.0], [40.5, 100.0], [40.6, 100.0], [40.7, 100.0], [40.8, 100.0], [40.9, 100.0], [41.0, 100.0], [41.1, 100.0], [41.2, 100.0], [41.3, 100.0], [41.4, 100.0], [41.5, 100.0], [41.6, 100.0], [41.7, 100.0], [41.8, 100.0], [41.9, 100.0], [42.0, 100.0], [42.1, 100.0], [42.2, 100.0], [42.3, 100.0], [42.4, 100.0], [42.5, 100.0], [42.6, 100.0], [42.7, 100.0], [42.8, 100.0], [42.9, 100.0], [43.0, 100.0], [43.1, 100.0], [43.2, 100.0], [43.3, 100.0], [43.4, 100.0], [43.5, 100.0], [43.6, 100.0], [43.7, 100.0], [43.8, 100.0], [43.9, 100.0], [44.0, 100.0], [44.1, 100.0], [44.2, 100.0], [44.3, 100.0], [44.4, 100.0], [44.5, 100.0], [44.6, 100.0], [44.7, 100.0], [44.8, 100.0], [44.9, 100.0], [45.0, 100.0], [45.1, 100.0], [45.2, 100.0], [45.3, 100.0], [45.4, 100.0], [45.5, 100.0], [45.6, 100.0], [45.7, 100.0], [45.8, 100.0], [45.9, 100.0], [46.0, 100.0], [46.1, 100.0], [46.2, 100.0], [46.3, 100.0], [46.4, 100.0], [46.5, 100.0], [46.6, 100.0], [46.7, 100.0], [46.8, 100.0], [46.9, 100.0], [47.0, 100.0], [47.1, 100.0], [47.2, 100.0], [47.3, 100.0], [47.4, 100.0], [47.5, 100.0], [47.6, 100.0], [47.7, 100.0], [47.8, 101.0], [47.9, 101.0], [48.0, 101.0], [48.1, 101.0], [48.2, 102.0], [48.3, 102.0], [48.4, 102.0], [48.5, 102.0], [48.6, 103.0], [48.7, 103.0], [48.8, 103.0], [48.9, 103.0], [49.0, 103.0], [49.1, 103.0], [49.2, 103.0], [49.3, 104.0], [49.4, 104.0], [49.5, 104.0], [49.6, 104.0], [49.7, 104.0], [49.8, 104.0], [49.9, 104.0], [50.0, 104.0], [50.1, 104.0], [50.2, 104.0], [50.3, 104.0], [50.4, 104.0], [50.5, 104.0], [50.6, 104.0], [50.7, 104.0], [50.8, 104.0], [50.9, 104.0], [51.0, 105.0], [51.1, 105.0], [51.2, 105.0], [51.3, 105.0], [51.4, 105.0], [51.5, 105.0], [51.6, 105.0], [51.7, 105.0], [51.8, 105.0], [51.9, 106.0], [52.0, 106.0], [52.1, 106.0], [52.2, 107.0], [52.3, 108.0], [52.4, 108.0], [52.5, 109.0], [52.6, 109.0], [52.7, 109.0], [52.8, 109.0], [52.9, 109.0], [53.0, 109.0], [53.1, 109.0], [53.2, 109.0], [53.3, 109.0], [53.4, 109.0], [53.5, 109.0], [53.6, 109.0], [53.7, 109.0], [53.8, 109.0], [53.9, 109.0], [54.0, 109.0], [54.1, 109.0], [54.2, 109.0], [54.3, 110.0], [54.4, 110.0], [54.5, 110.0], [54.6, 110.0], [54.7, 110.0], [54.8, 110.0], [54.9, 110.0], [55.0, 110.0], [55.1, 110.0], [55.2, 110.0], [55.3, 110.0], [55.4, 110.0], [55.5, 110.0], [55.6, 110.0], [55.7, 110.0], [55.8, 110.0], [55.9, 110.0], [56.0, 110.0], [56.1, 110.0], [56.2, 110.0], [56.3, 110.0], [56.4, 110.0], [56.5, 110.0], [56.6, 110.0], [56.7, 110.0], [56.8, 110.0], [56.9, 110.0], [57.0, 110.0], [57.1, 110.0], [57.2, 110.0], [57.3, 110.0], [57.4, 110.0], [57.5, 110.0], [57.6, 110.0], [57.7, 110.0], [57.8, 110.0], [57.9, 110.0], [58.0, 110.0], [58.1, 110.0], [58.2, 110.0], [58.3, 110.0], [58.4, 110.0], [58.5, 110.0], [58.6, 110.0], [58.7, 110.0], [58.8, 110.0], [58.9, 110.0], [59.0, 110.0], [59.1, 110.0], [59.2, 111.0], [59.3, 112.0], [59.4, 113.0], [59.5, 113.0], [59.6, 113.0], [59.7, 114.0], [59.8, 114.0], [59.9, 114.0], [60.0, 114.0], [60.1, 115.0], [60.2, 115.0], [60.3, 115.0], [60.4, 115.0], [60.5, 116.0], [60.6, 117.0], [60.7, 119.0], [60.8, 119.0], [60.9, 119.0], [61.0, 119.0], [61.1, 120.0], [61.2, 120.0], [61.3, 120.0], [61.4, 120.0], [61.5, 120.0], [61.6, 120.0], [61.7, 120.0], [61.8, 120.0], [61.9, 120.0], [62.0, 120.0], [62.1, 120.0], [62.2, 123.0], [62.3, 123.0], [62.4, 124.0], [62.5, 125.0], [62.6, 129.0], [62.7, 129.0], [62.8, 129.0], [62.9, 129.0], [63.0, 129.0], [63.1, 129.0], [63.2, 129.0], [63.3, 129.0], [63.4, 129.0], [63.5, 129.0], [63.6, 130.0], [63.7, 130.0], [63.8, 130.0], [63.9, 130.0], [64.0, 130.0], [64.1, 130.0], [64.2, 130.0], [64.3, 130.0], [64.4, 130.0], [64.5, 130.0], [64.6, 130.0], [64.7, 130.0], [64.8, 130.0], [64.9, 130.0], [65.0, 130.0], [65.1, 130.0], [65.2, 130.0], [65.3, 130.0], [65.4, 130.0], [65.5, 130.0], [65.6, 130.0], [65.7, 130.0], [65.8, 130.0], [65.9, 130.0], [66.0, 130.0], [66.1, 130.0], [66.2, 130.0], [66.3, 130.0], [66.4, 130.0], [66.5, 130.0], [66.6, 130.0], [66.7, 130.0], [66.8, 130.0], [66.9, 130.0], [67.0, 130.0], [67.1, 130.0], [67.2, 131.0], [67.3, 131.0], [67.4, 139.0], [67.5, 140.0], [67.6, 140.0], [67.7, 140.0], [67.8, 140.0], [67.9, 140.0], [68.0, 140.0], [68.1, 140.0], [68.2, 140.0], [68.3, 140.0], [68.4, 141.0], [68.5, 142.0], [68.6, 142.0], [68.7, 142.0], [68.8, 143.0], [68.9, 144.0], [69.0, 144.0], [69.1, 144.0], [69.2, 144.0], [69.3, 145.0], [69.4, 147.0], [69.5, 147.0], [69.6, 149.0], [69.7, 149.0], [69.8, 150.0], [69.9, 150.0], [70.0, 150.0], [70.1, 150.0], [70.2, 150.0], [70.3, 150.0], [70.4, 150.0], [70.5, 150.0], [70.6, 150.0], [70.7, 150.0], [70.8, 150.0], [70.9, 153.0], [71.0, 153.0], [71.1, 153.0], [71.2, 153.0], [71.3, 154.0], [71.4, 154.0], [71.5, 154.0], [71.6, 154.0], [71.7, 154.0], [71.8, 154.0], [71.9, 155.0], [72.0, 155.0], [72.1, 155.0], [72.2, 155.0], [72.3, 157.0], [72.4, 159.0], [72.5, 159.0], [72.6, 159.0], [72.7, 160.0], [72.8, 160.0], [72.9, 160.0], [73.0, 160.0], [73.1, 160.0], [73.2, 160.0], [73.3, 160.0], [73.4, 160.0], [73.5, 161.0], [73.6, 165.0], [73.7, 170.0], [73.8, 170.0], [73.9, 170.0], [74.0, 173.0], [74.1, 252.0], [74.2, 255.0], [74.3, 299.0], [74.4, 300.0], [74.5, 339.0], [74.6, 359.0], [74.7, 360.0], [74.8, 360.0], [74.9, 364.0], [75.0, 544.0], [75.1, 645.0], [75.2, 776.0], [75.3, 800.0], [75.4, 926.0], [75.5, 992.0], [75.6, 1000.0], [75.7, 1002.0], [75.8, 1057.0], [75.9, 1065.0], [76.0, 1066.0], [76.1, 1084.0], [76.2, 1085.0], [76.3, 1085.0], [76.4, 1086.0], [76.5, 1088.0], [76.6, 1091.0], [76.7, 1097.0], [76.8, 1107.0], [76.9, 1108.0], [77.0, 1108.0], [77.1, 1109.0], [77.2, 1113.0], [77.3, 1118.0], [77.4, 1118.0], [77.5, 1118.0], [77.6, 1120.0], [77.7, 1120.0], [77.8, 1120.0], [77.9, 1120.0], [78.0, 1126.0], [78.1, 1128.0], [78.2, 1128.0], [78.3, 1129.0], [78.4, 1129.0], [78.5, 1138.0], [78.6, 1138.0], [78.7, 1139.0], [78.8, 1140.0], [78.9, 1140.0], [79.0, 1146.0], [79.1, 1147.0], [79.2, 1149.0], [79.3, 1149.0], [79.4, 1149.0], [79.5, 1150.0], [79.6, 1150.0], [79.7, 1156.0], [79.8, 1158.0], [79.9, 1159.0], [80.0, 1160.0], [80.1, 1160.0], [80.2, 1163.0], [80.3, 1170.0], [80.4, 1180.0], [80.5, 1180.0], [80.6, 1189.0], [80.7, 1190.0], [80.8, 1190.0], [80.9, 1199.0], [81.0, 1200.0], [81.1, 1200.0], [81.2, 1307.0], [81.3, 1324.0], [81.4, 1338.0], [81.5, 1380.0], [81.6, 1387.0], [81.7, 1407.0], [81.8, 1410.0], [81.9, 1420.0], [82.0, 1529.0], [82.1, 1599.0], [82.2, 1610.0], [82.3, 1646.0], [82.4, 1767.0], [82.5, 1781.0], [82.6, 1870.0], [82.7, 1880.0], [82.8, 1963.0], [82.9, 1979.0], [83.0, 2130.0], [83.1, 2135.0], [83.2, 2136.0], [83.3, 2147.0], [83.4, 2148.0], [83.5, 2158.0], [83.6, 2159.0], [83.7, 2160.0], [83.8, 2176.0], [83.9, 2176.0], [84.0, 2178.0], [84.1, 2180.0], [84.2, 2180.0], [84.3, 2185.0], [84.4, 2189.0], [84.5, 2190.0], [84.6, 2200.0], [84.7, 2205.0], [84.8, 2213.0], [84.9, 2217.0], [85.0, 2221.0], [85.1, 2230.0], [85.2, 2232.0], [85.3, 2260.0], [85.4, 2308.0], [85.5, 2459.0], [85.6, 2515.0], [85.7, 2554.0], [85.8, 2790.0], [85.9, 2824.0], [86.0, 2850.0], [86.1, 2857.0], [86.2, 3157.0], [86.3, 3165.0], [86.4, 3166.0], [86.5, 3167.0], [86.6, 3168.0], [86.7, 3169.0], [86.8, 3175.0], [86.9, 3197.0], [87.0, 3204.0], [87.1, 3205.0], [87.2, 3205.0], [87.3, 3206.0], [87.4, 3209.0], [87.5, 3210.0], [87.6, 3216.0], [87.7, 3219.0], [87.8, 3220.0], [87.9, 3230.0], [88.0, 3230.0], [88.1, 3236.0], [88.2, 3240.0], [88.3, 3240.0], [88.4, 3240.0], [88.5, 3247.0], [88.6, 3248.0], [88.7, 3249.0], [88.8, 3250.0], [88.9, 3250.0], [89.0, 3260.0], [89.1, 3269.0], [89.2, 3269.0], [89.3, 3279.0], [89.4, 3375.0], [89.5, 3419.0], [89.6, 3430.0], [89.7, 3437.0], [89.8, 3440.0], [89.9, 3446.0], [90.0, 3493.0], [90.1, 3689.0], [90.2, 3836.0], [90.3, 4497.0], [90.4, 4509.0], [90.5, 4520.0], [90.6, 4528.0], [90.7, 4877.0], [90.8, 4919.0], [90.9, 5507.0], [91.0, 5569.0], [91.1, 6196.0], [91.2, 6197.0], [91.3, 6205.0], [91.4, 6229.0], [91.5, 6238.0], [91.6, 6240.0], [91.7, 6250.0], [91.8, 6269.0], [91.9, 6269.0], [92.0, 6269.0], [92.1, 6279.0], [92.2, 6283.0], [92.3, 6289.0], [92.4, 6290.0], [92.5, 6297.0], [92.6, 6303.0], [92.7, 6493.0], [92.8, 7235.0], [92.9, 7238.0], [93.0, 7247.0], [93.1, 7269.0], [93.2, 7294.0], [93.3, 7307.0], [93.4, 7307.0], [93.5, 7319.0], [93.6, 7319.0], [93.7, 7319.0], [93.8, 7320.0], [93.9, 7439.0], [94.0, 7466.0], [94.1, 7537.0], [94.2, 7578.0], [94.3, 7754.0], [94.4, 7755.0], [94.5, 7797.0], [94.6, 7817.0], [94.7, 7838.0], [94.8, 7848.0], [94.9, 8008.0], [95.0, 8038.0], [95.1, 8819.0], [95.2, 14376.0], [95.3, 14455.0], [95.4, 14508.0], [95.5, 14648.0], [95.6, 14668.0], [95.7, 14683.0], [95.8, 14850.0], [95.9, 14863.0], [96.0, 14894.0], [96.1, 15174.0], [96.2, 15198.0], [96.3, 15277.0], [96.4, 15389.0], [96.5, 15398.0], [96.6, 15459.0], [96.7, 15724.0], [96.8, 15777.0], [96.9, 15804.0], [97.0, 15880.0], [97.1, 15884.0], [97.2, 15930.0], [97.3, 15960.0], [97.4, 16307.0], [97.5, 16677.0], [97.6, 18203.0], [97.7, 19397.0], [97.8, 28103.0], [97.9, 31069.0], [98.0, 31313.0], [98.1, 31313.0], [98.2, 31877.0], [98.3, 32067.0], [98.4, 32087.0], [98.5, 32189.0], [98.6, 32229.0], [98.7, 32409.0], [98.8, 32418.0], [98.9, 32439.0], [99.0, 32449.0], [99.1, 32468.0], [99.2, 33000.0], [99.3, 33919.0], [99.4, 35526.0], [99.5, 35548.0], [99.6, 35718.0], [99.7, 39078.0], [99.8, 39096.0], [99.9, 46178.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 376.0, "series": [{"data": [[0.0, 376.0], [600.0, 1.0], [700.0, 1.0], [800.0, 1.0], [900.0, 2.0], [1000.0, 12.0], [1100.0, 42.0], [1200.0, 2.0], [1300.0, 5.0], [1400.0, 3.0], [1500.0, 2.0], [1600.0, 2.0], [1700.0, 2.0], [1800.0, 2.0], [1900.0, 2.0], [2100.0, 16.0], [2200.0, 8.0], [2300.0, 1.0], [2400.0, 1.0], [2500.0, 2.0], [2700.0, 1.0], [2800.0, 3.0], [3100.0, 8.0], [3200.0, 24.0], [3300.0, 1.0], [3400.0, 6.0], [3600.0, 1.0], [3800.0, 1.0], [4500.0, 3.0], [4400.0, 1.0], [4800.0, 1.0], [4900.0, 1.0], [5500.0, 2.0], [6100.0, 2.0], [6200.0, 13.0], [6300.0, 1.0], [6400.0, 1.0], [7300.0, 6.0], [7200.0, 5.0], [7400.0, 2.0], [7500.0, 2.0], [7700.0, 3.0], [7800.0, 3.0], [8000.0, 2.0], [8800.0, 1.0], [14300.0, 1.0], [14600.0, 3.0], [14800.0, 3.0], [14500.0, 1.0], [14400.0, 1.0], [15100.0, 2.0], [15300.0, 2.0], [15200.0, 1.0], [15700.0, 2.0], [15800.0, 3.0], [15400.0, 1.0], [16300.0, 1.0], [15900.0, 2.0], [16600.0, 1.0], [18200.0, 1.0], [19300.0, 1.0], [100.0, 365.0], [28100.0, 1.0], [31300.0, 2.0], [31000.0, 1.0], [32100.0, 1.0], [32000.0, 2.0], [32400.0, 5.0], [31800.0, 1.0], [32200.0, 1.0], [33000.0, 1.0], [33900.0, 1.0], [35500.0, 2.0], [35700.0, 1.0], [39000.0, 2.0], [46100.0, 1.0], [200.0, 3.0], [300.0, 6.0], [500.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 46100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 70.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 750.0, "series": [{"data": [[0.0, 750.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 70.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 180.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 49.82262210796925, "minX": 1.71566154E12, "maxY": 94.5045045045045, "series": [{"data": [[1.71566154E12, 94.5045045045045], [1.7156616E12, 49.82262210796925]], "isOverall": false, "label": "ConTest", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7156616E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 56.5, "minX": 1.0, "maxY": 9454.333333333334, "series": [{"data": [[2.0, 114.5], [3.0, 115.42857142857144], [4.0, 9454.333333333334], [5.0, 534.0], [6.0, 364.0], [7.0, 317.8], [8.0, 100.0], [9.0, 110.0], [10.0, 65.0], [11.0, 412.4117647058823], [12.0, 6484.777777777779], [13.0, 130.0], [14.0, 98.33333333333333], [15.0, 607.3333333333334], [16.0, 129.0], [18.0, 235.50000000000003], [19.0, 7792.4909090909105], [20.0, 130.0], [21.0, 3401.21052631579], [22.0, 2914.2], [23.0, 100.0], [24.0, 108.33333333333333], [25.0, 3966.166666666667], [26.0, 2743.333333333333], [27.0, 110.0], [28.0, 102.5], [29.0, 89.33333333333333], [30.0, 357.49999999999994], [31.0, 2743.2500000000005], [33.0, 623.1666666666667], [32.0, 712.0], [35.0, 100.0], [34.0, 4163.4], [37.0, 97.0], [36.0, 795.0], [39.0, 365.5], [38.0, 7277.5], [41.0, 1526.8], [40.0, 440.50000000000006], [43.0, 4903.428571428572], [42.0, 2384.285714285714], [45.0, 4625.5], [44.0, 3082.5714285714284], [46.0, 1120.25], [47.0, 82.66666666666667], [49.0, 4033.75], [48.0, 427.3333333333333], [50.0, 172.78571428571428], [51.0, 2318.823529411765], [52.0, 2229.5714285714284], [53.0, 2638.366666666667], [55.0, 315.1], [54.0, 150.0], [57.0, 114.0], [56.0, 100.0], [58.0, 325.92857142857144], [59.0, 160.0], [61.0, 1682.25], [60.0, 95.0], [62.0, 777.9615384615385], [63.0, 3194.0], [64.0, 56.5], [65.0, 1473.4285714285713], [67.0, 596.0000000000001], [66.0, 57.0], [69.0, 83.5], [70.0, 668.5], [71.0, 1314.0], [68.0, 1587.5714285714287], [74.0, 80.8], [75.0, 2569.833333333333], [73.0, 99.0], [72.0, 1243.1874999999998], [77.0, 820.8], [79.0, 61.0], [78.0, 932.5], [76.0, 3911.0], [81.0, 388.45454545454544], [83.0, 593.1666666666667], [82.0, 226.85714285714286], [80.0, 205.375], [86.0, 2368.4193548387098], [87.0, 4278.090909090909], [85.0, 358.8125], [84.0, 521.8], [91.0, 1120.857142857143], [90.0, 434.0], [89.0, 316.5], [88.0, 932.1153846153846], [95.0, 331.0], [94.0, 740.9230769230769], [93.0, 75.0], [92.0, 1646.698113207547], [97.0, 1054.5714285714287], [99.0, 507.37500000000006], [98.0, 1295.4230769230771], [96.0, 923.5], [100.0, 636.8317757009346], [1.0, 4712.4]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[59.74200000000009, 1850.9229999999993]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 429.2, "minX": 1.71566154E12, "maxY": 1906.1, "series": [{"data": [[1.71566154E12, 543.9], [1.7156616E12, 1906.1]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71566154E12, 429.2], [1.7156616E12, 1504.1333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7156616E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 686.4279279279278, "minX": 1.71566154E12, "maxY": 2183.2082262210774, "series": [{"data": [[1.71566154E12, 686.4279279279278], [1.7156616E12, 2183.2082262210774]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7156616E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 686.1531531531532, "minX": 1.71566154E12, "maxY": 2183.1105398457566, "series": [{"data": [[1.71566154E12, 686.1531531531532], [1.7156616E12, 2183.1105398457566]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7156616E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 636.9954954954957, "minX": 1.71566154E12, "maxY": 2121.2300771208243, "series": [{"data": [[1.71566154E12, 636.9954954954957], [1.7156616E12, 2121.2300771208243]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7156616E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 45.0, "minX": 1.71566154E12, "maxY": 46178.0, "series": [{"data": [[1.71566154E12, 4877.0], [1.7156616E12, 46178.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71566154E12, 46.0], [1.7156616E12, 45.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71566154E12, 2386.400000000004], [1.7156616E12, 6283.6]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71566154E12, 4523.63], [1.7156616E12, 33192.990000000034]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71566154E12, 107.5], [1.7156616E12, 103.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71566154E12, 3248.85], [1.7156616E12, 15175.199999999999]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7156616E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 61.0, "minX": 1.0, "maxY": 28103.0, "series": [{"data": [[33.0, 112.0], [35.0, 102.5], [36.0, 127.5], [39.0, 61.0], [38.0, 100.0], [40.0, 98.0], [43.0, 113.5], [49.0, 100.0], [48.0, 99.5], [3.0, 100.0], [52.0, 120.0], [4.0, 100.0], [5.0, 129.0], [6.0, 100.0], [7.0, 130.0], [9.0, 100.0], [10.0, 129.5], [12.0, 135.0], [15.0, 142.0], [1.0, 28103.0], [16.0, 130.0], [17.0, 109.5], [18.0, 377.5], [21.0, 100.0], [22.0, 100.0], [24.0, 130.0], [28.0, 107.5], [30.0, 109.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 52.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 61.0, "minX": 1.0, "maxY": 28103.0, "series": [{"data": [[33.0, 112.0], [35.0, 101.5], [36.0, 127.5], [39.0, 61.0], [38.0, 100.0], [40.0, 98.0], [43.0, 113.5], [49.0, 99.5], [48.0, 99.5], [3.0, 100.0], [52.0, 119.5], [4.0, 100.0], [5.0, 129.0], [6.0, 100.0], [7.0, 130.0], [9.0, 100.0], [10.0, 129.5], [12.0, 135.0], [15.0, 142.0], [1.0, 28103.0], [16.0, 130.0], [17.0, 109.5], [18.0, 377.5], [21.0, 100.0], [22.0, 100.0], [24.0, 130.0], [28.0, 107.5], [30.0, 108.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 52.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.233333333333333, "minX": 1.71566154E12, "maxY": 11.433333333333334, "series": [{"data": [[1.71566154E12, 5.233333333333333], [1.7156616E12, 11.433333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7156616E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.7, "minX": 1.71566154E12, "maxY": 12.966666666666667, "series": [{"data": [[1.71566154E12, 3.7], [1.7156616E12, 12.966666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7156616E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.7, "minX": 1.71566154E12, "maxY": 12.966666666666667, "series": [{"data": [[1.71566154E12, 3.7], [1.7156616E12, 12.966666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7156616E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.7, "minX": 1.71566154E12, "maxY": 12.966666666666667, "series": [{"data": [[1.71566154E12, 3.7], [1.7156616E12, 12.966666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7156616E12, "title": "Total Transactions Per Second"}},
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

