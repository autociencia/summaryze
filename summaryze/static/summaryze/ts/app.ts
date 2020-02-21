import { SearchBtn, HtmlBtn, CssBtn, StyleListBtns } from './events/index';
import { SummaryCache, StyleListBtnsCache } from './cache/index';
import { StyleListController } from './controllers/StyleListController';
import { ObjectUtils } from './utils/index';

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

        if (ObjectUtils.nonExists(btn)) {
            throw "URL Search Button not found";
        }

        const btnEvent: SearchBtn = new SearchBtn();
        
        btn.addEventListener('click', btnEvent.searchAndShowSummary);
    }

    private addSummaryBtnEvent(): void {
        let btn = document.querySelector('#summary-btn') as HTMLElement;

        if (ObjectUtils.nonExists(btn)) {
            throw "Summary Button not found";
        }

        const summaryCache: SummaryCache = new SummaryCache();
        
        btn.addEventListener('click', summaryCache.loadCache);
    }

    private addHtmlBtnEvent(): void {
        let btn = document.querySelector('#html-btn') as HTMLElement;

        if (ObjectUtils.nonExists(btn)) {
            throw "HTML Button not found";
        }

        const btnEvent: HtmlBtn = new HtmlBtn();
        
        btn.addEventListener('click', btnEvent.showHTML);
    }

    private addCssBtnEvent(): void {
        let btn = document.querySelector('#css-btn') as HTMLElement;

        if (ObjectUtils.nonExists(btn)) {
            throw "CSS Button not found";
        }

        const btnEvent: CssBtn = new CssBtn();
        
        btn.addEventListener('click', btnEvent.showCSS);
    }

    private addChangeStyleBtnEvent(): void {
        let btns = document.querySelectorAll('.style-list-item');

        btns.forEach((btn) => {
            const event = new StyleListBtns();
            btn.addEventListener('click', event.applyStyle);
        });
    }

    private loadCache(): void {
        const summaryCache: SummaryCache = new SummaryCache();
        const changeStyleBtnCache: StyleListBtnsCache = new StyleListBtnsCache();
        
        summaryCache.loadCache();
        changeStyleBtnCache.loadCache();
    }

    private loadStyleList(): void {
        const controller: StyleListController = new StyleListController();
        controller.updateStyleList();
    }
    
}