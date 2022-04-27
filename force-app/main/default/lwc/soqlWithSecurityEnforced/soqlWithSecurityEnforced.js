import { LightningElement, wire, track } from 'lwc';
import getAllContactsSecurityEnforced from '@salesforce/apex/getContacts.getAllContactsSecurityEnforced';

export default class soqlWithSecurityEnforced extends LightningElement {
    @track columns = [
        { label: 'FirstName', fieldName: 'FirstName' },
        { label: 'LastName', fieldName: 'LastName' },
        { label: 'Email', fieldName: 'Email' },
    ];
   @track contactList;
    @wire(getAllContactsSecurityEnforced) wiredContacts ({data,error}){
        if (data) {
            this.contactList = data;
            console.log('xxxxx' + data); 
        } else if (error) {
            console.log('aaaaa' + error);
        }
    }
}