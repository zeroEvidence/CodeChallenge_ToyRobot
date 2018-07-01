/**
 * IReportController defines a specification for all ReportController classes.
 *
 * @export
 * @interface IReportController
 * @template T
 */
export interface IReportController<T = any> {
  report(): T;
}
