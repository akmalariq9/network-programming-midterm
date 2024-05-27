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
        data: {"result": {"minY": 1157.0, "minX": 0.0, "maxY": 134056.0, "series": [{"data": [[0.0, 1157.0], [0.1, 1213.0], [0.2, 1258.0], [0.3, 1258.0], [0.4, 1398.0], [0.5, 1568.0], [0.6, 1569.0], [0.7, 1581.0], [0.8, 1644.0], [0.9, 1645.0], [1.0, 1652.0], [1.1, 1678.0], [1.2, 1731.0], [1.3, 1752.0], [1.4, 1752.0], [1.5, 1753.0], [1.6, 1762.0], [1.7, 1786.0], [1.8, 1788.0], [1.9, 1809.0], [2.0, 1816.0], [2.1, 1823.0], [2.2, 1848.0], [2.3, 1861.0], [2.4, 1862.0], [2.5, 1865.0], [2.6, 1866.0], [2.7, 1873.0], [2.8, 1876.0], [2.9, 1888.0], [3.0, 1930.0], [3.1, 1939.0], [3.2, 1953.0], [3.3, 1956.0], [3.4, 1958.0], [3.5, 1966.0], [3.6, 1967.0], [3.7, 1974.0], [3.8, 1975.0], [3.9, 1975.0], [4.0, 1985.0], [4.1, 1993.0], [4.2, 1997.0], [4.3, 2024.0], [4.4, 2044.0], [4.5, 2047.0], [4.6, 2048.0], [4.7, 2049.0], [4.8, 2055.0], [4.9, 2057.0], [5.0, 2060.0], [5.1, 2067.0], [5.2, 2076.0], [5.3, 2076.0], [5.4, 2096.0], [5.5, 2097.0], [5.6, 2103.0], [5.7, 2109.0], [5.8, 2111.0], [5.9, 2112.0], [6.0, 2113.0], [6.1, 2114.0], [6.2, 2116.0], [6.3, 2128.0], [6.4, 2132.0], [6.5, 2137.0], [6.6, 2142.0], [6.7, 2145.0], [6.8, 2146.0], [6.9, 2148.0], [7.0, 2154.0], [7.1, 2156.0], [7.2, 2159.0], [7.3, 2163.0], [7.4, 2164.0], [7.5, 2169.0], [7.6, 2170.0], [7.7, 2176.0], [7.8, 2178.0], [7.9, 2192.0], [8.0, 2194.0], [8.1, 2196.0], [8.2, 2202.0], [8.3, 2204.0], [8.4, 2207.0], [8.5, 2212.0], [8.6, 2212.0], [8.7, 2213.0], [8.8, 2214.0], [8.9, 2214.0], [9.0, 2216.0], [9.1, 2220.0], [9.2, 2230.0], [9.3, 2233.0], [9.4, 2234.0], [9.5, 2239.0], [9.6, 2241.0], [9.7, 2249.0], [9.8, 2250.0], [9.9, 2251.0], [10.0, 2260.0], [10.1, 2267.0], [10.2, 2271.0], [10.3, 2272.0], [10.4, 2273.0], [10.5, 2277.0], [10.6, 2277.0], [10.7, 2279.0], [10.8, 2279.0], [10.9, 2279.0], [11.0, 2285.0], [11.1, 2285.0], [11.2, 2290.0], [11.3, 2298.0], [11.4, 2307.0], [11.5, 2309.0], [11.6, 2310.0], [11.7, 2313.0], [11.8, 2314.0], [11.9, 2321.0], [12.0, 2334.0], [12.1, 2337.0], [12.2, 2338.0], [12.3, 2340.0], [12.4, 2346.0], [12.5, 2349.0], [12.6, 2349.0], [12.7, 2351.0], [12.8, 2358.0], [12.9, 2361.0], [13.0, 2363.0], [13.1, 2369.0], [13.2, 2370.0], [13.3, 2373.0], [13.4, 2374.0], [13.5, 2378.0], [13.6, 2390.0], [13.7, 2390.0], [13.8, 2397.0], [13.9, 2401.0], [14.0, 2404.0], [14.1, 2404.0], [14.2, 2408.0], [14.3, 2409.0], [14.4, 2413.0], [14.5, 2415.0], [14.6, 2415.0], [14.7, 2416.0], [14.8, 2419.0], [14.9, 2420.0], [15.0, 2423.0], [15.1, 2431.0], [15.2, 2432.0], [15.3, 2434.0], [15.4, 2439.0], [15.5, 2441.0], [15.6, 2451.0], [15.7, 2452.0], [15.8, 2452.0], [15.9, 2456.0], [16.0, 2457.0], [16.1, 2461.0], [16.2, 2465.0], [16.3, 2465.0], [16.4, 2465.0], [16.5, 2470.0], [16.6, 2474.0], [16.7, 2475.0], [16.8, 2476.0], [16.9, 2477.0], [17.0, 2478.0], [17.1, 2479.0], [17.2, 2480.0], [17.3, 2482.0], [17.4, 2483.0], [17.5, 2485.0], [17.6, 2489.0], [17.7, 2491.0], [17.8, 2499.0], [17.9, 2501.0], [18.0, 2501.0], [18.1, 2502.0], [18.2, 2503.0], [18.3, 2505.0], [18.4, 2509.0], [18.5, 2510.0], [18.6, 2510.0], [18.7, 2514.0], [18.8, 2515.0], [18.9, 2516.0], [19.0, 2517.0], [19.1, 2520.0], [19.2, 2520.0], [19.3, 2520.0], [19.4, 2522.0], [19.5, 2524.0], [19.6, 2529.0], [19.7, 2532.0], [19.8, 2533.0], [19.9, 2533.0], [20.0, 2534.0], [20.1, 2538.0], [20.2, 2539.0], [20.3, 2540.0], [20.4, 2542.0], [20.5, 2543.0], [20.6, 2552.0], [20.7, 2557.0], [20.8, 2563.0], [20.9, 2563.0], [21.0, 2564.0], [21.1, 2566.0], [21.2, 2567.0], [21.3, 2570.0], [21.4, 2571.0], [21.5, 2572.0], [21.6, 2589.0], [21.7, 2593.0], [21.8, 2593.0], [21.9, 2600.0], [22.0, 2603.0], [22.1, 2603.0], [22.2, 2607.0], [22.3, 2608.0], [22.4, 2609.0], [22.5, 2615.0], [22.6, 2616.0], [22.7, 2617.0], [22.8, 2619.0], [22.9, 2622.0], [23.0, 2623.0], [23.1, 2623.0], [23.2, 2623.0], [23.3, 2626.0], [23.4, 2627.0], [23.5, 2630.0], [23.6, 2634.0], [23.7, 2643.0], [23.8, 2646.0], [23.9, 2647.0], [24.0, 2647.0], [24.1, 2649.0], [24.2, 2655.0], [24.3, 2660.0], [24.4, 2662.0], [24.5, 2665.0], [24.6, 2668.0], [24.7, 2671.0], [24.8, 2671.0], [24.9, 2675.0], [25.0, 2676.0], [25.1, 2684.0], [25.2, 2689.0], [25.3, 2692.0], [25.4, 2692.0], [25.5, 2694.0], [25.6, 2698.0], [25.7, 2699.0], [25.8, 2702.0], [25.9, 2704.0], [26.0, 2705.0], [26.1, 2707.0], [26.2, 2709.0], [26.3, 2710.0], [26.4, 2713.0], [26.5, 2717.0], [26.6, 2724.0], [26.7, 2725.0], [26.8, 2727.0], [26.9, 2728.0], [27.0, 2733.0], [27.1, 2740.0], [27.2, 2744.0], [27.3, 2751.0], [27.4, 2754.0], [27.5, 2754.0], [27.6, 2754.0], [27.7, 2761.0], [27.8, 2761.0], [27.9, 2767.0], [28.0, 2767.0], [28.1, 2772.0], [28.2, 2777.0], [28.3, 2778.0], [28.4, 2779.0], [28.5, 2779.0], [28.6, 2780.0], [28.7, 2783.0], [28.8, 2784.0], [28.9, 2788.0], [29.0, 2790.0], [29.1, 2791.0], [29.2, 2792.0], [29.3, 2798.0], [29.4, 2799.0], [29.5, 2802.0], [29.6, 2816.0], [29.7, 2816.0], [29.8, 2817.0], [29.9, 2818.0], [30.0, 2818.0], [30.1, 2818.0], [30.2, 2820.0], [30.3, 2824.0], [30.4, 2827.0], [30.5, 2830.0], [30.6, 2831.0], [30.7, 2835.0], [30.8, 2835.0], [30.9, 2851.0], [31.0, 2854.0], [31.1, 2856.0], [31.2, 2858.0], [31.3, 2867.0], [31.4, 2868.0], [31.5, 2875.0], [31.6, 2877.0], [31.7, 2880.0], [31.8, 2884.0], [31.9, 2884.0], [32.0, 2885.0], [32.1, 2886.0], [32.2, 2895.0], [32.3, 2900.0], [32.4, 2903.0], [32.5, 2904.0], [32.6, 2909.0], [32.7, 2911.0], [32.8, 2912.0], [32.9, 2913.0], [33.0, 2915.0], [33.1, 2917.0], [33.2, 2919.0], [33.3, 2922.0], [33.4, 2927.0], [33.5, 2928.0], [33.6, 2929.0], [33.7, 2930.0], [33.8, 2932.0], [33.9, 2935.0], [34.0, 2936.0], [34.1, 2941.0], [34.2, 2941.0], [34.3, 2945.0], [34.4, 2949.0], [34.5, 2952.0], [34.6, 2952.0], [34.7, 2952.0], [34.8, 2953.0], [34.9, 2955.0], [35.0, 2955.0], [35.1, 2956.0], [35.2, 2964.0], [35.3, 2966.0], [35.4, 2969.0], [35.5, 2969.0], [35.6, 2972.0], [35.7, 2978.0], [35.8, 2982.0], [35.9, 2983.0], [36.0, 2987.0], [36.1, 2990.0], [36.2, 2992.0], [36.3, 2993.0], [36.4, 2996.0], [36.5, 2996.0], [36.6, 2997.0], [36.7, 2998.0], [36.8, 2999.0], [36.9, 2999.0], [37.0, 2999.0], [37.1, 3000.0], [37.2, 3000.0], [37.3, 3003.0], [37.4, 3006.0], [37.5, 3008.0], [37.6, 3017.0], [37.7, 3018.0], [37.8, 3027.0], [37.9, 3030.0], [38.0, 3033.0], [38.1, 3037.0], [38.2, 3038.0], [38.3, 3039.0], [38.4, 3039.0], [38.5, 3043.0], [38.6, 3044.0], [38.7, 3044.0], [38.8, 3047.0], [38.9, 3048.0], [39.0, 3048.0], [39.1, 3049.0], [39.2, 3052.0], [39.3, 3054.0], [39.4, 3062.0], [39.5, 3064.0], [39.6, 3064.0], [39.7, 3067.0], [39.8, 3068.0], [39.9, 3075.0], [40.0, 3077.0], [40.1, 3079.0], [40.2, 3081.0], [40.3, 3084.0], [40.4, 3084.0], [40.5, 3086.0], [40.6, 3087.0], [40.7, 3089.0], [40.8, 3090.0], [40.9, 3092.0], [41.0, 3092.0], [41.1, 3093.0], [41.2, 3099.0], [41.3, 3107.0], [41.4, 3113.0], [41.5, 3113.0], [41.6, 3116.0], [41.7, 3118.0], [41.8, 3119.0], [41.9, 3121.0], [42.0, 3122.0], [42.1, 3122.0], [42.2, 3126.0], [42.3, 3127.0], [42.4, 3128.0], [42.5, 3135.0], [42.6, 3138.0], [42.7, 3138.0], [42.8, 3142.0], [42.9, 3143.0], [43.0, 3148.0], [43.1, 3151.0], [43.2, 3152.0], [43.3, 3156.0], [43.4, 3157.0], [43.5, 3158.0], [43.6, 3159.0], [43.7, 3160.0], [43.8, 3160.0], [43.9, 3163.0], [44.0, 3164.0], [44.1, 3166.0], [44.2, 3167.0], [44.3, 3169.0], [44.4, 3173.0], [44.5, 3178.0], [44.6, 3178.0], [44.7, 3182.0], [44.8, 3184.0], [44.9, 3185.0], [45.0, 3186.0], [45.1, 3198.0], [45.2, 3200.0], [45.3, 3202.0], [45.4, 3212.0], [45.5, 3217.0], [45.6, 3219.0], [45.7, 3222.0], [45.8, 3224.0], [45.9, 3224.0], [46.0, 3227.0], [46.1, 3228.0], [46.2, 3233.0], [46.3, 3233.0], [46.4, 3234.0], [46.5, 3236.0], [46.6, 3237.0], [46.7, 3247.0], [46.8, 3252.0], [46.9, 3253.0], [47.0, 3255.0], [47.1, 3259.0], [47.2, 3260.0], [47.3, 3270.0], [47.4, 3270.0], [47.5, 3273.0], [47.6, 3276.0], [47.7, 3277.0], [47.8, 3277.0], [47.9, 3282.0], [48.0, 3284.0], [48.1, 3287.0], [48.2, 3288.0], [48.3, 3298.0], [48.4, 3300.0], [48.5, 3309.0], [48.6, 3312.0], [48.7, 3319.0], [48.8, 3323.0], [48.9, 3326.0], [49.0, 3332.0], [49.1, 3333.0], [49.2, 3334.0], [49.3, 3335.0], [49.4, 3343.0], [49.5, 3347.0], [49.6, 3354.0], [49.7, 3360.0], [49.8, 3363.0], [49.9, 3369.0], [50.0, 3369.0], [50.1, 3371.0], [50.2, 3371.0], [50.3, 3371.0], [50.4, 3374.0], [50.5, 3377.0], [50.6, 3378.0], [50.7, 3380.0], [50.8, 3387.0], [50.9, 3392.0], [51.0, 3392.0], [51.1, 3395.0], [51.2, 3399.0], [51.3, 3401.0], [51.4, 3403.0], [51.5, 3408.0], [51.6, 3409.0], [51.7, 3410.0], [51.8, 3412.0], [51.9, 3415.0], [52.0, 3417.0], [52.1, 3420.0], [52.2, 3421.0], [52.3, 3421.0], [52.4, 3425.0], [52.5, 3425.0], [52.6, 3426.0], [52.7, 3429.0], [52.8, 3430.0], [52.9, 3434.0], [53.0, 3435.0], [53.1, 3438.0], [53.2, 3439.0], [53.3, 3440.0], [53.4, 3448.0], [53.5, 3448.0], [53.6, 3451.0], [53.7, 3456.0], [53.8, 3464.0], [53.9, 3465.0], [54.0, 3466.0], [54.1, 3467.0], [54.2, 3470.0], [54.3, 3471.0], [54.4, 3480.0], [54.5, 3481.0], [54.6, 3482.0], [54.7, 3501.0], [54.8, 3503.0], [54.9, 3505.0], [55.0, 3512.0], [55.1, 3515.0], [55.2, 3515.0], [55.3, 3516.0], [55.4, 3520.0], [55.5, 3521.0], [55.6, 3521.0], [55.7, 3523.0], [55.8, 3525.0], [55.9, 3527.0], [56.0, 3528.0], [56.1, 3529.0], [56.2, 3530.0], [56.3, 3534.0], [56.4, 3540.0], [56.5, 3542.0], [56.6, 3547.0], [56.7, 3552.0], [56.8, 3553.0], [56.9, 3555.0], [57.0, 3557.0], [57.1, 3561.0], [57.2, 3561.0], [57.3, 3562.0], [57.4, 3566.0], [57.5, 3570.0], [57.6, 3574.0], [57.7, 3577.0], [57.8, 3580.0], [57.9, 3582.0], [58.0, 3583.0], [58.1, 3589.0], [58.2, 3593.0], [58.3, 3594.0], [58.4, 3594.0], [58.5, 3599.0], [58.6, 3601.0], [58.7, 3603.0], [58.8, 3604.0], [58.9, 3605.0], [59.0, 3611.0], [59.1, 3623.0], [59.2, 3628.0], [59.3, 3639.0], [59.4, 3647.0], [59.5, 3652.0], [59.6, 3653.0], [59.7, 3659.0], [59.8, 3665.0], [59.9, 3666.0], [60.0, 3669.0], [60.1, 3677.0], [60.2, 3686.0], [60.3, 3694.0], [60.4, 3695.0], [60.5, 3700.0], [60.6, 3702.0], [60.7, 3703.0], [60.8, 3707.0], [60.9, 3712.0], [61.0, 3712.0], [61.1, 3731.0], [61.2, 3735.0], [61.3, 3739.0], [61.4, 3745.0], [61.5, 3748.0], [61.6, 3749.0], [61.7, 3756.0], [61.8, 3758.0], [61.9, 3763.0], [62.0, 3764.0], [62.1, 3765.0], [62.2, 3766.0], [62.3, 3768.0], [62.4, 3771.0], [62.5, 3772.0], [62.6, 3778.0], [62.7, 3781.0], [62.8, 3783.0], [62.9, 3784.0], [63.0, 3801.0], [63.1, 3802.0], [63.2, 3805.0], [63.3, 3815.0], [63.4, 3816.0], [63.5, 3822.0], [63.6, 3827.0], [63.7, 3829.0], [63.8, 3830.0], [63.9, 3831.0], [64.0, 3831.0], [64.1, 3835.0], [64.2, 3835.0], [64.3, 3837.0], [64.4, 3844.0], [64.5, 3844.0], [64.6, 3848.0], [64.7, 3852.0], [64.8, 3853.0], [64.9, 3859.0], [65.0, 3862.0], [65.1, 3877.0], [65.2, 3884.0], [65.3, 3884.0], [65.4, 3885.0], [65.5, 3885.0], [65.6, 3886.0], [65.7, 3898.0], [65.8, 3900.0], [65.9, 3901.0], [66.0, 3903.0], [66.1, 3907.0], [66.2, 3913.0], [66.3, 3913.0], [66.4, 3913.0], [66.5, 3914.0], [66.6, 3918.0], [66.7, 3933.0], [66.8, 3935.0], [66.9, 3939.0], [67.0, 3942.0], [67.1, 3948.0], [67.2, 3948.0], [67.3, 3950.0], [67.4, 3951.0], [67.5, 3951.0], [67.6, 3951.0], [67.7, 3953.0], [67.8, 3958.0], [67.9, 3959.0], [68.0, 3960.0], [68.1, 3967.0], [68.2, 3969.0], [68.3, 3971.0], [68.4, 3972.0], [68.5, 3975.0], [68.6, 3976.0], [68.7, 3986.0], [68.8, 3986.0], [68.9, 3987.0], [69.0, 3997.0], [69.1, 4008.0], [69.2, 4015.0], [69.3, 4015.0], [69.4, 4018.0], [69.5, 4021.0], [69.6, 4024.0], [69.7, 4028.0], [69.8, 4030.0], [69.9, 4037.0], [70.0, 4038.0], [70.1, 4044.0], [70.2, 4044.0], [70.3, 4048.0], [70.4, 4051.0], [70.5, 4065.0], [70.6, 4070.0], [70.7, 4079.0], [70.8, 4083.0], [70.9, 4084.0], [71.0, 4089.0], [71.1, 4097.0], [71.2, 4098.0], [71.3, 4102.0], [71.4, 4107.0], [71.5, 4116.0], [71.6, 4119.0], [71.7, 4120.0], [71.8, 4135.0], [71.9, 4136.0], [72.0, 4143.0], [72.1, 4154.0], [72.2, 4161.0], [72.3, 4166.0], [72.4, 4174.0], [72.5, 4177.0], [72.6, 4179.0], [72.7, 4184.0], [72.8, 4184.0], [72.9, 4190.0], [73.0, 4191.0], [73.1, 4202.0], [73.2, 4219.0], [73.3, 4228.0], [73.4, 4230.0], [73.5, 4241.0], [73.6, 4245.0], [73.7, 4248.0], [73.8, 4248.0], [73.9, 4250.0], [74.0, 4253.0], [74.1, 4260.0], [74.2, 4263.0], [74.3, 4272.0], [74.4, 4278.0], [74.5, 4297.0], [74.6, 4310.0], [74.7, 4312.0], [74.8, 4323.0], [74.9, 4327.0], [75.0, 4339.0], [75.1, 4340.0], [75.2, 4347.0], [75.3, 4360.0], [75.4, 4363.0], [75.5, 4394.0], [75.6, 4400.0], [75.7, 4431.0], [75.8, 4440.0], [75.9, 4440.0], [76.0, 4446.0], [76.1, 4458.0], [76.2, 4460.0], [76.3, 4463.0], [76.4, 4463.0], [76.5, 4464.0], [76.6, 4465.0], [76.7, 4466.0], [76.8, 4481.0], [76.9, 4482.0], [77.0, 4494.0], [77.1, 4501.0], [77.2, 4512.0], [77.3, 4512.0], [77.4, 4521.0], [77.5, 4554.0], [77.6, 4554.0], [77.7, 4565.0], [77.8, 4578.0], [77.9, 4586.0], [78.0, 4630.0], [78.1, 4633.0], [78.2, 4637.0], [78.3, 4644.0], [78.4, 4664.0], [78.5, 4670.0], [78.6, 4671.0], [78.7, 4672.0], [78.8, 4675.0], [78.9, 4678.0], [79.0, 4692.0], [79.1, 4696.0], [79.2, 4697.0], [79.3, 4716.0], [79.4, 4723.0], [79.5, 4735.0], [79.6, 4757.0], [79.7, 4763.0], [79.8, 4795.0], [79.9, 4803.0], [80.0, 4809.0], [80.1, 4919.0], [80.2, 4922.0], [80.3, 4930.0], [80.4, 4935.0], [80.5, 4936.0], [80.6, 4937.0], [80.7, 4962.0], [80.8, 4980.0], [80.9, 4999.0], [81.0, 5025.0], [81.1, 5033.0], [81.2, 5038.0], [81.3, 5042.0], [81.4, 5067.0], [81.5, 5086.0], [81.6, 5088.0], [81.7, 5128.0], [81.8, 5128.0], [81.9, 5137.0], [82.0, 5142.0], [82.1, 5143.0], [82.2, 5156.0], [82.3, 5208.0], [82.4, 5209.0], [82.5, 5236.0], [82.6, 5278.0], [82.7, 5282.0], [82.8, 5288.0], [82.9, 5291.0], [83.0, 5357.0], [83.1, 5362.0], [83.2, 5390.0], [83.3, 5453.0], [83.4, 5461.0], [83.5, 5463.0], [83.6, 5469.0], [83.7, 5471.0], [83.8, 5483.0], [83.9, 5560.0], [84.0, 5565.0], [84.1, 5625.0], [84.2, 5629.0], [84.3, 5639.0], [84.4, 5647.0], [84.5, 5656.0], [84.6, 5656.0], [84.7, 5677.0], [84.8, 5690.0], [84.9, 5718.0], [85.0, 5718.0], [85.1, 5732.0], [85.2, 5748.0], [85.3, 5750.0], [85.4, 5771.0], [85.5, 5804.0], [85.6, 5806.0], [85.7, 5808.0], [85.8, 5837.0], [85.9, 5853.0], [86.0, 5889.0], [86.1, 5895.0], [86.2, 5897.0], [86.3, 5947.0], [86.4, 5947.0], [86.5, 5975.0], [86.6, 6001.0], [86.7, 6008.0], [86.8, 6035.0], [86.9, 6053.0], [87.0, 6066.0], [87.1, 6089.0], [87.2, 6103.0], [87.3, 6120.0], [87.4, 6143.0], [87.5, 6143.0], [87.6, 6170.0], [87.7, 6188.0], [87.8, 6196.0], [87.9, 6217.0], [88.0, 6219.0], [88.1, 6224.0], [88.2, 6231.0], [88.3, 6245.0], [88.4, 6251.0], [88.5, 6285.0], [88.6, 6322.0], [88.7, 6342.0], [88.8, 6357.0], [88.9, 6368.0], [89.0, 6368.0], [89.1, 6371.0], [89.2, 6380.0], [89.3, 6458.0], [89.4, 6493.0], [89.5, 6504.0], [89.6, 6521.0], [89.7, 6527.0], [89.8, 6530.0], [89.9, 6534.0], [90.0, 6619.0], [90.1, 6639.0], [90.2, 6669.0], [90.3, 6673.0], [90.4, 6754.0], [90.5, 6758.0], [90.6, 6822.0], [90.7, 6895.0], [90.8, 6902.0], [90.9, 6912.0], [91.0, 6941.0], [91.1, 6941.0], [91.2, 6959.0], [91.3, 6981.0], [91.4, 7025.0], [91.5, 7117.0], [91.6, 7147.0], [91.7, 7174.0], [91.8, 7276.0], [91.9, 7327.0], [92.0, 7547.0], [92.1, 7577.0], [92.2, 8910.0], [92.3, 9161.0], [92.4, 9162.0], [92.5, 9508.0], [92.6, 9561.0], [92.7, 9640.0], [92.8, 9694.0], [92.9, 9724.0], [93.0, 9737.0], [93.1, 9740.0], [93.2, 9781.0], [93.3, 9806.0], [93.4, 9816.0], [93.5, 9836.0], [93.6, 9904.0], [93.7, 10028.0], [93.8, 10050.0], [93.9, 10164.0], [94.0, 10186.0], [94.1, 10228.0], [94.2, 10253.0], [94.3, 10302.0], [94.4, 10329.0], [94.5, 10386.0], [94.6, 10434.0], [94.7, 10541.0], [94.8, 10578.0], [94.9, 10581.0], [95.0, 10615.0], [95.1, 10628.0], [95.2, 10662.0], [95.3, 10743.0], [95.4, 10746.0], [95.5, 10781.0], [95.6, 10896.0], [95.7, 11026.0], [95.8, 11071.0], [95.9, 11358.0], [96.0, 11633.0], [96.1, 11903.0], [96.2, 17524.0], [96.3, 17682.0], [96.4, 18096.0], [96.5, 18102.0], [96.6, 18188.0], [96.7, 18379.0], [96.8, 18404.0], [96.9, 18482.0], [97.0, 18552.0], [97.1, 18672.0], [97.2, 18873.0], [97.3, 18951.0], [97.4, 19176.0], [97.5, 19287.0], [97.6, 19295.0], [97.7, 19365.0], [97.8, 19557.0], [97.9, 19700.0], [98.0, 23140.0], [98.1, 34746.0], [98.2, 34749.0], [98.3, 35045.0], [98.4, 35101.0], [98.5, 35539.0], [98.6, 35578.0], [98.7, 35782.0], [98.8, 36083.0], [98.9, 36390.0], [99.0, 36715.0], [99.1, 36798.0], [99.2, 67175.0], [99.3, 67577.0], [99.4, 67731.0], [99.5, 130119.0], [99.6, 131087.0], [99.7, 131877.0], [99.8, 133975.0], [99.9, 134056.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 1100.0, "maxY": 48.0, "series": [{"data": [[67100.0, 1.0], [67500.0, 1.0], [34700.0, 2.0], [133900.0, 1.0], [35700.0, 1.0], [35100.0, 1.0], [35500.0, 2.0], [36300.0, 1.0], [36700.0, 2.0], [131000.0, 1.0], [134000.0, 1.0], [1100.0, 1.0], [1200.0, 2.0], [1300.0, 2.0], [1500.0, 3.0], [1600.0, 4.0], [1700.0, 6.0], [1800.0, 11.0], [1900.0, 13.0], [2000.0, 14.0], [2100.0, 26.0], [2300.0, 25.0], [2200.0, 32.0], [2400.0, 40.0], [2500.0, 39.0], [2600.0, 39.0], [2700.0, 37.0], [2800.0, 28.0], [2900.0, 48.0], [3000.0, 42.0], [3100.0, 39.0], [3300.0, 29.0], [3200.0, 32.0], [3400.0, 34.0], [3500.0, 39.0], [3700.0, 25.0], [3600.0, 19.0], [3800.0, 28.0], [3900.0, 33.0], [4000.0, 22.0], [4100.0, 18.0], [4200.0, 15.0], [67700.0, 1.0], [4300.0, 10.0], [4600.0, 13.0], [4400.0, 15.0], [4500.0, 10.0], [4800.0, 2.0], [4700.0, 6.0], [5000.0, 7.0], [4900.0, 9.0], [5100.0, 6.0], [5200.0, 7.0], [5300.0, 3.0], [5400.0, 6.0], [5600.0, 8.0], [5500.0, 2.0], [5700.0, 6.0], [5800.0, 8.0], [6000.0, 6.0], [6100.0, 7.0], [5900.0, 3.0], [6200.0, 7.0], [6300.0, 7.0], [6500.0, 5.0], [6600.0, 4.0], [6400.0, 2.0], [6700.0, 2.0], [6900.0, 6.0], [6800.0, 2.0], [7100.0, 3.0], [7000.0, 1.0], [7300.0, 1.0], [7200.0, 1.0], [7500.0, 2.0], [130100.0, 1.0], [131800.0, 1.0], [8900.0, 1.0], [9100.0, 2.0], [9500.0, 2.0], [9600.0, 2.0], [9700.0, 4.0], [10100.0, 2.0], [9800.0, 3.0], [10200.0, 2.0], [10000.0, 2.0], [9900.0, 1.0], [10300.0, 3.0], [10700.0, 3.0], [10600.0, 3.0], [10500.0, 3.0], [10400.0, 1.0], [10800.0, 1.0], [11000.0, 2.0], [11600.0, 1.0], [11300.0, 1.0], [11900.0, 1.0], [18400.0, 2.0], [18300.0, 1.0], [18000.0, 1.0], [17600.0, 1.0], [17500.0, 1.0], [18100.0, 2.0], [19100.0, 1.0], [19200.0, 2.0], [18800.0, 1.0], [18900.0, 1.0], [18600.0, 1.0], [18500.0, 1.0], [19300.0, 1.0], [19700.0, 1.0], [19500.0, 1.0], [23100.0, 1.0], [35000.0, 1.0], [36000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 134000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 990.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 5.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 990.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 5.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.71562254E12, "maxY": 10.0, "series": [{"data": [[1.71562296E12, 8.134831460674151], [1.71562266E12, 10.0], [1.71562314E12, 2.5636363636363635], [1.71562284E12, 10.0], [1.71562254E12, 10.0], [1.71562302E12, 6.0], [1.71562272E12, 10.0], [1.7156232E12, 1.0], [1.7156229E12, 9.908163265306122], [1.7156226E12, 10.0], [1.71562308E12, 4.3066666666666675], [1.71562278E12, 10.0]], "isOverall": false, "label": "ConTest", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7156232E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 2268.2999999999997, "minX": 1.0, "maxY": 13474.733333333334, "series": [{"data": [[8.0, 13474.733333333334], [4.0, 3879.636363636364], [2.0, 2337.2], [1.0, 2268.2999999999997], [9.0, 6229.574074074074], [10.0, 5483.560583941605], [5.0, 4844.074074074074], [6.0, 4212.575757575754], [3.0, 2653.421875000001], [7.0, 5861.599999999999]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[8.625999999999992, 5247.682000000001]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 5.8, "minX": 1.71562254E12, "maxY": 324.6333333333333, "series": [{"data": [[1.71562296E12, 268.28333333333336], [1.71562266E12, 312.3833333333333], [1.71562314E12, 134.75], [1.71562284E12, 218.05], [1.71562254E12, 198.45], [1.71562302E12, 205.8], [1.71562272E12, 324.6333333333333], [1.7156232E12, 7.35], [1.7156229E12, 290.3333333333333], [1.7156226E12, 274.4], [1.71562308E12, 183.75], [1.71562278E12, 282.98333333333335]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71562296E12, 170.13333333333333], [1.71562266E12, 204.93333333333334], [1.71562314E12, 106.33333333333333], [1.71562284E12, 172.06666666666666], [1.71562254E12, 156.6], [1.71562302E12, 162.4], [1.71562272E12, 214.6], [1.7156232E12, 5.8], [1.7156229E12, 187.53333333333333], [1.7156226E12, 216.53333333333333], [1.71562308E12, 145.0], [1.71562278E12, 181.73333333333332]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7156232E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 2149.6666666666665, "minX": 1.71562254E12, "maxY": 7063.705263157894, "series": [{"data": [[1.71562296E12, 6956.224719101123], [1.71562266E12, 5682.710280373831], [1.71562314E12, 2577.7272727272734], [1.71562284E12, 5598.955056179775], [1.71562254E12, 3944.271604938273], [1.71562302E12, 4154.380952380951], [1.71562272E12, 5227.125000000003], [1.7156232E12, 2149.6666666666665], [1.7156229E12, 6464.775510204082], [1.7156226E12, 4765.964285714286], [1.71562308E12, 3756.2266666666674], [1.71562278E12, 7063.705263157894]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7156232E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 2149.3333333333335, "minX": 1.71562254E12, "maxY": 5693.736842105261, "series": [{"data": [[1.71562296E12, 5483.101123595505], [1.71562266E12, 4430.457943925233], [1.71562314E12, 2577.5818181818186], [1.71562284E12, 5598.719101123594], [1.71562254E12, 3943.839506172839], [1.71562302E12, 4154.17857142857], [1.71562272E12, 4049.4107142857156], [1.7156232E12, 2149.3333333333335], [1.7156229E12, 5096.632653061222], [1.7156226E12, 4765.616071428568], [1.71562308E12, 3756.0666666666657], [1.71562278E12, 5693.736842105261]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7156232E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 381.3333333333333, "minX": 1.71562254E12, "maxY": 5305.242105263161, "series": [{"data": [[1.71562296E12, 4994.022471910112], [1.71562266E12, 4122.532710280372], [1.71562314E12, 494.39999999999986], [1.71562284E12, 3712.5056179775293], [1.71562254E12, 2511.0864197530877], [1.71562302E12, 2215.4761904761904], [1.71562272E12, 3576.0267857142844], [1.7156232E12, 381.3333333333333], [1.7156229E12, 4660.806122448978], [1.7156226E12, 3200.142857142858], [1.71562308E12, 1621.4533333333331], [1.71562278E12, 5305.242105263161]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7156232E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1157.0, "minX": 1.71562254E12, "maxY": 67731.0, "series": [{"data": [[1.71562296E12, 36798.0], [1.71562266E12, 34746.0], [1.71562314E12, 5143.0], [1.71562284E12, 36390.0], [1.71562254E12, 19176.0], [1.71562302E12, 19557.0], [1.71562272E12, 35782.0], [1.7156232E12, 2251.0], [1.7156229E12, 67577.0], [1.7156226E12, 67731.0], [1.71562308E12, 34749.0], [1.71562278E12, 67175.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71562296E12, 2116.0], [1.71562266E12, 1398.0], [1.71562314E12, 1645.0], [1.71562284E12, 2067.0], [1.71562254E12, 1213.0], [1.71562302E12, 1762.0], [1.71562272E12, 1823.0], [1.7156232E12, 1985.0], [1.7156229E12, 1644.0], [1.7156226E12, 1731.0], [1.71562308E12, 1157.0], [1.71562278E12, 1568.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71562296E12, 7337.700000000033], [1.71562266E12, 6625.0], [1.71562314E12, 3374.6], [1.71562284E12, 9781.0], [1.71562254E12, 6163.799999999999], [1.71562302E12, 5700.0], [1.71562272E12, 6335.799999999999], [1.7156232E12, 2251.0], [1.7156229E12, 7532.200000000007], [1.7156226E12, 6689.6], [1.71562308E12, 4531.000000000001], [1.71562278E12, 7562.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71562296E12, 36798.0], [1.71562266E12, 33634.88999999988], [1.71562314E12, 5143.0], [1.71562284E12, 36390.0], [1.71562254E12, 19176.0], [1.71562302E12, 19557.0], [1.71562272E12, 33591.03999999992], [1.7156232E12, 2251.0], [1.7156229E12, 67577.0], [1.7156226E12, 63481.82000000015], [1.71562308E12, 34749.0], [1.71562278E12, 67175.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71562296E12, 3857.5], [1.71562266E12, 3181.5], [1.71562314E12, 2452.0], [1.71562284E12, 3784.0], [1.71562254E12, 2990.0], [1.71562302E12, 3467.5], [1.71562272E12, 3113.0], [1.7156232E12, 2213.0], [1.7156229E12, 3771.0], [1.7156226E12, 3133.5], [1.71562308E12, 3284.0], [1.71562278E12, 3698.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71562296E12, 18349.5], [1.71562266E12, 10814.099999999999], [1.71562314E12, 4248.999999999999], [1.71562284E12, 18845.5], [1.71562254E12, 10128.199999999997], [1.71562302E12, 9790.0], [1.71562272E12, 10353.199999999997], [1.7156232E12, 2251.0], [1.7156229E12, 10452.099999999999], [1.7156226E12, 10331.4], [1.71562308E12, 5369.000000000004], [1.71562278E12, 19138.25]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7156232E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 3222.0, "minX": 1.0, "maxY": 134015.5, "series": [{"data": [[2.0, 3438.5], [1.0, 3226.0], [4.0, 3222.0], [3.0, 3327.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[4.0, 131877.0], [2.0, 130603.0], [3.0, 134015.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 3438.5, "series": [{"data": [[2.0, 3438.5], [1.0, 3225.5], [4.0, 3222.0], [3.0, 3327.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[4.0, 0.0], [2.0, 0.0], [3.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.71562254E12, "maxY": 1.8666666666666667, "series": [{"data": [[1.71562296E12, 1.4333333333333333], [1.71562266E12, 1.7833333333333334], [1.71562314E12, 0.8833333333333333], [1.71562284E12, 1.4833333333333334], [1.71562254E12, 1.5166666666666666], [1.71562302E12, 1.4], [1.71562272E12, 1.8666666666666667], [1.7156232E12, 0.03333333333333333], [1.7156229E12, 1.6166666666666667], [1.7156226E12, 1.8666666666666667], [1.71562308E12, 1.2], [1.71562278E12, 1.5833333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7156232E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.71562254E12, "maxY": 1.8666666666666667, "series": [{"data": [[1.71562296E12, 1.4666666666666666], [1.71562266E12, 1.7666666666666666], [1.71562314E12, 0.9166666666666666], [1.71562284E12, 1.4833333333333334], [1.71562254E12, 1.35], [1.71562302E12, 1.4], [1.71562272E12, 1.85], [1.7156232E12, 0.05], [1.7156229E12, 1.6166666666666667], [1.7156226E12, 1.8666666666666667], [1.71562308E12, 1.25], [1.71562278E12, 1.5666666666666667]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.71562296E12, 0.016666666666666666], [1.71562266E12, 0.016666666666666666], [1.71562272E12, 0.016666666666666666], [1.7156229E12, 0.016666666666666666], [1.71562278E12, 0.016666666666666666]], "isOverall": false, "label": "Non HTTP response code: javax.net.ssl.SSLHandshakeException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7156232E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.71562254E12, "maxY": 1.8666666666666667, "series": [{"data": [[1.71562296E12, 1.4666666666666666], [1.71562266E12, 1.7666666666666666], [1.71562314E12, 0.9166666666666666], [1.71562284E12, 1.4833333333333334], [1.71562254E12, 1.35], [1.71562302E12, 1.4], [1.71562272E12, 1.85], [1.7156232E12, 0.05], [1.7156229E12, 1.6166666666666667], [1.7156226E12, 1.8666666666666667], [1.71562308E12, 1.25], [1.71562278E12, 1.5666666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.71562296E12, 0.016666666666666666], [1.71562266E12, 0.016666666666666666], [1.71562272E12, 0.016666666666666666], [1.7156229E12, 0.016666666666666666], [1.71562278E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7156232E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.71562254E12, "maxY": 1.8666666666666667, "series": [{"data": [[1.71562296E12, 1.4666666666666666], [1.71562266E12, 1.7666666666666666], [1.71562314E12, 0.9166666666666666], [1.71562284E12, 1.4833333333333334], [1.71562254E12, 1.35], [1.71562302E12, 1.4], [1.71562272E12, 1.85], [1.7156232E12, 0.05], [1.7156229E12, 1.6166666666666667], [1.7156226E12, 1.8666666666666667], [1.71562308E12, 1.25], [1.71562278E12, 1.5666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.71562296E12, 0.016666666666666666], [1.71562266E12, 0.016666666666666666], [1.71562272E12, 0.016666666666666666], [1.7156229E12, 0.016666666666666666], [1.71562278E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7156232E12, "title": "Total Transactions Per Second"}},
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

