"use client";
import { db } from "../firebase/firebase";

export default function HomePage() {
  console.log("Firestore DB:", db);
  return <h1>Firebase is set up!</h1>;
}
