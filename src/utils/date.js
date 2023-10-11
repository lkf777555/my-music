export const formatDate = (timeStamp) => {
    if (timeStamp) {
        const date = new Date(timeStamp);
        const year = date.getFullYear();
        const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
        const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
        const hours = date.getHours() <= 9 ? `0${date.getHours()}` : date.getHours();
        const minutes = date.getMinutes() <= 9 ? `0${date.getMinutes()}` : date.getMinutes();
        const seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
        return year + "-" + month + "-" + day + "  " + hours + ":" + minutes + ":" + seconds + "";
    } else {
        return "--";
    }
};

export const formatMillisecond = (timeStamp) => {
    if (timeStamp) {
        const all = Math.floor(timeStamp / 1000);
        const minutes = Math.floor(all / 60);
        const seconds = all % 60;
        const result = minutes + ":" + (seconds < 10 ? `0${seconds}` : seconds);
        return result;
    } else {
        return "--";
    }
};
