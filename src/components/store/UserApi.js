import React, { createContext, useEffect, useState } from "react";

const user = createContext({
  username: "",
  addUsername: () => {},
});

const UserApi = (props) => {
  const [username, setUsername] = useState("Tushar");

  const addUsername = (user) => {
    setUsername(user);
  };

  const context = {
    username: username,
    addUsername,
  };
  const getUser = async () => {};
  useEffect(async () => {
    await getUser();
  }, []);
  return (
    <>
      <user.Provider value={context}>{props.children}</user.Provider>
    </>
  );
};

export default UserApi;
