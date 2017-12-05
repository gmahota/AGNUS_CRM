Template.companiesList.onCreated(function () {
    var self = this;

    self.autorun(function () {
        self.subscribe('companies');
    });
});

Template.companiesList.helpers({
    companies: () => {
        return Companies.find({});
    },

    settings: function () {
        return {
            collection: 'companiesListTable',
            rowsPerPage: 5,
            showFilter: true,
            showNavigation: 'auto',
            fields: [
                { key: '_id', label: 'Id', hidden: true },
                { key: 'code', label: 'Code' },
                { key: 'name', label: 'Name' },
                { key: 'desc', label: 'Description' },
                
            ],
            useFontAwesome: true,
            rowClass: '',
            group: 'name'
        };
    }
});

Template.companiesList.events({
    'click .ListCompanies tbody tr': function (event) {
        // set the blog post we'll display details and news for
        var post = this;
        FlowRouter.setParams({ id: post._id });
        FlowRouter.go('/company/' + post._id);
    },
    'click .new-Company': function () {
        Session.set('NewCompany', true);
    }
});