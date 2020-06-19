import { HttpClient } from '../http/index';
import { GetSummaryBtn, NotificationEvent } from './index';
import { ObjectUtils } from '../utils/index';

/**
 * All performed actions on Upload button are structured here.
 */

export class UploadBtn extends GetSummaryBtn {

    /**
     * Gets and shows a summary by HTML (if valid).
     */
    sendAndShow(): void {
        const btn = document.querySelector('#html-upload') as HTMLElement;
        const html_input = document.querySelector('#html-input') as HTMLInputElement;

        if (ObjectUtils.nonExists(btn) || ObjectUtils.nonExists(html_input)) {
            throw 'Error: a problem ocurred in HTML box';
        }

        const html: string = JSON.stringify({
            'html': `<div class="post-body">${html_input.value.trim()}</div>`
        });

        if (html === "") {
            return;
        }

        const endpoint = `/summary/html`;
        const httpClient: HttpClient = new HttpClient();
        const errorFunction = new NotificationEvent().notifyError;
        httpClient.fetchPage(endpoint, html, GetSummaryBtn.fetchEvent, errorFunction);
    }
}