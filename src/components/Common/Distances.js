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

    pathTo(goal) {
        if (!goal)
            return

        goal.setExit()
        this.root.setEntrance()
        let current = goal
        let breadCrumbs = new Distances(this.root)
        const goalDist = this.getDistance(goal)

        breadCrumbs.addCell(current, this.getDistance(current))
        
        const rootAccessor = this.getCellAccessor(this.root)

        while (this.getCellAccessor(current) !== rootAccessor) {
            const currentDistance = this.getDistance(current)
            for (const neighbor of current.getLinks()) {
                const neighborDist = this.getDistance(neighbor)
                if (neighborDist < currentDistance) {
                    breadCrumbs.addCell(neighbor, neighborDist)
                    current = neighbor

                    if (this.getCellAccessor(neighbor) !== rootAccessor)
                        neighbor.setPath(neighborDist, goalDist)
                    break
                }
            }
        }

        return breadCrumbs
    }
}