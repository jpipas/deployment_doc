Ext.define('SuiteTracker.model.Navigation', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name'],
    
    proxy: {
        type: 'ajax',
        url: '/data/navigation.json',
        reader: {
            type: 'json',
            root: 'results'
        }
    }
});