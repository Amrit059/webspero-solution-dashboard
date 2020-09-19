export class UserModel {
    _id: string;
    name?: string;
    password?: string;
    email?: string;
    phoneNo?: string;
    mobileNo?: string;
    // location?: LocationDocument;
    profilePic?: string;
    zipCode?: Number;
    lat?: Number;
    lng?: Number;
    isActive?: Boolean;
    createdAt?: Date;
    token?:string
}