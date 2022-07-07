import { MyDurationPipe } from './my-duration.pipe';

describe('MyDurationPipe', () => {
  it('create an instance', () => {
    const pipe = new MyDurationPipe();
    expect(pipe).toBeTruthy();
  });
});
