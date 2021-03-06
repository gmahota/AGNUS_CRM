import { Session } from 'meteor/session'

Template.AccountSingle.onCreated(function(){
    var self = this;
    
    
    self.autorun(function(){
        self.subscribe('accounts');
    });
    
});

Template.AccountSingle.helpers({
    account: () => {
        var id = FlowRouter.getParam('id');
        Session.set("currentAccount", id);
        return Accounts.findOne({_id: id});
    }
});

Template.AccountSingle.events({
    'click .list-Records':function(){
        var id = FlowRouter.getParam('id');
        FlowRouter.go('/Account_Records/' + id);
    },
    'click .delete':function(){
        var id = FlowRouter.getParam('id');
        Meteor.call('deleteAccount',id);

        FlowRouter.go('/Accounts');
    }
})