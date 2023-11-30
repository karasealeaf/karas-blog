// "use client";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { WEB_SITE } from "config";

import FormStatusButton from "./FormStatusButton";
import { saveComment } from "@/lib/comments";

import { revalidatePath } from "next/cache";



export function CommentForm({ postSlug }: { postSlug: string }) {
  console.log("This is running on the browser");
 

  async function handleFormSubmit(formData : FormData) {
    'use server'
    console.log("submiting the form");


    const username = formData.get('username') as string
    const comment = formData.get('comment') as string
    await saveComment(username, comment, postSlug)
revalidatePath (`/blog${postSlug}`)
  }


  return (
    <form action={handleFormSubmit}>
      <label htmlFor="username">Name</label>
      <input type="text" name="username" className="text-neutral-900" />
      <label htmlFor="comment">Comment</label>
      <textarea
        name="comment" cols={30} rows={10} className="text-neutral-900" />
        <FormStatusButton />
      </form>
  );
}
