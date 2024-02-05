class Sprite{
    constructor(imageSrc,position={x:0,y:0}){
        this.imageSrc=imageSrc
        this.position=position
        this.ctx=''
    }

    draw(ctx){
        this.ctx=ctx
        this

    }
}