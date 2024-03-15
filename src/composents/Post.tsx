import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

interface Props {
  postId: number;
  setPostId: React.Dispatch<React.SetStateAction<number>>;
}

const Post = ({ postId, setPostId }: Props) => {
  //③ useQueryの追記(③/③)
  const { data, status, error, isFetching } = useQuery({
    queryKey: ["post", postId],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      return data;
    },
    enabled: !!postId,
  });

  if (error) {
    return <div>エラーが発生しました。</div>;
  }

  return (
    <div>
      <div>
        <a href="#" onClick={() => setPostId(-1)}>
          戻る
        </a>
      </div>
      {status === "pending" ? (
        <>読み込み中...</>
      ) : (
        <>
          <h1>{data.title}</h1>
          <div>{data.body}</div>
        </>
      )}
    </div>
  );
};

export default Post;
