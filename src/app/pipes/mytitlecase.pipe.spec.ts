import { MytitlecasePipe } from './mytitlecase.pipe';

describe('MytitlecasePipe', () => {
  it('create an instance', () => {
    const pipe = new MytitlecasePipe();
    expect(pipe).toBeTruthy();
  });

  it('Converts a single word to titlecase', () => {
    const pipe = new MytitlecasePipe();
    const input = 'test';
    expect(pipe.transform(input)).toEqual('Test');
  });

  it('Converts multiple words to titlecase', () => {
    const pipe = new MytitlecasePipe();
    const input = 'this is a test sentence';
    expect(pipe.transform(input)).toEqual('This Is A Test Sentence');
  });

  it('Can handle a title with a number inside it', () => {
    const pipe = new MytitlecasePipe();
    const input = 'test 2';
    expect(pipe.transform(input)).toEqual('Test 2');
  });

  it('Can handle a title that starts with a number', () => {
    const pipe = new MytitlecasePipe();
    const input = '2 test';
    expect(pipe.transform(input)).toEqual('2 Test');
  });

  it('Can handle a title with a special character', () => {
    const pipe = new MytitlecasePipe();
    const input = 'test %';
    expect(pipe.transform(input)).toEqual('Test %');
  });

  it('Removes any beginning or trailing whitespace ', () => {
    const pipe = new MytitlecasePipe();
    const input = '  whitespace  ';
    expect(pipe.transform(input)).toEqual('Whitespace');
  });

  it('Can handle an empty input', () => {
    const pipe = new MytitlecasePipe();
    const input = '';
    expect(pipe.transform(input)).toEqual('');
  });
});
