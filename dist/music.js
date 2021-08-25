const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
	{
        name: "梅香如故",
        artist: '谭晶',
        url: 'https://www.kugou.com/song/#hash=29AF83808D63E5CC0F7E2245BE1D1133&album_id=40914405',
        cover: 'https://imgessl.kugou.com/stdmusic/20210101/20210101203607104616.jpg',
      },
	  {
        name: '葡萄成熟时',
        artist: '陈奕迅',
        url: 'https://www.kugou.com/song/#hash=27B21D998C557F16D022EECC7DC1305C&album_id=968210',
        cover: 'https://imgessl.kugou.com/stdmusic/20150720/20150720204638350144.jpg',
      }
    ]
});