import { Summary, Style } from "../models/index";
import { SummaryView } from "../views/index";

/**
 * SummaryController binds Summary model on its view.
 */

export class SummaryController {

    /**
     * Receives a summary to update view's model.
     * @param summary
     */
    updateSummary(summary: Summary): void {
        const view = new SummaryView();
        view.updateSummary(summary);
    }


    /**
     * Receives a summary to update view's model HTML.
     * @param summary
     */
    updateHTML(summary: Summary): void {
        const view = new SummaryView();
        view.updateHTML(summary);
    }


    /**
     * Receives a style to update view's model CSS.
     * @param style
     */
    updateCSS(style: Style): void {
        const view = new SummaryView();
        view.updateCSS(style);
    }
}