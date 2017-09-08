export class Contact {
    public id: number;
    public firstName: string;
    public lastName: string;
    public email: string;

    constructor(

	    data ?: {
             id?: number,
             first_name?: string,
             last_name?: string,
             email?: string
        }
		/*public id?: number,
	    public firstName?: string,
	    public lastName?: string,
	    public email?: string*/
  	) {
	    Object.assign(this, data || {});
	    if(data){
	        this.firstName = data.first_name || '';
            this.lastName = data.last_name || '';
        }
    }
}
