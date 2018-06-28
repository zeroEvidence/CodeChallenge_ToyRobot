import { ISurfaceConfig } from "../interfaces/SurfaceConfig.interface";
import { ISurfaceFactory } from "../interfaces/SurfaceFactory.interface";
import { Table } from "./Table";

export class TableFactory implements ISurfaceFactory {
  constructor() {
    //
  }

  public createSurface(surfaceConfig: ISurfaceConfig) {
    return new Table(surfaceConfig.length, surfaceConfig.width);
  }
}
