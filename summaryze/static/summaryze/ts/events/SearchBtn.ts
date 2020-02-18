import { HttpClient } from '../http/index';
import { SummaryController } from '../controllers/index';
import { SummaryBuilder } from '../builder/SummaryBuilder';
import { Summary } from '../models/index';

/**
 * All performed actions on button Search is structured here.
 */

export class SearchBtn {

    searchAndShowSummary(): void {

        const btn = document.querySelector('#url-search') as HTMLElement;
        const url_input = document.querySelector('#url-input') as HTMLInputElement;

        if (isNull(btn)) {
            throw 'URL Search Button not found';
        }

        if (isNull(url_input)) {
            throw 'URL Search Box not found';
        }

        const url: string = url_input.value.trim();
        if (url === "") {
            return;
        }

        const endpoint = `/summary?url=${url}`;
        const httpClient: HttpClient = new HttpClient();
        httpClient.fetchPage(endpoint, fetchEvent);

        function isNull(element: any): boolean {
            return (element == undefined || element == null);
        }

    }
}

function fetchEvent(content: string): void {
    const summary: Summary = new SummaryBuilder().content(content).build();
    const controller = new SummaryController();

    controller.updateSummary(summary);
    sessionStorage.setItem('summary_html', summary.content.innerHTML);
}