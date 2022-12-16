const API_URL = 'http://localhost:8000';

export async function httpGetTodos() {
    try {
        const response = await fetch(`${API_URL}/todos`);
        const fetchedTodos = await response.json()
        return fetchedTodos.sort((a, b) => new Date(b.createdAt.seconds) - new Date(a.createdAt.seconds))
    } catch (err) {
        return {
            ok: false,
        }
    }
}

export async function httpCreateTodo(todo) {
    try {
        return await fetch(`${API_URL}/todos`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(todo)
        });
    } catch (err) {
        return {
            ok: false,
        }
    }
}

export async function httpUpdateTodos(todo) {
    try {
        return await fetch(`${API_URL}/todos`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ ...todo })
        });
    } catch (err) {
        return {
            ok: false,
        }
    }
}

export async function httpDeleteTodo(uid) {
    try {
        return await fetch(`${API_URL}/todos/${uid}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
    } catch (err) {
        return {
            ok: false,
        }
    }
}