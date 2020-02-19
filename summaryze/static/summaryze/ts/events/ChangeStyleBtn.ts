import { Summary } from '../models/index';
import { SummaryBuilder } from '../builder/SummaryBuilder';
import { SummaryController } from '../controllers/index';

export class ChangeStyleBtn {
    changeStyle(event: Event): void {
        const btn: HTMLElement = <HTMLElement>event.target;
        const styleId = btn.id;
        const summary_text = sessionStorage.getItem('summary_html') as string;

        if (summary_text == null || summary_text == undefined) {
            return;
        }

        const summary: Summary = new SummaryBuilder()
            .content(summary_text)
            .style(styleId)
            .build();
        
        const summaryController: SummaryController = new SummaryController();
        summaryController.updateSummary(summary);

        if (summary.style === undefined)
            return;
        
        sessionStorage.setItem('summary_css', summary.style.id);

        const btns = document.querySelectorAll('.style-list-item');
        btns.forEach((btn) => {
            if (btn.classList.contains('style-list-item-active')) {
                btn.classList.remove('style-list-item-active');
            }
        })
        btn.classList.add('style-list-item-active');
        
    }
}