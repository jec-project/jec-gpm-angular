import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {MessageItem} from "../business/MessageItem";

/**
 * A sample singleton service.
 */
@Injectable()
export class MessageService {

  /**
   * Constructor function.
   */
  constructor (private _http:Http) {}

  /**
   * Returns an Observable object that contains message items.
   */
  public getMessage():Observable<MessageItem[]> {
    return this._http.get("./message").map((res:Response) => {
      return res.json();
    });
  }
}