window.fbAsyncInit = function() {
    FB.init({
        appId            : '1100238770337128',
        autoLogAppEvents : true,
        xfbml            : true,
        version          : 'v5.0'
    })

    FB.getLoginStatus()

    const successMessage = document.querySelector('.success-message')
    const fbButton = document.querySelector('.fb-button')

    function checkLoginState(event) {
        if (event.authResponse) {
            // location.href = '://'
            console.log('##### open deeplink with access token', event.authResponse.accessToken);

            successMessage.className += ' authenticated'
            fbButton.className += ' authenticated'
        }
    }

    FB.Event.subscribe('auth.authResponseChange', checkLoginState);
}
