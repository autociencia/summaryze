import { Summary, Style } from "../models/index";
import { SummaryView } from "../views/index";

/**
 * SummaryController binds Summary model on its view.
 */

export class SummaryController {

    updateSummary(summary: Summary): void {
        const view = new SummaryView();
        view.updateSummary(summary);
    }

    updateHTML(summary: Summary): void {
        const view = new SummaryView();
        view.updateHTML(summary);
    }

    updateCSS(style: Style): void {
        const view = new SummaryView();
        view.updateCSS(style);
    }
}