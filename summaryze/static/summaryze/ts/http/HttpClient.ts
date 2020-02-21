/**
 * HtppClient, that only makes GET requests to obtain data. 
 */

export class HttpClient {

    fetchPage(url: string, callback: Function): void {
        $.ajax({
            type: 'GET',
            cache: false,
            url: url,
            success: (data) => callback(data),
            dataType: 'html',
            contentType: 'text',
            error: (response) => console.error(response.responseText)
        });
    }
}