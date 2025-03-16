export const register = (user: { username: any; firstName: any; lastName: any; country: any; email: any; password: any }) => {
  console.log(user)
  const bodydata = JSON.stringify({
    username: user.username,
    name: user.firstName,
    lastname: user.lastName,
    country: user.country,
    email: user.email,
    password: user.password
  })
  return fetch ('http://192.168.1.6:4000/api/v1/auth/register', {
    method: "POST", 
    headers: {
      "Content-Type": "application/json"
    },
    body: bodydata
  })
}