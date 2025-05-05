import { NextResponse } from "next/server";
import {connectionStr} from '../../../lib/db'
import mongoose from "mongoose";
import {User} from '../../../lib/modal/scme'

export async function POST(req){
   try {
    const {email} = await req.json()
    await mongoose.connect(connectionStr)

    const user = await User.findOne({email}).select("_id");

    return NextResponse.json({user,success:true},{status:200})
    
   } catch (error) {
       console.log(error);
   }
}