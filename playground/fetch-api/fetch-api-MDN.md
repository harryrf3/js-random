# fetch()

The global **`fetch()`** method starts the process of fetching a resource from the network, returning a promise which is fulfilled once the response is available.

The promise resolves to the [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) object representing the response to your request.

A [`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/fetch) promise only rejects when a network error is encountered (which is usually when there's a permissions issue or similar). A [`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/fetch) promise _does not_ reject on HTTP errors (`404`, etc.). Instead, a `then()` handler must check the [`Response.ok`](https://developer.mozilla.org/en-US/docs/Web/API/Response/ok) and/or [`Response.status`](https://developer.mozilla.org/en-US/docs/Web/API/Response/status) properties.

`WindowOrWorkerGlobalScope` is implemented by both [`Window`](https://developer.mozilla.org/en-US/docs/Web/API/Window) and [`WorkerGlobalScope`](https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope), which means that the `fetch()` method is available in pretty much any context in which you might want to fetch resources.

The `fetch()` method is controlled by the `connect-src` directive of [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) rather than the directive of the resources it's retrieving.

**Note:** The `fetch()` method's parameters are identical to those of the [`Request()`](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request "Request()") constructor.

## [Syntax](https://developer.mozilla.org/en-US/docs/Web/API/fetch#syntax "Permalink to Syntax")

```
const fetchResponsePromise = fetch(resource [, init])
```

Copy to Clipboard

### [Parameters](https://developer.mozilla.org/en-US/docs/Web/API/fetch#parameters "Permalink to Parameters")

`resource`

This defines the resource that you wish to fetch. This can either be:

-   A string or any other object with a [stringifier](https://developer.mozilla.org/en-US/docs/Glossary/Stringifier) — including a [`URL`](https://developer.mozilla.org/en-US/docs/Web/API/URL) object — that provides the URL of the resource you want to fetch.
-   A [`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request) object.

`init` Optional

An object containing any custom settings that you want to apply to the request. The possible options are:

`method`

The request method, e.g., `GET`, `POST`. Note that the [`Origin`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin) header is not set on Fetch requests with a method of [`HEAD`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/HEAD) or [`GET`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET). (This behavior was corrected in Firefox 65 — see [bug 1508661](https://bugzilla.mozilla.org/show_bug.cgi?id=1508661)).

`headers`

Any headers you want to add to your request, contained within a [`Headers`](https://developer.mozilla.org/en-US/docs/Web/API/Headers) object or an object literal with [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) values. Note that [some names are forbidden](https://developer.mozilla.org/en-US/docs/Glossary/Forbidden_header_name).

`body`

Any body that you want to add to your request: this can be a [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob), [`BufferSource`](https://developer.mozilla.org/en-US/docs/Web/API/BufferSource), [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData), [`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams), [`USVString`](https://developer.mozilla.org/en-US/docs/Web/API/USVString), or [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream) object. Note that a request using the `GET` or `HEAD` method cannot have a body.

`mode`

The mode you want to use for the request, e.g., `cors`, `no-cors`, or `same-origin`.

`credentials`

Controls what browsers do with credentials ([cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies), [HTTP authentication](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication) entries, and TLS client certificates). Must be one of the following strings:

`omit`

Tells browsers to exclude credentials from the request, and ignore any credentials sent back in the response (e.g., any [`Set-Cookie`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie) header).

`same-origin`

Tells browsers to include credentials with requests to same-origin URLs, and use any credentials sent back in responses from same-origin URLs.

`include`

Tells browsers to include credentials in both same- and cross-origin requests, and always use any credentials sent back in responses.

**Note:** Credentials may be included in simple and "final" cross-origin requests, but should not be included in [CORS preflight requests](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#preflight_requests_and_credentials).

`cache`

A string indicating how the request will interact with the browser's [HTTP cache](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching). The possible values, `default`, `no-store`, `reload`, `no-cache`, `force-cache`, and `only-if-cached`, are documented in the article for the [`cache`](https://developer.mozilla.org/en-US/docs/Web/API/Request/cache "cache") property of the [`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request) object.

`redirect`

How to handle a `redirect` response:

-   `follow`: Automatically follow redirects. Unless otherwise stated the redirect mode is set to `follow`
-   `error`: Abort with an error if a redirect occurs.
-   `manual`: Caller intends to process the response in another context. See [WHATWG fetch standard](https://fetch.spec.whatwg.org/#requests) for more information.

`referrer`

A [`USVString`](https://developer.mozilla.org/en-US/docs/Web/API/USVString) specifying the referrer of the request. This can be a same-origin URL, `about:client`, or an empty string.

`referrerPolicy`

Specifies the [referrer policy](https://w3c.github.io/webappsec-referrer-policy/#referrer-policies) to use for the request. May be one of `no-referrer`, `no-referrer-when-downgrade`, `same-origin`, `origin`, `strict-origin`, `origin-when-cross-origin`, `strict-origin-when-cross-origin`, or `unsafe-url`.

`integrity`

Contains the [subresource integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) value of the request (e.g., `sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=`).

`keepalive`

The `keepalive` option can be used to allow the request to outlive the page. Fetch with the `keepalive` flag is a replacement for the [`Navigator.sendBeacon()`](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/sendBeacon) API.

`signal`

An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) object instance; allows you to communicate with a fetch request and abort it if desired via an [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).

### [Return value](https://developer.mozilla.org/en-US/docs/Web/API/fetch#return_value "Permalink to Return value")

A [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that resolves to a [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) object.

### [Exceptions](https://developer.mozilla.org/en-US/docs/Web/API/fetch#exceptions "Permalink to Exceptions")

`AbortError`

The request was aborted due to a call to the [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort "abort()") method.

`TypeError`

Can occur for the following reasons:

| Reason | Failing examples |
| --- | --- |
| Invalid header name. | 
```
// space in "C ontent-Type"
const headers = {
  'C ontent-Type': 'text/xml',
  'Breaking-Bad': '<3',
};
fetch('https://example.com/', { headers });
        
```

 |
| Invalid header value. The header object must contain exactly two elements. | 

```
const headers = [
  ['Content-Type', 'text/html', 'extra'],
  ['Accept'],
];
fetch('https://example.com/', { headers });
        
```

 |
| Invalid URL or scheme, or using a scheme that fetch does not support, or using a scheme that is not supported for a particular request mode. | 

```
fetch('blob://example.com/', { mode: 'cors' });
        
```

 |
| URL includes credentials. | 

```
fetch('https://user:password@example.com/');
        
```

 |
| Invalid referrer URL. | 

```
fetch('https://example.com/', { referrer: './abc\u0000df' });
        
```

 |
| Invalid modes (`navigate` and `websocket`). | 

```
fetch('https://example.com/', { mode: 'navigate' });
        
```

 |
| If the request cache mode is "only-if-cached" and the request mode is other than "same-origin". | 

```
fetch('https://example.com/', {
  cache: 'only-if-cached',
  mode: 'no-cors',
});
        
```

 |
| If the request method is an invalid name token or one of forbidden headers (`'CONNECT'`, `'TRACE'` or `'TRACK'`). | 

```
fetch('https://example.com/', { method: 'CONNECT' });
        
```

 |
| If the request mode is "no-cors" and the request method is not a CORS-safe-listed method (`'GET'`, `'HEAD'`, or `'POST'`). | 

```
fetch('https://example.com/', {
  method: 'CONNECT',
  mode: 'no-cors',
});
        
```

 |
| If the request method is `'GET'` or `'HEAD'` and the body is non-null or not undefined. | 

```
fetch('https://example.com/', {
  method: 'GET',
  body: new FormData(),
});
        
```

 |
| If fetch throws a network error. |  |

## [Examples](https://developer.mozilla.org/en-US/docs/Web/API/fetch#examples "Permalink to Examples")

In our [Fetch Request example](https://github.com/mdn/fetch-examples/tree/master/fetch-request) (see [Fetch Request live](https://mdn.github.io/fetch-examples/fetch-request/)) we create a new [`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request) object using the relevant constructor, then fetch it using a `fetch()` call. Since we are fetching an image, we run [`Response.blob()`](https://developer.mozilla.org/en-US/docs/Web/API/Response/blob) on the response to give it the proper MIME type so it will be handled properly, then create an Object URL of it and display it in an [`<img>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img) element.

```
const myImage = document.querySelector('img');

const myRequest = new Request('flowers.jpg');

fetch(myRequest)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${ response.status }`);
    }
    
    return response.blob();
  })
  .then((response) => {
    myImage.src = URL.createObjectURL(response);
  });
```



In the [Fetch with init then Request example](https://github.com/mdn/fetch-examples/blob/master/fetch-with-init-then-request/index.html) (see [Fetch Request init live](https://mdn.github.io/fetch-examples/fetch-with-init-then-request/)), we do the same thing except that we pass in an `init` object when we invoke `fetch()`:

```
const myImage = document.querySelector('img');

const myHeaders = new Headers();
myHeaders.append('Accept', 'image/jpeg');

const myInit = {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default',
};

const myRequest = new Request('flowers.jpg');

fetch(myRequest, myInit)
  .then((response) => {
    // ...
  });
```


You could also pass the `init` object in with the `Request` constructor to get the same effect:

```
const myRequest = new Request('flowers.jpg', myInit);
```



You can also use an object literal as `headers` in `init`.

```
const myInit = {
  method: 'GET',
  headers: {
    'Accept': 'image/jpeg',
  },
  mode: 'cors',
  cache: 'default',
};

const myRequest = new Request('flowers.jpg', myInit);
```

