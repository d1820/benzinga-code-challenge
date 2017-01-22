import store2 from 'store2';

export default class SessionManager {
  save(sessionId, obj) {
    store2.session(sessionId, obj.toJson());
  }
  load(sessionId) {
    const result = store2.session(sessionId);
    if (result) {
      return result.toObject();
    }
    return null;
  }
}
export const sessionManager = new SessionManager();
