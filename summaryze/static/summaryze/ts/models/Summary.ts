import { Style } from './index';

/**
 * A summary with content and style.
 * The content is presented in HTML as an indexed list of titles from a blogspot.
 * The style is presented in CSS and formats its content.
 */

export interface Summary {
    content: HTMLElement,
    style?: Style
}