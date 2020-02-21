import { HttpClient } from '../http/index';
import { SummaryController } from '../controllers/index';
import { SummaryBuilder } from '../builder/SummaryBuilder';
import { Summary } from '../models/index';
import { StyleListBtns } from './index';
import { ObjectUtils } from '../utils/index';

/**
 * All performed actions on button Search is structured here.
 */

export class SearchBtn {

    searchAndShowSummary(): void {
        const btn = document.querySelector('#url-search') as HTMLElement;
        const url_input = document.querySelector('#url-input') as HTMLInputElement;

        if (ObjectUtils.nonExists(btn) || ObjectUtils.nonExists(url_input)) {
            throw 'Error: a problem ocurred in search box';
        }

        const url: string = url_input.value.trim();
        if (url === "") {
            return;
        }

        const endpoint = `/summary?url=${url}`;
        const httpClient: HttpClient = new HttpClient();
        httpClient.fetchPage(endpoint, fetchEvent);
    }
}

function fetchEvent(content: string): void {
    let cachedStyle = sessionStorage.getItem('summary_css') as string;

    if (ObjectUtils.nonExists(cachedStyle)) {
        cachedStyle = 'default';
    }

    const summary: Summary = new SummaryBuilder()
        .content(content)
        .style(cachedStyle)
        .build();

    const controller = new SummaryController();
    controller.updateSummary(summary);
    sessionStorage.setItem('summary_html', summary.content.innerHTML);
    sessionStorage.setItem('summary_css', cachedStyle);
    StyleListBtns.updateBtn(cachedStyle);
}