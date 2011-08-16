app.views.ContactsList = Ext.extend(Ext.TabPanel, {	
	fullscreen: true,
     sortable: true,
     items: [{
         title: 'Tab 1',
         html: '1',
         cls: 'card1'
     }, {
         title: 'Tab 2',
         html: '2',
         cls: 'card2'
     }, {
         title: 'Tab 3',
         html: '3',
         cls: 'card3'
     }]
});