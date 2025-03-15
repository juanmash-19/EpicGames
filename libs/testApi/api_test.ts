const api = 'http://192.168.118.53:4000/api/v1'

export const getInfoTest = async () => {
    return await fetch(`${api}/users`)
    .then(data => data.json())
}
