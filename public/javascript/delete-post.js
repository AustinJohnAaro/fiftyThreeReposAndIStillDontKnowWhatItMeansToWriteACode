async function deleteFormHandler(event) {
  event.preventDefault();

  var id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  var response = await fetch(`/api/posts/${id}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);

