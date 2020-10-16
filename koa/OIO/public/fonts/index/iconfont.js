(function (window) {
  var svgSprite =
    "<svg>" +
    "" +
    '<symbol id="icon-zhineng2" viewBox="0 0 1024 1024">' +
    "" +
    '<path d="M592.044032 205.520896c0 43.606016-35.381248 79.040512-79.065088 79.040512-43.675648 0-79.089664-35.434496-79.089664-79.040512 0-43.778048 35.414016-79.130624 79.089664-79.130624C556.662784 126.390272 592.044032 161.746944 592.044032 205.520896"  ></path>' +
    "" +
    '<path d="M696.385536 395.599872c-7.360512-86.736896-107.945984-85.46304-107.945984-85.46304l-158.613504 0c-113.577984 2.08896-109.551616 85.46304-109.551616 85.46304l0 194.568192 0.036864 0c0 0.561152-0.036864 0.96256-0.036864 1.523712 0 18.358272 15.028224 33.353728 33.447936 33.353728 18.440192 0 33.251328-14.99136 33.251328-33.353728l0-1.523712 0-180.137984 21.024768 0-0.217088 566.874112c0 24.928256 20.082688 45.133824 44.99456 45.133824 24.911872 0 45.154304-20.205568 45.154304-45.133824l-0.159744-365.654016 20.221952 0 0 366.129152 0.344064 0.249856c0.356352 24.690688 20.221952 44.326912 44.81024 44.326912 24.793088 0 44.879872-20.078592 44.879872-44.814336l-0.147456-567.836672 21.72928 0 0 180.862976 0 0.319488c0 18.444288 15.007744 33.271808 33.411072 33.271808 18.415616 0 33.366016-14.82752 33.366016-33.271808l0-0.319488L696.385536 395.599872z"  ></path>' +
    "" +
    '<path d="M512.937984 798.294016c-218.70592 0-396.67712-177.979392-396.67712-396.75904 0-218.701824 177.9712-396.84096 396.67712-396.84096 218.742784 0 396.75904 178.139136 396.75904 396.84096C909.697024 620.310528 731.680768 798.294016 512.937984 798.294016M512.937984 35.155968c-201.949184 0-366.374912 164.265984-366.374912 366.374912 0 202.022912 164.425728 366.370816 366.374912 366.370816 202.022912 0 366.411776-164.347904 366.411776-366.370816C879.34976 199.421952 714.960896 35.155968 512.937984 35.155968"  ></path>' +
    "" +
    '<path d="M508.305408 659.841024c-142.47936 0-258.383872-115.929088-258.383872-258.306048 0-142.462976 115.904512-258.469888 258.383872-258.469888 142.483456 0 258.392064 116.006912 258.392064 258.469888C766.701568 543.911936 650.788864 659.841024 508.305408 659.841024M508.305408 173.453312c-125.681664 0-228.016128 102.375424-228.016128 228.081664s102.334464 227.999744 228.016128 227.999744c125.72672 0 228.02432-102.293504 228.02432-227.999744S634.032128 173.453312 508.305408 173.453312"  ></path>' +
    "" +
    "</symbol>" +
    "" +
    '<symbol id="icon-shouji" viewBox="0 0 1024 1024">' +
    "" +
    '<path d="M666.083819 63.756069 357.916181 63.756069c-61.886489 0-112.061238 50.17475-112.061238 112.060215l0 672.365384c0 61.885466 50.17475 112.063285 112.061238 112.063285L666.083819 960.244954c61.885466 0 112.060215-50.177819 112.060215-112.063285L778.144034 175.816285C778.144034 113.930819 727.969285 63.756069 666.083819 63.756069zM648.410298 97.228415c5.553483 0 10.067286 4.499477 10.067286 10.06831s-4.513804 10.06831-10.067286 10.06831-10.069333-4.499477-10.069333-10.06831S642.856815 97.228415 648.410298 97.228415zM609.34149 97.228415c5.554506 0 10.06831 4.499477 10.06831 10.06831s-4.513804 10.06831-10.06831 10.06831c-5.552459 0-10.069333-4.499477-10.069333-10.06831S603.789031 97.228415 609.34149 97.228415zM544.693098 923.474492l-98.135064 0c-10.643408 0-19.259646-8.618285-19.259646-19.262716 0-10.641361 8.616238-19.259646 19.259646-19.259646l98.135064 0c10.641361 0 19.259646 8.618285 19.259646 19.259646C563.952744 914.856207 555.334459 923.474492 544.693098 923.474492zM750.128981 794.491863c0 30.940686-25.089421 54.280254-56.031131 54.280254L329.901127 848.772117c-30.943756 0-56.030108-23.339568-56.030108-54.280254L273.871019 203.832362c0-30.94171 25.086351-56.031131 56.030108-56.031131l364.196723 0c30.94171 0 56.031131 25.089421 56.031131 56.031131L750.128981 794.491863z"  ></path>' +
    "" +
    '<path d="M666.083819 63.756069 357.916181 63.756069c-61.886489 0-112.061238 50.17475-112.061238 112.060215l0 672.365384c0 61.885466 50.17475 112.063285 112.061238 112.063285L666.083819 960.244954c61.885466 0 112.060215-50.177819 112.060215-112.063285L778.144034 175.816285C778.144034 113.930819 727.969285 63.756069 666.083819 63.756069zM648.410298 97.228415c5.553483 0 10.067286 4.499477 10.067286 10.06831s-4.513804 10.06831-10.067286 10.06831-10.069333-4.499477-10.069333-10.06831S642.856815 97.228415 648.410298 97.228415zM609.34149 97.228415c5.554506 0 10.06831 4.499477 10.06831 10.06831s-4.513804 10.06831-10.06831 10.06831c-5.552459 0-10.069333-4.499477-10.069333-10.06831S603.789031 97.228415 609.34149 97.228415zM544.693098 923.474492l-98.135064 0c-10.643408 0-19.259646-8.618285-19.259646-19.262716 0-10.641361 8.616238-19.259646 19.259646-19.259646l98.135064 0c10.641361 0 19.259646 8.618285 19.259646 19.259646C563.952744 914.856207 555.334459 923.474492 544.693098 923.474492zM750.128981 794.491863c0 30.940686-25.089421 54.280254-56.031131 54.280254L329.901127 848.772117c-30.943756 0-56.030108-23.339568-56.030108-54.280254L273.871019 203.832362c0-30.94171 25.086351-56.031131 56.030108-56.031131l364.196723 0c30.94171 0 56.031131 25.089421 56.031131 56.031131L750.128981 794.491863z"  ></path>' +
    "" +
    "</symbol>" +
    "" +
    '<symbol id="icon-anquan" viewBox="0 0 1024 1024">' +
    "" +
    '<path d="M879.363325 199.799688 532.001247 56.812052c0 0-26.384623-8.245195-52.503273 0.212779C453.32613 65.42961 133.572156 199.693299 133.572156 199.693299S107.506701 210.013091 107.506701 225.758753c0 15.692468 0 405.557195 0 405.557195s37.342753 182.724156 398.961039 352.787948C867.607273 814.040104 905.428779 638.337662 905.428779 638.337662s0-396.726857 0-412.578909C905.428779 209.959896 879.363325 199.799688 879.363325 199.799688zM852.233974 638.337662c0 0-36.066078 143.625974-345.766234 292.571429C196.395221 781.910442 160.701506 638.337662 160.701506 638.337662s0-358.639377 0-372.363636c0-13.777455 26.225039-24.576 26.225039-24.576S457.475325 140.381091 479.870338 132.987013c22.448208-7.394078 53.194805 0 53.194805 0l292.571429 106.38961c0 0 26.597403 12.713558 26.597403 26.597403C852.233974 279.85787 852.233974 638.337662 852.233974 638.337662zM563.598961 605.037714 432.260987 262.729143 354.490182 471.944312 259.431065 471.944312l0 57.078026 115.219948 0 57.609974-152.137143 131.337974 342.361766 95.059117-190.224623 76.068571 0L734.726649 471.944312l-115.219948 0L563.598961 605.037714z"  ></path>' +
    "" +
    "</symbol>" +
    "" +
    '<symbol id="icon-goubianyi99" viewBox="0 0 1024 1024">' +
    "" +
    '<path d="M500.48 220.8 682.88 220.8 508.8 457.6 622.72 457.6 350.08 773.76 472.32 534.4 340.48 534.4Z"  ></path>' +
    "" +
    "</symbol>" +
    "" +
    '<symbol id="icon-gaoxiaobianjie" viewBox="0 0 1024 1024">' +
    "" +
    '<path d="M512 10.666667c-277.333333 0-501.333333 224-501.333333 501.333333 0 247.466667 177.066667 454.4 420.266666 494.933333h2.133334c4.266667 0 10.666667-4.266667 10.666666-8.533333 0-6.4-2.133333-10.666667-8.533333-12.8-232.533333-38.4-403.2-236.8-403.2-473.6 0-264.533333 215.466667-480 480-480s480 215.466667 480 480c0 134.4-53.333333 258.133333-151.466667 349.866667-4.266667 4.266667-4.266667 10.666667 0 14.933333 4.266667 4.266667 10.666667 4.266667 14.933334 0 102.4-96 157.866667-226.133333 157.866666-364.8 0-277.333333-224-501.333333-501.333333-501.333333z" fill="#2EC5FE" ></path>' +
    "" +
    '<path d="M512 198.4c-172.8 0-313.6 140.8-313.6 313.6 0 96 42.666667 185.6 119.466667 245.333333 2.133333 2.133333 4.266667 2.133333 6.4 2.133334 2.133333 0 6.4-2.133333 8.533333-4.266667 4.266667-4.266667 2.133333-10.666667-2.133333-14.933333-70.4-55.466667-110.933333-138.666667-110.933334-228.266667 0-162.133333 132.266667-292.266667 292.266667-292.266667s292.266667 132.266667 292.266667 292.266667c0 29.866667-4.266667 59.733333-12.8 87.466667-2.133333 6.4 2.133333 10.666667 6.4 12.8 6.4 2.133333 10.666667-2.133333 12.8-6.4 10.666667-29.866667 14.933333-61.866667 14.933333-93.866667 0-172.8-140.8-313.6-313.6-313.6z" fill="#2EC5FE" ></path>' +
    "" +
    '<path d="M614.4 569.6c6.4 2.133333 10.666667 0 14.933333-4.266667 8.533333-17.066667 10.666667-34.133333 10.666667-53.333333 0-70.4-57.6-128-128-128s-128 57.6-128 128c0 36.266667 14.933333 72.533333 42.666667 96 2.133333 2.133333 4.266667 2.133333 6.4 2.133333 2.133333 0 6.4-2.133333 8.533333-4.266666 4.266667-4.266667 4.266667-10.666667 0-14.933334-23.466667-19.2-36.266667-49.066667-36.266667-78.933333 0-57.6 46.933333-106.666667 106.666667-106.666667 57.6 0 106.666667 46.933333 106.666667 106.666667 0 14.933333-4.266667 29.866667-10.666667 44.8-2.133333 4.266667 0 10.666667 6.4 12.8z" fill="#2EC5FE" ></path>' +
    "" +
    '<path d="M808.533333 695.466667c0-2.133333-10.666667-46.933333-49.066666-46.933334-12.8 0-23.466667 4.266667-32 10.666667-6.4-17.066667-19.2-38.4-44.8-40.533333-21.333333-2.133333-36.266667 10.666667-44.8 23.466666-2.133333-4.266667-4.266667-6.4-6.4-10.666666-8.533333-8.533333-19.2-12.8-34.133334-12.8-12.8 0-23.466667 4.266667-29.866666 8.533333V533.333333s0-25.6-17.066667-42.666666c-10.666667-10.666667-23.466667-14.933333-40.533333-14.933334-44.8 0-57.6 38.4-57.6 57.6v277.333334l-23.466667-25.6c-2.133333-2.133333-21.333333-25.6-44.8-27.733334-10.666667-2.133333-19.2 2.133333-27.733333 8.533334-27.733333 21.333333-8.533333 59.733333 6.4 78.933333l93.866666 117.333333c-2.133333 4.266667-4.266667 8.533333-4.266666 14.933334v4.266666c0 17.066667 14.933333 32 32 32h260.266666c17.066667 0 32-14.933333 32-32v-4.266666c0-4.266667-2.133333-10.666667-4.266666-14.933334l2.133333-2.133333 32-59.733333c0-2.133333 2.133333-4.266667 2.133333-4.266667l-2.133333-196.266667c4.266667-2.133333 2.133333-2.133333 2.133333-4.266666z m-51.2 285.866666c0 6.4-4.266667 10.666667-10.666666 10.666667h-260.266667c-6.4 0-10.666667-4.266667-10.666667-10.666667v-4.266666c0-6.4 4.266667-10.666667 10.666667-10.666667h260.266667c6.4 0 10.666667 4.266667 10.666666 10.666667v4.266666z m4.266667-36.266666H469.333333l-89.6-113.066667s-25.6-36.266667-8.533333-49.066667c4.266667-2.133333 8.533333-4.266667 12.8-4.266666 12.8 2.133333 25.6 14.933333 32 21.333333l42.666667 46.933333c2.133333 4.266667 8.533333 4.266667 10.666666 2.133334 4.266667-2.133333 6.4-6.4 6.4-10.666667v-302.933333c0-4.266667 2.133333-36.266667 36.266667-36.266667 34.133333 0 36.266667 32 36.266667 36.266667v140.8c0 6.4 4.266667 10.666667 10.666666 10.666666s10.666667-4.266667 10.666667-10.666666c0-4.266667 2.133333-34.133333 29.866667-34.133334 8.533333 0 12.8 2.133333 17.066666 6.4 8.533333 8.533333 8.533333 23.466667 8.533334 29.866667 0 6.4 4.266667 10.666667 8.533333 10.666667 6.4 0 10.666667-2.133333 12.8-8.533334 0 0 10.666667-42.666667 36.266667-40.533333 25.6 2.133333 29.866667 46.933333 29.866666 46.933333 0 4.266667 4.266667 8.533333 10.666667 10.666667 6.4 0 10.666667-2.133333 10.666667-8.533333 0-2.133333 6.4-19.2 25.6-19.2 19.2 0 27.733333 23.466667 27.733333 27.733333l2.133333 192-27.733333 55.466667z" fill="#2EC5FE" ></path>' +
    "" +
    "</symbol>" +
    "" +
    '<symbol id="icon-zhineng" viewBox="0 0 1024 1024">' +
    "" +
    '<path d="M695.322 232.532l66.466-118.809c4.382-7.838 1.59-17.74-6.25-22.119-7.854-4.38-17.742-1.587-22.12 6.251l-67.07 119.913c-47.052-21.433-99.312-33.37-154.349-33.37-55.04 0-107.3 11.936-154.352 33.368L290.578 97.853c-4.38-7.838-14.28-10.63-22.119-6.251-7.839 4.38-10.631 14.282-6.252 22.12l66.467 118.807C215.027 296.83 138.281 419.08 138.281 559.415c0 207.126 167.326 375.055 373.719 375.055 206.377 0 373.719-167.928 373.719-375.055 0-140.332-76.752-262.582-190.397-326.883zM351.116 512.004c-22.39 0-40.62-18.169-40.62-40.622 0-22.437 18.234-40.621 40.62-40.621 22.389 0 40.621 18.184 40.621 40.621 0 22.453-18.232 40.622-40.62 40.622z m321.768 0c-22.377 0-40.622-18.169-40.622-40.622 0-22.437 18.245-40.621 40.622-40.621 22.5 0 40.62 18.184 40.62 40.621 0 22.453-18.12 40.622-40.62 40.622z" fill="" ></path>' +
    "" +
    "</symbol>" +
    "" +
    '<symbol id="icon-jineng" viewBox="0 0 1024 1024">' +
    "" +
    '<path d="M327.68 810.666667l324.266667-407.893334c73.386667 17.066667 151.893333-6.826667 201.386666-69.973333 42.666667-52.906667 52.906667-122.88 34.133334-182.613333l-87.04 109.226666-117.76-30.72L626.346667 119.466667 713.386667 10.24C648.533333 6.826667 583.68 32.426667 541.013333 85.333333c-49.493333 61.44-56.32 145.066667-22.186666 211.626667l-324.266667 407.893333c-49.493333-5.12-100.693333 15.36-133.12 58.026667C8.533333 829.44 18.773333 926.72 85.333333 977.92c66.56 52.906667 163.84 40.96 215.04-25.6 34.133333-40.96 42.666667-93.866667 27.306667-141.653333z m-116.053333 124.586666l-81.92-11.946666-30.72-76.8 51.2-64.853334 81.92 11.946667 30.72 76.8-51.2 64.853333z"  ></path>' +
    "" +
    '<path d="M701.44 597.333333l-54.613333-46.08-51.2 61.44-314.026667-267.946666-52.906667-90.453334-121.173333-75.093333L51.2 245.76l92.16 107.52 97.28 37.546667 314.026667 266.24-51.2 61.44 54.613333 46.08c25.6-13.653333 58.026667-11.946667 80.213333 6.826666 23.893333 20.48 30.72 51.2 20.48 78.506667l170.666667 145.066667c27.306667 23.893333 68.266667 20.48 92.16-6.826667l59.733333-69.973333c23.893333-27.306667 20.48-68.266667-6.826666-92.16L802.133333 682.666667c-25.6 13.653333-58.026667 11.946667-80.213333-6.826667-23.893333-20.48-30.72-52.906667-20.48-78.506667z"  ></path>' +
    "" +
    "</symbol>" +
    "" +
    '<symbol id="icon-anquan1" viewBox="0 0 1024 1024">' +
    "" +
    '<path d="M488.335 250.276v127.073H324.308c-11.79 0-21.979 8.929-22.785 20.692-0.928 13.546 9.086 24.157 22.365 24.157h164.447v276.151c0 11.79 8.929 21.979 20.692 22.785 13.546 0.928 24.157-9.086 24.157-22.365V422.198h164.028c11.79 0 21.979-8.929 22.785-20.692 0.928-13.546-9.086-24.157-22.365-24.157H533.184V250.696c0-11.79-8.929-21.979-20.692-22.785-13.545-0.928-24.157 9.086-24.157 22.365z"  ></path>' +
    "" +
    '<path d="M862.079 147.123L510.76 63.404l-343.097 83.719-30.647 5.98v390.189c0 31.394 6.727 62.789 19.435 93.436 12.707 31.394 29.9 61.294 50.829 90.446 20.93 29.152 39.617 56.809 65.779 82.971 26.91 26.162 53.819 49.334 81.476 69.516s54.567 37.374 79.981 50.829c25.415 13.455 48.587 22.425 68.021 27.657l8.222 2.242 8.97-2.242c18.687-5.232 41.112-14.202 66.526-27.657 25.415-13.455 50.829-30.647 77.739-50.829s53.072-43.354 78.486-69.516c26.162-26.162 54.567-53.819 74.001-82.971 20.182-29.152 36.627-59.052 49.334-90.446 12.707-30.647 18.687-62.042 18.687-93.436V153.103l-22.423-5.98z m-22.424 396.168c0 25.415-5.232 51.577-15.697 76.991-11.212 27.657-26.162 55.314-44.102 81.476-16.445 23.92-40.364 47.839-63.536 71.011l-5.98 5.98c-24.667 24.667-49.334 46.344-74.001 65.779-24.667 18.687-48.587 34.384-71.759 47.092-20.93 11.212-38.869 18.687-53.819 23.172-15.697-4.485-34.384-11.96-55.314-23.172-23.172-11.96-48.587-28.405-74.001-47.092-25.415-18.687-51.577-41.112-76.991-65.779-20.182-20.182-35.879-41.112-53.072-66.526-2.242-3.737-5.232-6.727-7.475-10.465-18.687-26.162-34.384-53.819-45.597-81.476-10.465-25.415-15.697-50.829-15.697-76.244V190.477l328.895-80.729 328.895 78.486v355.057h-0.749z"  ></path>' +
    "" +
    "</symbol>" +
    "" +
    '<symbol id="icon-zhineng1" viewBox="0 0 1024 1024">' +
    "" +
    '<path d="M526.453 708.78h-0.030c-5.897 0-11.883-0.061-17.779-0.181-102.895-1.966-199.591-20.833-272.22-53.066-77.164-34.258-119.132-80.43-118.164-129.957 0.907-48.166 42.513-91.798 117.076-122.912 69.907-29.148 163.036-45.203 262.272-45.203 5.897 0 11.853 0.061 17.779 0.181 102.895 1.966 199.562 20.803 272.22 53.066 77.134 34.258 119.102 80.43 118.164 129.957-0.938 48.166-42.513 91.798-117.106 122.912-69.876 29.148-163.006 45.203-262.211 45.203zM497.607 390.63c-94.943 0-183.536 15.149-249.482 42.663-60.805 25.369-96.062 59.203-96.697 92.917-0.666 34.833 35.226 70.905 98.45 98.994 68.698 30.479 160.829 48.318 259.399 50.223 5.684 0.121 11.459 0.151 17.145 0.151h0.030c94.913 0 183.506-15.149 249.452-42.634 60.805-25.369 96.031-59.233 96.667-92.917 0.695-34.833-35.196-70.905-98.45-98.994-68.668-30.509-160.798-48.349-259.37-50.223-5.715-0.121-11.459-0.181-17.145-0.181z" fill="#000000" ></path>' +
    "" +
    '<path d="M676.759 876.471c-43.662 0-96.697-23.857-153.33-68.999-55.968-44.599-110.545-106.010-157.866-177.58-56.724-85.872-96.062-176.189-110.697-254.29-15.541-82.999-1.33-143.714 40.003-171.049 14.877-9.827 32.505-14.816 52.4-14.816 43.662 0 96.667 23.887 153.299 68.999 55.968 44.599 110.575 106.010 157.866 177.61 56.754 85.872 96.062 176.189 110.697 254.29 15.541 82.97 1.361 143.714-40.003 171.049-14.846 9.827-32.474 14.786-52.37 14.786zM347.271 222.939c-13.305 0-24.764 3.115-34.107 9.313-29.057 19.2-38.431 69.212-25.67 137.244 13.849 73.868 51.403 159.83 105.767 242.105 45.415 68.698 97.573 127.477 150.85 169.93 49.981 39.822 97.090 61.774 132.647 61.774 13.274 0 24.734-3.145 34.077-9.313 29.088-19.2 38.431-69.212 25.701-137.244-13.849-73.868-51.433-159.83-105.767-242.105-45.415-68.727-97.603-127.477-150.881-169.93-49.951-39.852-97.059-61.774-132.618-61.774z" fill="#000000" ></path>' +
    "" +
    '<path d="M366.35 889.051c-16.116 0-30.932-3.598-44.176-10.885-43.42-23.887-62.499-83.271-53.73-167.238 8.285-79.039 40.155-172.258 89.773-262.423 54.154-98.42 123.85-182.025 191.216-229.436 7.499-5.261 17.84-3.447 23.101 4.051 5.292 7.469 3.477 17.84-4.021 23.101-63.376 44.569-129.412 124.151-181.207 218.278-47.532 86.386-78.011 175.131-85.842 249.875-7.197 68.818 6.169 117.923 36.677 134.734 30.539 16.781 79.159 1.783 133.434-41.122 58.961-46.625 117.62-119.858 165.152-206.244 51.795-94.157 83.634-192.516 87.383-269.922 0.423-9.162 8.194-16.207 17.356-15.783 9.162 0.453 16.207 8.224 15.783 17.386-3.991 82.274-37.312 185.894-91.466 284.315-49.618 90.165-111.27 166.966-173.618 216.283-45.989 36.374-89.198 55.030-125.814 55.030z" fill="#000000" ></path>' +
    "" +
    '<path d="M685.165 218.372zM601.742 218.372c0 46.081 37.373 83.423 83.423 83.423 46.081 0 83.453-37.342 83.453-83.423s-37.373-83.423-83.453-83.423c-46.050 0-83.423 37.342-83.423 83.423z" fill="#000000" ></path>' +
    "" +
    "</symbol>" +
    "" +
    "</svg>";
  var script = (function () {
    var scripts = document.getElementsByTagName("script");
    return scripts[scripts.length - 1];
  })();
  var shouldInjectCss = script.getAttribute("data-injectcss");

  /**
   * document ready
   */
  var ready = function (fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0);
      } else {
        var loadFn = function () {
          document.removeEventListener("DOMContentLoaded", loadFn, false);
          fn();
        };
        document.addEventListener("DOMContentLoaded", loadFn, false);
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn);
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function () {
          if (!done) {
            done = true;
            fn();
          }
        };
      // polling for no errors
      var polling = function () {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll("left");
        } catch (e) {
          setTimeout(polling, 50);
          return;
        }
        // no errors, fire

        init();
      };

      polling();
      // trying to always fire before onload
      d.onreadystatechange = function () {
        if (d.readyState == "complete") {
          d.onreadystatechange = null;
          init();
        }
      };
    }
  };

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function (el, target) {
    target.parentNode.insertBefore(el, target);
  };

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function (el, target) {
    if (target.firstChild) {
      before(el, target.firstChild);
    } else {
      target.appendChild(el);
    }
  };

  function appendSvg() {
    var div, svg;

    div = document.createElement("div");
    div.innerHTML = svgSprite;
    svgSprite = null;
    svg = div.getElementsByTagName("svg")[0];
    if (svg) {
      svg.setAttribute("aria-hidden", "true");
      svg.style.position = "absolute";
      svg.style.width = 0;
      svg.style.height = 0;
      svg.style.overflow = "hidden";
      prepend(svg, document.body);
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true;
    try {
      document.write(
        "<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>"
      );
    } catch (e) {
      console && console.log(e);
    }
  }

  ready(appendSvg);
})(window);
