import { IBaseController } from "../../interfaces/BaseController.interface";

export interface IMoveController extends IBaseController {
  move(): boolean;
}
