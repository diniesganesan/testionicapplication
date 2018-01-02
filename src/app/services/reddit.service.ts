import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class RedditService{
    http:any;
    baseUrl:String;

    constructor(http: Http){
        this.http = http;
        this.baseUrl = 'https://www.reddit.com/r'
    }

    //create a post to send user choosen category on the form.
    getPost(category, limit){
        //gets the url of the choosen user category.
        return this.http.get(this.baseUrl+'/'+category+'/top.json?limit='+limit)
            .map(res => res.json());
    }

}