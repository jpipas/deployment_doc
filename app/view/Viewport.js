Ext.define('SuiteTracker.view.Viewport', {
	extend: 'Ext.container.Viewport',
	layout: 'fit',
	
	requires: [
		'SuiteTracker.view.NavigationList'
	],
	
	initComponent: function() {
		this.items = {
			dockedItems: [{
				dock:'top',
				xtype: 'toolbar',
				height: 80,
				items: [/*{
					xtype: 'applicationtoolbox',
					width: 150
				},*/{
					xtype: 'component',
					html: 'SuiteTracker<br>Entertainment'
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
					flex: 1
				}]
			}]
		};
		this.callParent();
	}
});