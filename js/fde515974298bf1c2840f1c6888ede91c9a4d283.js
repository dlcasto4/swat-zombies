try {
    // Parse the configuration JSON and assign it to window.izConfig
    window.izConfig = JSON.parse(`{
        "client": 50245,
        "sourceOrigin": "https://www.y9freegames.com",
        "domainRoot": "",
        "webPushId": "",
        "webServiceUrl": "",
        "isSdkHttps": 1,
        "customPixelLink": "",
        "mobileAllowed": 1,
        "serviceWorkerName": "/service-worker.js",
        "manifestName": "/manifest.json",
        "desktopAllowed": 1,
        "setEnr": 1,
        "izootoStatus": 1,
        "debug": 0,
        "siteUrl": "https://www.y9freegames.com",
        "promptDelay": 0,
        "repeatPromptDelay": 0,
        "tagsEnabled": 1,
        "welcomeNotification": {
            "status": 0,
            "title": "",
            "body": "",
            "icon": "",
            "url": "",
            "showAfter": 0,
            "clickTimeout": 0
        },
        "locale": "en",
        "vapidPublicKey": "BMaSJ_u4fXuHurmdO8TqYNKC6HpiwuRVFhzvRUvF_kFEcQLfSkJ7oKkQ5UEq7Gc5jCwCLFTibYx0FlSxJvDfWP0",
        "branding": 1
    }`);

    // Determine the container for the script, defaulting to document.head if document.body is unavailable
    const container = document.body || document.head;

    // Function to create and append a script element
    function appendScript(id, src) {
        const script = document.createElement("script");
        script.id = id;
        script.src = src;
        container.appendChild(script);
    }

    // Check for a customPixelLink in the config and append the appropriate script
    if (izConfig.customPixelLink) {
        appendScript("izootoAlt", izConfig.customPixelLink);
    } else {
        appendScript("izootoSdk", "https://cdn.izooto.com/scripts/sdk/izooto.js");
    }
} catch (err) {
    // Handle any errors silently
    console.error("Error initializing iZooto SDK:", err);
}
