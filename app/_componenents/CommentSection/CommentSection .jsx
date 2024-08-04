"use client"
import React, { useState, useEffect } from 'react';
import { getComments, addComment, updateComment, deleteComment } from '../../../indexDB';

const CommentSection = ({ slug }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    getComments(slug).then(setComments);
  }, [slug]);

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment = { slug, text: newComment, replies: [] };
      addComment(comment).then(() => {
        getComments(slug).then(setComments);
        setNewComment('');
      });
    }
  };

  const handleUpdateComment = (id, newText) => {
    const updatedComment = comments.find((comment) => comment.id === id);
    updatedComment.text = newText;
    updateComment(updatedComment).then(() => {
      getComments(slug).then(setComments);
    });
  };

  const handleDeleteComment = (id) => {
    deleteComment(id).then(() => {
      getComments(slug).then(setComments);
    });
  };

  const handleAddReply = (commentId, replyText) => {
    if (replyText.trim()) {
      const updatedComment = comments.find((comment) => comment.id === commentId);
      updatedComment.replies.push({ id: Date.now(), text: replyText });
      updateComment(updatedComment).then(() => {
        getComments(slug).then(setComments);
      });
    }
  };

  const handleUpdateReply = (commentId, replyId, newText) => {
    const updatedComment = comments.find((comment) => comment.id === commentId);
    const reply = updatedComment.replies.find((reply) => reply.id === replyId);
    reply.text = newText;
    updateComment(updatedComment).then(() => {
      getComments(slug).then(setComments);
    });
  };

  const handleDeleteReply = (commentId, replyId) => {
    const updatedComment = comments.find((comment) => comment.id === commentId);
    updatedComment.replies = updatedComment.replies.filter((reply) => reply.id !== replyId);
    updateComment(updatedComment).then(() => {
      getComments(slug).then(setComments);
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-8 overflow-y-auto bg-gray-100 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-6 text-center">Comments</h3>
      <div className="flex mb-6">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="flex-1 p-4 border-2 border-gray-300 rounded-lg mr-2 outline-none focus:border-blue-500 transition-all duration-300"
        />
        <button onClick={handleAddComment} className="p-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-600 transition-all duration-300">
          Post
        </button>
      </div>
      <ul>
        {comments.map((comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
            onEdit={handleUpdateComment}
            onDelete={handleDeleteComment}
            onAddReply={handleAddReply}
            onEditReply={handleUpdateReply}
            onDeleteReply={handleDeleteReply}
          />
        ))}
      </ul>
    </div>
  );
};

const CommentItem = ({ comment, onEdit, onDelete, onAddReply, onEditReply, onDeleteReply }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(comment.text);
  const [replyText, setReplyText] = useState('');
  const [showAllReplies, setShowAllReplies] = useState(false);
  const [showReplyField, setShowReplyField] = useState(false);
  const [editReplyId, setEditReplyId] = useState(null);
  const [replyEditText, setReplyEditText] = useState('');

  const handleEdit = () => {
    onEdit(comment.id, editText);
    setIsEditing(false);
  };

  const handleReply = () => {
    if (replyText.trim()) {
      onAddReply(comment.id, replyText);
      setReplyText('');
      setShowReplyField(false);
    }
  };

  const handleReplyEdit = (replyId, text) => {
    setEditReplyId(replyId);
    setReplyEditText(text);
  };

  const handleSaveReplyEdit = (replyId) => {
    onEditReply(comment.id, replyId, replyEditText);
    setEditReplyId(null);
    setReplyEditText('');
  };

  const handleDeleteReply = (replyId) => {
    onDeleteReply(comment.id, replyId);
    setEditReplyId(null);
    setReplyEditText('');
  };

  return (
    <li className="mb-6 p-6 bg-white rounded-lg overflow-y-auto shadow-lg">
      {isEditing ? (
        <div className="flex mb-4">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="flex-1 p-4 border-2 border-gray-300 rounded-lg mr-2 outline-none focus:border-blue-500 transition-all duration-300"
          />
          <button onClick={handleEdit} className="p-4 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg shadow-md hover:from-green-600 hover:to-teal-600 transition-all duration-300">
            Save
          </button>
        </div>
      ) : (
        <div className="mb-4 flex justify-between items-center">
          <p>{comment.text}</p>
          <div>
            <button onClick={() => setIsEditing(true)} className="text-blue-500 mr-4 hover:underline">Edit</button>
            <button onClick={() => onDelete(comment.id)} className="text-red-500 mr-4 hover:underline">Delete</button>
            <button onClick={() => setShowReplyField(!showReplyField)} className="text-blue-500 hover:underline">Reply</button>
          </div>
        </div>
      )}
      {showReplyField && (
        <div className="flex mb-4">
          <input
            type="text"
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Write a reply..."
            className="flex-1 p-4 border-2 border-gray-300 rounded-lg mr-2 outline-none focus:border-blue-500 transition-all duration-300"
          />
          <button onClick={handleReply} className="p-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-600 transition-all duration-300">
            Post
          </button>
        </div>
      )}
      {comment.replies.length > 1 && !showAllReplies && (
        <button onClick={() => setShowAllReplies(true)} className="text-blue-500 hover:underline">
          +{comment.replies.length - 1} more
        </button>
      )}
      {comment.replies.length > 1 && showAllReplies && (
        <button onClick={() => setShowAllReplies(false)} className="text-blue-500 hover:underline">
          Hide replies
        </button>
      )}
      <ul className="pl-4 mt-4">
        {comment.replies.slice(0, showAllReplies ? comment.replies.length : 1).map((reply) => (
          <li key={reply.id} className="mb-4">
            {editReplyId === reply.id ? (
              <div className="flex mb-4">
                <input
                  type="text"
                  value={replyEditText}
                  onChange={(e) => setReplyEditText(e.target.value)}
                  className="flex-1 p-4 border-2 border-gray-300 rounded-lg mr-2 outline-none focus:border-blue-500 transition-all duration-300"
                />
                <button onClick={() => handleSaveReplyEdit(reply.id)} className="p-4 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg shadow-md hover:from-green-600 hover:to-teal-600 transition-all duration-300">
                  Save
                </button>
                <button onClick={() => handleDeleteReply(reply.id)} className="p-4 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg shadow-md hover:from-red-600 hover:to-pink-600 transition-all duration-300">
                  Delete
                </button>
              </div>
            ) : (
              <div className="flex justify-between items-center">
                <p>{reply.text}</p>
                <div>
                  <button onClick={() => handleReplyEdit(reply.id, reply.text)} className="text-blue-500 mr-4 hover:underline">Edit</button>
                  <button onClick={() => handleDeleteReply(reply.id)} className="text-red-500 hover:underline">Delete</button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </li>
  );
};

export default CommentSection;
