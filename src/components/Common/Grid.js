import { randomNumber } from '../BinaryTree/BinaryTree'
import { Cell } from './Cell'

export class Grid {
    constructor(rows, columns) {
        this.rows = rows
        this.columns = columns
        this.grid = this.prepareGrid()
        this.prepareCells()
    }

    prepareGrid() {
        const rows = []
        for (let i = 0; i < this.rows; i++) {
            const row = []
            for (let j = 0; j < this.columns; j++) {
                row.push(new Cell(i, j))
            }
            rows.push(row)
        }

        return rows
    }

    prepareCells() {
        for (const cell of this.eachCell()) {
            const row = cell.row
            const col = cell.column

            cell.north = this.getCell(row - 1, col)
            cell.south = this.getCell(row + 1, col)
            cell.east = this.getCell(row, col + 1)
            cell.west = this.getCell(row, col - 1)
        }
    }

    getCell(row, col) {
        if (row >= this.rows || row < 0)
            return null
        if (col < 0 || col >= this.grid[row].length)
            return null
        
        return this.grid[row][col]
    }

    randomCell() {
        const row = randomNumber(this.rows)
        const col = randomNumber(this.grid[row].length)
        return this.getCell(row, col)
    }

    getSize() {
        return this.rows * this.columns
    }

    *eachRow() {
        for (const row of this.grid){
            yield row
        }
    }

    *eachCell() {
        for (const row of this.eachRow()) {
            for (const cell of row) {
                yield cell
            }
        }
    }

    contentsOfCell(cell) {
        return ''
    }
}