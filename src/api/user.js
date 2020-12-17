import request from "@/utils/request";

export function login(query) {
    return request({
        url: "/tenant/user/login",
        method: "post",
        data: query
    });
}

export function getInfo() {
    return request({
        url: "/tenant/user/getCurrentUserInfo",
        method: "post"
    });
}
