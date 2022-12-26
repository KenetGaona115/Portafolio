const admin = require('firebase-admin');
const firebase = require("firebase/app");
require("firebase/firestore");

admin.initializeApp({ projectId: 'test-59c12' });

const firebaseConfig = {
    apiKey: "AIzaSyArypsrVYSrUrJFm2WhtYOv2CQSXrzXm1g",
    authDomain: "test-59c12.firebaseapp.com",
    projectId: "test-59c12",
    storageBucket: "test-59c12.appspot.com",
    messagingSenderId: "734809793545",
    appId: "1:734809793545:web:48b383bd0e240c89f384d8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const collectionStudents = db.collection('Student');
const collectionAssigment = db.collection('Assigment');

const COMPLETE = true
const ERROR = false

async function createStudent(student) {
    let response = true;
    try {
        let doc = collectionStudents.doc(student.id);
        await doc.set(student).then(function () {
            response = COMPLETE;
        });
    } catch (err) {
        console.error(err);
        response = ERROR
    }
    return response
}

async function deleteStudent(student) {
    let response = true;
    try {
        await collectionStudents.doc(student.id).delete()
            .then(function () {
                response = COMPLETE;
            });
    } catch (err) {
        console.error(err);
        response = ERROR
    }
    return response
}

async function updateStudent(student) {
    let response = true;
    try {
        await collectionStudents.doc(student.id).update(student)
            .then(function () {
                response = COMPLETE;
            });
    } catch (err) {
        console.error(err);
        response = ERROR
    }
    return response
}

async function getStudentById(id) {
    let response = true;

    const docRef = await collectionStudents.doc(id)
    const doc = await docRef.get()

    if (!doc.exists) {
        response = ERROR
    } else {
        response = doc.data();
    }
    return response
}

module.exports = {
    getStudentById: getStudentById,
    createStudent: createStudent,
    updateStudent: updateStudent,
    deleteStudent: deleteStudent
}