# HTTP Status Codes

HTTP (Hypertext Transfer Protocol) uses status codes to inform about the outcome of a client's request to a server. These three-digit codes provide information about the success, redirection, client errors, and server errors encountered during the request-response cycle. Here is a breakdown of the most commonly encountered HTTP status codes:

## 1xx Informational Responses

### 100 Continue

This code signals that the client should proceed with the request or ignore the response if the request is already complete.

### 101 Switching Protocols

Sent in response to an Upgrade request header from the client, this code indicates the protocol to which the server is transitioning.

### 102 Processing (WebDAV)

Indicating that the server has received and is processing the request, this code informs that no response is available at the moment.

### 103 Early Hints

Primarily used with the Link header, this status code allows the user agent to start preloading resources while the server prepares a response or preconnects to an origin from which the page will require resources.

## 2xx Success

### 200 OK

The server successfully processed the client's request.

### 201 Created

The server has fulfilled the request, resulting in the creation of a new resource.

### 204 No Content

The server successfully processed the request but does not need to return an entity-body, and there is no additional information to convey.

## 3xx Redirection

### 300 Multiple Choices

Multiple possible responses; the user or user agent should choose.

### 301 Moved Permanently

Permanent redirection; the requested resource's URL has changed.

### 302 Found

Temporary redirection; the URI for the requested resource has changed for now.

### 303 See Other

Instructs the client to get the requested resource at another URI using a GET request.

### 304 Not Modified

For caching; informs the client that the response hasn't changed, so the cached version can be used.

### 307 Temporary Redirect

Similar to 302 Found but mandates using the same HTTP method for subsequent requests.

### 308 Permanent Redirect

Resource permanently moved to a new URI, keeping the original HTTP method for subsequent requests.

## 4xx Client Errors

### 400 Bad Request

The server cannot or will not process the request due to what is perceived as a client error. This could be due to malformed request syntax, invalid message framing, or deceptive request routing.

### 401 Unauthorized

Although labeled "unauthorized," this response means "unauthenticated." The client must authenticate itself to obtain the requested response.

### 402 Payment Required (Experimental)

Reserved for future use, initially intended for digital payment systems. Rarely used with no standard convention.

### 403 Forbidden

The client lacks access rights to the content, and the server refuses to provide the requested resource. Unlike 401 Unauthorized, the client's identity is known to the server.

### 404 Not Found

The server cannot locate the requested resource. In a browser, this implies an unrecognized URL. In an API, it may indicate a valid endpoint with a non-existent resource. Frequently encountered on the web.

### 405 Method Not Allowed

The server knows the request method but does not support it for the target resource. For example, an API may not permit using DELETE to remove a resource.

### 406 Not Acceptable

Sent when the server, after performing content negotiation, finds no content meeting the user agent's criteria.

### 407 Proxy Authentication Required

Similar to 401 Unauthorized, but authentication is required by a proxy.

### 408 Request Timeout

Sent on an idle connection by some servers, signaling a desire to shut down the unused connection. Used in browsers employing pre-connection mechanisms for faster surfing.

### 409 Conflict

Sent when a request conflicts with the server's current state.

### 410 Gone

Indicates the requested content has been permanently deleted from the server, with no forwarding address. Clients are expected to remove caches and links to the resource.

### 411 Length Required

Server rejects the request because the Content-Length header field is not defined, and the server requires it.

### 412 Precondition Failed

The client's indicated preconditions in headers are not met by the server.

### 413 Payload Too Large

The request entity exceeds limits defined by the server. The server may close the connection or return a Retry-After header field.

### 414 URI Too Long

The client's requested URI is longer than the server is willing to interpret.

### 415 Unsupported Media Type

The server rejects the request because the media format of the requested data is not supported.

### 416 Range Not Satisfiable

The range specified in the request's Range header field cannot be fulfilled. It may be outside the size of the target URI's data.

### 417 Expectation Failed

Indicates that the expectation indicated by the Expect request header field cannot be met by the server.

### 418 I'm a teapot

The server refuses an attempt to brew coffee with a teapot.

### 421 Misdirected Request

The request was directed at a server unable to produce a response. Sent by a server not configured for the combination of scheme and authority in the request URI.

### 422 Unprocessable Content (WebDAV)

The request was well-formed but unable to be followed due to semantic errors.

### 423 Locked (WebDAV)

The accessed resource is locked.

### 424 Failed Dependency (WebDAV)

The request failed due to a previous request's failure.

### 426 Upgrade Required

The server refuses to perform the request using the current protocol but may do so after the client upgrades to a different protocol. The server sends an Upgrade header in a 426 response to indicate the required protocol(s).

### 428 Precondition Required

The origin server requires the request to be conditional, aiming to prevent the 'lost update' problem.

### 429 Too Many Requests

The user has sent too many requests in a given time, often referred to as "rate limiting."

### 431 Request Header Fields Too Large

The server declines processing the request because its header fields are too large. Resubmission may be possible after reducing the header field size.

### 451 Unavailable For Legal Reasons

The user agent requested a resource that cannot legally be provided, such as a web page censored by a government.

## 5xx Server Errors

### 500 Internal Server Error

The server encountered an unknown situation.

### 501 Not Implemented

The server does not support the request method.

### 502 Bad Gateway

The server, acting as a gateway, received an invalid response.

### 503 Service Unavailable

The server is temporarily unable to handle the request. A user-friendly page explaining the problem should be provided.

### 504 Gateway Timeout

The server, acting as a gateway, couldn't get a response in time.

### 505 HTTP Version Not Supported

The server does not support the HTTP version used in the request.

### 506 Variant Also Negotiates

Internal configuration error; the chosen variant resource is not a proper end point in the negotiation process.

### 507 Insufficient Storage (WebDAV)

The server is unable to store the representation needed to complete the request.

### 508 Loop Detected (WebDAV)

The server detected an infinite loop while processing the request.

### 510 Not Extended

Further extensions to the request are required for the server to fulfill it.

### 511 Network Authentication Required

The client needs to authenticate to gain network access.
