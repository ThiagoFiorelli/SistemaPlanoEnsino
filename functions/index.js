const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase)

// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const createNotification = (notification) => {
    return admin.firestore().collection('notifications').add(notification)
        .then(doc => console.log('Notificacao: ', doc));
}

exports.projectCreated = functions.firestore.document('projects/{projectId}').onCreate(doc => {
    const project = doc.data();
    const notification = {
        content: 'Adicionou um projeto',
        user: `${project.authorFirstName} ${project.authorLastName}`,
        time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotification(notification);
})

exports.materiaCreated = functions.firestore.document('materias/{materiaId}').onCreate(doc => {
    const project = doc.data();
    const notification = {
        content: 'Adicionou uma materia',
        user: `${project.authorFirstName} ${project.authorLastName}`,
        time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotification(notification);
})

exports.cursoCreated = functions.firestore.document('cursos/{cursoId}').onCreate(doc => {
    const project = doc.data();
    const notification = {
        content: 'Adicionou um curso',
        user: `${project.authorFirstName} ${project.authorLastName}`,
        time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotification(notification);
})

exports.turmaCreated = functions.firestore.document('turmas/{turmaId}').onCreate(doc => {
    const project = doc.data();
    const notification = {
        content: 'Adicionou uma turma',
        user: `${project.authorFirstName} ${project.authorLastName}`,
        time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotification(notification);
})

exports.planoCreated = functions.firestore.document('planosensino/{planoId}').onCreate(doc => {
    const project = doc.data();
    const notification = {
        content: 'Adicionou um plano de ensino',
        user: `${project.authorFirstName} ${project.authorLastName}`,
        time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotification(notification);
})