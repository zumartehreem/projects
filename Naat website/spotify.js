console.log('welcome ')
let naatIndex=0;
let audioElement= new Audio('naats/faaslon ko.mp3');

let masterPlay= document.getElementById('masterPlay')

let gif= document.getElementById('gif')

let naatItems= Array.from(document.getElementsByClassName('naatItem'))

// let naatId= parseInt(document.getElementById('id'))
let masterNaatName=document.getElementById('masterNaatName')

let progressBaar= document.getElementById('progressBaar')


let naat= [
    // {naatName: "ilahi teri chokhta", filePath:', coverPath: '13' },
    {naatName: "Faslon ko takalof hyn", filePath:'naats/faaslon ko.mp3', coverPath: 'images/download.jpeg' },
    {naatName: "Aaj ayn Nabiyo", filePath:'naats/Aaj-Aaye.mp3', coverPath: 'images/inner masjid.jpeg' },
    {naatName: "badal dy mera dil badl ", filePath:'naats/Badal-De.mp3', coverPath: 'images/madina.jpeg' },
    {naatName: "hasbi rabi jalal Allah ", filePath:'naats/Hasbi-Rabbi.mp3', coverPath: 'images/masjid.jpeg' },
    {naatName: "mera dil , meri jaan", filePath:'naats/Mera-Dil.mp3', coverPath: 'images/view.jpeg' },
    {naatName: "sarkar karam ho", filePath:'naats/Sarkar-Ka.mp3', coverPath: 'images/junaid.jpeg' }

]
naatItems.forEach((element,i) => {

    element.getElementsByTagName('img')[0].src=naat[i].coverPath
    element.getElementsByClassName('naatName')[0].innerText=naat[i].naatName;
});
//handle play/Pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity=0.5;
    }
    else{
        audioElement.pause();
         masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-circle')
    }

        
    }
)
// listen to event

audioElement.addEventListener('timeupdate', ()=>{
console.log('timeupdate')
// update seekbar
let progress= parseInt((audioElement.currentTime/audioElement.duration)*100)
// console.log(progress)
progressBaar.value=progress
})

progressBaar.addEventListener('change' ,()=>{

    audioElement.currentTime= progressBaar.value*audioElement.duration/100
})

const makeAllPlays= ()=>{

    Array.from(document.getElementsByClassName('naatItemPlay')).forEach((element)=>{

        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');


    })
}

Array.from(document.getElementsByClassName('naatItemPlay')).forEach((element)=>{

    element.addEventListener('click',(e)=>{
        console.log(e.target)
         makeAllPlays();
        ;
        //  console.log(id);
        let naatIndex = e.target.getAttribute('data-id');

        //  naatIndex= parseInt(e.currentTarget.id);
        e.target.classList.remove('fa-circle-play')
        e.target.classList.add('fa-circle-pause')

        audioElement.currentTime=0
        //  audioElement.src='naats/${naatIndex+1}.mp3`;
         audioElement.src = naat[naatIndex].filePath


         masterNaatName.innerText= naat[naatIndex].naatName
        audioElement.play();
        masterPlay.classList.remove('far fa-3x fa-play-circle')
        masterPlay.classList.add('far fa-3x fa-pause-circle')

})
})
document.getElementById('previous').addEventListener('click',()=>{

    if(naatIndex<=0){

        naatIndex=0
    }
    else{
         naatIndex -=1;
         audioElement.src = naat[naatIndex].filePath
         
        audioElement.play();
        masterPlay.classList.remove('far fa-3x fa-play-circle')
        masterPlay.classList.add('far fa-3x fa-pause-circle')
    }
})

document.getElementById('next').addEventListener('click',()=>{

    if(naatIndex>=4){

        naatIndex=0
    }
    else{
         naatIndex +=1;
         audioElement.src = naat[naatIndex].filePath
         
        audioElement.play();
        masterPlay.classList.remove('far fa-3x fa-play-circle')
        masterPlay.classList.add('far fa-3x fa-pause-circle')
    }
})