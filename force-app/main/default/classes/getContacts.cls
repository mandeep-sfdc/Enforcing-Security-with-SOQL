public with sharing class getContacts{
    @AuraEnabled (cacheable=true)
    public static list<Contact> getAllContacts()
    {
        List<Contact> Conlist = [SELECT Id, FirstName, LastName, Email FROM Contact LIMIT 5];
        return Conlist;
    }

    @AuraEnabled (cacheable=true)
    public static list<Contact> getAllContactsSecurityEnforced()
    {
        List<Contact> Conlist = [SELECT Id, FirstName, LastName, Email FROM Contact 
                                    WITH SECURITY_ENFORCED LIMIT 5];
        return Conlist;
    }

    @AuraEnabled (cacheable=true)
    public static list<Contact> getAllContactsStripInaccessible()
    {
        List<Contact> Conlist = [SELECT Id, FirstName, LastName, Email FROM Contact LIMIT 5];
        SObjectAccessDecision decision = Security.stripInaccessible( AccessType.READABLE, Conlist); 
        for (Integer i = 0; i < Conlist.size(); i++) {
            System.debug('Insecure record access: '+Conlist[i]);
            System.debug('Secure record access: '+decision.getRecords()[i]);
        }
        return decision.getRecords();
    }
}