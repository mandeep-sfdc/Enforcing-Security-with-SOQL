import { LightningElement, wire, track } from 'lwc';
import getAllContacts from '@salesforce/apex/getContacts.getAllContacts';

export default class ShowContacts extends LightningElement {
    @track columns = [
        { label: 'FirstName', fieldName: 'FirstName' },
        { label: 'LastName', fieldName: 'LastName' },
        { label: 'Email', fieldName: 'Email' },
    ];
   @track contactList;
    @wire(getAllContacts) wiredContacts ({data,error}){
        if (data) {
            this.contactList = data;
            console.log('xxxxx' + data); 
        } else if (error) {
            console.log('aaaaa' + error);
        }
    }
}