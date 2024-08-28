const storagePrefix = "ecom__";

export const storage = {
  getToken: () => {
    return JSON.parse(localStorage.getItem(`${storagePrefix}token`) as string);
  },
  setToken: (accessToken: string) => {
    localStorage.setItem(`${storagePrefix}token`, JSON.stringify(accessToken));
  },
  clearToken: () => {
    localStorage.removeItem(`${storagePrefix}token`);
  },
};
