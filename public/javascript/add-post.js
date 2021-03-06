async function newFormHandler(event) {
  event.preventDefault();

  var title = document.querySelector('input[name="post-title"]').value;
  var post_url = document.querySelector('input[name="post-url"]').value;

  var response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      post_url
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
