function BlogSection() {
  let Posts = ""
  try {
    window.Blogs.forEach(Post => {
      if(!Post.Discoverable) return

      if (Post.Topic.length > 20) {
        Post.Topic = Post.Topic.substring(0,20)+".."
      }

      if (Post.Title.length > 65) {
        Post.Title = Post.Title.substring(0,65)+".."
      }

      if (Post.Description.length > 100) {
        Post.Description = Post.Description.substring(0,100)+".."
      }

      let PostThumbnail = ""
      if (Post.Thumbnail) {
        PostThumbnail = `
          <img src="./images/${Post.Thumbnail}" writea="post.entry.thumbnail" class="rounded-top-4 object-fit-cover" height="110px" width="100%"/>
        `
      }

      Posts = `
        ${Posts}
        
        <div writea="post.entry" class="col-12 mb-4">
          <a href="#read/${Post.Content.replace('.md', '')}" class="text-decoration-none text-body">
            <div class="rounded-4 bg-dark-subtle position-relative" style="--mdc-ripple-hover-opacity: .02; --mdc-ripple-focus-opacity: .02; --mdc-ripple-press-opacity: .05;">
              ${PostThumbnail}
              <div class="row d-flex p-4">
                <div class="col-auto col-sm-10 me-auto">
                  <span writea="post.entry.info" class="d-block text-primary-emphasis mb-1">
                    ${Post.Topic || "post"}
                    <span class="text-dark"><i class="bi bi-dot"></i> ${Post.Content}</span>
                  </span>
                  <span writea="post.entry.title" class="h5 fw-bold">
                    ${Post.Title || "No title available"}
                  </span>
                  <span writea="post.entry.description" class="d-block">
                    ${Post.Description || "No description available"}
                  </span>
                </div>
                <div class="col-auto my-auto d-none d-sm-block">
                  <button type="button" class="btn shadow-none text-primary-emphasis"><i class="bi bi-chevron-right"></i></button>
                </div>
                </div>
              <span class="ripple-surface"></span>
            </div>
          </a>
        </div>
      `
    });
  } catch {}
  return `
    ${NavigationBarElement()}
    <div class="row pt-2">
      ${Posts || `
        <p>
          There haven't been any posts yet, check back later!
        </p>
      `}
    </div>
    ${FooterElement()}
  `
}