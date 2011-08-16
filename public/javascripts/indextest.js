var helloWorld = new Ext.Application({
     phoneStartupScreen: 'yourImageForTablet.png',
     icon: 'yourIcon.png',
     glossOnIcon: true,
     onReady: function() {
              var onglets;
 
              onglets = new Ext.TabPanel({
						tabBar: {
							dock: 'bottom',
							layout: {
								pack: 'center'
							}
						},
                        animation:'slide',
                        fullscreen:true,
                        items:[
                              {
								title:'Accueil',
								iconCls:'favorites',
								cls:'tab1',
								html:'Accueil',
							 },
                              {
							  title:'Info',
							  cls:'tab2',
							  iconCls:'info',
								html:'Info',
							 }
                        ]
               });
    }
});