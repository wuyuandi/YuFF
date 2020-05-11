import { creatGlobalStyle } from 'styled-components';

export const GlobalIcon = creatGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1589218310339'); /* IE9 */
  src: url('./iconfont.eot?t=1589218310339#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAVgAAsAAAAACkQAAAUTAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDSAqHNIY4ATYCJAMYCw4ABCAFhG0HWxvxCMgekiQBCQIFlQgkKJhxEOXafz2ZJC+b3f/5AFEBKgaSQOpOAVB5RAXoTr95f9NC6UScM5upMxYopfYgE6fn6tAT0X9Lbab3/zmWemlNp/mv7Vyyg+4djUcJtIFEpEbTBnoTxqmQVzMcmA7C73g7BIjUZCxYr8z8cmCJhfsJIHNZhgSWOSu2hSwEg6851SIHcQSzy9wEDoR/L79pKwEMTuGdBk7PaAXJ35Q/NuBiXmSsimyczw0czgIFmgOwIGtrvcvB42xzcOLtECW9AWQEDPabzqPDx/hj8aeB//8hpwRFyLTM9Q/PYHEgHmozYPvmHHyzrgAK3zoIIPA9CmDgx2IBLPzYYMXB6GfcpQQgrQByDOKas7lHMQiuUpJUdd4154uLnUJts6RO454zJuz16+EPHw6VpGEz8ioWuS3xMLp70Ju3G3fM2CZurYjUdDOHKBWULwRnzvCoumaTHhHTmxE28uuh08Vgg9/RY49P2jSC0mEOTJyst994x1N5+O4whzP3fcyO3OtZfT/S/spTX+XxZxEO118ENFqDlGiiRknl6P0RNmvO5otg40tuEXcP32QzY8RluW2AaNQucrPDcRnb1GqfquXY5Y3NnkFXih7mX+G2Lt7Ko2R55GW57gZT1iWpztqHddO3ittm7DBurzFVrpaZ7ijvHnpwzpLqDzcOWyWBo4O0Z8QR0+fVMg1duHTrRteDD6e/jly8efty99Wy8U3AkhU7tngcMc14FbFo07Zlbqsk8WVkcO3c4LoIxbTlUwQMYb5ZAdMrTUaK1M6skUOKRSu8pCzYH9B1GQ3Qe0D8tOvOTjEHTyjaM1KFzf5FoWZhoxsyMmZiiv2cuor5m+b3KRzL4c7xPz6V0EPowa7hbbQJCEfcODnwbJKgdEMXEFsm3dA9NmjFtWHWxHanwiOInXzK9viDrrPbsy7bHZI6ka0qUtPFqhMMFYufN93n6ddtdKq7pKrK0rH36AXVU7qYnYktKwZKQzyNVOHehkyPwY6ebX+GTE3D4bnqscXBocvTyy9Bg1lEeQHH5Rernza7phzIAP+rxAQBq4TIF3sj6WZFhrw8C8s+uQYxN1RZuNmVU922j9JLbVKCwVri4DskI6PM53eJbhqM/45EmRKfsgB88EbHFuBTiyhFDLrU0GrpGb5lDvig6qX1UnrDpdMHsGZscvpJY/r7/K/YgYmygd/579MbL958rIU30nvmL4BuNOcgT0/rCOz12PyD/HpInf61u1H3ouWkCQ7x/y3TX/KS91/O+jCaZxmXCxjoLfuPynpO2buCNm+vk90+BPDM/lLTBoi6AP6ZwVJezKWv0LsehECFFAw5aoASqI+02ObgSGkPnkBXiDQj6+yUMnhwxCZAUyYJCMXsAUMh90Ep5hbSYp+DoyLfwVMsCpHh4nLJlIYyyzqNhySCrURLF8FSeh3tOJB11FgKmTYNyWcVIbUS8gKbIEICg4uFLKiD/BxHCO1MKEI0QfN6LZEpd4MajZ4w8Ho1pFCgCiFDbFAQXfdCgZReC6zpCQ+EBAFphaCFLghYKPTooP3FEdal+ZcCYWhDAwnfMvEmXAmER4BdP0EIgQT3QGZpdb0m7mVrgXYYQkEgaHMvGh49Wggy4YZoNKuHwFC/kxoIBSIQ1Yi0gViCjFl0X23g+nrtq7wGiPAbvRhRseLESw6/AlIqEim1JKux0bKkTlC1afSM3gJ1sAhB3orVCYhkeFILAAA=') format('woff2'),
  url('./iconfont.woff?t=1589218310339') format('woff'),
  url('./iconfont.ttf?t=1589218310339') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1589218310339#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-wechat:before {
  content: "\e635";
}

.icon-mail:before {
  content: "\e70a";
}

.icon-mianshulogo:before {
  content: "\e604";
}

.icon-twitter:before {
  content: "\e872";
}

.icon-instagram:before {
  content: "\e87f";
}
`;