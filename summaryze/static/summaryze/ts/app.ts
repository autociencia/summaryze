import { SearchBtn, HtmlBtn, CssBtn, StyleListBtns } from './events/index';
import { SummaryCache, StyleListBtnsCache } from './cache/index';
import { StyleListController } from './controllers/index';

export class App {

    /**
     * Initialize all components.
     */
    start(): void {
        this.loadStyleList();
        this.loadCache();
        this.addBtnEvents();
    }


    /**
     * Loads all cache on page of summary.
     */
    private loadCache(): void {
        const summaryCache: SummaryCache = new SummaryCache();
        const changeStyleBtnCache: StyleListBtnsCache = new StyleListBtnsCache();
        
        summaryCache.loadCache();
        changeStyleBtnCache.loadCache();
    }


    /**
     * Loads all styles available.
     */
    private loadStyleList(): void {
        const controller: StyleListController = new StyleListController();
        controller.updateStyleList();
    }


    /**
     * Adds events to its buttons.
     */
    private addBtnEvents(): void {
        // Buttons
        const btnUrlSearch = document.querySelector('#url-search') as HTMLElement;
        const btnShowSummary = document.querySelector('#summary-btn') as HTMLElement;
        const btnShowHTML = document.querySelector('#html-btn') as HTMLElement;
        const btnShowCSS = document.querySelector('#css-btn') as HTMLElement;

        // Events
        const summarySearch: SearchBtn = new SearchBtn();
        const summaryCache: SummaryCache = new SummaryCache();
        const summaryHTML: HtmlBtn = new HtmlBtn();
        const summaryCSS: CssBtn = new CssBtn();
        
        // Binding
        btnUrlSearch.addEventListener('click', summarySearch.searchAndShowSummary);
        btnShowSummary.addEventListener('click', summaryCache.loadCache);
        btnShowHTML.addEventListener('click', summaryHTML.showHTML);
        btnShowCSS.addEventListener('click', summaryCSS.showCSS);

        // Custom
        const btnsStyleList = document.querySelectorAll('.style-list-item');
        btnsStyleList.forEach((btn) => {
            const event = new StyleListBtns();
            btn.addEventListener('click', event.applyStyle);
        });
    }

}