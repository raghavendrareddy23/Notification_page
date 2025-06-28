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

const list = document.getElementById("notificationList");
const counter = document.querySelector(".notifications-counter");
const markAllReadBtn = document.querySelector(".mark-all-button");

let unreadCount = data.length;

function renderNotification(notificationData) {
  const li = document.createElement("li");
  li.className = "notification new-notification";

  const { img, info } = notificationData;
  const hasMessage = !!info.privateMessage;
  const hasPicture = !!info.picture;

  li.innerHTML = `
    <img class="avatar" src="${img}" alt="${info.name}">
    <div class="notification-content">
      <div class="info">
        <strong class="profile-link"><a href="#">${info.name}</a></strong> ${info.action}
        ${info.postName ? `<a href="#" class="notification-link-post">${info.postName}</a>` : ""}
        <span class="notification-dot"></span>
      </div>
      <div class="notification-time">${info.time}</div>
      ${hasMessage ? `<div class="private-message">${info.privateMessage}</div>` : ""}
    </div>
    ${hasPicture ? `<img class="thumb" src="${info.picture}" alt="thumbnail">` : ""}
  `;

  if (hasMessage) {
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
  const notifications = document.querySelectorAll(".notification");
  notifications.forEach(notification => {
    notification.classList.add("read");
    notification.classList.remove("new-notification");
    const dot = notification.querySelector(".notification-dot");
    if (dot) dot.remove();
  });

  unreadCount = 0;
  counter.textContent = unreadCount;
}

markAllReadBtn.addEventListener("click", markAllAsRead);
renderAll();
