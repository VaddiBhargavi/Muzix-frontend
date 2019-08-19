 import { Guid } from 'guid-typescript';
export interface Track
{
     mbid:Guid,
    id : number,
    name : string,
    artist : string,
    url : string,
    streamable: string,
    listeners : number
}