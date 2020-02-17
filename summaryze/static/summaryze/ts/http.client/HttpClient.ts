export class HttpClient {
    fetchPage(url: string): string {
        if (self.fetch) {
            let headers: Headers = new Headers({
                'Content-Type': 'text/plain',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*'
              });

            let init: object = {
                method: 'GET',
                headers: headers,
                mode: 'cors',
                cache: 'default'
            };

            fetch(url, init).then((response) => {
                if (response.ok) {
                    response.text()
                } else {
                    throw `Error on fetch data on '${url}'`
                }
            });
        }

        return '';
    }
}