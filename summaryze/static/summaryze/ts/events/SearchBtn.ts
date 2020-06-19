import { HttpClient } from '../http/index';
import { GetSummaryBtn } from './index';
import { ObjectUtils } from '../utils/index';
import { NotificationEvent } from './NotificationEvent';

/**
 * All performed actions on Search button are structured here.
 */

export class SearchBtn extends GetSummaryBtn {

    /**
     * Gets and shows a summary by URL (if valid).
     */
    sendAndShow(): void {
        const btn = document.querySelector('#url-search') as HTMLElement;
        const url_input = document.querySelector('#url-input') as HTMLInputElement;

        if (ObjectUtils.nonExists(btn) || ObjectUtils.nonExists(url_input)) {
            throw 'Error: a problem ocurred in search box';
        }

        const url: string = JSON.stringify({'url': url_input.value.trim()});
        if (url === "") {
            return;
        }

        const endpoint = `/summary/url`;
        const httpClient: HttpClient = new HttpClient();
        const errorFunction = new NotificationEvent().notifyError;
        httpClient.fetchPage(endpoint, url, GetSummaryBtn.fetchEvent, errorFunction);
    }
}