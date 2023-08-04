import {
    Directive, OnInit,
    ElementRef, Input, Inject, LOCALE_ID
} from "@angular/core";
import { Typed } from "./typed";

interface IPhrase {
    language: string;
    phrases: string[];
}

@Directive({
    selector: "[appTypingAnimation]"
})

export class TypingAnimationDirective implements OnInit {

    phrasePeriod:number=2000;
    typeSpeed:number = 200;
    startDelay: number = 1500;

    typed!: Typed;
    phrases: string[] =  ["Yo soy Oscar Zenni, también conocido como ZenniGames", "Bienvenid@ a esta sexy comunidad", "Aquí podrás encontrar más de mis redes sociales..."];

    constructor (
        private elRef: ElementRef,
        @Inject(LOCALE_ID) public locale: string
    ) {}

    ngOnInit () {

        if(this.checkContent()) {
            this.createTyped();
        }
    }

    private checkContent() {
        return this.phrases.length > 0;
    }

    private createTyped () {
       this.typed = new Typed(
            this.elRef.nativeElement,
            {
                typeSpeed: this.typeSpeed,
                startDelay: this.startDelay,
                phrasePeriod: this.phrasePeriod
            },
            this.phrases
        );

        this.typed.begin();
    }
}