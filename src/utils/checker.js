export function tokenChecker() {
  let token = localStorage.getItem("authToken");
  if (!token) return false;
  token = JSON.parse(token);
  return token.token;
}

export function adminChecker() {
  let user = localStorage.getItem("user");
  if (!user) return false;
  user = JSON.parse(user);
  if (user.role !== "admin") return false;
  return true;
}
