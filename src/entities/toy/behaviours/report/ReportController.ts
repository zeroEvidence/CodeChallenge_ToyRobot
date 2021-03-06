import { IReportController } from "./interfaces/ReportController.interface";

/**
 * ReportController gives a toy the ability to move themselves.
 *
 * ReportController is toy specific implementation of this class WILL
 * throw errors.
 *
 * ReportController is here for posterity, in the future we may want to
 * define default behaviours or apply this behaviour on a large subset of toys,
 * but for now this ReportController exists to prevent future developers
 * from rewriting an ReportController. ReportController was first written for
 * the Robot toy.
 *
 * @export
 * @class ReportController
 * @implements {IMoveController}
 */
export class ReportController<T> implements IReportController<T> {
  constructor() {
    //
  }

  // By default toys do not report.
  public report(): T {
    throw Error("Method not implemented.");
  }
}
