const parseHeaders = require('../parseHeaders');

/* eslint-env node */
/* eslint-env jasmine */

const testResponse = `HTTP/1.0 200 OK
Date: Mon, 30 Jul 2018 14:13:41 GMT
Expires: -1
Cache-Control: private, max-age=0
Content-Type: text/html; charset=ISO-8859-1
P3P: CP="This is not a P3P policy! See g.co/p3phelp for more info."
Server: gws
X-XSS-Protection: 1; mode=block
X-Frame-Options: SAMEORIGIN
Set-Cookie: 1P_JAR=2018-07-30-14; expires=Wed, 29-Aug-2018 14:13:41 GMT; path=/; domain=.google.com
Set-Cookie: NID=135=L-fAEEQ8aLSweVUQhG11theKf4GTPldKLqfDigLVBJz63uIuMqLUx7_-ZjPPr1Ij9bHV8txS2jrJG-onsibYnn7ZjjiqwOWQaV-3CI_aOWStLWoa_Q27FdFdDOvZ1TFz; expires=Tue, 29-Jan-2019 14:13:41 GMT; path=/; domain=.google.com; HttpOnly
Accept-Ranges: none
Vary: Accept-Encoding

<!doctype html><html itemscope="" itemtype="http://schema.org/WebPage" lang="en"><head><meta content="Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking for." name="description">
<!-- ALL THE REST OF THE HTML --></div></body></html>`;

describe('Parse Headers', () => {
    const obj = parseHeaders(testResponse);

    it('gets the version', () => {
        expect(obj.version).toBe('HTTP/1.0');
    });

    it('gets the response code', () => {
        expect(['200', '200 OK']).toContain(obj.code);
    });

    it('gets all the keys', () => {
        expect(obj.headers.Date).toBe('Mon, 30 Jul 2018 14:13:41 GMT');
        expect(obj.headers['X-Frame-Options']).toBe('SAMEORIGIN');
        expect(obj.headers['Content-Type']).toBe('text/html; charset=ISO-8859-1');
    });

    it('gets the body', () => {
        expect(obj.body).toMatch(/ALL THE REST/);
    });
    
});
