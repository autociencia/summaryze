import { StyleList } from '../data/index';
import { StyleListView } from '../views/index';

/**
 * StyleListController binds all summary styles on its view.
 */

export class StyleListController {
    
    updateStyleList(): void {
        const styleList = new StyleList();
        const view = new StyleListView();

        view.update(styleList.getAll());
    }
}