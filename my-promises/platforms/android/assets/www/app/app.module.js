'use strict';

console.log("Starting app.js " + new Date());

var geoPlugin = navigator.geolocation;
var geoPluginType = {type: 'NOTLOADED'};
var deviceReadyFired = false;

var onDeviceReady = function() {
    console.log("Firing 'deviceready'");
    // Set status bar to "default" dark text
    try {
        //StatusBar.styleDefault();
        //StatusBar.backgroundColorByHexString("#fff");
    } catch(err) {
        console.log("Unable to configure status bar.");
        console.log(err);
    }
    
    //angular.bootstrap(document, ['app']);
    deviceReadyFired = true; 
};

if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) {
    document.addEventListener(EVENT_DEVICEREADY, onDeviceReady, false);
} else {
    window.setTimeout(function() {
        //var e = document.createEvent('Events');
        //e.initEvent(EVENT_DEVICEREADY, true, false);
        //document.dispatchEvent(e);
        onDeviceReady();
    }, 50);
}

var app = angular.module('app', [
                'onsen',
                'ui.router',
                'pascalprecht.translate',
                'ngTouch',
                'ngStorage',
                'ngMessages',
                'angularMoment',
                'angulartics',
                'ui.utils.masks',
                'app.controllers','app.services','app.filters']
    ).config([
        '$provide',
        'moment',
        '$stateProvider',
        '$urlRouterProvider',
        '$translateProvider',
        function($provide,
                 moment,
                 $stateProvider,
                 $urlRouterProvider,
                 $translateProvider) {
            var deviceType = (navigator.userAgent.match(/iPad/i))  == "iPad" ? "iPad" : (navigator.userAgent.match(/iPhone/i))  == "iPhone" ? "iPhone" : (navigator.userAgent.match(/Android/i)) == "Android" ? "Android" : (navigator.userAgent.match(/BlackBerry/i)) == "BlackBerry" ? "BlackBerry" : "null";
                        
            // See app/app.routes.js for configuration
            configureRouting($stateProvider, $urlRouterProvider);
    
            // Ui-Router
            //$log.debug("route: Configuring Routing");
    
    
            // Angular Translate
            //$log.debug("i18n: Configuring translations");
            $translateProvider.useSanitizeValueStrategy('sanitizeParameters');
            var supportedLang = {'en': {i18n: i18n_en}, 'es': {i18n: i18n_es}};
            _.mapKeys(supportedLang, function(val, key) {
                //$log.debug("i18n: Adding language " + key + " " + JSON.stringify(val.i18n));
                $translateProvider.translations(key,val.i18n);
            });
            $translateProvider.registerAvailableLanguageKeys(_.keys(supportedLang), {
                'en_*': 'en',
                'es_*': 'es'
            });
            var langSuccess = function(lang) {
                //$log.debug("i18n: navigator.globalization returned language: " + lang);
                $translateProvider.preferredLanguage(lang);
            };
            var langFailure = function() {
                //$log.debug("i18n: navigator.globalization failed.");
                $translateProvider.determinePreferredLanguage();
                //$log.debug("i18n: determined preferred language is : " + $translateProvider.preferredLanguage());
                if($translateProvider.preferredLanguage()==null) {
                    //$log.debug("i18n: defaulting language to 'en'");
                    $translateProvider.preferredLanguage('en');
                }
            };
            if(navigator.gloabalization) navigator.globalization.getPreferredLanguage(langSuccess, langFailure);
            else langFailure();
        }]
    ).run(['$localStorage','amMoment', function($localStorage, amMoment) {
        // TODO: Configure with i18n
        amMoment.changeLocale('en');
    
        //var defaultHeaders = DEFAULT_HEADERS;
        if($localStorage.user && $localStorage.user.authenticationToken) {
            
        }
    }]);
//});

angular.module('app.controllers', []);
angular.module('app.services', []);
angular.module('app.filters', []);
