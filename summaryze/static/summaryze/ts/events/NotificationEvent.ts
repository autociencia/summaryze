import { NotificationController } from '../controllers/index';

/**
 * Button to close notifications.
 */

export class NotificationEvent {

    /**
     * Receives a message and display an error popup.
     * @param message of error
     */
    notifyError(message: string) {
        const controller = new NotificationController();
        controller.updateError(message);
        NotificationEvent.addCloseEvent();
    }


    /**
     * Add close event for each close button on nofitications.
     */
    static addCloseEvent(): void {
        $('.notification .delete').on('click', (del) => {
            const notification  = del.target.parentNode as HTMLElement;
            notification.remove();
        });
    }
}