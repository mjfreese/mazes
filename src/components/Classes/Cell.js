export class Cell {
    row
    column
    north
    south
    east
    west

    constructor(row, column, ...links) {
        this.row = row
        this.column = column
        this.north = {}
        this.south = {}
        this.east = {}
        this.west = {}
        this.links = links ?? []
    }

    // get row() {
    //     return this.row
    // }

    // get column() { 
    //     return this.column
    // }

    // get north() {
    //     return this.north
    // }

    // set north(cell) {
    //     this.north = cell
    // }

    // get south() {
    //     return this.south
    // }

    // set south(cell) {
    //     this.south = cell
    // }

    // get east() {
    //     return this.east
    // }

    // set east(cell) {
    //     this.east = cell
    // }

    // get west() {
    //     return this.west
    // }

    // set west(cell) {
    //     this.west = cell
    // }

    *getLinks() {
        for (const link of this.links) {
            yield link;
        }
    }

    link(cell, bidirectional = true) {
        this.links.push(cell)

        if (bidirectional)
            cell.link(this, false)
    }

    unlink(cell, bidirectional = true) {
        this.links = [...this.links.filter(link => link !== cell)]

        if (bidirectional)
            cell.unlink(this, false)
    }

    neighbors() {
        const list = []
        
        if (this.north)
            list.push(this.north)
        if (this.south)
            list.push(this.south)
        if (this.east)
            list.push(this.east)
        if (this.west)
            list.push(this.west)

        return list
    }
}