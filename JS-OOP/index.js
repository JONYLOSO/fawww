
// Farctory fuction
function crateCicle(radiue){
    return{
        radiue,
        draw :function(){
            console.log('draw')
        }
    }
}
const cirscl = crateCicle(2);

console.log(cirscl.radiue)


// Cunstructor Fuction

function Circle(radiue){
    console.log(this)
    this.radiue =radiue;
    this.draw =function(){
        console.log('draw')
    }
}

Circle.call({},1)
Circle.apply({},[1,2,3])

const another = new Circle(1);
another.location = { x : 5}
 
const proname ='location'
another[proname] = { x : 1}

delete another['location']

let x ={value : 10}
let y = x 

x={value:20}

for(let key in another){
    if(typeof another[key] !== 'function')
    console.log(key , another[key])
}

const keys = Object.keys(another)
console.log(keys);

if('radiue' in another)
    console.log("Circle has ready")


function cccc(r){

    this.r= r;
    let deflocation={x:0,y:0};
    let d=10;
    let asdsdsad= function(){
        //..
    }
    this.getDefaultLocation=function(){
        return deflocation
    };
    
    this.draw =function(){
        asdsdsad();
        //deflo
        //tghis.r

        console.log('draw');  
    };

    Object.defineProperty(this,'deflocation', {get:function(){
            return deflocation;
        },
        set:function(value){
            if(value.x||  value.y)
                throw new Error('inv');
        }
        
    })
}

const sdasd = new cccc(10);
sdasd.getDefaultLocation()
sdasd.draw()


function stopWatch(){

    let startTime,endTime,running,duration=0;

    this.startTime =function(){
        if(running) throw new Error('Running!!!');

        running = true;
        startTime = new Date();

    }

    this.stopTime=function(){
        if(!running) throw new Error('Not Running!!!');

        running = false;
         
        endTime  = new Date();
        duration += (endTime.getTime()-startTime.getTime())/1000;

    }

    this.reset =function(){
        startTime = null;
        endTime = null;
        running = false;
        duration =0;
    }

    
    Object.defineProperty(this,'duration', 
        {get:function(){
            return deflocation;
        }
    })

    Object.defineProperty(this,'endTime', 
        {get:function(){
            return endTime;
        }
    })


}