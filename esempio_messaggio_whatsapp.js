// ############# INSERIRE CREDENZIALI TWILIO CORRETTE

const accountSid = 'xxxxxxxxxxdxxxxxxxxxxxxxxxxxxxx'; 
const authToken = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'; 
const client = require('twilio')(accountSid, authToken); 


// INVIA un WhatsAp
// Queando si usa la sandbox di prova bisogna usare uno di questi tre template
var placeOrder1 = "initial";
var placeOrder2 = "2233";
var placeOrder3 = "18:00";
var placeOrder4 = "21345672";

var msgTemplate1 = 'Your '+ placeOrder1 + ' code is '+ placeOrder2;
var msgTemplate2 = 'Your appointment is coming up on '+ placeOrder1 + ' at ' + placeOrder2;
var msgTemplate3 = 'Your '+ placeOrder1 + ' order of '+ placeOrder1 + ' has shipped and should be delivered on '+ placeOrder3 + '. Details: '+ placeOrder4;
 
client.messages 
      .create({ 
         body: msgTemplate1, 
         from: 'whatsapp:+14155238886',       
         to: 'whatsapp:+393282288888' 
       }) 
      .then(message => console.log(message.sid)) 
      .done();
// fine INVIA un WhatsAp


// COME INVITARE UN NUOVO CELLULARE
/* *** per attivare un numero di cellulare bisogna inviare un whatsapp al numero +1 415 523 8886
        e scrivendo questo codice: join free-grade */


/*
- installare referenza twilio: npm install twilio
- installare server express:   npm install express
- installare il body parser:   npm install body-parser
- Effettuare download di ngrok dl sito ufficiale ed eventualmente registrare un account 

//setup NGROK

1 Inserire eseguibile ngrok nella cartella del progetto
2 autorizzazione -- dalla console digitare: ./ngrok authtoken xxxxxxxxxxxxxxxxxxxxxxxxxxxx   (vedi file DATI PRIVATI PER TOKEN)

3 lanciare il server con lo scriptcon comando node <nome file server>.js

4 a questo punto busogna fare il forward della porta usango ngrok
quindi lanciare il comando: 
                    ./ngrok http <numero porta>

5 Andare su twilio sul link della configurazione della sandbox https://www.twilio.com/console/sms/whatsapp/sandbox

6) sostituire il parametro WHEN A MESSAGE COMES IN che sarebbe il server di default di twilio che gestisce i
   messaggi in entrate. Server di default https://timberwolf-mastiff-9776.twil.io/demo-reply

7) sostiture il server di defaul con l'indirizzo forwarding generato da ngrok es. http://3fbe3b89787a.ngrok.io + path
   quindi nimo caso l'indirizzo corretto è  http://3fbe3b89787a.ngrok.io/whatsapp
                                            http://3ed8534dc46f.ngrok.io/whatsapp



// ESEMPIO RISPOSTA



{
    "sid": "SM25e13461e929405aad3387f6c39e89f5",
    "date_created": "Mon, 11 Jan 2021 19:39:21 +0000",
    "date_updated": "Mon, 11 Jan 2021 19:39:21 +0000",
    "date_sent": null,
    "account_sid": "AC71362a33207c1d44958e29918ab15975",
    "to": "whatsapp:+393298837557",
    "from": "whatsapp:+14155238886",
    "messaging_service_sid": null,
    "body": "Your Yummy Cupcakes Company order of 1 dozen frosted cupcakes has shipped and should be delivered on July 10, 2019. Details: http://www.yummycupcakes.com/",
    "status": "queued",
    "num_segments": "1",
    "num_media": "0",
    "direction": "outbound-api",
    "api_version": "2010-04-01",
    "price": null,
    "price_unit": null,
    "error_code": null,
    "error_message": null,
    "uri": "/2010-04-01/Accounts/AC71362a33207c1d44958e29918ab15975/Messages/SM25e13461e929405aad3387f6c39e89f5.json",
    "subresource_uris": {
        "media": "/2010-04-01/Accounts/AC71362a33207c1d44958e29918ab15975/Messages/SM25e13461e929405aad3387f6c39e89f5/Media.json"
    }
}





*/