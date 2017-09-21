/**
 * Created by hurong on 2017/9/1.
 */
export interface ILight{
    gid:number,
    lightness?:number
}
class Light implements ILight{
    gid: number;
    lightness: number;
    constructor(gid: number, lightness: number) {
        this.gid = gid;
        this.lightness = lightness;
    }
}