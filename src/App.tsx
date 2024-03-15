import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Posts from "./composents/Posts";
import { useState } from "react";
import Post from "./composents/Post";

// ①インスタンスの追記(①/③)
const queryClient = new QueryClient();

function App() {
  const [postId, setPostId] = useState(-1);

  return (
    //② QueryClientProviderの追記(②/③)
    <QueryClientProvider client={queryClient}>
      {postId > -1 ? (
        <Post postId={postId} setPostId={setPostId} />
      ) : (
        <Posts setPostId={setPostId} />
      )}
    </QueryClientProvider>
  );
}

export default App;
