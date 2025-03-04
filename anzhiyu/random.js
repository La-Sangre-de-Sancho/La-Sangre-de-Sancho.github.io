var posts=["2025/03/04/Round-and-Round-We-Go/","2025/03/04/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };