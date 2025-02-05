// helper function to get the current User

import db from "../db";


export async function getCurrentUserById(userId: string) {
  try {
    const existingUser = await db.user.findUnique({
      where: {
        id: userId,
      },
    });

    return existingUser;
  } catch (error) {
    console.log("an error occured while trying to get current user");
    return null;
  }
}

export async function getCurrentUserByEmail(userEmail: string) {
  try {
    const existingUser = await db.user.findUnique({
      where: {
        email: userEmail,
      },
    });

    return existingUser;
  } catch (error) {
    console.log("an error occured while trying to get current user");
    return null;
  }
}