/**
 * A sample DTO that defines messages consumed by the MessageService service.
 */
export class MessageItem {
  
  /**
   * Constructor function.
   */
  constructor(){}
  
  /**
   * The ID of the message.
   */
  public id:string = null;
  
  /**
   * The message details.
   */
  public message:string = null;
  
  /**
   * The priority of the message.
   */
  public priority:number = 0;
}