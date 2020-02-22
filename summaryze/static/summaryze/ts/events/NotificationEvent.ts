import { NotificationController } from '../controllers/index';

/**
 * Button to close notifications..
 */

export class NotificationEvent {

    notifyError(message: string) {
        const controller = new NotificationController();
        controller.updateError(message);
        NotificationEvent.addCloseEvent();
    }

    static addCloseEvent(): void {
        $('.notification .delete').on('click', (del) => {
            const notification  = del.target.parentNode as HTMLElement;
            notification.remove();
        });
    }
}