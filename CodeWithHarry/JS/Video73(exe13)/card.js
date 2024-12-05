function createCard(title, cName, views, monthsOld, thumbnail){
    // create a card container
    const card = document.createElement("div");
    card.className = "container";

    // Create and Append thumbnail
    const thumbDiv = document.createElement("div");
    thumbDiv.className = "thumbnail";
    const thumbImg = document.createElement("img");
    thumbImg.src = thumbnail;
    thumbImg.alt = title;
    thumbDiv.appendChild(thumbImg);
    card.appendChild(thumbDiv);

    // Create content div
    const contentDiv = document.createElement("div");
    contentDiv.className = "content";

    // Create and append title
    const titleEl = document.createElement("div");
    titleEl.className = "title";
    titleEl.innerText = title;
    contentDiv.appendChild(titleEl);

    // Create and append the rest div
    const restDiv = document.createElement("div");
    restDiv.className = "rest";

    const creatorEl = document.createElement("span");
    creatorEl.className = "channel";
    creatorEl.innerText = cName;
    restDiv.appendChild(creatorEl);

    const viewsEl = document.createElement("span");
    viewsEl.className = "views";
    viewsEl.innerText = views;
    restDiv.appendChild(viewsEl);

    const monthsEl = document.createElement("span");
    monthsEl.className = "published";
    monthsEl.innerText = monthsOld;
    restDiv.appendChild(monthsEl);

    contentDiv.appendChild(restDiv);
    card.appendChild(contentDiv);

    // Append card to the container
    document.getElementById("cardContainer").appendChild(card);
}


// createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")

document.getElementById("createCard").addEventListener("click", function(){
    const title = "Introduction to Backend | Sigma Web Dev video #2";
    const cName = "CodeWithHarry";
    const views = "727k"
    const monthsOld = "2months"
    const thumbnail = "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw";
    createCard(title, cName, views, monthsOld, thumbnail);
});