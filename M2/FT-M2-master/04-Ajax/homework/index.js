const showFriends = (response) => {
  $("#lista").empty();
  for (const friend of response) {
    $(`<li>${friend.id} | ${friend.name}</li>`).appendTo("#lista");
  }
};

$("#boton").click(() => {
  $.get("http://localhost:5000/amigos", showFriends);
});

const showFriend = (response) => {
  $("#amigo").html(
    `${response.id} | ${response.name} | Edad: ${response.age} | Email: ${response.email}`
  );
};

$("#search").click(() => {
  const friend = $("#input").val();
  $.get(`http://localhost:5000/amigos/${friend}`, showFriend);
});

const refreshFriends = () => {
  $.get("http://localhost:5000/amigos", showFriends);
};

$("#delete").click(() => {
  const friend = $("#inputDelete").val();
  console.log(friend);

  $.ajax({
    url: `http://localhost:5000/amigos/${friend}`,
    type: "DELETE",
    success: function (result) {
      $("#success").html(`Amigo ${friend} eliminado. <br> Lista actualizada.`);
      refreshFriends();
    },
  });
});
