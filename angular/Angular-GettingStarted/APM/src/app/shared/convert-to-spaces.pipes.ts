
//this is a custom pipe for the app componet.  it replaces the given character with a space.  
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'convertToSpaces'
})


export class ConvertToSpacesPipe implements PipeTransform {
    transform(value:string, character: string):string{
        return value.replace(character, ' ');
    }

}