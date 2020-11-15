var webPush = require('web-push');
const vapidKeys = {
    "publicKey": "BMcSj5Y8EjptsP0xpzAM4LC6AdXdmU4UXnxaY16mjJl3K1HppFwAsNX75O4vNF7bgYwn3TuND7b8paQpFEynXTw",
    "privateKey": "KHj_EE6748QFolWqOMbTOrPMZWbkdPpuZ4vpX7q-Wc4"
};


webPush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
    )
var pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/dzuaan3rgcI:APA91bEAeCRAkWW640iWTWO_QxSOlR-NSQY7FUDDwDd2VPNPZipgaSmoTwemB_6CGTSunI1DnMO0V-8_CnkYWfkB62kF8mgGeZvK0aLkq3CRNu0XikgkLeRroqpIP6BuLVz_KG898nb5",
    "keys": {
        "p256dh": "BFW08rCpjncmPgh4Cjys81Mc94dUuMort05FKBwem69wCE7C2Ung5pQzazUQ+P9wMWTtrfjpUCThXxtQN78esbE=",
        "auth": "e9yLEe8MEb17Du8P8QzdOg=="
    }
};
var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';
var options = {
    gcmAPIKey: '97864441164',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
    );