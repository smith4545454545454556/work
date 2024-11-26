import axios from "axios"
export const data = async () => {
    const response = await axios({
        url: "/api/jdata",
        method: "POST",
        data: { name: "smith" }
    })
    return response
}