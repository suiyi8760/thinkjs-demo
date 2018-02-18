import { queryAuthority } from "../services/user";

// use localStorage to store the authority info, which might be sent from server in actual project.
export function getAuthorized() {
  return localStorage.getItem('ztMarket-authority');
}

export function setAuthorized(authority) {
  return localStorage.setItem('ztMarket-authority', authority);
}

export function getRole() {
  return localStorage.getItem('ztMarket-role')||'guest';
}

export function setRole(role) {
  return localStorage.setItem('ztMarket-role', role);
}
