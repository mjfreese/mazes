import { Grid, sample } from "../Common/Grid"

const cellIsUnvisited = (unvisited, cell) => {
    return unvisited.find(c => c.equals(cell)) !== undefined
}

export const createWilsons = (grid) => {
    if (!grid)
        return new Grid(4, 4)

    let unvisited = []

    for (const cell of grid.eachCell()) {
        unvisited.push(cell)
    }

    const first = sample(unvisited)
    unvisited = unvisited.filter(c => !c.equals(first))

    while (unvisited.length > 0) {
        let cell = sample(unvisited)
        let path = [cell]

        while (cellIsUnvisited(unvisited, cell)) {
            cell = sample(cell.neighbors())
            console.log(cell, path)
            const position = path.indexOf(cell)
            if (position)
                path = path.slice(position)
            else 
                path.push(cell)
        }

        for (let i = 0; i < path.length - 2; i++) {
            path[i].link(path[i + 1])
            unvisited = unvisited.filter(c => !c.equals(path[i]))
        }

        //unvisited = unvisited.filter(c => !c.equals(cell))
    }

    return grid
}