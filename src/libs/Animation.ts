export default class Animation {
    element: HTMLElement

    constructor( element: HTMLElement, options: {} ) {
        this.element = element
    }

    alertMessage(){
        alert("asdasd");
    }

    addClass( element: HTMLElement ){
        element.classList.add('cyellow');
    }
}