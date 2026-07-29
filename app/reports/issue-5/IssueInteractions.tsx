"use client";

import { FormEvent, useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";

const ISSUE_SLUG = "issue-5";

type Comment = {
  id: number;
  issue_slug: string;
  name: string;
  comment_text: string;
  created_at: string;
};

export default function IssueInteractions() {
  const [viewCount, setViewCount] = useState<number | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [commentText, setCommentText] = useState("");
  const [isLoadingComments, setIsLoadingComments] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function loadPageData() {
      const { data: viewData, error: viewError } = await supabase.rpc(
        "increment_article_view",
        {
          slug: ISSUE_SLUG,
        }
      );

      if (viewError) {
        console.error("Unable to update article views:", viewError.message);
      } else if (typeof viewData === "number") {
        setViewCount(viewData);
      }

      const { data: commentData, error: commentError } = await supabase
        .from("comments")
        .select("id, issue_slug, name, comment_text, created_at")
        .eq("issue_slug", ISSUE_SLUG)
        .order("created_at", { ascending: false });

      if (commentError) {
        console.error("Unable to load comments:", commentError.message);
      } else {
        setComments(commentData ?? []);
      }

      setIsLoadingComments(false);
    }

    loadPageData();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const cleanName = name.trim();
    const cleanComment = commentText.trim();

    if (!cleanName || !cleanComment) {
      setMessage("Please enter your name and comment.");
      return;
    }

    setIsSubmitting(true);
    setMessage("");

    const { data, error } = await supabase
      .from("comments")
      .insert({
        issue_slug: ISSUE_SLUG,
        name: cleanName,
        comment_text: cleanComment,
      })
      .select("id, issue_slug, name, comment_text, created_at")
      .single();

    if (error) {
      console.error("Unable to post comment:", error.message);
      setMessage("Your comment couldn't be posted. Please try again.");
      setIsSubmitting(false);
      return;
    }

    setComments((currentComments) => [data, ...currentComments]);
    setName("");
    setCommentText("");
    setMessage("Thanks for joining the conversation!");
    setIsSubmitting(false);
  }

  return (
    <>
      <p className="issueViewCount">
        {viewCount === null
          ? "Loading views..."
          : `${viewCount.toLocaleString()} ${
              viewCount === 1 ? "view" : "views"
            }`}
      </p>

      <section className="discussionSection">
        <div className="discussionHeader">
          <p>DISCUSSION</p>

          <h2>Kick off the conversation.</h2>

<span>
  Which World Cup partnership stood out to you the most? I'd also love to hear
  what brands you'd like to see involved in the 2027 FIFA Women's World Cup or
  ideas for a future issue of The Ella Report.
</span>
        </div>

        <form className="commentForm" onSubmit={handleSubmit}>
          <label htmlFor="commentName">Name</label>

          <input
            id="commentName"
            name="commentName"
            type="text"
            placeholder="Your name"
            value={name}
            maxLength={50}
            onChange={(event) => setName(event.target.value)}
            required
          />

          <label htmlFor="commentText">Comment</label>

          <textarea
            id="commentText"
            name="commentText"
            placeholder="Share your thoughts..."
            rows={6}
            value={commentText}
            maxLength={1000}
            onChange={(event) => setCommentText(event.target.value)}
            required
          />

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Posting..." : "Post comment"}
          </button>

          {message && <p className="commentMessage">{message}</p>}
        </form>

        <div className="commentsList">
          {isLoadingComments ? (
            <div className="emptyComments">
              <p>Loading comments...</p>
            </div>
          ) : comments.length === 0 ? (
            <div className="emptyComments">
              <p>No comments yet.</p>
              <span>Be the first to start the discussion.</span>
            </div>
          ) : (
            comments.map((comment) => (
              <article className="commentCard" key={comment.id}>
                <div className="commentCardHeader">
                  <strong>{comment.name}</strong>

                  <time dateTime={comment.created_at}>
                    {new Date(comment.created_at).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                </div>

                <p>{comment.comment_text}</p>
              </article>
            ))
          )}
        </div>
      </section>
    </>
  );
}