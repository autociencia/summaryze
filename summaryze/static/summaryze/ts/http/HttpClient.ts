/**
 * HtppClient make GET requests o obtain data only. 
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