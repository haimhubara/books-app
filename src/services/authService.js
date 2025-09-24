export const loginUser = async (loginData) => {
    const requestOption = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData)
    }

    const response = await fetch("http://localhost:5000/login", requestOption);
    const data = await response.json();

    if (!response.ok && response.status < 500) {
       return data;
    }
    if (response.status >= 500) {
        const error = new Error("Server error, please try again later");
        error.status = response.status;
        throw error;
    }
    if (data.accessToken) {
        sessionStorage.setItem("token", JSON.stringify(data.accessToken));
        sessionStorage.setItem("uid", JSON.stringify(data.user.id));
    }

    return data
}



export const registerUser = async (authDetail) => {
    const requestOption = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(authDetail)
    }

    const response = await fetch("http://localhost:5000/register", requestOption);
    const data = await response.json();

    if (!response.ok && response.status < 500) {
       return data;
    }
    if (response.status >= 500) {
        const error = new Error("Server error, please try again later");
        error.status = response.status;
        throw error;
    }
    
    if (data.accessToken) {
        sessionStorage.setItem("token", JSON.stringify(data.accessToken));
        sessionStorage.setItem("uid", JSON.stringify(data.user.id));
    }
    return data
};

export const userLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("uid");

};


