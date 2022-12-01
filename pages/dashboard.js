import { auth } from "../utils/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const route = useRouter();
  const [user, loading] = useAuthState(auth);

  //See if user is logged
  const getData = async () => {
    if (loading) return;
    if (!user) return route.push("/auth/login");
  };

  //Get users data
  useEffect(() => {
    getData();
  }, [user, loading]);

  return (
    <div>
      <h1>Your posts</h1>
      <div>posts</div>
      <button onClick={() => auth.signOut()}>Sign out</button>
    </div>
  );
}

//currently at 54:35 of https://www.youtube.com/watch?v=o7jTN4s78GQ&t=16s
