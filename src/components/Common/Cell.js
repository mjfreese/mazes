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