import { rgbToHex } from "../Layout/CellUtilities";
import { Grid } from "./Grid";

export class DistanceGrid extends Grid {
    distances

    contentsOfCell(cell) {
        if (!!this.distances)
            return this.distances.getDistance(cell)
        else super.contentsOfCell(cell)
    }

    colorCells() {
        const maxDistance = this.distances.max()[1]
        for (const cell of this.eachCell()) {
            const distance = this.distances.getDistance(cell)
            
            const green = Math.max(0, Math.floor(255 * (maxDistance - distance) / maxDistance))
            cell.background = rgbToHex(0, green, 0)
        }
    }
}