const storage = JSON.parse(localStorage.getItem("user")) || {};

export const CookieParams = () => {
    if (storage.hasOwnProperty("userCookie")) {
        return encodeURIComponent(storage.userCookie);
    }
};
