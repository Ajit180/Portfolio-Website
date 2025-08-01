export const fadein = (direction,delay)=>{
    return {
        hidden:{
            y:direction=="up"?40:direction=="down"?-40:0,  
            // If direction is "up" → y = 40 (pushed down) Else if direction is "down" → y = -40 (pushed up) Else → y = 0
            x:direction =="left"?40:direction =="right"?-40:0,
        },
        show:{
            y:0,
            x:0,
            opacity:1,
            transition:{
                type:'tween',
                duration:1.2,
                dealy:delay,
                ease:[0.25,0.25,0.25,0.75],
            }
        }
    }
}

