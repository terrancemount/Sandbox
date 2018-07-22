// this is a projection component that wraps another component to hide and displaying 
// the content
import { Component, Input } from "../../node_modules/@angular/core";

@Component({
    selector:'collapsible-well',
    // ng-content is using the attribute of well-title and well-body to select which content to display
    // could have used a class rather then attribute (atttribute just puts a name in the tag rather then specifing a class)
    // but that can lead to conflicts with other classes.  attribute selection conficts are more rare.
    template:`
        <div (click)='toggleContent()' class='well pointable'>
            <h4>
                <ng-content select='[well-title]'></ng-content>
            </h4>
            <ng-content *ngIf='visible' select='[well-body]'></ng-content>
        </div>
    `
})


export class CollapsibleWellComponent{
    visible: boolean = true;

    toggleContent(){
        this.visible = !this.visible;
    }
}