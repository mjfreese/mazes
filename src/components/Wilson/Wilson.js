import { Grid, sample } from "../Common/Grid"

export const createWilson = (grid) => {
    if (!grid)
        return new Grid(4, 4)

    let unvisited = grid.getSize() - 1
    let cell = grid.randomCell()

    while (unvisited > 0) {
        const neighbor = sample(cell.neighbors())

        if (!neighbor.links.length) {
            cell.link(neighbor)
            unvisited -= 1
        }

        cell = neighbor
    }

    return grid
}