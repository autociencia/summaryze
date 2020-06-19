/**
 * HtppClient, that only makes GET requests to obtain data. 
 */

export class HttpClient {

    fetchPage(url: string, content: Object, callback: Function, errorFunction: Function): void {
        $.ajax({
            type: 'POST',
            cache: false,
            url: url,
            data: content,
            success: (data) => callback(data),
            dataType: 'html',
            contentType: 'application/json; charset=utf-8',
            error: (response) => errorFunction(response.responseText)
        });
    }
}