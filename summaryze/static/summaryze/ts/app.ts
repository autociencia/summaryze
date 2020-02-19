import { SearchBtn, HtmlBtn, CssBtn } from './events/index';
import { SummaryCache, ChangeStyleBtnCache } from './cache/index';
import { StyleListController } from './controllers/StyleListController';
import { ChangeStyleBtn } from './events/ChangeStyleBtn';

export class App {

    start(): void {
        this.loadStyleList();
        this.loadCache();
        this.addChangeStyleBtnEvent();
        this.addSearchBtnEvent();
        this.addSummaryBtnEvent();
        this.addHtmlBtnEvent();
        this.addCssBtnEvent();
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

    private addCssBtnEvent(): void {
        let btn = document.querySelector('#css-btn') as HTMLElement;

        if (btn === undefined) {
            throw "CSS Button not found";
        }

        const btnEvent: CssBtn = new CssBtn();
        
        btn.addEventListener('click', btnEvent.showCSS);
    }

    private addChangeStyleBtnEvent(): void {
        let btns = document.querySelectorAll('.style-list-item');

        btns.forEach((btn) => {
            const event = new ChangeStyleBtn();
            btn.addEventListener('click', event.changeStyle);
        });
    }

    private loadCache(): void {
        const summaryCache: SummaryCache = new SummaryCache();
        const changeStyleBtnCache: ChangeStyleBtnCache = new ChangeStyleBtnCache();
        
        summaryCache.loadCache();
        changeStyleBtnCache.loadCache();
    }

    private loadStyleList(): void {
        const controller: StyleListController = new StyleListController();
        controller.updateStyleList();
    }
    
}