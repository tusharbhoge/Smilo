"use server"
import { prisma } from "@/lib/prisma"
import { currentUser } from "@clerk/nextjs/server"

export async function syncUser(){
    try{
        const user = await currentUser();
        if (!user) return;

        const existingUser = await prisma.user.findUnique({
            where: { clerkId: user.id }
        })

        if(existingUser) return existingUser;

        const dbUser = await prisma.user.create({
            data: {
                clerkId: user.id,
                email: user.emailAddresses[0].emailAddress ,
                firstName: user.firstName || "",
                lastName: user.lastName || "",
                phone : user.phoneNumbers[0]?.phoneNumber || "",
            }
                
        })
        return dbUser;

    }catch(e){
        console.error("Error syncing user:", e);
    }
}