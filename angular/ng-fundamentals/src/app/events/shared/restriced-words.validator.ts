import { FormControl } from "@angular/forms";

export function restrictedWords(words){
        
    //this is a function that returns a function = straigt javascript not angular or typscript
    return (control: FormControl): {[key: string]:any} =>{
        
        //check if words was populated
        if(!words) return null; //if words is empty then this is an no op function

        var invalidWords = words
            .map(w=> control.value.includes(w) ? w : null) //loop through the words array and check if it is included into the control, add ether the word or null to the invalidWords array
            .filter(w => w != null);  //this then removes all the nulls from the array becaus it only keeps w that is not equal to null

        //a validaor will ether return an error message with the same key value as the validator method
        //or it will return null = valid
        return invalidWords && invalidWords.length > 0 //terciary assignment// could use if else statements
            ? {'restrictedWords': invalidWords.join(', ')} //this joins the invalid words array together to make a list of comma separated words
            : null;
    }
}