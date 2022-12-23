
// const nb1=prompt("entrez le premier nombre")
// const nb2=prompt("entrez le deuxieme nombre")
// if(nb1>nb2)
// {

//     console.log (nb1+" est plus grand que "+nb2)
// }
// else if(nb1<nb2)
// {
//  console.log(nb1+" est plus petit que "+ nb2) 
// }
// else {console.log("c'est le meme nombre") } 
//switch
// somme n number
 //let n=Number(prompt("donnez un nombre"))
// let res=0

/********************************************************************************************************* */
// for(let i=0;i<=n;i++)
// {
//   res=res+i
// }
// console.log(res)
//let i=1, res=0                                                                                             
// while(i<=n){
//     res+=i
//     i++;
// }
// console.log(res)

// function fact(n){
//     if(n==0 || n==1) 
//     {
//         return 1
//     }
//     else{
//         return n*fact(n-1);
//     }
// }
// console.log(fact(n))

// let a=Number(prompt("entrer le premier nombre"))
// let b=Number(prompt("entrer le deuxieme nombre"))
// let num1,num2
// num1=a, num2=b
// while(num1!=num2)
// {
//     if(num1>num2)
//        num2+=b
//     else
//     num1+=a
    
// }
// console.log(num1)
/*******************************************************************************************************************************/
// const x=Math.floor(Math.random()*100)
// let dev=Number(prompt("entrer un nombre"))
// let compt=0
// while(x!=dev){
 
//     if(dev<x)
//     {
        
//          dev=Number(prompt("le nombre est plus grand que ça \n entrer un nombre"))
//          compt+=1
//     }
//     else if(dev>x)
//     {
       
//         dev=Number(prompt("le nombre est plus petit que ça \n entrer un nombre"))
//         compt+=1
//    }
    
   
// }
// console.log(compt)
/*************************************  Message  **********************************************************************************************/
/*function message(){
     console.log("Copilote")
}
message()*/
/************************************    SQUAR     *************************************************************************************************/
// let n
// let res=0
// function Square(n){
//      n=Number(prompt("donnez un nombre"))
//      res=n*n
//      console.log(res)
// }
// Square(n)
/***************************************   Lenght  ************************************************************************************************/

// let res=0
// let i=0
// function longueur(array){
//     while(array[i]!=undefined)
//     {
//     res++
//    i++
//     }
   
//     return res                                                                                                                                                                                                                                                
// }
// console.log(longueur("kenza"))
/****************************************  Random ******************************************************************************************************* */
// function rund(){
//      console.log(Math.floor(Math.random()*100))
// }
// rund()
/**************************************** reverse ************************************************************************************************************/

// function revers(array,lon){
//      try {
         
//           for(let i=array.length -1;i >= 0;i--)
//           {
//                  console.log('for', array[i])
//           }
        
//      }
//      catch(err){
//           console.log('error', err);
//      }
    
// }
// let str=prompt("entrer une valeur")
//  let long=str.length
// revers(str,long)

// function revers(array){
    
//      let s=array.length
//      const a=[]
//      for (let i=1;i<=s;i++)
//      {
//           a[i]=array[s-i]
//      }

//     return a.toString
// }
// console.log(revers("123"))
/***********************************************Annonymos functions***********************************************/
// let lettres=function(str,lett){
//      let compt=0
//      for(let i=0;i<=str.length-1;i++)
//      {
//           if(str[i]==lett)
//           {
//              compt++
//           }
//      }
//      return compt
// }
// console.log(lettres("khadija","a"))
/******************************************** Binnary search *********************************************************************/
let binnary=function(t,x){
     let debut=0,fin=t.length,milieu ,find=false
     
     while(find==false & debut<fin)
     {
         
          milieu=Math.floor((debut+fin)/2);
          if(t[milieu]===x){
               
               return "le nombre existe dand la position "+ milieu;
             }
          else if(t[milieu]>x)
          {
              
               fin=milieu-1;
          }
          else{
               
               debut=milieu+1;
          }
     }
return "le nombre n'existe pas !!"
}
p=Number(prompt("entrez le nombre a rechercher :"))
const tab=[1,2,7,46,58,80,102,200,256,500];
console.log( binnary(tab,p));

