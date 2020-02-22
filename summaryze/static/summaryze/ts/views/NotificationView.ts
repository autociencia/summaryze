/**
 * This class is responsible to present the notification messages.
 */

export class NotificationView {

    private _element: JQuery;

    constructor() {
        this._element = $('#notification-area');
    }


    /**
     * Displays an error message on page.
     * @param error message
     */
    updateError(error: string): void {
        const template = this.templateError(error);
        this._element.html(template);
    }


    /**
     * Template of an error message.
     * @param error message
     */
    private templateError(error: string): string {
        return `
        <div class="notification is-danger is-light">
            <button class="delete"></button>
            <b>ERROR</b>: ${error}
        </div>
        `;
    }
}