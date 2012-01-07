Ext.define('SuiteTracker.controller.Navigation', {
	extend: 'Ext.app.Controller',
	
	refs: [{
		ref: 'navigationList',
		selector: 'navigationlist'
	}],
	
	stores: ['Navigation'],
	
	init: function() {
		this.control({
			'navigationList': {
				selectionchange: this.onNavSelect
			}
		})
	},
	
	onLaunch: function() {
      var navStore = this.getNavigationStore();        
      navStore.load({
          callback: this.onNavLoad,
          scope: this
      });
  },

	onNavLoad: function() {
      var navigationList = this.getNavigationList();
      navigationList.getSelectionModel().select(0);
  },

	onNavSelect: function(selModel, selection) {
      // Fire an application wide event
      this.application.fireEvent('navselect', selection[0]);
  }
});