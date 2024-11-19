public with sharing class ContactMeController {
  @AuraEnabled
  public static void createLead(Lead lead) {
    try {
      insert as user lead;
    } catch (Exception e) {
      throw new AuraHandledException(e.getMessage());
    }
  }
}
