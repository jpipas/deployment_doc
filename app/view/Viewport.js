Ext.define('SuiteTracker.view.Viewport', {
    extend: 'Ext.container.Viewport',
    layout: 'fit',

    requires: [
        'SuiteTracker.view.NavigationList'
    ],

    initComponent: function() {
        this.items = {
            dockedItems: [{
                dock: 'top',
                xtype: 'toolbar',
                height: 80,
                items: [{
                    //xtype: 'songcontrols',
                    flex: 1
                },{
                    xtype: 'component',
                    html: 'Suite Tracker<br>Entertainment Promotions'
                }]
            }],
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [{
                width: 250,
                xtype: 'panel',
                id: 'west-region',
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                items: [{
                    xtype: 'navigationlist',
                    flex: 1,
					border: false,
					iconCls: 'nav'
                }]
            },{
                xtype: 'container',
                flex: 1,
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                }
            }]
        };

        this.callParent();
    }
});