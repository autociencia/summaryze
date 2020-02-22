import { NotificationView } from '../views/index'

/**
 * This controller call notification's view.
 */

export class NotificationController {
    
    /**
     * Updates notification's view with a error message.
     * @param error message to be append to view
     */
    updateError(error: string): void {
        const view = new NotificationView();
        view.updateError(error);
    }
}