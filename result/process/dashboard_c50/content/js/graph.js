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
        data: {"result": {"minY": 40.0, "minX": 0.0, "maxY": 32849.0, "series": [{"data": [[0.0, 40.0], [0.1, 44.0], [0.2, 44.0], [0.3, 44.0], [0.4, 45.0], [0.5, 45.0], [0.6, 45.0], [0.7, 46.0], [0.8, 46.0], [0.9, 46.0], [1.0, 46.0], [1.1, 46.0], [1.2, 46.0], [1.3, 47.0], [1.4, 47.0], [1.5, 47.0], [1.6, 47.0], [1.7, 47.0], [1.8, 47.0], [1.9, 47.0], [2.0, 47.0], [2.1, 47.0], [2.2, 47.0], [2.3, 47.0], [2.4, 47.0], [2.5, 47.0], [2.6, 48.0], [2.7, 48.0], [2.8, 48.0], [2.9, 48.0], [3.0, 48.0], [3.1, 48.0], [3.2, 48.0], [3.3, 48.0], [3.4, 48.0], [3.5, 48.0], [3.6, 48.0], [3.7, 48.0], [3.8, 48.0], [3.9, 48.0], [4.0, 48.0], [4.1, 48.0], [4.2, 48.0], [4.3, 48.0], [4.4, 48.0], [4.5, 48.0], [4.6, 48.0], [4.7, 48.0], [4.8, 48.0], [4.9, 48.0], [5.0, 48.0], [5.1, 48.0], [5.2, 48.0], [5.3, 48.0], [5.4, 48.0], [5.5, 48.0], [5.6, 49.0], [5.7, 49.0], [5.8, 49.0], [5.9, 49.0], [6.0, 49.0], [6.1, 49.0], [6.2, 49.0], [6.3, 49.0], [6.4, 49.0], [6.5, 49.0], [6.6, 49.0], [6.7, 49.0], [6.8, 49.0], [6.9, 49.0], [7.0, 49.0], [7.1, 49.0], [7.2, 49.0], [7.3, 49.0], [7.4, 49.0], [7.5, 49.0], [7.6, 49.0], [7.7, 49.0], [7.8, 49.0], [7.9, 49.0], [8.0, 49.0], [8.1, 49.0], [8.2, 49.0], [8.3, 49.0], [8.4, 49.0], [8.5, 49.0], [8.6, 49.0], [8.7, 49.0], [8.8, 49.0], [8.9, 49.0], [9.0, 49.0], [9.1, 49.0], [9.2, 49.0], [9.3, 49.0], [9.4, 49.0], [9.5, 49.0], [9.6, 49.0], [9.7, 49.0], [9.8, 49.0], [9.9, 50.0], [10.0, 50.0], [10.1, 50.0], [10.2, 50.0], [10.3, 50.0], [10.4, 50.0], [10.5, 50.0], [10.6, 50.0], [10.7, 50.0], [10.8, 50.0], [10.9, 50.0], [11.0, 50.0], [11.1, 50.0], [11.2, 50.0], [11.3, 50.0], [11.4, 50.0], [11.5, 50.0], [11.6, 50.0], [11.7, 50.0], [11.8, 50.0], [11.9, 50.0], [12.0, 50.0], [12.1, 50.0], [12.2, 50.0], [12.3, 50.0], [12.4, 50.0], [12.5, 50.0], [12.6, 50.0], [12.7, 50.0], [12.8, 50.0], [12.9, 50.0], [13.0, 50.0], [13.1, 50.0], [13.2, 50.0], [13.3, 50.0], [13.4, 50.0], [13.5, 50.0], [13.6, 50.0], [13.7, 50.0], [13.8, 50.0], [13.9, 50.0], [14.0, 50.0], [14.1, 50.0], [14.2, 50.0], [14.3, 50.0], [14.4, 50.0], [14.5, 50.0], [14.6, 50.0], [14.7, 50.0], [14.8, 50.0], [14.9, 50.0], [15.0, 50.0], [15.1, 50.0], [15.2, 50.0], [15.3, 50.0], [15.4, 50.0], [15.5, 50.0], [15.6, 50.0], [15.7, 50.0], [15.8, 50.0], [15.9, 51.0], [16.0, 51.0], [16.1, 51.0], [16.2, 51.0], [16.3, 51.0], [16.4, 51.0], [16.5, 51.0], [16.6, 51.0], [16.7, 51.0], [16.8, 51.0], [16.9, 51.0], [17.0, 51.0], [17.1, 51.0], [17.2, 51.0], [17.3, 51.0], [17.4, 51.0], [17.5, 51.0], [17.6, 51.0], [17.7, 51.0], [17.8, 51.0], [17.9, 51.0], [18.0, 51.0], [18.1, 51.0], [18.2, 51.0], [18.3, 51.0], [18.4, 51.0], [18.5, 51.0], [18.6, 51.0], [18.7, 51.0], [18.8, 51.0], [18.9, 51.0], [19.0, 51.0], [19.1, 52.0], [19.2, 52.0], [19.3, 52.0], [19.4, 52.0], [19.5, 52.0], [19.6, 52.0], [19.7, 52.0], [19.8, 52.0], [19.9, 52.0], [20.0, 52.0], [20.1, 52.0], [20.2, 52.0], [20.3, 53.0], [20.4, 53.0], [20.5, 54.0], [20.6, 54.0], [20.7, 54.0], [20.8, 54.0], [20.9, 54.0], [21.0, 54.0], [21.1, 54.0], [21.2, 54.0], [21.3, 54.0], [21.4, 54.0], [21.5, 54.0], [21.6, 54.0], [21.7, 54.0], [21.8, 54.0], [21.9, 55.0], [22.0, 55.0], [22.1, 55.0], [22.2, 55.0], [22.3, 55.0], [22.4, 55.0], [22.5, 55.0], [22.6, 55.0], [22.7, 55.0], [22.8, 55.0], [22.9, 55.0], [23.0, 55.0], [23.1, 55.0], [23.2, 55.0], [23.3, 55.0], [23.4, 55.0], [23.5, 55.0], [23.6, 55.0], [23.7, 55.0], [23.8, 55.0], [23.9, 55.0], [24.0, 55.0], [24.1, 55.0], [24.2, 55.0], [24.3, 55.0], [24.4, 55.0], [24.5, 55.0], [24.6, 55.0], [24.7, 55.0], [24.8, 55.0], [24.9, 56.0], [25.0, 56.0], [25.1, 56.0], [25.2, 56.0], [25.3, 56.0], [25.4, 56.0], [25.5, 56.0], [25.6, 56.0], [25.7, 56.0], [25.8, 56.0], [25.9, 56.0], [26.0, 56.0], [26.1, 56.0], [26.2, 56.0], [26.3, 56.0], [26.4, 56.0], [26.5, 56.0], [26.6, 57.0], [26.7, 57.0], [26.8, 57.0], [26.9, 57.0], [27.0, 57.0], [27.1, 57.0], [27.2, 57.0], [27.3, 58.0], [27.4, 58.0], [27.5, 58.0], [27.6, 58.0], [27.7, 58.0], [27.8, 58.0], [27.9, 58.0], [28.0, 58.0], [28.1, 58.0], [28.2, 58.0], [28.3, 58.0], [28.4, 58.0], [28.5, 59.0], [28.6, 59.0], [28.7, 59.0], [28.8, 59.0], [28.9, 59.0], [29.0, 59.0], [29.1, 59.0], [29.2, 59.0], [29.3, 59.0], [29.4, 59.0], [29.5, 59.0], [29.6, 59.0], [29.7, 59.0], [29.8, 59.0], [29.9, 60.0], [30.0, 60.0], [30.1, 60.0], [30.2, 60.0], [30.3, 60.0], [30.4, 60.0], [30.5, 60.0], [30.6, 60.0], [30.7, 60.0], [30.8, 60.0], [30.9, 60.0], [31.0, 60.0], [31.1, 60.0], [31.2, 60.0], [31.3, 60.0], [31.4, 60.0], [31.5, 60.0], [31.6, 61.0], [31.7, 61.0], [31.8, 61.0], [31.9, 61.0], [32.0, 61.0], [32.1, 62.0], [32.2, 62.0], [32.3, 62.0], [32.4, 62.0], [32.5, 63.0], [32.6, 63.0], [32.7, 63.0], [32.8, 64.0], [32.9, 64.0], [33.0, 65.0], [33.1, 65.0], [33.2, 65.0], [33.3, 65.0], [33.4, 65.0], [33.5, 65.0], [33.6, 65.0], [33.7, 65.0], [33.8, 65.0], [33.9, 66.0], [34.0, 66.0], [34.1, 66.0], [34.2, 67.0], [34.3, 67.0], [34.4, 67.0], [34.5, 68.0], [34.6, 68.0], [34.7, 69.0], [34.8, 70.0], [34.9, 70.0], [35.0, 70.0], [35.1, 74.0], [35.2, 75.0], [35.3, 76.0], [35.4, 76.0], [35.5, 77.0], [35.6, 77.0], [35.7, 78.0], [35.8, 78.0], [35.9, 85.0], [36.0, 85.0], [36.1, 85.0], [36.2, 89.0], [36.3, 89.0], [36.4, 89.0], [36.5, 90.0], [36.6, 90.0], [36.7, 90.0], [36.8, 90.0], [36.9, 90.0], [37.0, 90.0], [37.1, 90.0], [37.2, 90.0], [37.3, 92.0], [37.4, 92.0], [37.5, 92.0], [37.6, 92.0], [37.7, 93.0], [37.8, 93.0], [37.9, 93.0], [38.0, 93.0], [38.1, 94.0], [38.2, 94.0], [38.3, 94.0], [38.4, 94.0], [38.5, 94.0], [38.6, 94.0], [38.7, 94.0], [38.8, 94.0], [38.9, 94.0], [39.0, 94.0], [39.1, 94.0], [39.2, 94.0], [39.3, 94.0], [39.4, 94.0], [39.5, 94.0], [39.6, 94.0], [39.7, 94.0], [39.8, 94.0], [39.9, 94.0], [40.0, 94.0], [40.1, 95.0], [40.2, 95.0], [40.3, 95.0], [40.4, 95.0], [40.5, 95.0], [40.6, 95.0], [40.7, 95.0], [40.8, 95.0], [40.9, 95.0], [41.0, 95.0], [41.1, 95.0], [41.2, 95.0], [41.3, 95.0], [41.4, 95.0], [41.5, 95.0], [41.6, 95.0], [41.7, 95.0], [41.8, 95.0], [41.9, 95.0], [42.0, 95.0], [42.1, 95.0], [42.2, 95.0], [42.3, 95.0], [42.4, 95.0], [42.5, 95.0], [42.6, 95.0], [42.7, 96.0], [42.8, 96.0], [42.9, 96.0], [43.0, 96.0], [43.1, 97.0], [43.2, 98.0], [43.3, 98.0], [43.4, 98.0], [43.5, 99.0], [43.6, 99.0], [43.7, 99.0], [43.8, 99.0], [43.9, 99.0], [44.0, 99.0], [44.1, 99.0], [44.2, 99.0], [44.3, 99.0], [44.4, 99.0], [44.5, 99.0], [44.6, 99.0], [44.7, 99.0], [44.8, 99.0], [44.9, 99.0], [45.0, 99.0], [45.1, 99.0], [45.2, 99.0], [45.3, 99.0], [45.4, 99.0], [45.5, 99.0], [45.6, 99.0], [45.7, 99.0], [45.8, 99.0], [45.9, 99.0], [46.0, 99.0], [46.1, 99.0], [46.2, 99.0], [46.3, 99.0], [46.4, 99.0], [46.5, 99.0], [46.6, 99.0], [46.7, 99.0], [46.8, 99.0], [46.9, 99.0], [47.0, 99.0], [47.1, 99.0], [47.2, 99.0], [47.3, 99.0], [47.4, 99.0], [47.5, 99.0], [47.6, 99.0], [47.7, 99.0], [47.8, 100.0], [47.9, 100.0], [48.0, 100.0], [48.1, 100.0], [48.2, 100.0], [48.3, 100.0], [48.4, 100.0], [48.5, 100.0], [48.6, 100.0], [48.7, 100.0], [48.8, 100.0], [48.9, 100.0], [49.0, 100.0], [49.1, 100.0], [49.2, 100.0], [49.3, 100.0], [49.4, 100.0], [49.5, 100.0], [49.6, 100.0], [49.7, 100.0], [49.8, 100.0], [49.9, 100.0], [50.0, 100.0], [50.1, 100.0], [50.2, 100.0], [50.3, 100.0], [50.4, 100.0], [50.5, 100.0], [50.6, 100.0], [50.7, 100.0], [50.8, 100.0], [50.9, 100.0], [51.0, 100.0], [51.1, 100.0], [51.2, 100.0], [51.3, 100.0], [51.4, 100.0], [51.5, 100.0], [51.6, 100.0], [51.7, 100.0], [51.8, 100.0], [51.9, 100.0], [52.0, 100.0], [52.1, 100.0], [52.2, 100.0], [52.3, 100.0], [52.4, 100.0], [52.5, 100.0], [52.6, 100.0], [52.7, 100.0], [52.8, 100.0], [52.9, 100.0], [53.0, 100.0], [53.1, 100.0], [53.2, 100.0], [53.3, 100.0], [53.4, 100.0], [53.5, 100.0], [53.6, 100.0], [53.7, 100.0], [53.8, 100.0], [53.9, 100.0], [54.0, 100.0], [54.1, 100.0], [54.2, 100.0], [54.3, 100.0], [54.4, 100.0], [54.5, 100.0], [54.6, 100.0], [54.7, 100.0], [54.8, 100.0], [54.9, 100.0], [55.0, 100.0], [55.1, 100.0], [55.2, 100.0], [55.3, 100.0], [55.4, 100.0], [55.5, 100.0], [55.6, 100.0], [55.7, 100.0], [55.8, 100.0], [55.9, 100.0], [56.0, 100.0], [56.1, 100.0], [56.2, 100.0], [56.3, 100.0], [56.4, 100.0], [56.5, 100.0], [56.6, 100.0], [56.7, 100.0], [56.8, 100.0], [56.9, 100.0], [57.0, 100.0], [57.1, 100.0], [57.2, 100.0], [57.3, 100.0], [57.4, 100.0], [57.5, 100.0], [57.6, 100.0], [57.7, 100.0], [57.8, 100.0], [57.9, 100.0], [58.0, 100.0], [58.1, 100.0], [58.2, 100.0], [58.3, 100.0], [58.4, 100.0], [58.5, 100.0], [58.6, 100.0], [58.7, 100.0], [58.8, 100.0], [58.9, 100.0], [59.0, 100.0], [59.1, 100.0], [59.2, 100.0], [59.3, 100.0], [59.4, 100.0], [59.5, 100.0], [59.6, 100.0], [59.7, 100.0], [59.8, 100.0], [59.9, 100.0], [60.0, 100.0], [60.1, 100.0], [60.2, 100.0], [60.3, 100.0], [60.4, 100.0], [60.5, 100.0], [60.6, 100.0], [60.7, 100.0], [60.8, 100.0], [60.9, 100.0], [61.0, 100.0], [61.1, 100.0], [61.2, 100.0], [61.3, 100.0], [61.4, 100.0], [61.5, 100.0], [61.6, 100.0], [61.7, 100.0], [61.8, 100.0], [61.9, 100.0], [62.0, 100.0], [62.1, 100.0], [62.2, 100.0], [62.3, 100.0], [62.4, 100.0], [62.5, 100.0], [62.6, 100.0], [62.7, 101.0], [62.8, 101.0], [62.9, 101.0], [63.0, 101.0], [63.1, 101.0], [63.2, 101.0], [63.3, 101.0], [63.4, 101.0], [63.5, 101.0], [63.6, 101.0], [63.7, 101.0], [63.8, 102.0], [63.9, 102.0], [64.0, 102.0], [64.1, 102.0], [64.2, 102.0], [64.3, 102.0], [64.4, 103.0], [64.5, 103.0], [64.6, 103.0], [64.7, 103.0], [64.8, 103.0], [64.9, 103.0], [65.0, 103.0], [65.1, 103.0], [65.2, 104.0], [65.3, 104.0], [65.4, 104.0], [65.5, 104.0], [65.6, 104.0], [65.7, 104.0], [65.8, 104.0], [65.9, 104.0], [66.0, 104.0], [66.1, 104.0], [66.2, 104.0], [66.3, 105.0], [66.4, 105.0], [66.5, 105.0], [66.6, 105.0], [66.7, 105.0], [66.8, 105.0], [66.9, 105.0], [67.0, 105.0], [67.1, 105.0], [67.2, 105.0], [67.3, 105.0], [67.4, 105.0], [67.5, 105.0], [67.6, 105.0], [67.7, 105.0], [67.8, 105.0], [67.9, 105.0], [68.0, 105.0], [68.1, 105.0], [68.2, 105.0], [68.3, 105.0], [68.4, 105.0], [68.5, 106.0], [68.6, 108.0], [68.7, 108.0], [68.8, 109.0], [68.9, 109.0], [69.0, 109.0], [69.1, 109.0], [69.2, 109.0], [69.3, 109.0], [69.4, 109.0], [69.5, 109.0], [69.6, 109.0], [69.7, 109.0], [69.8, 109.0], [69.9, 109.0], [70.0, 109.0], [70.1, 109.0], [70.2, 109.0], [70.3, 109.0], [70.4, 109.0], [70.5, 109.0], [70.6, 109.0], [70.7, 109.0], [70.8, 109.0], [70.9, 109.0], [71.0, 109.0], [71.1, 109.0], [71.2, 109.0], [71.3, 109.0], [71.4, 109.0], [71.5, 109.0], [71.6, 109.0], [71.7, 109.0], [71.8, 109.0], [71.9, 109.0], [72.0, 109.0], [72.1, 109.0], [72.2, 110.0], [72.3, 110.0], [72.4, 110.0], [72.5, 110.0], [72.6, 110.0], [72.7, 110.0], [72.8, 110.0], [72.9, 110.0], [73.0, 110.0], [73.1, 110.0], [73.2, 110.0], [73.3, 110.0], [73.4, 110.0], [73.5, 110.0], [73.6, 110.0], [73.7, 110.0], [73.8, 110.0], [73.9, 110.0], [74.0, 110.0], [74.1, 110.0], [74.2, 110.0], [74.3, 110.0], [74.4, 110.0], [74.5, 110.0], [74.6, 110.0], [74.7, 110.0], [74.8, 110.0], [74.9, 110.0], [75.0, 110.0], [75.1, 110.0], [75.2, 110.0], [75.3, 110.0], [75.4, 110.0], [75.5, 110.0], [75.6, 110.0], [75.7, 110.0], [75.8, 110.0], [75.9, 110.0], [76.0, 110.0], [76.1, 110.0], [76.2, 110.0], [76.3, 110.0], [76.4, 110.0], [76.5, 110.0], [76.6, 110.0], [76.7, 110.0], [76.8, 110.0], [76.9, 110.0], [77.0, 110.0], [77.1, 110.0], [77.2, 110.0], [77.3, 110.0], [77.4, 110.0], [77.5, 110.0], [77.6, 110.0], [77.7, 110.0], [77.8, 110.0], [77.9, 110.0], [78.0, 110.0], [78.1, 110.0], [78.2, 110.0], [78.3, 110.0], [78.4, 110.0], [78.5, 110.0], [78.6, 110.0], [78.7, 110.0], [78.8, 111.0], [78.9, 111.0], [79.0, 112.0], [79.1, 112.0], [79.2, 112.0], [79.3, 113.0], [79.4, 113.0], [79.5, 113.0], [79.6, 114.0], [79.7, 114.0], [79.8, 114.0], [79.9, 115.0], [80.0, 115.0], [80.1, 115.0], [80.2, 118.0], [80.3, 119.0], [80.4, 119.0], [80.5, 119.0], [80.6, 119.0], [80.7, 119.0], [80.8, 119.0], [80.9, 119.0], [81.0, 119.0], [81.1, 120.0], [81.2, 120.0], [81.3, 120.0], [81.4, 120.0], [81.5, 120.0], [81.6, 120.0], [81.7, 120.0], [81.8, 120.0], [81.9, 120.0], [82.0, 120.0], [82.1, 120.0], [82.2, 120.0], [82.3, 121.0], [82.4, 129.0], [82.5, 130.0], [82.6, 130.0], [82.7, 130.0], [82.8, 130.0], [82.9, 130.0], [83.0, 130.0], [83.1, 130.0], [83.2, 139.0], [83.3, 139.0], [83.4, 140.0], [83.5, 140.0], [83.6, 140.0], [83.7, 140.0], [83.8, 140.0], [83.9, 143.0], [84.0, 143.0], [84.1, 144.0], [84.2, 145.0], [84.3, 145.0], [84.4, 145.0], [84.5, 145.0], [84.6, 146.0], [84.7, 149.0], [84.8, 150.0], [84.9, 150.0], [85.0, 150.0], [85.1, 150.0], [85.2, 150.0], [85.3, 150.0], [85.4, 154.0], [85.5, 154.0], [85.6, 155.0], [85.7, 159.0], [85.8, 159.0], [85.9, 159.0], [86.0, 159.0], [86.1, 160.0], [86.2, 160.0], [86.3, 160.0], [86.4, 160.0], [86.5, 161.0], [86.6, 170.0], [86.7, 170.0], [86.8, 320.0], [86.9, 325.0], [87.0, 325.0], [87.1, 337.0], [87.2, 350.0], [87.3, 1075.0], [87.4, 1076.0], [87.5, 1077.0], [87.6, 1080.0], [87.7, 1085.0], [87.8, 1089.0], [87.9, 1107.0], [88.0, 1110.0], [88.1, 1115.0], [88.2, 1119.0], [88.3, 1130.0], [88.4, 1130.0], [88.5, 1130.0], [88.6, 1140.0], [88.7, 1140.0], [88.8, 1149.0], [88.9, 1150.0], [89.0, 1151.0], [89.1, 1159.0], [89.2, 1159.0], [89.3, 1160.0], [89.4, 1160.0], [89.5, 1160.0], [89.6, 1160.0], [89.7, 1169.0], [89.8, 1169.0], [89.9, 1170.0], [90.0, 1177.0], [90.1, 1180.0], [90.2, 1190.0], [90.3, 1190.0], [90.4, 1190.0], [90.5, 1199.0], [90.6, 1200.0], [90.7, 1210.0], [90.8, 1334.0], [90.9, 1338.0], [91.0, 1350.0], [91.1, 1549.0], [91.2, 2019.0], [91.3, 2049.0], [91.4, 2110.0], [91.5, 2155.0], [91.6, 2174.0], [91.7, 2180.0], [91.8, 2835.0], [91.9, 2840.0], [92.0, 2889.0], [92.1, 2949.0], [92.2, 3148.0], [92.3, 3152.0], [92.4, 3152.0], [92.5, 3185.0], [92.6, 3195.0], [92.7, 3195.0], [92.8, 3199.0], [92.9, 3200.0], [93.0, 3206.0], [93.1, 3206.0], [93.2, 3219.0], [93.3, 3220.0], [93.4, 3220.0], [93.5, 3228.0], [93.6, 3229.0], [93.7, 3230.0], [93.8, 3239.0], [93.9, 3240.0], [94.0, 3240.0], [94.1, 3250.0], [94.2, 3259.0], [94.3, 3259.0], [94.4, 3260.0], [94.5, 3270.0], [94.6, 3270.0], [94.7, 3287.0], [94.8, 3396.0], [94.9, 3425.0], [95.0, 3438.0], [95.1, 3445.0], [95.2, 3529.0], [95.3, 3630.0], [95.4, 4119.0], [95.5, 4290.0], [95.6, 4520.0], [95.7, 6246.0], [95.8, 6264.0], [95.9, 6315.0], [96.0, 6559.0], [96.1, 7216.0], [96.2, 7234.0], [96.3, 7274.0], [96.4, 7277.0], [96.5, 7280.0], [96.6, 7289.0], [96.7, 7300.0], [96.8, 7300.0], [96.9, 7310.0], [97.0, 7314.0], [97.1, 7319.0], [97.2, 7320.0], [97.3, 7330.0], [97.4, 7330.0], [97.5, 7350.0], [97.6, 7540.0], [97.7, 7709.0], [97.8, 7720.0], [97.9, 8104.0], [98.0, 8139.0], [98.1, 8158.0], [98.2, 9828.0], [98.3, 9867.0], [98.4, 14515.0], [98.5, 15379.0], [98.6, 15610.0], [98.7, 15610.0], [98.8, 15691.0], [98.9, 16079.0], [99.0, 16778.0], [99.1, 32089.0], [99.2, 32135.0], [99.3, 32206.0], [99.4, 32298.0], [99.5, 32548.0], [99.6, 32550.0], [99.7, 32589.0], [99.8, 32750.0], [99.9, 32849.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 478.0, "series": [{"data": [[0.0, 478.0], [9800.0, 2.0], [14500.0, 1.0], [15300.0, 1.0], [15600.0, 3.0], [1000.0, 6.0], [16000.0, 1.0], [16700.0, 1.0], [1100.0, 27.0], [1200.0, 2.0], [1300.0, 3.0], [1500.0, 1.0], [100.0, 390.0], [2000.0, 2.0], [32200.0, 2.0], [32500.0, 3.0], [32100.0, 1.0], [32700.0, 1.0], [32000.0, 1.0], [2100.0, 4.0], [32800.0, 1.0], [2800.0, 3.0], [2900.0, 1.0], [3100.0, 7.0], [3200.0, 19.0], [3300.0, 1.0], [3400.0, 3.0], [3500.0, 1.0], [3600.0, 1.0], [4100.0, 1.0], [4200.0, 1.0], [4500.0, 1.0], [300.0, 5.0], [6200.0, 2.0], [6300.0, 1.0], [6500.0, 1.0], [7300.0, 9.0], [7200.0, 6.0], [7500.0, 1.0], [7700.0, 2.0], [8100.0, 3.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 32800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 38.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 873.0, "series": [{"data": [[0.0, 873.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 38.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 89.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 7.248618784530389, "minX": 1.71566142E12, "maxY": 36.73382173382172, "series": [{"data": [[1.71566142E12, 36.73382173382172], [1.71566148E12, 7.248618784530389]], "isOverall": false, "label": "ConTest", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71566148E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 73.75, "minX": 1.0, "maxY": 15062.5, "series": [{"data": [[2.0, 607.5], [3.0, 110.0], [4.0, 105.0], [5.0, 769.3389830508474], [6.0, 845.5714285714287], [7.0, 110.0], [8.0, 107.15], [9.0, 3686.680555555556], [10.0, 100.72727272727272], [11.0, 15062.5], [12.0, 100.0], [13.0, 302.0], [14.0, 101.92857142857143], [15.0, 895.4210526315788], [16.0, 675.875], [17.0, 147.13636363636365], [18.0, 90.0], [19.0, 1126.2499999999995], [20.0, 941.6999999999998], [21.0, 218.4], [22.0, 1723.4117647058822], [23.0, 1350.2857142857144], [24.0, 101.5], [25.0, 92.0], [26.0, 241.7142857142857], [27.0, 99.75], [28.0, 874.6666666666667], [29.0, 474.9354838709678], [30.0, 260.5666666666667], [31.0, 84.5], [33.0, 859.8214285714286], [32.0, 75.5], [34.0, 797.6000000000003], [35.0, 390.7857142857143], [36.0, 73.75], [37.0, 507.41176470588243], [39.0, 436.7666666666666], [38.0, 319.5], [41.0, 924.7692307692307], [40.0, 252.75], [42.0, 231.3846153846154], [43.0, 616.5833333333334], [44.0, 1639.1250000000002], [45.0, 932.3658536585367], [47.0, 620.3289473684213], [46.0, 938.2499999999998], [48.0, 108.2], [49.0, 276.4666666666667], [50.0, 175.03448275862073], [1.0, 95.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[31.396999999999977, 866.1159999999996]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 349.93333333333334, "minX": 1.71566142E12, "maxY": 2006.55, "series": [{"data": [[1.71566142E12, 2006.55], [1.71566148E12, 443.45]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71566142E12, 1583.4], [1.71566148E12, 349.93333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71566148E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 627.5140415140413, "minX": 1.71566142E12, "maxY": 1945.7569060773483, "series": [{"data": [[1.71566142E12, 627.5140415140413], [1.71566148E12, 1945.7569060773483]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71566148E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 627.3724053724055, "minX": 1.71566142E12, "maxY": 1945.6961325966845, "series": [{"data": [[1.71566142E12, 627.3724053724055], [1.71566148E12, 1945.6961325966845]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71566148E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 574.9047619047619, "minX": 1.71566142E12, "maxY": 1879.1988950276252, "series": [{"data": [[1.71566142E12, 574.9047619047619], [1.71566148E12, 1879.1988950276252]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71566148E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 40.0, "minX": 1.71566142E12, "maxY": 32849.0, "series": [{"data": [[1.71566142E12, 16778.0], [1.71566148E12, 32849.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71566142E12, 40.0], [1.71566148E12, 44.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71566142E12, 1190.0], [1.71566148E12, 922.0000000000107]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71566142E12, 8154.199999999999], [1.71566148E12, 32767.82]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71566142E12, 99.0], [1.71566148E12, 100.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71566142E12, 3396.0], [1.71566148E12, 30441.100000000093]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71566148E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 60.0, "minX": 5.0, "maxY": 119.5, "series": [{"data": [[34.0, 100.0], [35.0, 100.0], [38.0, 100.0], [40.0, 100.0], [41.0, 99.5], [42.0, 94.5], [43.0, 99.0], [44.0, 100.0], [46.0, 101.5], [47.0, 95.0], [51.0, 60.0], [50.0, 93.5], [15.0, 110.0], [17.0, 100.0], [18.0, 119.5], [19.0, 100.0], [5.0, 100.0], [21.0, 100.0], [6.0, 100.0], [7.0, 100.0], [28.0, 100.0], [30.0, 100.0], [31.0, 94.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 51.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 60.0, "minX": 5.0, "maxY": 119.5, "series": [{"data": [[34.0, 100.0], [35.0, 100.0], [38.0, 100.0], [40.0, 99.5], [41.0, 99.5], [42.0, 94.5], [43.0, 99.0], [44.0, 100.0], [46.0, 101.5], [47.0, 95.0], [51.0, 60.0], [50.0, 93.5], [15.0, 110.0], [17.0, 100.0], [18.0, 119.5], [19.0, 100.0], [5.0, 100.0], [21.0, 100.0], [6.0, 100.0], [7.0, 100.0], [28.0, 100.0], [30.0, 100.0], [31.0, 94.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 51.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.8333333333333335, "minX": 1.71566142E12, "maxY": 13.833333333333334, "series": [{"data": [[1.71566142E12, 13.833333333333334], [1.71566148E12, 2.8333333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71566148E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.0166666666666666, "minX": 1.71566142E12, "maxY": 13.65, "series": [{"data": [[1.71566142E12, 13.65], [1.71566148E12, 3.0166666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71566148E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.0166666666666666, "minX": 1.71566142E12, "maxY": 13.65, "series": [{"data": [[1.71566142E12, 13.65], [1.71566148E12, 3.0166666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71566148E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.0166666666666666, "minX": 1.71566142E12, "maxY": 13.65, "series": [{"data": [[1.71566142E12, 13.65], [1.71566148E12, 3.0166666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71566148E12, "title": "Total Transactions Per Second"}},
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

