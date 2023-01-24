Marquee3k.init()

//Mixcloudfeed

  // Replace "USERNAME" with the actual Mixcloud username
  var username = "good_times_bad_times";
  var feed = document.getElementById("mixcloud-feed");

  function getLatestUploads() {
    // Use the Mixcloud API to fetch the user's latest uploads
    fetch(`https://api.mixcloud.com/${username}/feed/`)
      .then(response => response.json())
      .then(data => {
        // Clear the existing widgets
        feed.innerHTML = "";
        // Iterate through the data and add each upload to the list
        data.data.forEach(upload => {
          var tr = document.createElement("tr");
          var td = document.createElement("td");
          var iframe = document.createElement("iframe");
          iframe.src = `https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&light=1&feed=%2F${upload.username}%2F${upload.key}%2F`;
          iframe.width = "100%";
          iframe.height = "60";
          iframe.frameborder = "0";
          td.appendChild(iframe);
          tr.appendChild(td);
          feed.appendChild(tr);
        });
      });
  }
  
  // call the function to get the latest uploads
  getLatestUploads();
  
  // set an interval to refresh the uploads, for example every 5 minutes
  setInterval(getLatestUploads, 300000);


