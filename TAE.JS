console.log("WElcome to Musically");
let songIndex =0;
let audioElement =new Audio('1.mp3');
let masterPlay =document.getElementById('masterPlay');
let myprogress =document.getElementById('myprogress');
let songs=[
    {songName: "Salame-e-Ishq", filePath:"song/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Salame-e-Ishq", filePath:"song/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Salame-e-Ishq", filePath:"song/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Salame-e-Ishq", filePath:"song/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Salame-e-Ishq", filePath:"song/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Salame-e-Ishq", filePath:"song/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Salame-e-Ishq", filePath:"song/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Salame-e-Ishq", filePath:"song/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Salame-e-Ishq", filePath:"song/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Salame-e-Ishq", filePath:"song/1.mp3", coverPath:"covers/1.jpg"},
]

myprogress.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
})