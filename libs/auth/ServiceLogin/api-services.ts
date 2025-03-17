export const login = (user: { email: any; password: any }) => {
  console.log(user)
  const bodydata = JSON.stringify({
    email: user.email,
    password: user.password
  })
  return fetch ('http://192.168.26.66:4000/api/v1/auth/login', {
    method: "POST", 
    headers: {
      "Content-Type": "application/json"
    },
    body: bodydata
  })
  .then((response)=> response.json())
}