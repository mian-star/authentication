import RigesterFile from '../../component/RigesterFile'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '../../lib/authOptions';

export default async function page(){
     const session = await getServerSession(authOptions);

     if(session) redirect('/deshbord') 
    console.log(authOptions);
    
    return(
        

        <RigesterFile />
    )
}