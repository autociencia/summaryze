import { SearchBtn } from './events/index';
import { SummaryCache } from './cache/index';
import { HtmlBtn } from './events/HtmlBtn';
import { StyleListController } from './controllers/StyleListController';

export class App {

    start(): void {
        this.loadCache();
        this.loadStyleList();
        this.addSearchBtnEvent();
        this.addSummaryBtnEvent();
        this.addHtmlBtnEvent();
    }

    private addSearchBtnEvent(): void {
        let btn = document.querySelector('#url-search') as HTMLElement;

        if (btn === undefined) {
            throw "URL Search Button not found";
        }

        const btnEvent: SearchBtn = new SearchBtn();
        
        btn.addEventListener('click', btnEvent.searchAndShowSummary);
    }

    private addSummaryBtnEvent(): void {
        let btn = document.querySelector('#summary-btn') as HTMLElement;

        if (btn === undefined) {
            throw "Summary Button not found";
        }

        const summaryCache: SummaryCache = new SummaryCache();
        
        btn.addEventListener('click', summaryCache.loadCache);
    }

    private addHtmlBtnEvent(): void {
        let btn = document.querySelector('#html-btn') as HTMLElement;

        if (btn === undefined) {
            throw "HTML Button not found";
        }

        const btnEvent: HtmlBtn = new HtmlBtn();
        
        btn.addEventListener('click', btnEvent.showHTML);
    }

    loadCache(): void {
        const summaryCache: SummaryCache = new SummaryCache();
        summaryCache.loadCache();
    }

    loadStyleList(): void {
        const controller: StyleListController = new StyleListController();
        controller.updateStyleList();
    }
}