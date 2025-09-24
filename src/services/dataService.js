const getSeesionDetail = () => {
    const token = JSON.parse(sessionStorage.getItem("token"))
    const uid = sessionStorage.getItem("uid")
    return { uid, token }
}

export const getUser = async () => {
    const { token, uid } = getSeesionDetail()
    const response = await fetch(`${process.env.REACT_APP_HOST}/600/users/${uid}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
    if (!response.ok) {
        const error = new Error(response.statusText);
        error.status = response.status;
        throw error;
    }
    const data = await response.json();

    return data
}

export const getUserOrders = async () => {
    const { token, uid } = getSeesionDetail()
    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders?user.id=${uid}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    if (!response.ok) {
        const error = new Error(response.statusText);
        error.status = response.status;
        throw error;
    }
    const data = await response.json();
    return data;

}

export const createOrder = async (order) => {
    const { token } = getSeesionDetail()
    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(order)
    })
    if (!response.ok) {
        const error = new Error(response.statusText);
        error.status = response.status;
        throw error;
    }
    const data = await response.json();
    return data;
}