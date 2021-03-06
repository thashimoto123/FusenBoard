const keycodeMap = {
  49: '1',
  97: '1',
  50: '2',
  51: '3',
  99: '3',
  52: '4',
  100: '4',
  53: '5',
  101: '5',
  54: '6',
  102: '6',
  55: '7',
  103: '7',
  56: '8',
  104: '8',
  57: '9',
  105: '9',
  65: 'A',
  66: 'B',
  67: 'C',
  68: 'D',
  69: 'E',
  70: 'F',
  71: 'G',
  72: 'H',
  73: 'I',
  74: 'J',
  75: 'K',
  76: 'L',
  77: 'M',
  78: 'N',
  79: 'O',
  80: 'P',
  81: 'Q',
  82: 'R',
  83: 'S',
  84: 'T',
  85: 'U',
  86: 'V',
  87: 'W',
  88: 'X',
  89: 'Y',
  90: 'Z',
  112: 'F1' ,
  113: 'F2' ,
  114: 'F3' ,
  115: 'F4' ,
  116: 'F5' ,
  117: 'F6' ,
  118: 'F7' ,
  119: 'F8' ,
  120: 'F9' ,
  121: 'F10',
  122: 'F11',
  123: 'F12',
  106: '*',
  107: '+',
  109: '-',
  110: '.',
  111: '/',
  173: '-',
  160: '^',
  220: '\\',
  64: '@',
  219: '[',
  221: ']',
  59: ';',
  188: ',',
  190: '.',
  191: '/',
  38: 'Up',
  40: 'Down',
  37: 'Left',
  39: 'Right',
  13: 'Enter'
}

function createKeyHandler(option) {
  return function(e) {
    if (option[keycodeMap[e.keyCode]]) {
      e.preventDefault()
      option[keycodeMap[e.keyCode]](e)
    }
  }
}

export default createKeyHandler