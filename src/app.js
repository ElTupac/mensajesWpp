const {Client} = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const client = new Client();

client.on('qr', (qr) => {
    //console.log('QR RECIBIDO', qr);
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log("Cliente listo");

    /* const zordon = '5491153239623';
    const body = 'cagaste perro x'
    let contador = 0;
    setInterval(() => {
        contador++;
        client.sendMessage(`${zordon}@c.us`, `${body}${contador}`);
    }, 2000); */
});

client.on('message', msg => {
    let mensaje = msg.body.toLowerCase();
    if(mensaje.includes('tene cuidado')){
        msg.reply('Tene cuidado que te van a gorrear');
    }
});

client.initialize();