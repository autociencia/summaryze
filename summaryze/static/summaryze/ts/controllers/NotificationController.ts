import { NotificationView } from '../views/index'

/**
 * This controller call notification's view.
 */

export class NotificationController {
    
    updateError(error: string): void {
        const view = new NotificationView();
        view.updateError(error);
    }
}