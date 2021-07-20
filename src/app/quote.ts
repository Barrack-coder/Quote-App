export class Quote {
    [x: string]: any;
    likes: any;
    unlikes: any;
	  constructor(public name:string,public author:string, public description:string,public date:Date){
        
    }
}
