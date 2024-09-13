// import SplitType from 'split-type';
// import { wrapLines } from './utils.js';
// import { gsap } from 'gsap';

export class TextLinesReveal {
    constructor(animationElems) {
        this.DOM = {
            animationElems: Array.isArray(animationElems) ? animationElems : [animationElems]
        };

        // array of SplitType instances
        this.SplitTypeInstances = [];
        // array of all HTML .line
        this.lines = [];


        this.initEvents();
    }
    in() {
        // lines are visible
        this.isVisible = true;

        // animation
        gsap.killTweensOf(this.lines);
        return gsap.timeline({defaults: {duration: 1.2, ease: 'expo'}})
        .set(this.lines, {
            y: '150%',
            rotate: 15
        })
        .to(this.lines, {
            y: '0%',
            rotate: 0,
            stagger: 0.04
        });
    }
    out() {
        // lines are invisible
        this.isVisible = false;

        // animation
        gsap.killTweensOf(this.lines);
        return gsap.timeline({
            defaults: {duration: 0.5, ease: 'expo.in'}
        })
        .to(this.lines, {
            y: '-150%',
            rotate: -5,
            stagger: 0.02
        });
    }
    initEvents() {
        window.addEventListener('resize', () => {
            // empty the lines array
            this.lines = [];
            // re initialize the Split Text 
           
            // hide the lines
            if ( !this.isVisible ) {
                gsap.set(this.lines, {y: '-150%'});
            }
        });
    }
}