angular.module('app.services').factory('SocialSharing',SocialSharing);

function SocialSharing() {
    return window.plugins.socialsharing;
}