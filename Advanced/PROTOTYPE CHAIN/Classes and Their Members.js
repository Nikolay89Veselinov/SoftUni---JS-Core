    class Request {
        constructor(method, uri, version, messege,) {
            this.method = method
            this.uri = uri
            this.version = version
            this.message = messege
            this.response = undefined
            this.fulfilled = false
        }

    }


let myData = new Request('GET',
'http://google.com', 'HTTP/1.1', '')
console.log(myData)
