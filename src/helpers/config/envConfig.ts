export const getBaseUrl = ():string => {
    
    return process.env.NEXT_PUBLIC_API_BASE_URL || "https://assignment-9-server-b89xfon2g-habibtusher.vercel.app/api/v1"
}