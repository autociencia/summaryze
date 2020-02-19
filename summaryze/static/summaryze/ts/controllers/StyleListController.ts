import { StyleList } from '../data/index';
import { StyleListView } from '../views/index';

export class StyleListController {
    
    updateStyleList(): void {
        const styleList = new StyleList();
        const view = new StyleListView();

        view.update(styleList.getAll());
    }
}