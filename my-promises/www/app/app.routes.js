var configureRouting = function($stateProvider, $urlRouterProvider) {

    //Documentation
    //https://onsen.io/blog/onsen-ui-router-app/

    // Default route for app
    $urlRouterProvider.otherwise('/main');

    $stateProvider
        // main
        .state('navigator', {
    		abstract: true,
			// url: '/navigator', // Optional url prefix
			resolve: {
				loaded: function($rootScope) {
					//$rootScope.app.mainTabbar.setActiveTab(0);
					//return $rootScope.app.mainTabbar.loadPage('app/components/main/principalView.html');
                    
                        $rootScope.dialogs = {};
                        $rootScope.show = function(dlg) {
                            if (!$rootScope.dialogs[dlg]) {
                                ons.createDialog(dlg).then(function(dialog) {
                                    $rootScope.dialogs[dlg] = dialog;
                                    dialog.show();
                                });
                            } else {
                                $rootScope.dialogs[dlg].show();
                            }
                        }
                    
                    
				}
			}
		})
        .state('navigator.main', {
            parent: 'navigator',
            url: '/main',
            onEnter: ['$rootScope', function($rootScope) {
                   $rootScope.myNav.resetToPage('app/components/main/mainView.html');
            }],
            onExit: ['$rootScope', function($rootScope) {

            }]
        });
};