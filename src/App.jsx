import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Audios from '/audios.wav'

import Coins from '/coins.mp3'

function App() {
let words=[
    'micro',
    'amazon',
    'javascript',
    'independent',
    'butterfly',
    'game',
    'hello',
    'september',
    'swiggy',
    'dog',
    'nice',
    'nature',
    'support',
    'worship',
    'decoration',
    'temple',
    'event',
    'mashup',
    'python',
    'northeast',
    'chemistry',
    'physics',
    'mankind',
    'survey',
    'grammar',
    'world',
    'blanckit',
    'kashmir',
    'biryani',
    'chicken',
    'elephent',
]

const [gameWords,setgameWords]=useState('')

const [wordInput,setwordInput]=useState('')

const [result,setresult]=useState('')

let [time,setime]=useState(6)

const [score,setscore]=useState(0)

const [audioplay,setaudoplay]=useState(false)

 const [coinss,setcoins]=useState(false)


useEffect(()=>{
  let word =words[Math.floor(Math.random()*words.length)]
  setgameWords(word)

}, [])
// const onBtnStartHandler = () => {
//   let word = words[Math.floor(Math.random() * words.length)];
//   setgameWords(word);
// };

useEffect(()=>{
 
 if(gameWords === wordInput && wordInput !== '' ){

  let word =words[Math.floor(Math.random()*words.length)] 

  setgameWords(word)

   setime(6)
  
setscore(prev=>{
  
  return prev+1
  
})


setcoins(()=>{
  if(!coinss){
  let coin = new Audio(Coins)
  coin.play().catch(err=>console.log(err,'err'))
  setcoins(false)
  setresult('correct!')
}


})


setwordInput('')

 }
}, [wordInput])





// useEffect(() => {
//   // console.log("Updated Score:", score);
// }, [score]); 
 
useEffect(()=>{
  
  const interval =setInterval(() => {
    setime(prevtime=>{
     console.log(prevtime);
     

      if(prevtime>0){

        console.log(prevtime);

        return prevtime-1

      }else if(!audioplay){
        clearInterval(interval)
           let audiop =  new Audio(Audios)
         audiop.play().catch(err=>console.log(err))
         setaudoplay(true) 
        setresult('game over!!')
    

    setwordInput('')
    
         return 0;   
      }
      
    })
}, 1000);
 return () => clearInterval(interval); 
},[]);












  return <div>
       <div className="h-24 w-{100px} bg-neutral-600 flex justify-center items-center">
        <h1 className="text-5xl font-bold font-serif{arial} text-zinc-300 font-semibold">Word Beater</h1>
    </div>



    <div className="bg-neutral-900 h-fit">
        <div className=" flex justify-center">
         <span className="text-zinc-300 mt-10 ">Type The Given Word Within <span className="text-emerald-700">5 </span>  Seconds :</span>
        
</div>

    <div className="flex justify-center items-center">
      <h1 className="text-zinc-300 mt-10 text-8xl font-thin" id="gamewords">{gameWords}</h1>
     </div>


<div className="flex justify-center items-center">
    <input type="text" value={wordInput} disabled={result === 'game over!!'}  onChange={e=>setwordInput(e.target.value)} className="mt-12 h-9 w-3/6 rounded-2xl border-current bg-gray-400 " placeholder="   Start typing...." id="wordinput"/>
</div>
<div className="flex justify-center text-zinc-300 text-2xl ">
  <h3 className="mt-3" id="result">{result}</h3>
</div>

<div className='flex justify-center items-center'>
   <button type='button' className='text-gray-200 border bg-gray-700 mt-16 p-4 font-semibold border-none rounded-full focus:outline-none focus:ring-4 focus:ring-aqua-900 transition' /*onClick={startGame}*/>start game</button>
</div> 


<div className="flex justify-center items-center flex-row flex-wrap mt-12 text-zinc-300 text-3xl font-bold font-arial mb-6 ">
    <h3 className="p-7">Time Left : <span id="time">{time}</span></h3>
    <h3 className="mt-3 mb-3.5 p-7" >Score : <span id="score">{score}</span></h3>
</div>

<div className="flex justify-center items-end flex-wrap ">
<div className="bg-neutral-600 h-40 w-1/2 mt-8 rounded flex flex-col content-center items-center">
    <p className="text-zinc-300 mt-5 font-bold text-lg">Instructions</p>
    <p className="text-zinc-300 mt-3 text-center">Type each word in the given amount of seconds to
      score.
      To play just type the current word.
       Your scroe will reset</p>
</div>
</div>

        
    </div>
{/*<audio src="./audios.wav">hyy</audio> */}
  </div>
}

export default App



// const matchWord = ()=>{
//   if(gameWords === wordInput && wordInput !== ''){
//     let word =words[Math.floor(Math.random()*words.length)]
//   setgameWords(word)
//   setscore(prevscore=>prevscore+1)
// setwordInput('')
//   }
// }

// // matchWord()



// function finalresult(){

//  const finnalinterval=setInterval(() => {

// setime(prev=>{
//   //console.log(prev);
  
//   if(prev === 0){
//     setresult('game over')
//   }
//   return ()=>clearInterval(finnalinterval)
// })
      
// },50);


// }


        //  if(!setaudoplay){
        //   let audionetimepay =new Audio('/audios.wav')
        //   audionetimepay.play().catch(err=>console.log(err,'err'))
        //   
        //   setaudoplay(true)
        //  }