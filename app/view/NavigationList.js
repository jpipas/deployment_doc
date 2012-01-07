Ext.define('SuiteTracker.view.NavigationList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.navigationlist',
    
    store: 'Navigation',
    title: 'Navigation',
    hideHeaders: true,
    
    initComponent: function() {
        this.columns = [{
            dataIndex: 'name',
            flex: 1
        }];
        
        this.callParent();
    }
});