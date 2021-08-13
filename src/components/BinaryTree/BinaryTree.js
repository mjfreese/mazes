export const createBinaryTree = (grid) => {
    for (const cell of grid.eachCell()) {
        let neighbors = [cell.north, cell.east]
        neighbors = [...neighbors.filter(n => !!n)]

        const neighbor = sample(neighbors)

        if (!!neighbor)
            cell.link(neighbor)
    }

    return grid
}

export const sample = (list) => {
    return list[randomNumber(list.length)]
}

export const randomNumber = (mult) => {
    return Math.floor(Math.random() * mult)
}