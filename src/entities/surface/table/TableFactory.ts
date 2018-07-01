import { ISurfaceConfig } from "../interfaces/SurfaceConfig.interface";
import { ISurfaceFactory } from "../interfaces/SurfaceFactory.interface";
import { Table } from "./Table";

/**
 * TableFactory is a factory that produces a table from a configuration object
 *
 * @export
 * @class TableFactory
 * @implements {ISurfaceFactory}
 */
export class TableFactory implements ISurfaceFactory {
  constructor() {
    //
  }

  public createSurface(surfaceConfig: ISurfaceConfig) {
    return new Table(surfaceConfig.length, surfaceConfig.width);
  }
}
