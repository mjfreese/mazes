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

    prepareCells(cells) {
        cells.forEach((cell) => {
            const row = cell.row
            const col = cell.col

            cell.north = this.getCell(row - 1, col)
            cell.south = this.getCell(row + 1, col)
            cell.east = this.getCell(row, col + 1)
            cell.west = this.getCell(row, col - 1)
        })
    }

    getCell(row, col) {
        if (row >= this.rows || row < 0)
            return null
        if (col < 0 || col >= this.grid[row].length)
            return null
        
        return this.grid[row][col]
    }

    getRandomCell() {
        const row = Math.floor(Math.random() * this.rows)
        const col = Math.floor(Math.random() * this.grid[row].length)
        return this.getCell(row, col)
    }

    getSize() {
        return this.rows * this.columns
    }
}