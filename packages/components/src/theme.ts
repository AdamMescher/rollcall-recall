const theme = {
    colors: {
        primary: {
            blue: {
                100: '#001141',
                90: '#001d6c',
                80: '#002d9c',
                70: '#0043ce',
                60: '#0f62fe',
                50: '#4589ff',
                40: '#78a9ff',
                30: '#a6c8ff',
                20: '#d0e2ff',
                10: '#edf5ff',
            }
        },
        neutral: {
            coolGray: {
                100: '#121619',
                90: '#21272a',
                80: '#343a3f',
                70: '#4d5358',
                60: '#697077',
                50: '#878d96',
                40: '#a2a9b0',
                30: '#c1c7cd',
                20: '#dde1e6',
                10: '#f2f4f8',
            },
            gray: {
                100: '#161616',
                90: '#262626',
                80: '#393939',
                70: '#525252',
                60: '#6f6f6f',
                50: '#8d8d8d',
                40: '#a8a8a8',
                30: '#c6c6c6',
                20: '#e0e0e0',
                10: '#f4f4f4',
            },
            warmGray: {
                100: '#171414',
                90: '#272525',
                80: '#3c3838',
                70: '#565151',
                60: '#736f6f',
                50: '#8f8b8b',
                40: '#ada8a8',
                30: '#cac5c4',
                20: '#e5e0df',
                10: '#f7f3f2',
            },
        },
        supporting: {
            red: {
                100: '#2d0709',
                90: '#520408',
                80: '#750e13',
                70: '#a2191f',
                60: '#da1e28',
                50: '#fa4d56',
                40: '#ff8389',
                30: '#ffb3b8',
                20: '#ffd7d9',
                10: '#fff1f1',
            },
            magenta: {
                100: '#2a0a18',
                90: '#510224',
                80: '#740937',
                70: '#9f1853',
                60: '#d12771',
                50: '#ee5396',
                40: '#ff7eb6',
                30: '#ffafd2',
                20: '#ffd6e8',
                10: '#fff0f7',
            },
            purple: {
                100: '#1c0f30',
                90: '#31135e',
                80: '#491d8b',
                70: '#6929c4',
                60: '#8a3ffc',
                50: '#a56eff',
                40: '#be95ff',
                30: '#d4bbff',
                20: '#e8daff',
                10: '#f6f2ff',
            },
            cyan: {
                100: '#061727',
                90: '#012749',
                80: '#003a6d',
                70: '#00539a',
                60: '#0072c3',
                50: '#1192e8',
                40: '#33b1ff',
                30: '#82cfff',
                20: '#bae6ff',
                10: '#e5f6ff',
            },
            teal: {
                100: '#081a1c',
                90: '#022b30',
                80: '#004144',
                70: '#005d5d',
                60: '#007d79',
                50: '#009d9a',
                40: '#08bdba',
                30: '#3ddbd9',
                20: '#9ef0f0',
                10: '#d9fbfb',
            },
            green: {
                100: '#071908',
                90: '#022d0d',
                80: '#044317',
                70: '#0e6027',
                60: '#198038',
                50: '#24a148',
                40: '#42be65',
                30: '#6fdc8c',
                20: '#a7f0ba',
                10: '#defbe6',
            },
        },
        alert: {
            60: '#da1e28',
            50: '#24a148',
            40: '#ff832b',
            20: '#f1c21b',
        }
    },
    typography: {
        family: {
            sansSerif: 'Open Sans',
        },
        size: {
            headings: {
                mobile: {
                    h1: 36,
                    h2: 24,
                    h3: 18,
                },
                web: {
                    h1: 46,
                    h2: 30,
                    h3: 18,
                },
            },
            content: {
                mobile: {
                    small: 15,
                    medium: 18,
                    large: 18,
                },
                web: {
                    small: 15,
                    medium: 18,
                    large: 20,
                },
            },
        },
        weight: {
            regular: 400,
            bold: 700,
        },
        lineHeight: {
            none: 1,
            tight: 1.25,
            snug: 1.375,
            normal: 1.5,
            relaxed: 1.625,
            loose: 2,
        },
        letterSpacing: {
            tighter: -0.05,
            tight: -0.025,
            normal: 0,
            wide: 0.025,
            wider: 0.05,
            widest: 0.1,
        },
    },
    iconography: {
        size: {
            small: 16,
            medium: 20,
            large: 24,
            xl: 32,
        },
    },
    borderRadius: {
        square: 0,
        small: 2,
        medium: 4,
        large: 8,
        pill: 500,
        circle: '50%',
    },
    utilities: {
        opacity: {
            '0': 0,
            '25': 0.25,
            '50': 0.5,
            '75': 0.75,
            '100': 1,
        },
        rotate: {
            '-180': '-180deg',
            '-90': '-90deg',
            '-45': '-45deg',
            '0': '0',
            '45': '45deg',
            '90': '90deg',
            '180': '180deg',
        },
        scale: {
            '0': 0,
            '50': .5,
            '75': .75,
            '90': .9,
            '95': .95,
            '100': 1,
            '105': 1.05,
            '110': 1.1,
            '125': 1.25,
            '150': 1.5,
        },
        skew: {
            '-12': '-12deg',
            '-6': '-6deg',
            '-3': '-3deg',
            '0': '0',
            '3': '3deg',
            '6': '6deg',
            '12': '12deg',
        },
        animation: {
            transitionDuration: {
                '75': '75ms',
                '100': '100ms',
                '150': '150ms',
                '200': '200ms',
                '300': '300ms',
                '500': '500ms',
                '700': '700ms',
                '1000': '1000ms',
            },
        },
    },
    spacing: {
        '0': 0,
        '1': 0.25,
        '2': 0.5,
        '3': 0.75,
        '4': 1,
        '5': 1.25,
        '6': 1.5,
        '8': 2,
        '10': 2.5,
        '12': 3,
        '16': 4,
        '20': 5,
        '24': 6,
        '32': 8,
        '40': 10,
        '48': 12,
        '56': 14,
        '64': 16,
      },
};

export default theme;
