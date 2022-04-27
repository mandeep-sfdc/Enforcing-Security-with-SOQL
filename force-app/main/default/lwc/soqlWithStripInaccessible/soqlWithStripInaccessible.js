import { LightningElement, wire, track } from 'lwc';
import getAllContactsStripInaccessible from '@salesforce/apex/getContacts.getAllContactsStripInaccessible';

export default class SoqlWithStripInaccessible extends LightningElement {
    @track columns = [
        { label: 'FirstName', fieldName: 'FirstName' },
        { label: 'LastName', fieldName: 'LastName' },
        { label: 'Email', fieldName: 'Email' },
    ];
   @track contactList;
    @wire(getAllContactsStripInaccessible) wiredContacts ({data,error}){
        if (data) {
            this.contactList = data;
            console.log('xxxxx' + data); 
        } else if (error) {
            console.log('aaaaa' + error);
        }
    }
}