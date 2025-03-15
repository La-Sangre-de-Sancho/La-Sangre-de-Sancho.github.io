var posts=["2025/03/04/Round-and-Round-We-Go/","2025/03/04/hello-world/","2025/03/03/article-title/","2025/03/03/xiaoshiji1/","2025/03/03/xiaoshiji2/","2025/03/08/yibairihou/","2025/03/15/Psychological Statistics_2/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };