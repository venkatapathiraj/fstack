// function evenoreodd(n){
//     if(n%2==0)
//     console.log('given number is even')
//     if(n%2==1)
//     console.log('given number is odd')
// }
// evenoreodd(21)

// function eveorodd(n){
//     if(n%2==0){
//         console.log('the gieven number is even')
//     }else{
//         console.log('the given number is odd')
//     }
//     }
// eveorodd(12)

//all then even numbers from given number

// var a=[]
// function eve(n){
//     for(var i=0;i<=n;i++){
//         if(i%2==0)
//             a.push(i)
//     }
// }
// eve(10)
// console.log(a)


// var ever=[]
// function evere(n){
//     for(var i=0;i<n;i++){
//         if(i%2==0)
//             ever.unshift(i)
//     }
// }
// evere(100)
// console.log(ever)

// function evre(n){
//     for (var i=n;i<=n;i--){
//         if(i%2==0)
//         console.log(i)
//         if(i==0)
//         break
        
//     }
// }
// evre(10)



// var evsu=0;
// function sumofev(n){
//     for(i=0;i<=n;i++){
//         if(i%2==0)
//             evsu +=i
//     }
// }
// sumofev(10)
// console.log(evsu)


// var evsu=0;
// function sumofev(n){
//     for(i=0;i<=n;i++){
//         if(i%2==1)
//             evsu +=i
//     }
// }
// sumofev(10)
// console.log(evsu)

// fa=1
// function fact(n){
//     for(var i=1;i<=n;i++){
//        fa *=i
        
//     }
// }
// fact(6)
// console.log(fa)

// function eve(n){
//     for(var i=n;i>=0;i--){
//         if(i%2==0)
//         console.log(i)
//     }
// }
// eve(10)

// function eveorodd(n){
//     if(n%2==0){
//         return "the given number is even"
//     }else{
//         return "the given number is odd"
//     }
// }
// console.log(eveorodd(10))

// var emp = {
// 	id:1201,
// 	ename:'raj',
// 	esal:20000,
// 	grade:"L2",
// 	dept:"fullstack",
// 	position:function(){
// 			if(emp.esal>=24000){
//                 return ('is team lead')
//             }else if(emp.esal>=20000){
//                 return ('is senior dev')
//             }else if(emp.esal>=11200){
//                 return (emp.ename+" "+'is associate dev')
//             }
//     }

// }
// var a =emp.position()
// console.log(a)

// var emp = {
// 	id:1201,
// 	ename:'raj',
// 	esal:19999,
// 	grade:"L2",
// 	dept:"fullstack",
// 	position:function(){
// 			if(emp.esal>=24000){
//                 console.log ('is team lead')
//             }else if(emp.esal>=20000){
//                 console.log ('is senior dev')
//             }else if(emp.esal>=11200){
//                 console.log (emp.ename+" "+'is associate dev')
//             }
//     }

// }
// emp.position()



// function gettotal(){
//     var std =[{
//         id:1201,
//         name:'raj',
//         m1:45,
//         m2:46,
//         m3:45,
//         m4:35,
//         m5:43,
//         m6:45,
//         m7:56
//     },{
//         id:1202,
//         name:'sai',
//         m1:43,
//         m2:43,
//         m3:41,
//         m4:32,
//         m5:43,
//         m6:45,
//         m7:57
//     },
//     {
//         id:1203,
//         name:'jai',
//         m1:41,
//         m2:40,
//         m3:47,
//         m4:38,
//         m5:41,
//         m6:49,
//         m7:51
//     },
//     {
//         id:1204,
//         name:'dora',
//         m1:45,
//         m2:46,
//         m3:45,
//         m4:35,
//         m5:43,
//         m6:45,
//         m7:56
//     },{
//         id:1205,
//         name:'siva',
//         m1:45,
//         m2:46,
//         m3:45,
//         m4:35,
//         m5:43,
//         m6:45,
//         m7:56
//     }]

//     std.forEach(function(val,ind){
       
//         console.log ({name:val.name,total:val.m1+val.m2+val.m3+val.m4+val.m5+val.m6+val.m7})
        

//     }
        
//     )
// }
// gettotal()

// var std = [
//     {id:101,name:'raj',m1:41,m2:43,m3:45,m4:44,m5:43,m6:40,m7:41,},
//     {id:102,name:'jai',m1:42,m2:43,m3:45,m4:44,m5:43,m6:40,m7:41,},
//     {id:103,name:'dora',m1:43,m2:43,m3:45,m4:44,m5:43,m6:40,m7:41,},
//     {id:104,name:'siva',m1:44,m2:43,m3:45,m4:44,m5:43,m6:40,m7:41,},
//     {id:105,name:'venky',m1:45,m2:43,m3:45,m4:44,m5:43,m6:40,m7:41,},
//     {id:106,name:'phani',m1:44,m2:43,m3:45,m4:44,m5:43,m6:40,m7:41,},
//     {id:107,name:'sanjay',m1:46,m2:43,m3:45,m4:44,m5:43,m6:40,m7:41,},
//     {id:108,name:'pranay',m1:45,m2:43,m3:45,m4:44,m5:43,m6:40,m7:41,},
//     {total:function(){
//         for(i=0;i<std.length-1;i++)
//         console.log({Name:std[i].name,TotalMarks:std[i].m1+std[i].m2+std[i].m3+std[i].m4+std[i].m5+std[i].m6+std[i].m7})
//     }}
// ]
// std[8].total()

// var std = [
//     {id:101,name:'raj',m1:41,m2:43,m3:45,m4:44,m5:43,m6:40,m7:41,},
//     {id:102,name:'jai',m1:42,m2:43,m3:45,m4:44,m5:43,m6:40,m7:41,},
//     {id:103,name:'dora',m1:43,m2:43,m3:45,m4:44,m5:43,m6:40,m7:41,},
//     {id:104,name:'siva',m1:44,m2:43,m3:45,m4:44,m5:43,m6:40,m7:41,},
//     {id:105,name:'venky',m1:45,m2:43,m3:45,m4:44,m5:43,m6:40,m7:41,},
//     {id:106,name:'phani',m1:44,m2:43,m3:45,m4:44,m5:43,m6:40,m7:41,},
//     {id:107,name:'sanjay',m1:46,m2:43,m3:45,m4:44,m5:43,m6:40,m7:41,},
//     {id:108,name:'pranay',m1:45,m2:43,m3:45,m4:44,m5:43,m6:40,m7:41,},
//     {gettotal:function(){
//         std.forEach(function(val,ind){
//             if(ind<std.length-2)
//                 console.log({Name:val.name,TotalMarks:val.m1+val.m2+val.m3+val.m4+val.m5+val.m6+val.m7})
             
//         })
//     }},
//     {specific:function(name){
//         std.filter(function(val,ind){
//             if(name==val.name)
//             console.log({Name:val.name,TotalMarks:val.m1+val.m2+val.m3+val.m4+val.m5+val.m6+val.m7})
//             return true
//         })
//     }}
// ]
// std[8].gettotal()
// std[9].specific('dora')

// var std = [
//     {id:101,name:'raj',m1:41,m2:43,m3:45,m4:44,m5:43,m6:40,m7:41,},
//     {id:102,name:'jai',m1:42,m2:43,m3:45,m4:44,m5:43,m6:40,m7:41,},
//     {id:103,name:'dora',m1:43,m2:43,m3:45,m4:44,m5:43,m6:40,m7:41,},
//     {id:104,name:'siva',m1:44,m2:43,m3:45,m4:44,m5:43,m6:40,m7:41,},
//     {id:105,name:'venky',m1:45,m2:43,m3:45,m4:44,m5:43,m6:40,m7:41,},
//     {id:106,name:'phani',m1:44,m2:43,m3:45,m4:44,m5:43,m6:40,m7:41,},
//     {id:107,name:'sanjay',m1:46,m2:43,m3:45,m4:44,m5:43,m6:40,m7:41,},
//     {id:108,name:'pranay',m1:45,m2:43,m3:45,m4:44,m5:43,m6:40,m7:41,},
//     {set:function(name){
//         for(i=0;i<std.length-1;i++){
//                 console.log({name:std[i].name,total:std[i].m1+std[i].m2+std[i].m3+std[i].m4+std[i].m5+std[i].m6+std[i].m7})            
//         }
//     }}

// ]
// std[8].set()

//

// var std ={
// id:101,
// name:"pranay",
// m1:80,
// m2:90,
// m3:70,
// m4:60,
// m5:50,
// m6:40
// }

// var total = std.m1+std.m2+std.m3+std.m4+std.m5+std.m6

// console.log(total)


// if(total>=500){
//     console.log(std.name+" "+"grade is"+" " +"A")
// }
// if(total>=400 && total<500){
//     console.log(std.name+" "+"grade is"+" " +"B")
// }
// if(total>=300 && total<400){
//     console.log(std.name+" "+"grade is"+" " +"C")
// }
// if(total>=200 && total<300){
//     console.log(std.name+" "+"grade is"+" " +"D")
// }
// if(total<200){
//     console.log(std.name+" "+"grade is"+" " +"FAIL")
// }
// var n=0;
// while(n<=1000){
//     if(n%2==0){
//         console.log(n)
//     }
//     n++
// }

// var arr = [24,32,96,108,102,101,302,306,109,1006]
// var i=0;
// var j=0;
// while(i<arr.length){
//     j +=arr[i]
//     i++
// }
// console.log(j)
// var i=0
// var arr = [24,32,96,108,102,101,302,306,109,1006]
// while(i<arr.length){
    
//     console.log(arr[i])
//     i++;
// }


// function calamount(n){
//     if(n>600){
//         console.log("The Amount for"+" "+n+"units are"+" "+n*8+"Rs/-"+" (8Rupees/unit)")
//     }
//     if(n>=400 && n<=600){
//         console.log("The Amount for"+" "+n+"units are"+" "+n*6.50+"Rs/-"+" (6.50Rupees/unit)")
//     }
//     if(n>=200 && n<=400){
//         console.log("The Amount for"+" "+n+"units are"+" "+n*4.50+"Rs/-"+" (4.50Rupees/unit)")
//     }
//     if(n<200){
//         console.log("The Amount for"+" "+n+"units are"+" "+n*3+"Rs/-"+" (3Rupees/unit)")
//     }
// }
// calamount(300)