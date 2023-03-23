import User from "./User";

const UserList = () => {
  return (
    <div>
      <User
        name={"Dwayne Bravo"}
        email="champion.bravo@gmail.com"
        avatar={
          "https://images.unsplash.com/photo-1677942449683-f2ca4768d67b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=396&q=80"
        }
        bio="A Javascript developer from gotham city that fights crime by day and codes by night"
      />
      <User
        name={"Dwayne Bravo"}
        email="champion.bravo@gmail.com"
        avatar={
          "https://images.unsplash.com/photo-1677942449683-f2ca4768d67b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=396&q=80"
        }
        bio="A Javascript developer from gotham city that fights crime by day and codes by night"
      />
    </div>
  );
};

export default UserList;
