import { unstable_cache } from "next/cache"
import db from "../db"

export const getAllUsersWithUnstableCache = unstable_cache(
    async () => {
      return await db.user.findMany()
    },
    ['user'],
    { revalidate: 3600, tags: ['user'] }
  )


  export const getAllUsersIdWithUnstableCache = unstable_cache(
    async () => {
      return await db.user.findMany({
        select:{
            id:true
        }
      })
    },
    ['user'],
    { revalidate: 3600, tags: ['user'] }
  )