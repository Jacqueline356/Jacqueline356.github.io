const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
	{
        name: "梅香如故",
        artist: '谭晶',
        url: 'https://y.qq.com/n/ryqq/songDetail/004VK7Uu1yeFLv',
        cover: 'http://p1.music.126.net/W_5XiCv3rGS1-J7EXpHSCQ==/18885211718782327.jpg?param=130y130',
      },
	  {
        name: '这些民谣 - 一次听个够',
        artist: '陈奕迅',
        url: 'https://y.qq.com/n/ryqq/songDetail/0029Zemv0kR1ur',
        cover: 'http://p2.music.126.net/Wx5GNJEpay2JbfVUJc4Aew==/109951163094853876.jpg?param=130y130',
      }
    ]
});