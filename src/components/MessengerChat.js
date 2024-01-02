// MessengerChat.js

import React, { useEffect } from 'react';

const MessengerChat = () => {
    useEffect(() => {
        // Load Facebook SDK
        window.fbAsyncInit = function() {
            window.FB.init({
                xfbml: true,
                version: 'v18.0'
            });
        };

        // Load Messenger plugin script
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

    }, []);

    return (
        <div id="fb-root">
            {/* Your Messenger Plugin chat code */}
            <div
                className="fb-customerchat"
                attribution="biz_inbox"
                page_id="144034592136809"
            ></div>
        </div>
    );
};

export default MessengerChat;
