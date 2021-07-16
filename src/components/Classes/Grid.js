import { Cell } from './Cell'

export class Grid {
    constructor(rows, columns) {
        this.rows = rows
        this.columns = columns
        this.grid = this.prepareGrid()
        this.prepareCells()
    }

    prepareGrid() {
        const rows = new Array(this.rows)
        rows.forEach((row, rowIdx) => {
            const cells = new Array(this.columns)
            cells.forEach((cell, colIdx) => cell = new Cell(rowIdx, colIdx))
            row = cells
        })

        return rows
    }

    prepareCells() {

    }
}