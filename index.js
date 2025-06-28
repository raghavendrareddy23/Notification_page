const data = [
  {
    img: "./assests/avatar-mark-webber.png",
    info: {
      name: "Mark Webber",
      action: "reacted to your recent post",
      postName: "My first tournament today!",
      time: "1m ago",
      privateMessage: "",
      picture: "",
    },
  },
  {
    img: "./assests/avatar-angela-gray.png",
    info: {
      name: "Angela Gray",
      action: "followed you",
      postName: "",
      time: "5m ago",
      privateMessage: "",
      picture: "",
    },
  },
  {
    img: "./assests/avatar-jacob-thompson.png",
    info: {
      name: "Jacob Thompson",
      action: "has joined your group",
      postName: "Chess Club",
      time: "1 day ago",
      privateMessage: "",
      picture: "",
    },
  },
  {
    img: "./assests/avatar-rizky-hasanuddin.png",
    info: {
      name: "Rizky Hasanuddin",
      action: "sent you a private message",
      postName: "",
      time: "5 days ago",
      privateMessage:
        "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      picture: "",
    },
  },
  {
    img: "./assests/avatar-kimberly-smith.png",
    info: {
      name: "Kimberly Smith",
      action: "commented on your picture",
      postName: "",
      time: "1 week ago",
      privateMessage: "",
      picture: "./assests/image-chess.png",
    },
  },
  {
    img: "./assests/avatar-nathan-peterson.png",
    info: {
      name: "Nathan Peterson",
      action: "reacted to your recent post",
      postName: "5 end-game strategies to increase your win rate",
      time: "2 weeks ago",
      privateMessage: "",
      picture: "",
    },
  },
  {
    img: "./assests/avatar-anna-kim.png",
    info: {
      name: "Anna Kim",
      action: "left the group",
      postName: "Chess Club",
      time: "2 weeks ago",
      privateMessage: "",
      picture: "",
    },
  },
];

const list = document.getElementById("list");
const counter = document.querySelector(".notifications-counter");
const markAllBtn = document.querySelector(".mark-all-button");

let unread = data.length;
counter.textContent = unread;

function renderNotification(notificationData) {
  const li = document.createElement("li");
  li.className = "new-notification";

  const { img, info } = notificationData;

  li.innerHTML = `
    <img class="avatar" src="${img}" alt="${info.name}">
    <div class="notification-infos">
      <div class="notification-text">
        <strong class="profile-link"><a href="#">${info.name}</a></strong> ${
    info.action
  }
        ${
          info.postName
            ? `<a href="#" class="notification-link-post">${info.postName}</a>`
            : ""
        }
        <span class="notification-dot"></span>
      </div>
      <div class="notification-time">${info.time}</div>
      ${
        info.privateMessage
          ? `<div class="notification-text-private-message">${info.privateMessage}</div>`
          : ""
      }
    </div>
    ${
      info.picture
        ? `<img src="${info.picture}" class="thumb" alt="thumbnail">`
        : ""
    }
  `;

  li.classList.add("notification");

  if (info.privateMessage) {
    li.addEventListener("click", () => {
      li.classList.toggle("show-message");
    });
  }

  list.appendChild(li);
}

function renderAll() {
  data.forEach(renderNotification);
}

function markAllAsRead() {
  const items = document.querySelectorAll("li.notification");
  items.forEach((item) => {
    item.classList.remove("new-notification");
    item.classList.add("read");
    const dot = item.querySelector(".notification-dot");
    if (dot) dot.remove();
  });

  counter.textContent = "0";
}

markAllBtn.addEventListener("click", markAllAsRead);
renderAll();
