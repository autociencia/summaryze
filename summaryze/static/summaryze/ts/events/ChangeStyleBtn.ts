import { Summary } from '../models/index';
import { SummaryBuilder } from '../builder/SummaryBuilder';
import { SummaryController } from '../controllers/index';

export class ChangeStyleBtn {
    changeStyle(event: Event): void {
        const styleId: string = (<HTMLElement>event.target).id;
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
        
        ChangeStyleBtn.changeStyleById(styleId);
    }


    static changeStyleById(styleId: string): void {
        const btn = document.querySelector(`#${styleId}`) as HTMLElement;
        const btns = document.querySelectorAll('.style-list-item');
        btns.forEach((btn) => {
            if (btn.classList.contains('style-list-item-active')) {
                btn.classList.remove('style-list-item-active');
            }
        })
        btn.classList.add('style-list-item-active');

        sessionStorage.setItem('summary_css', styleId);
    }
}