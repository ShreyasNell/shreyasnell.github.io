function showTab(tabName) {
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }
  
    const tabToShow = document.getElementById(tabName);
    if (tabToShow) {
        tabToShow.style.display = "block";
  
        // Remove 'active' class from all tabs
        const tabs = document.getElementsByClassName("tab");
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove("active");
        }
    
        // Add 'active' class to the clicked tab
        const clickedTab = document.querySelector(`[onclick="showTab('${tabName}')"]`);
        if (clickedTab) {
            clickedTab.classList.add("active");
        }
    }
}

// Set the initial active tab here
const initialActiveTab = "home";
showTab(initialActiveTab);

// Get the "Read More" link and all list items
const readMoreLink = document.getElementById('read-more');
const listItems = document.querySelectorAll('.collapsible-list li');


// document.getElementById("read-more").addEventListener("click", function(e) {
//     e.preventDefault(); // Prevent the default action of the link
//     var hiddenItems = document.querySelectorAll(".hidden");
    
//     // Check if any item is currently visible
//     var isExpanded = hiddenItems[0].style.display === "list-item";
    
//     // Toggle visibility of hidden items
//     hiddenItems.forEach(function(item) {
//         item.style.display = isExpanded ? "none" : "list-item";
//     });

//     // Change the text of the link after click
//     document.getElementById("read-more").textContent = isExpanded ? "Read More" : "Show Less";
// });