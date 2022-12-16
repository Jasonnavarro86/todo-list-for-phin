
const { db } = require('../utils/firebase/firebase.utils');
const { v4 } = require('uuid');
const {
    collection,
    doc,
    getDocs,
    setDoc,
    updateDoc,
    deleteDoc
} = require('firebase/firestore');

async function getAllTodos() {
    const todosCollectionRef = collection(db, 'todos');
    const todosSnapshot = await getDocs(todosCollectionRef);
    const todolistData = todosSnapshot.docs.map(doc => doc.data());
    return todolistData;
}

async function createNewTodo(todo) {
    const uid = v4();
    const { job } = todo;
    const completed = false;
    const createdAt = new Date();
    const todoDocRef = doc(db, 'todos', uid);
    try {
        await setDoc(todoDocRef, {
            uid,
            job,
            completed,
            createdAt,
        });
        return { success: true }
    } catch (error) {
        console.log('error creating todo ', error.message);
        return { success: false }
    }
}

async function updateTodos(todo) {
    const { job, completed, uid } = todo;
    const todoDocRef = doc(db, 'todos', uid);

    try {
        await updateDoc(todoDocRef, {
            job,
            completed,
        });
        return { success: true }
    } catch (error) {
        console.log('error updating todo ', error.message);
        return { success: false }
    }
}

async function deleteTodos(uid) {
    const todoDocRef = doc(db, 'todos', uid);
    try {
        await deleteDoc(todoDocRef);
        return { success: true }
    } catch (error) {
        console.log('error deleting todo ', error.message);
        return { success: false }
    }
}

module.exports = {
    getAllTodos,
    createNewTodo,
    updateTodos,
    deleteTodos,
}