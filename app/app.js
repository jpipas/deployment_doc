Ext.application({
    name: 'SuiteTracker',
    autoCreateViewport: true,
    models: ['Navigation'],    
    stores: ['Navigation'],
    controllers: ['Navigation']
});

Ext.Loader.setConfig({enabled:true});