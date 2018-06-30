export class MockRobot {
  setPositionCalled = 0;
  setPositionArgs = [] as any[];
  setOrientationCalled = 0;
  setOrientationArgs = [] as any[];
  validateOrientationCalled = 0;
  validateOrientationArgs = [] as any[];
  validatePositionCalled = 0;
  validatePositionArgs = [] as any[];
  validatePlacementCalled = 0;
  validatePlacementArgs = [] as any[];
  placeCalled = 0;
  placeArgs = [] as any[];
  reportCalled = 0;
  reportArgs = [] as any[];
  moveCalled = 0;
  moveArgs = [] as any[];
  leftCalled = 0;
  leftArgs = [] as any[];
  rightCalled = 0;
  rightArgs = [] as any[];
  changeOrientationCalled = 0;
  changeOrientationArgs = [] as any[];
  setSurface() {}
  setPosition(args: boolean) {
    this.setPositionCalled++;
    this.setPositionArgs.push(args);
  }
  setOrientation(args: boolean) {
    this.setOrientationCalled++;
    this.setOrientationArgs.push(args);
  }
  validateOrientation(args: boolean) {
    this.validateOrientationCalled++;
    this.validateOrientationArgs.push(args);
  }
  validatePosition(args: boolean) {
    this.validatePositionCalled++;
    this.validatePositionArgs.push(args);
  }
  validatePlacement(args: boolean) {
    this.validatePlacementCalled++;
    this.validatePlacementArgs.push(args);
  }
  place(args: any) {
    this.placeCalled++;
    this.placeArgs.push(args);
  }
  report(args: any) {
    this.reportCalled++;
    this.reportArgs.push(args);
  }
  move(args: any) {
    this.moveCalled++;
    this.moveArgs.push(args);
  }
  left(args: any) {
    this.leftCalled++;
    this.leftArgs.push(args);
  }
  right(args: any) {
    this.rightCalled++;
    this.rightArgs.push(args);
  }
  changeOrientation(args: any) {
    this.changeOrientationCalled++;
    this.changeOrientationArgs.push(args);
  }
}
