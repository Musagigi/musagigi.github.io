import { FC } from 'react';

type THeaderStyleLogo = {
  styleLogo?: { verticalAlign: string };
};

export const AdeptusMechanicusLogo: FC<THeaderStyleLogo> = ({ styleLogo }) => {
  return (
    <svg
      fill="#ffffff"
      width="60px"
      height="60px"
      viewBox="0 0 14 14"
      role="img"
      focusable="false"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      style={styleLogo}
    >
      <path d="m 6.4347865,12.48845 0,-0.5117 -0.27598,-0.029 c -0.15178,-0.016 -0.28908,-0.037 -0.3051,-0.047 -0.019,-0.012 -0.0291,-0.1546 -0.0291,-0.4121 l 0,-0.3941 -0.11276,-0.017 c -0.062,-0.01 -0.26734,-0.06 -0.45628,-0.1127 -0.21052,-0.059 -0.34707,-0.085 -0.35269,-0.068 -0.014,0.042 -0.34915,0.6256 -0.3729,0.6493 -0.0545,0.054 -1.04011,-0.5202 -1.04011,-0.6065 0,-0.049 0.0826,-0.2095 0.22799,-0.4431 0.0643,-0.1034 0.11692,-0.2021 0.11692,-0.2194 0,-0.035 -0.60721,-0.6464 -0.64167,-0.6464 -0.0118,0 -0.16744,0.083 -0.34578,0.1836 -0.17834,0.1011 -0.33259,0.1786 -0.34277,0.1723 -0.0357,-0.022 -0.28097,-0.3976 -0.38841,-0.5947 -0.12376,-0.227 -0.22715,-0.4776 -0.19705,-0.4776 0.0151,0 0.6269,-0.354 0.66123,-0.3826 0.003,0 -0.0243,-0.094 -0.0611,-0.2024 -0.0368,-0.1087 -0.0907,-0.3047 -0.11989,-0.4356 -0.0292,-0.1308 -0.0573,-0.2421 -0.0625,-0.2473 -0.005,-0.01 -0.18443,-0.018 -0.3983,-0.029 -0.2959,-0.014 -0.39471,-0.028 -0.4133,-0.058 -0.0266,-0.042 -0.0344,-0.9571 -0.009,-1.052 0.0191,-0.071 0.0597,-0.08 0.4879,-0.1017 l 0.33178,-0.017 0.10275,-0.4289 c 0.0565,-0.2358 0.10421,-0.4396 0.10599,-0.4528 0.002,-0.013 -0.1421,-0.1063 -0.31973,-0.2069 l -0.32295,-0.1829 0.0381,-0.1118 c 0.0859,-0.2518 0.47473,-0.9066 0.5574,-0.9383 0.0178,-0.01 0.16898,0.066 0.33599,0.162 0.16702,0.096 0.31482,0.1743 0.32844,0.1743 0.0373,0 0.67278,-0.6099 0.67261,-0.6455 -8e-5,-0.017 -0.0784,-0.168 -0.17402,-0.3354 -0.20592,-0.3605 -0.20565,-0.3629 0.0593,-0.5381 0.21796,-0.1442 0.77195,-0.4247 0.80198,-0.4062 0.0118,0.01 0.1073,0.1569 0.21229,0.3325 0.10499,0.1757 0.20746,0.3192 0.22772,0.3192 0.0203,0 0.0704,-0.013 0.11152,-0.029 0.0411,-0.016 0.22392,-0.068 0.40632,-0.1151 l 0.33164,-0.086 0.007,-0.3864 0.007,-0.3863 0.16729,-0.029 c 0.092,-0.016 0.229,-0.029 0.30442,-0.029 l 0.13711,0 0,-0.5346 0,-0.5345 0.32501,0.018 c 0.99976,0.055 1.91871,0.3116 2.72785,0.76 1.6085095,0.8914 2.6620895,2.431 2.9615395,4.3275 0.0681,0.4313 0.0676,1.483 -8.8e-4,1.8933 -0.21584,1.2933 -0.72384,2.3231 -1.58172,3.2064 -0.48747,0.5019 -0.9368395,0.8273 -1.5967095,1.1563 -0.79531,0.3965 -1.75922,0.6364 -2.56314,0.6379 l -0.27195,5e-4 0,-0.5117 z m 0.52465,-1.0583 0.007,-0.4142 0.0988,-0.018 c 0.0544,-0.01 0.27664,-0.066 0.49395,-0.1236 0.21731,-0.058 0.41069,-0.099 0.42973,-0.092 0.019,0.01 0.11584,0.1512 0.21511,0.3197 0.11928,0.2025 0.196,0.3064 0.22626,0.3065 0.0602,0 0.45365,-0.2066 0.65964,-0.3464 0.1527,-0.1037 0.16194,-0.1159 0.14895,-0.196 -0.008,-0.047 -0.0746,-0.1784 -0.1489,-0.2922 -0.20511,-0.3142 -0.20571,-0.3121 0.21467,-0.7325 l 0.34972,-0.3497 0.161,0.082 c 0.0885,0.045 0.2461795,0.1308 0.3502995,0.1898 l 0.18929,0.1073 0.13464,-0.2099 c 0.0741,-0.1154 0.1857,-0.3057 0.2481,-0.4229 0.11191,-0.2101 0.11278,-0.2137 0.0635,-0.2682 -0.0489,-0.054 -0.38157,-0.2584 -0.52635,-0.3233 -0.046,-0.021 -0.0729,-0.053 -0.0728,-0.088 2.4e-4,-0.07 0.19801,-0.8061 0.25006,-0.9307 l 0.0389,-0.093 0.37122,0 c 0.26812,0 0.37704,-0.01 0.39217,-0.033 0.0299,-0.047 0.0446,-0.5699 0.0227,-0.8039 l -0.0185,-0.1976 -0.3815,0 c -0.34261,0 -0.38416,0 -0.4075,-0.049 -0.0143,-0.027 -0.0801,-0.2559 -0.14624,-0.5093 -0.10511,-0.4028 -0.11546,-0.4659 -0.0823,-0.5027 0.0209,-0.023 0.14894,-0.1051 0.28459,-0.1822 0.38283,-0.2177 0.36177,-0.1904 0.27378,-0.3552 -0.14307,-0.2679 -0.35497,-0.6208 -0.38992,-0.6495 -0.0264,-0.022 -0.12557,0.01 -0.39707,0.1187 l -0.3618795,0.1476 -0.3611,-0.3623 c -0.1986,-0.1993 -0.3611,-0.3802 -0.3611,-0.4017 0,-0.022 0.0716,-0.1761 0.15919,-0.3434 0.0875,-0.1673 0.15919,-0.314 0.15919,-0.326 0,-0.028 -0.38158,-0.2657 -0.63219,-0.3935 -0.16517,-0.084 -0.1998,-0.094 -0.23018,-0.062 -0.0197,0.02 -0.10698,0.1621 -0.19404,0.3153 -0.1563,0.2751 -0.15946,0.2785 -0.2514,0.2731 -0.0512,0 -0.24054,-0.047 -0.42073,-0.098 -0.18019,-0.051 -0.37836,-0.1 -0.44038,-0.1096 l -0.11276,-0.017 0,-0.3408 c 0,-0.1875 -0.0116,-0.3715 -0.0259,-0.4089 -0.0248,-0.065 -0.0348,-0.068 -0.2364,-0.068 l -0.21052,0 -0.0172,0.2189 c -0.009,0.1204 -0.0135,0.4753 -0.009,0.7888 l 0.008,0.5699 0.23878,0.034 c 0.93432,0.1322 1.60005,0.5657 1.94626,1.2673 0.14135,0.2864 0.16298,0.3736 0.18119,0.7308 0.019,0.3736 -0.0144,0.5863 -0.1371,0.8731 -0.10594,0.2475 -0.17297,0.5439 -0.17297,0.7648 0,0.1395 0.0126,0.1752 0.12194,0.3462 0.17226,0.2692 0.17497,0.3348 0.0258,0.6248 -0.0667,0.1297 -0.12121,0.2678 -0.12121,0.3071 0,0.1319 -0.0816,0.3133 -0.18878,0.4194 -0.17257,0.1708 -0.32718,0.1935 -0.64204,0.094 -0.0702,-0.022 -0.13245,-0.036 -0.13821,-0.03 -0.006,0.01 0.0183,0.1011 0.0534,0.2118 0.0845,0.2661 0.12473,0.5067 0.11462,0.6854 l -0.008,0.1457 -0.17245,0 -0.17245,0 -0.0133,-0.1173 c -0.0194,-0.1714 -0.0796,-0.1747 -0.0796,0 l 0,0.1349 -0.19899,0 -0.19898,0 0,-0.1592 c 0,-0.1415 -0.006,-0.1592 -0.0531,-0.1592 -0.0471,0 -0.0531,0.018 -0.0531,0.1579 l 0,0.1579 -0.16582,0.01 -0.16582,0.01 -0.003,0.7827 c -0.002,0.4305 0.002,0.7923 0.009,0.8041 0.007,0.012 0.11549,0.017 0.24177,0.013 l 0.22962,-0.01 0.007,-0.4142 z m -1.45324,-1.3219 c 0,-0.1104 0.008,-0.1326 0.0481,-0.1326 0.0399,0 0.0478,0.021 0.0464,0.126 l -0.002,0.126 0.17909,0.01 0.17908,0.01 0,-0.1329 c 0,-0.1043 0.0111,-0.1389 0.0513,-0.1604 0.0935,-0.05 0.10787,-0.032 0.10787,0.133 l 0,0.1605 0.15255,-0.01 0.15256,-0.01 0.007,-0.577 c 0.004,-0.3554 -0.003,-0.5771 -0.0183,-0.5771 -0.014,0 -0.0829,0.05 -0.15307,0.1107 l -0.12763,0.1108 -0.009,-0.087 c -0.0128,-0.1304 0.0862,-0.4216 0.20656,-0.6078 l 0.10704,-0.1656 0,-2.3245 0,-2.3244 -0.25868,0.016 c -0.56488,0.034 -1.10705,0.2795 -1.51536,0.6862 -0.35765,0.3563 -0.54773,0.7316 -0.61303,1.2101 -0.0407,0.2983 -0.005,0.5312 0.1435,0.9274 0.14588,0.3898 0.17775,0.5236 0.18229,0.7647 0.003,0.1802 -10e-4,0.1944 -0.12125,0.3822 -0.17791,0.278 -0.18195,0.3272 -0.047,0.5731 0.0669,0.1219 0.12639,0.2773 0.1501,0.3921 0.0465,0.2251 0.12935,0.362 0.27889,0.461 0.13654,0.09 0.31209,0.093 0.53552,0.01 0.0849,-0.032 0.15969,-0.053 0.16617,-0.047 0.006,0.01 -0.007,0.056 -0.029,0.1095 -0.0839,0.2007 -0.21489,0.8919 -0.18043,0.9518 0.006,0.011 0.0943,0.02 0.1956,0.02 l 0.18415,0 0,-0.1327 z m -0.61693,-1.6146 c -0.11791,-0.1305 -0.17402,-0.2566 -0.19516,-0.4386 -0.0184,-0.1581 0.0325,-0.2455 0.18527,-0.3179 0.13627,-0.065 0.25345,-0.053 0.47053,0.047 0.10785,0.05 0.30149,0.1202 0.43032,0.1565 0.24809,0.07 0.36272,0.1472 0.36272,0.2447 0,0.047 -0.0404,0.076 -0.20562,0.1516 -0.26872,0.1224 -0.61379,0.2298 -0.80059,0.2494 -0.1484,0.015 -0.14986,0.015 -0.24747,-0.093 z m 1.87751,0.5994 c -0.0204,-0.098 -0.0623,-0.2344 -0.0931,-0.3041 -0.0544,-0.123 -0.17362,-0.2725 -0.2173,-0.2725 -0.0119,0 -0.0215,0.099 -0.0215,0.2188 1.1e-4,0.263 0.0443,0.3534 0.23008,0.4712 0.0683,0.043 0.12749,0.075 0.13155,0.071 0.004,0 -0.009,-0.087 -0.0297,-0.1848 z m 1.21621,-0.5768 c 0.11112,-0.098 0.17092,-0.2188 0.20902,-0.4237 0.0349,-0.1877 -1.6e-4,-0.2613 -0.16468,-0.3452 -0.1433,-0.073 -0.25025,-0.067 -0.44499,0.025 -0.0912,0.043 -0.28356,0.1148 -0.42755,0.1592 -0.25673,0.079 -0.40163,0.1717 -0.40163,0.2562 0,0.055 0.46759,0.2694 0.74509,0.3412 0.32845,0.085 0.37513,0.084 0.48474,-0.013 z" />
    </svg>
  );
};