import {OrderUtils} from "../../../app/order/utils/order-utils";

describe('OrderUtils', () => {
  it('should create an instance', () => {
    expect(new OrderUtils()).toBeTruthy();
  });

  it('#isImport should create tax + 5', () => {
    expect(OrderUtils.totalTax(10, true)).toEqual(15);
    expect(OrderUtils.totalTax(0, true)).toEqual(5);
  });

  it('#!isImport should create tax', () => {
    expect(OrderUtils.totalTax(10, false)).toEqual(10);
    expect(OrderUtils.totalTax(0, false)).toEqual(0);
  });

  it('#roundElement should create tax with centime + 5', () => {
    expect(OrderUtils.roundElement(0.99)).toEqual(1);
    expect(OrderUtils.roundElement(0.0455)).toEqual(0.05);
    expect(OrderUtils.roundElement(1)).toEqual(1);
    expect(OrderUtils.roundElement(1.01)).toEqual(1.05);
    expect(OrderUtils.roundElement(1.02)).toEqual(1.05);
    expect(OrderUtils.roundElement(1.67)).toEqual(1.7);
    expect(OrderUtils.roundElement(1.27)).toEqual(1.3);
    expect(OrderUtils.roundElement(1.23)).toEqual(1.25);
  });
});
