import { Component } from '@angular/core';
import { OtherComponentsComponent } from 'app/modules/admin/docs/other-components/other-components.component';

@Component({
    selector   : 'messages',
    templateUrl: './messages.component.html',
    styles     : ['']
})
export class MessagesComponent
{
    /**
     * Constructor
     */
    constructor(private _otherComponentsComponent: OtherComponentsComponent)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle the drawer
     */
    toggleDrawer(): void
    {
        // Toggle the drawer
        this._otherComponentsComponent.matDrawer.toggle();
    }
}
