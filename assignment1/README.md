# Assignment 1

### Q1) How HTTPS works behind the scene?

Ans: HTTP in general do not provide a security layer. So when a data is transferred from a client to a server with HTTP protocol, the data is sent in plain text which is easily readable if some third person tries to access the details. With HTTPS, a security layer provides an encryption to the transferred data which then is accessible to third person but not easily comprehendable. There are two types of keys. It works by providing a private key to the client. The server can be encrpyted through public key but can only be decrpyted with the help of private key which is accessible only to the client. 
The layer which provides security is called SSL (Secure socket layer).

### Q2) What are different HTTP methods and what exactly do they do

1. POST - The POST method is used to submit an entity to the specified resource, often causing a change in state or side effects on the server.
2. GET - The GET method requests a representation of the specified resource. Requests using GET should only retrieve data.
3. HEAD - The HEAD method asks for a response identical to that of a GET request, but without the response body.
4. PUT - The PUT method replaces all current representations of the target resource with the request payload. Mainly used for updation.
5. DELETE - The DELETE method deletes the specified resource.
6. CONNECT - Establishes a tunnel to the server identified by a given URI.
7. OPTIONS - Describes the communication options for the target resource.
8. PATCH -  The difference with PATCH is that you only apply partial modifications to the resource.

### Q3) Understand and explain the use of various HTTP response codes.

    1xx Informational Response. Request received and understood. Request processing continues.
    2xx Success. The action was successfully received, understood, and accepted.
    3xx Redirection. Further action must be taken by the client to complete the request.
    4xx Client Errors. An error may have been caused by the client. The request contains bad syntax or cannot be fulfilled.
    5xx Server Errors. The server has encountered an error and failed to fulfill the request.


1. 200 - OK
2. 301 - Permanent Redirect
3. 302- Temporary Redirect
4. 403 - Forbidden
5. 404 -Not found
6. 410 - Request page is gone/no longer available.
7. 500 - Internal Server Error
8. 503 - Service Unavailable

### Q4) What are the different web communication protocols and their use cases?

#### 1. TCP - Transmission Control Protocol
 TCP is a popular communication protocol which is used for communicating over a network. It divides any message into series of packets that are sent from source to destination and there it gets reassembled at the destination.

Use case: email system, world wide web

#### 2. UDP - User Datagram Protocol
UDP is a substitute communication protocol to Transmission Control Protocol implemented primarily for creating loss-tolerating and low-latency linking between different applications.
Use Case: Movies Streaming

#### 3. IP - Internet Protocol
IP is designed explicitly as addressing protocol. It is mostly used with TCP. The IP addresses in packets help in routing them through different nodes in a network until it reaches the destination system. TCP/IP is the most popular protocol connecting the networks.
Use case: world wide web

#### 4. Simple mail transport Protocol (SMTP)
 SMTP is designed to send and distribute outgoing E-Mail.
 Use case: email system to transfer one mail from user A to user B

#### 5. File Transfer Protocol (FTP)
 FTP allows users to transfer files from one machine to another. Types of files may include program files, multimedia files, text files, and documents, etc.
 Use case: transfer of large files

 #### 6. HTTP - 
 HTTP is designed for transferring a hypertext among two or more systems. HTML tags are used for creating links. These links may be in any form like text or images. HTTP is designed on Client-server principles which allow a client system for establishing a connection with the server machine for making a request. The server acknowledges the request initiated by the client and responds accordingly.


 ### Q5) Pros and cons of Single page and multi page applications.

 #### Single Page

 #### Pros

 1. Quick loading time 
 2. Seamless user experience
 3. Uses less bandwidth

 #### Cons

 1. Not SEO friendly
 2. Uses lot of browser resources
 3. Security is not very tight

 #### Multi Page

 #### Pros
 
 1. SEO friendly
 2. Easy to integrate with web analytic tool like google analytics
 3. Ease in scaling

 #### Cons

 1. Front end and backend tightly coupled
 2. Maintainence not so easy
 3. Can have performance issues





