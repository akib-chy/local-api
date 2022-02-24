const loadUsers = () => {
    fetch("https://randomuser.me/api/?results=5000")
      .then((res) => res.json())
      .then((data) => displayUser(data));
    console.log(data);
  };
  const displayUser = (user) => {
    const sectionUser = document.getElementById("user");
    const users = user.results;
    for (const user of users) {
      const div = document.createElement("div");
      div.style.textAlign = "center";
      div.style.border = "3px solid black";
      div.style.padding = "10px";
      div.style.margin = "10px";
      div.innerHTML = `<h4>Name: ${user.name.title} ${user.name.first} ${user.name.last}</h4>
                        <h4> Email: ${user.email}</h4>
                        <h4>Gender: ${user.gender}</h4>
                        <h4> Age: ${user.dob.age}</h4>
                        <img src="${user.picture.large}">
                        `;
      sectionUser.appendChild(div);
    }
  };
  