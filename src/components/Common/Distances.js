export class Distances {
    root
    distancesByCoord = []
    cellsByCoord = []
    
    constructor(root) {
        this.root = root
        const accessor = this.getCellAccessor(root)
        this.distancesByCoord[accessor] = 0
        this.cellsByCoord[accessor] = root
    }

    getCellAccessor(cell) {
        return `x${cell.column}y${cell.row}`
    }

    getDistance(cell) {
        const accessor = this.getCellAccessor(cell)
        if (this.visitedCell(cell))
            return this.distancesByCoord[accessor]

        return 0
    }

    addCell(cell, distance) {
        const accessor = this.getCellAccessor(cell)
        this.distancesByCoord[accessor] = distance
        this.cellsByCoord[accessor] = cell
    }

    getCellKeys() {
        return this.cellsByCoord
    }

    visitedCell(cell) {
        return !!this.cellsByCoord[this.getCellAccessor(cell)]
    }
}