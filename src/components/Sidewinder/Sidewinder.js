import { randomNumber, sample } from "../BinaryTree/BinaryTree"

export const createSidewinder = (grid) => {
    if (!grid)
        return

    for (const row of grid.eachRow()) {
        let run = []
        for (const cell of row) {
            run.push(cell)

            const atEastBound = !cell.east
            const atNorthBound = !cell.north
            const shouldCloseOut = atEastBound || (!atNorthBound && randomNumber(2) === 0)

            if (shouldCloseOut) {
                const member = sample(run)
                
                if (!!member.north)
                    member.link(member.north)

                run = []               
            } else {
                cell.link(cell.east)
            }
        }
    }

    return grid
}