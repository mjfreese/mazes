export const sides = {
    left: 1, 
    right: 2, 
    top: 4, 
    bottom: 8,
    getBorderOnSide: (openSides, test) => (openSides & test) === test ? 0 : '1px' 
}

export const createDisplayCell = (x, y, openSides, contents = '') => {
    return {
        x, 
        y, 
        borderWidth: `${sides.getBorderOnSide(openSides, sides.top)} ${sides.getBorderOnSide(openSides, sides.right)} ${sides.getBorderOnSide(openSides, sides.bottom)} ${sides.getBorderOnSide(openSides, sides.left)}`,
        contents
    }
}