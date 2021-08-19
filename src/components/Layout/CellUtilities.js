export const sides = {
    left: 1, 
    right: 2, 
    top: 4, 
    bottom: 8,
    getBorderOnSide: (openSides, test) => (openSides & test) === test ? 0 : '1px' 
}

export const createDisplayCell = (x, y, openSides, contents = '', background = '#ffffff') => {
    return {
        x, 
        y, 
        borderWidth: `${sides.getBorderOnSide(openSides, sides.top)} ${sides.getBorderOnSide(openSides, sides.right)} ${sides.getBorderOnSide(openSides, sides.bottom)} ${sides.getBorderOnSide(openSides, sides.left)}`,
        contents,
        background
    }
}

const componentToHex = (c) => {
    var hex = c.toString(16)
    return hex.length === 1 ? `0${hex}` : hex
}
  
export const rgbToHex = (r, g, b) => {
    return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`
}