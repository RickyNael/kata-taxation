import {IdentityPipe} from "../../../app/core/pipes/identity.pipe";

describe('IdentityPipe', () => {
  it('create an instance', () => {
    const pipe = new IdentityPipe();
    expect(pipe).toBeTruthy();
  });

  it('#tranform should return value + 1', () => {
    const pipe = new IdentityPipe();
    expect(pipe.transform(0)).toEqual(1);
    expect(pipe.transform(1)).toEqual(2);
  });
});
