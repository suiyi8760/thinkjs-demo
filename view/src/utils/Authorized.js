import RenderAuthorized from '../components/Authorized';
import { getRole } from './authority';
import { queryAuthority } from "../services/api";

const Authorized = RenderAuthorized(getRole());
const getAuthority = (authorRole) => {
  return new Promise(((resolve, reject) => {
    queryAuthority()
      .then(({ role }) => {
        console.log(authorRole,role);
        if (Array.isArray(authorRole)) {
          if (authorRole.indexOf(role) >= 0) {
            return resolve(authorRole);
          }
        }

        if (typeof authorRole === 'string') {
          if (role === authorRole) {
            return resolve(role);
          }
        }
        reject(authorRole);
      })
  }))
}

export { getAuthority };
export default Authorized;
