const getSeesionDetail = () => {
    const token = JSON.parse(sessionStorage.getItem("token"))
    const uid = sessionStorage.getItem("uid")
    return { uid, token }
}

export const getUser = async () => {
    const { token, uid } = getSeesionDetail()
    const response = await fetch(`http://localhost:5000/600/users/${uid}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
    const data = await response.json();

    return data
}

export const getUserOrders = async () => {
    const { token, uid } = getSeesionDetail()
    const response = await fetch(`http://localhost:5000/660/orders?user.id=${uid}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    const data = await response.json();
    return data;

}

export const createOrder = async (order) => {
    const { token } = getSeesionDetail()
    const response = await fetch(`http://localhost:5000/660/orders`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(order)
    })
    const data = await response.json();
    return data;
}