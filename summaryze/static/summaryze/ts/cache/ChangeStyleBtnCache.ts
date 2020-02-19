export class ChangeStyleBtnCache {
 
    loadCache(): void {
        const styleId = sessionStorage.getItem('summary_css') as string;

        if (styleId === '' || undefined) {
            return;
        }
        const btnStyle = document.querySelector(`#${styleId}`) as HTMLElement;

        if (btnStyle != undefined || btnStyle != null) {
            btnStyle.classList.add('style-list-item-active');
        }
        
    }
}