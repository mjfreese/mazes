import { Grid, sample } from "../Common/Grid"

export const createBinaryTree = (grid) => {
    if (!grid)
        return new Grid(4, 4)

    for (const cell of grid.eachCell()) {
        let neighbors = [cell.north, cell.east]
        neighbors = [...neighbors.filter(n => !!n)]

        const neighbor = sample(neighbors)

        if (!!neighbor)
            cell.link(neighbor)
    }

    return grid
}