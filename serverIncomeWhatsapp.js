const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const app = express();

// Il body parser occorre per gestire i dati in arrivo.
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
  }));
app.use(express.urlencoded()); // to support URL-encoded bodies
// fine body parser

app.post('/whatsapp', (req, res) =>{
    const twiml = new MessagingResponse();
    

    var objRisposta = gestisciRisposta(req.body.Body);
    console.log(Date() + req.body.From + ' ha scritto ' + req.body.Body);
    if(objRisposta.allegato && objRisposta.comando != "FOTO"){
        const message = twiml.message(); 
        //console.log('sono nell If');
        message.body(objRisposta.testo);
        message.media(objRisposta.allegato);
    
    }else if (objRisposta.allegato && objRisposta.comando == "FOTO"){
        const message = twiml.message(); 
        //console.log('sono nell ELSE If');
        //message.body(objRisposta.testo);
        message.media("https://www.pizzaemozzarella.it/web_foto_pizza_mozzarella1.jpeg");
        
        let message2 = twiml.message();
        message2.media("https://www.pizzaemozzarella.it/web_foto_pizza_mozzarella2.jpeg");
        
        let message3 = twiml.message();
        message3.media("https://www.pizzaemozzarella.it/web_foto_pizza_mozzarella3.jpeg");
        
        let message4 = twiml.message();
        message4.media("https://www.pizzaemozzarella.it/web_foto_pizza_mozzarella4.jpeg");
        
        let message5 = twiml.message();
        message5.media("https://www.pizzaemozzarella.it/web_foto_pizza_mozzarella5.jpeg");
        
        let message6 = twiml.message();
        message6.media("https://www.pizzaemozzarella.it/web_foto_pizza_mozzarella6.jpeg");
        
        let message7 = twiml.message();
        message7.media("https://www.pizzaemozzarella.it/web_foto_pizza_mozzarella7.jpeg");
    }else{
        //console.log('sono nell Else');
        twiml.message(objRisposta.testo);
    }
    
    
    //message.body('Store Location: 123 Easy St.');
    //message.media('https://demo.twilio.com/owl.png');
    
    
    
    //console.log(req.body.Body);
    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
    
}); //fine app.post('/whatsapp'.....

http.createServer(app).listen(1337,()=>{

    console.log("Server Espress attivo su porta 1337");
}); // fine http.createServer(app).listen(1337,....

function gestisciRisposta(msgUtente){
    
    var msgBody = '';
    var msgMedia='';
    var msgComando = '';

    var msgDefault = 
     'E l e n c o   C o m a n d i: \n'
   + '\n*   Menu '
   + '\n*   Foto '
   + '\n*   Logo '
   + '\n*   Posizione '
   + '\n*   Ordine' 
   + '\n*   Info'
   + '\n*   Help'
   + '\n \n....scrivi un comando e schiaccia invia...\n ';
  
   if (msgUtente.toUpperCase().indexOf('MENU') > -1 ) {
    msgBody = 'Il nostro menu';
    msgMedia = 'https://www.pizzaemozzarella.it/menu-pizza-e-mozzarella.pdf';
    
    
   }

   if (msgUtente.toUpperCase().indexOf('FOTO') > -1 ) {
    msgBody = 'Alcune foto...';
    msgMedia = 'carica foto esternamente';
    msgComando = "FOTO";
    
    
   }
   
   if (msgUtente.toUpperCase().indexOf('LOGO') > -1 ) {
    msgBody = 'Marchio registrato Pizza & Mozzarella\n\n\n ..digita un comando per continuare..\noppure scrivi "help" per visualizzare elenco comandi.';
    msgMedia = 'https://www.pizzaemozzarella.it/zizza_logo.png';
    
   }
   
   if (msgUtente.toUpperCase().indexOf('POSIZIONE') > -1 ) {
    msgBody = 'Ci trovi qui: https://goo.gl/maps/fhuJWtMhtmBX55pW7 \n\n\n ..digita un comando per continuare..\noppure scrivi "help" per visualizzare elenco comandi.';
    
   }
   if (msgUtente.toUpperCase().indexOf('ORDIN') > -1 ) {
    msgBody = 'ORDINE N.2341\n'
             +'- 2 Margherita.... €8,00\n'
             +'- 1 Diavola........€5,00\n'
             +'- 1 Patatina.......€2,50\n'
             +'- 3 Cuoppo ........€7,50\n'
             +'---------------------------'
             +'- TOTALE   ........€23,00\n'
             +'\n\nTi verrà consegnato alle 20:15.'
             +'\n\n\n ..digita un comando per continuare..\noppure scrivi "help" per visualizzare elenco comandi.';
    
   }
   if (msgUtente.toUpperCase().indexOf('INFO') > -1 ) {
    msgBody = 'Ciao,\nsono un robot... anzi un "BOT".\n\nVivo grazie a 20 righe di codice scritte in javascript,'
                  + ' la mia casa è nodejs. \nDevo la mia esistenza ad Enrico... che tu dovresti conoscere.'
                  + '\n\nLa mia missione è migliorare i processi di Pizza & Mozzarella'
                  + '\n\nCiao\nPizza&Mozzarella Robot!'
                  +'\n\n\n ..digita un comando per continuare..\noppure scrivi "help" per visualizzare elenco comandi.';
   }
   
   return {testo: msgBody || msgDefault,
           allegato: msgMedia,
           comando: msgComando };
   
} //function gestisciRisposta






// RISPOSTA DI ESEMPIO.
/*
La risposta di trova nel req.body

questa è la struttura...

{
  SmsMessageSid: 'SM4a4c3700abb2d8af76bd65a38823b981',
  NumMedia: '0',
  SmsSid: 'SM4a4c3700abb2d8af76bd65a38823b981',
  SmsStatus: 'received',
  Body: 'Sono ancora qui',
  To: 'whatsapp:+14155238886',
  NumSegments: '1',
  MessageSid: 'SM4a4c3700abb2d8af76bd65a38823b981',
  AccountSid: 'AC71362a33207c1d44958e29918ab15975',
  From: 'whatsapp:+393298837557',
  ApiVersion: '2010-04-01'
}


*/ 