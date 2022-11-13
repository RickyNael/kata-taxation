import {KataCurrencyPipe} from "../../../app/core/pipes/kata-currency.pipe";

describe('KataCurrencyPipe', () => {
  it('create an instance', () => {
    const pipe = new KataCurrencyPipe();
    expect(pipe).toBeTruthy();
  });

  it('#tranform should return value + 1', () => {
    const pipe = new KataCurrencyPipe();
    expect(pipe.transform(0, 0, 0).toString()).toBe('0,00 € TTC');
    expect(pipe.transform(10, 0, 5).toString()).toBe('50,00 € TTC');
    expect(pipe.transform(20.8, 0.2, 3).toString()).toBe('63,00 € TTC');
  });
});
