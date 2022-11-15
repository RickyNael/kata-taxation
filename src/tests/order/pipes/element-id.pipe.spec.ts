import {ElementIdPipe} from "../../../app/order/pipes/element-id.pipe";

describe('ElementIdPipe', () => {
  it('create an instance', () => {
    const pipe = new ElementIdPipe();
    expect(pipe).toBeTruthy();
  });

  it('#tranform should return value concat with number', () => {
    const pipe = new ElementIdPipe();
    expect(pipe.transform('product', 1)).toEqual('product1');
    expect(pipe.transform('category', 1)).toEqual('category1');
    expect(pipe.transform('product', 2)).toEqual('product2');
  });
});
