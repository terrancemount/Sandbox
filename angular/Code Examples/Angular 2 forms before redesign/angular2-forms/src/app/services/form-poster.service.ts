import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Employee } from "../models/emplyee.model";
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";


@Injectable()
export class FormPoster{
    
    constructor(private http:Http){}

    //this handels the data exration of the observable to the subscriber
    private extractData(res: Response){
        let body = res.json();
        return body.fields || { };
    }

    //this handles the return from the server and hands it off to the subscriber.
    extractLanguages(res: Response) {
        let body = res.json();
        return body.data || { };
    }

    //handels error from the postEmployee form
    private handelError(error: any){
        console.error('post error: ', error);
        return Observable.throw(error.statusText);
    }

    //handles getting a language array from mock server
    getLanguages() : Observable<any> {
        return this.http.get('http://localhost:3100/get-languages')
            .delay(5000)//simulate a 5 sec delay
            .map(this.extractLanguages)
            .catch(this.handelError);

    }


    //this is a function that will post the form to mock server.  Look for server in
    // Sandbox/Node/node_server/server.js
    postEmployeeForm(employee: Employee):Observable<any>
    {
        /*8888888888888888888888888888888888888888888888888888*/
        //below is for testing
       // console.log('posting employee: ', employee);
        /**************************************************** */
        
        let body = JSON.stringify(employee); //converts the employee to json and saves it to the body of the message
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this.http.post('http://localhost:3100/postemployee', body, options)
            .map(this.extractData)
            .catch(this.handelError);

    }



}