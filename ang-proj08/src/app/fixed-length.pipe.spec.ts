import { FixedLengthPipe } from './fixed-length.pipe';

describe('FixedLengthPipe', () => {
  let pipe:FixedLengthPipe;

  beforeEach(()=>{
    pipe = new FixedLengthPipe();
  })
  
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return null given null',()=>{
    expect(pipe.transform(null,10)).toBeNull();
  });

  it('should return unchagned value given same length',()=>{
    expect(pipe.transform("abcdefghij",10)).toBe("abcdefghij");
  });

  it('should return subsringed value given lesser length',()=>{
    expect(pipe.transform("abcdefghijklmnopqrstuv",10)).toBe("abcdefghij");
  });

  it('should return astrix padded value given greater length',()=>{
    expect(pipe.transform("abcd",10)).toBe("abcd******");
  });
});
