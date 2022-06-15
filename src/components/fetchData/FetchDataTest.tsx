import React from "react";
import { useState, useEffect } from "react";

interface Photos {
  id: string;
  title: string;
  url: string;
}

function FetchDataTest() {
  const [posts, setPosts] = useState<Photos[]>([]);
  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");

    const data = await response.json();
    setPosts(data);

    if (!response.ok) {
      const msg = `An error occured: ${response.status}`;
      throw new Error(msg);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="data_container">
      {/* <h1>Fetch Data with Typescript</h1>
      <button onClick={fetchData}>Show data</button> */}

      {posts.map((pro) => {
        return (
          <div key={pro.id}>
            <h1> {pro.title} </h1>
            <img src={pro.url} alt="" />
          </div>
        );
      })}
    </div>
  );
}

export default FetchDataTest;
