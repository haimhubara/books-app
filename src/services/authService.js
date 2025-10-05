export const loginUser = async (loginData) => {
    const formData = new URLSearchParams();
    formData.append("username", loginData.username);
    formData.append("password", loginData.password);
    const requestOption = {
        method: "POST",
        headers: { "Content-Type":"application/x-www-form-urlencoded" },
        body: formData
    }
    const response = await fetch(`${process.env.REACT_APP_HOST}/login`, requestOption);
    const data = await response.json();
    if (!response.ok && response.status < 500) {
       return data;
    }
    if (response.status >= 500) {
        const error = new Error("Server error, please try again later");
        error.status = response.status;
        throw error;
    }
    if (data.access_token) {
        sessionStorage.setItem("token", JSON.stringify(data.access_token));
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

    const response = await fetch(`${process.env.REACT_APP_HOST}/register`, requestOption);
    const data = await response.json();

    if (!response.ok && response.status < 500) {
       return data;
    }
    if (response.status >= 500) {
        const error = new Error("Server error, please try again later");
        error.status = response.status;
        throw error;
    }
    
    if (data.access_token) {
        sessionStorage.setItem("token", JSON.stringify(data.access_token));
        sessionStorage.setItem("uid", JSON.stringify(data.user.id));
    }
    return data
};

export const userLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("uid");

};


