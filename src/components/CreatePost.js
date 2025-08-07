import React, { useRef, useState } from 'react';

function CreatePost({ onPost }) {
  const [showModal, setShowModal] = useState(false);
  const [_, forceRerender] = useState();

  const handlePost = (text, imgData) => {
    const oldPosts = JSON.parse(localStorage.getItem('feedPosts')) || [];
    const existingUser = JSON.parse(localStorage.getItem('currentUser')) || {};
    const newPost = {
      id: Date.now(),
      userProfile: {
        userName: existingUser.name || "Anonymous",
        userImage: 'https://i.pinimg.com/474x/bd/26/b7/bd26b704fca0c5e3fe68f10322bf65c0.jpg',
        followBtn: false,
      },
      userPost: {
        discription: text,
        postImage: imgData || "",
        alt: "userPost"
      },
      timestamp: new Date().toISOString(),
      likes: 0,
      comments: [],
      tags: [],
      location: "",
      likedBy: []
    };
    // 3. Save to localStorage (new post at the top)
    localStorage.setItem('feedPosts', JSON.stringify([newPost, ...oldPosts]));
    // 4. Optionally notify parent (if you want live feed update)
    onPost && onPost(newPost);
    // 5. Rerender local UI if used without parent
    forceRerender({});
    // 6. Scroll to top
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      <div
        className="create-post-trigger"
        onClick={() => setShowModal(true)}
        style={{
          background: "#fff",
          borderRadius: "14px",
          boxShadow: "0 2px 12px #1d24410c, 0 1.5px 5px #cecfdd23",
          padding: "1rem 1.5rem",
          minHeight: 0,
          marginBottom: "2rem",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          fontSize: "1.07rem",
          height: 20,
          color: "#555e74"
        }}
      >
        <span
          style={{
            display: "block",
            background: "#e7eaf0",
            width: 38,
            height: 38,
            borderRadius: "50%",
            marginRight: 16,
            backgroundImage: 'url(https://i.pinimg.com/474x/bd/26/b7/bd26b704fca0c5e3fe68f10322bf65c0.jpg)',
            backgroundSize: "cover"
          }}
        />
        Start a post...
      </div>
      {showModal && (
        <CreatePostModal
          onClose={() => setShowModal(false)}
          onPost={(t, i) => {
            handlePost(t, i);
            setShowModal(false);
            window.location.reload();
          }}
        />
      )}
    </>
  );
}

function CreatePostModal({ onClose, onPost }) {
  const [text, setText] = useState("");
  const [imgData, setImgData] = useState(null);
  const fileInputRef = useRef();

  // Handle file upload as base64
  const handleImageChange = e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => setImgData(ev.target.result);
    reader.readAsDataURL(file);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onPost(text.trim(), imgData || "");
      setText("");
      setImgData(null);
    }
  };

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
      background: "rgba(25,27,34,0.67)", zIndex: 400,
      display: "flex", alignItems: "center", justifyContent: "center"
    }}>
      <form onSubmit={handleUpload}
        style={{
          background: "rgba(25,27,34)",
          borderRadius: 18,
          minWidth: 340,
          boxShadow: "0 8px 32px #2540fa2f",
          color: "#233",
          padding: "1.6rem 1.3rem 1.1rem 1.3rem"
        }}>
        <div style={{
          fontWeight: 700,
          fontSize: "1.12rem",
          letterSpacing: ".04em",
          color: "#41c9f5",
          marginBottom: 18
        }}>
          Type your post
        </div>
        <textarea
          autoFocus
          rows={4}
          required
          value={text}
          placeholder="What's on your mind?"
          onChange={e => setText(e.target.value)}
          style={{
            padding: "0.7rem 1rem",
                  border: "none",
                  borderRadius: "6px",
                  background: "#181a22",
                  color: "#e6f4fc",
                  fontSize: "1rem",
                  width: "90%",
                  marginBottom: 18,
                  outline: "none"
          }}
        />
        {/* Image upload & preview */}
        <div>
          <label style={{ color: "#2dc5fa", cursor: "pointer", fontWeight: 600 }}>
            <span>Attach Image</span>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
          </label>
          {imgData &&
            <div style={{ marginTop: 10 }}>
              <img src={imgData} alt="preview" style={{ maxWidth: 180, borderRadius: 10, boxShadow: "0 2px 14px #1ccaea1a" }} />
              <button type="button" onClick={() => { setImgData(null); fileInputRef.current.value = null; }}
                style={{
                  display: "block", margin: "6px 0 0 0", background: "#e15", color: "#fff",
                  border: "none", borderRadius: 6, padding: "0 10px", cursor: "pointer", fontSize: 12
                }}>Remove</button>
            </div>
          }
        </div>
        <div style={{ display: "flex", gap: "1.2rem", justifyContent: "flex-end", marginTop: 18 }}>
          <button type="button" onClick={onClose}
            style={{
              background: "#fff", color: "#2dc5fa", fontWeight: 600,
              border: "1px solid #2dc5fa", borderRadius: 7, padding: "7px 19px", cursor: "pointer"
            }}>Cancel</button>
          <button type="submit"
            style={{
              background: "linear-gradient(90deg,#2dc5fa 60%,#6aebff)",
              color: "#193352", fontWeight: 700, border: "none",
              borderRadius: 7, padding: "8px 24px", cursor: "pointer"
            }}>Upload</button>
        </div>
      </form>
    </div>
  );
}

export default CreatePost;
