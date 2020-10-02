import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

admin.initializeApp();


exports.getVideojuegos = functions.https.onRequest(async (req, res) =>  {
    
    const snapshott = await admin.database().ref('/appointment').orderByChild("name").equalTo("The Legend of Zelda: Breath of the Wild").once('child_added');
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Headers', '*');
    res.send(snapshott)
});