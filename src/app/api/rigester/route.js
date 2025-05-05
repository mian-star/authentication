import { NextResponse } from "next/server";
import {connectionStr} from '../../../lib/db'
import {User} from '../../../lib/modal/scme'
import bcrypt from 'bcryptjs'
import mongoose from "mongoose";

// export async function GET(){
//     console.log(connectionStr);
//     return NextResponse.json({name : 'abubakr mukhtar'},{status : 200})

// }



export async function POST(req){
    // let paylord = await req.json()
    // // console.log(connectionStr);
    // await mongoose.connect(connectionStr);

    // let newData = new User(paylord)
    // let result = await newData.save();

    // return NextResponse.json({result , success : true},{status : 200})

    try {
        const {name ,email, password} = await req.json()
        const hashedpass = await bcrypt.hash(password , 10);

        await mongoose.connect(connectionStr);
        await User.create({name, email, password : hashedpass});

        return NextResponse.json({message: 'User rigestered.',success:true},{status:200})


    } catch (error) {
        return NextResponse.json({message : 'An error occurred while regestering the user.'},{status:500})
    }
}