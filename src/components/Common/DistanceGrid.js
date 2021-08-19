import { Grid } from "./Grid";

export class DistanceGrid extends Grid {
    distances

    contentsOfCell(cell) {
        if (!!this.distances)
            return this.distances.getDistance(cell)
        else super.contentsOfCell(cell)
    }
}