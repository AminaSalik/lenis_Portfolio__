import { ContentItem } from './contentItem.js';

export class ImageCell {
    // DOM elements
    DOM = {
        el: null,
        // Inner element
        inner: null,
        // The ImageCell's content item id.
        contentId: null,
        // The ContentItem instance
        contentItem: null
    };
    
    /**
     * Constructor.
     * @param {Element} DOM_el - the .grid__cell-img element.
     */
    constructor(DOM_el) {
        this.DOM.el = DOM_el;
        this.DOM.inner = this.DOM.el.querySelector('.grid__cell-img-inner');
        
        // The ImageCell's content item id.
        this.contentId = this.DOM.inner.dataset.item;
        // The ContentItem instance
        this.contentItem = new ContentItem(document.querySelector(`#${this.contentId}`));
    }
}