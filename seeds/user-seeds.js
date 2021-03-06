const { User } = require('../models');
const userData = [{
    
    username: "jojo_9",
    password: "testtest2",
    github: "Don Julio"
}]

const {format_plural} = require('../utils/helpers')

// plural point and comments
test('format_plural() returns a pluralized word', () => {
      const plural = format_plural('tiger', 2);
      const single = format_plural('lion', 1);
      
      expect(plural).toBe('tigers');
      expect(single).toBe('lion');
});

const {format_url} = require('../utils/helpers');

// shortening URLS
test('format_url() returns a simplified url string', () => {
    const url1 = format_url('http://test.com/page/1');
    const url2 = format_url('https://www.coolstuff.com/abcdefg/');
    const url3 = format_url('https://www.google.com?q=hello');
  
    expect(url1).toBe('test.com');
    expect(url2).toBe('coolstuff.com');
    expect(url3).toBe('google.com');
});