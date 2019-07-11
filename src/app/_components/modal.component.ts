import { Component, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

import { ModalService } from '../_services/modal.service';

@Component({
    selector: 'jw-modal',
    styleUrls: ['../_content/modal.less'],
    template: 
        `<div class="jw-modal">
            <div class="jw-modal-body" >
                <ng-content></ng-content>
            </div>
        </div>
        <div class="jw-modal-background"></div>`
})
export class ModalComponent implements OnInit, OnDestroy {
    @Input() id: string;
    private element: any;
    private marginTop: string;

    constructor(private modalService: ModalService, private el: ElementRef) {
        this.element = el.nativeElement;
    }

    ngOnInit(): void {
        let modal = this;

        // ensure id attribute exists
        if (!this.id) {
            console.error('The modal needs an ID');
            return;
        }

        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        document.body.appendChild(this.element);

        // close modal on background click
        this.element.addEventListener('click', function (e: any) {
            if (e.target.className === 'jw-modal') {
                modal.close();
            }
        });

        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
        this.element.style.display = 'none';
    }

    // remove self from modal service when directive is destroyed
    ngOnDestroy(): void {
        this.modalService.remove(this.id);
        this.element.remove();
    }

    // open modal
    open(): void {
        if (this.id == 'custom-modal-1') {
            this.element.style.heigth = '320px';
            this.marginTop = '150px';
        } else {
            this.element.style.heigth = '520px';
            this.marginTop = '75px';
        }
        this.element.style.display = 'block';
        document.body.classList.add('jw-modal-open');
    }

    // close modal
    close(): void {
        this.element.style.display = 'none';
        document.body.classList.remove('jw-modal-open');
    }
}