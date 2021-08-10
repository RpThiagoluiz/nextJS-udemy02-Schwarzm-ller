import { useEffect, useState } from "react";
import { notificationCtx } from "../../store/notification-context";
import CommentList from "./comment-list";
import NewComment from "./new-comment";
import classes from "./comments.module.css";

function Comments(props) {
  const { eventId } = props;
  const { showNotification } = notificationCtx();

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    showNotification({
      title: "Take comments...",
      message: "fetch comments in data base",
      status: "pending",
    });

    const fetchComments = async () => {
      if (showComments) {
        try {
          const response = await fetch(`/api/comments/${eventId}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (response.status !== 200) {
            throw new Error();
          }

          const { comments } = await response.json();
          console.log(`comments`, comments);
          if (comments.length !== 0) {
            setComments(comments);
            showNotification({
              title: "Success",
              message: "Comments success load.",
              status: "success",
            });
          } else {
            throw new Error();
          }
        } catch (error) {
          showNotification({
            title: "Error",
            message: "Error when try loading comments...",
            status: "error",
          });
        }
      }
    };
    fetchComments();
  }, [showComments]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  async function addCommentHandler(commentData) {
    showNotification({
      title: "Sending comment...",
      message: "Your comment is currently being stored into a database.",
      status: "pending",
    });
    const response = await fetch(`/api/comments/${eventId}`, {
      method: "POST",
      body: JSON.stringify(commentData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    try {
      await response.json();
      if (response.status !== 201) {
        throw new Error();
      }
      showNotification({
        title: "Success",
        message: "Your comment is post in database.",
        status: "success",
      });
    } catch (error) {
      showNotification({
        title: "Error",
        message: "Error when try post your comments...",
        status: "error",
      });
    }
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList comments={comments} />}
    </section>
  );
}

export default Comments;
