import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

// Environment variable check
if (!process.env.MONGO_DB_URI) {
  throw new Error("MONGO_DB_URI is not defined");
}

const client = new MongoClient(process.env.MONGO_DB_URI);
const db = client.db(process.env.AUTH_DB_NAME || "auth_db"); // Default db name jodi na thake

export const auth = betterAuth({

  database: mongodbAdapter(db), 

  emailAndPassword: {
    enabled: true,
  },

  session: {
    expiresIn: 60 * 60 * 24 * 7,
    updateAge: 60 * 60 * 24,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    },
  },

  
  user: {
    additionalFields: {
      role: {
        default:"reader"
        
      }
    },
  },
});