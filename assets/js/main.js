$(window).on('load', function() {

    $('.level-bar-inner').each(function() {
    
        var itemWidth = $(this).data('level');
        
        $(this).animate({
            width: itemWidth
        }, 800);
        
    });

});


jQuery(document).ready(function($) {


    /*======= Skillset *=======*/
    
    $('.level-bar-inner').css('width', '0');
    
    
    
    /* Bootstrap Tooltip for Skillset */
    $('.level-label').tooltip();
    
    
    /* jQuery RSS - https://github.com/sdepold/jquery-rss */
    
    $("#rss-feeds").rss(
    
        //Change this to your own rss feeds
        "https://feeds.feedburner.com/TechCrunch/startups",
        
        {
        // how many entries do you want?
        // default: 4
        // valid values: any integer
        limit: 3,
        
        // the effect, which is used to let the entries appear
        // default: 'show'
        // valid values: 'show', 'slide', 'slideFast', 'slideSynced', 'slideFastSynced'
        effect: 'slideFastSynced',
        
        // will request the API via https
	    // default: false
	    // valid values: false, true
	    ssl: true,
        
        // outer template for the html transformation
        // default: "<ul>{entries}</ul>"
        // valid values: any string
        layoutTemplate: "<div class='items'>{entries}</div>",
        
        // inner template for each entry
        // default: '<li><a href="{url}">[{author}@{date}] {title}</a><br/>{shortBodyPlain}</li>'
        // valid values: any string
        entryTemplate: '<div class="item"><h3 class="title"><a href="{url}" target="_blank">{title}</a></h3><div><p>{shortBodyPlain}</p><a class="more-link" href="{url}" target="_blank"><i class="fas fa-external-link-alt"></i>Read more</a></div></div>'
        
        }
    );
    
    /* Github Calendar - https://github.com/rakan-mz/github-calendar */
    // new GitHubCalendar("#github-graph", "rakan-mz");
    
    
    
    /* Github Activity Feed - https://github.com/caseyscarborough/github-activity */
    // GitHubActivity.feed({ username: "rakan-mz", selector: "#ghfeed" });

// repo js 


// Main Variables
let theInput = document.querySelector(".get-repos input");
let getButton = document.querySelector(".get-button");
let reposData = document.querySelector(".show-data");

// getButton.onclick = function () {
  getRepos();
// };

// Get Repos Function
function getRepos() {
    let repo;

//   if (theInput.value == "") { // If Value Is Empty

//     reposData.innerHTML = "<span>Please Write Github Username.</span>";

//   } else {
    var dates = [];
    var projects = [];
    var pName_andDate = [];

    fetch(`https://api.github.com/users/rakan-mz/repos?sort=updated&per_page=4`)

    .then((response) => response.json())

    .then((repositories) => {

      // Empty The Container
      reposData.innerHTML = '';

      // Loop On Repositories
      repositories.forEach(repo => {

        // Create The Main Div Element
        let mainDiv = document.createElement("div");

        // Create Repo Name Text
        let repoName = document.createTextNode(repo.name);
        
        let repoSpan = document.createElement("text");
          repoSpan.className = 'col-xl-6 col-lg-5 col-md-5 col-xs-12 mb-2 mb-md-0 text-center align-self-center repo-name';


        let repoText = document.createTextNode(repo.name);

        // Add Stars Count Text To Stars Span
        repoSpan.appendChild(repoText);

        // Append Stars Count Span To Main Div
        mainDiv.appendChild(repoSpan);


        if(repo.name == 'Xi-Store'){
          alert("dsd");
        }
        // console.log();

        // Append The Text To Main Div
        // mainDiv.appendChild(repoName);

        // console.log(repo.updated_at);

        // Create Repo URL Anchor
        let theUrl = document.createElement('a');
        theUrl.className = 'col-xl-2 col-lg-3 col-md-3 col-xs-6';

        

        // Create Repo Url Text
        let theUrlText = document.createTextNode("Visit");

        // Append The Repo Url Text To Anchor Tag
        theUrl.appendChild(theUrlText);

        // Add Thje Hypertext Reference "href"
        theUrl.href = `https://github.com/rakan-mz/${repo.name}`;

        // Set Attribute Blank
        theUrl.setAttribute('target', '_blank');

        // Append Url Anchor To Main Div
        mainDiv.appendChild(theUrl);

        // Create Stars Count Span
        let starsSpan = document.createElement("span");
        starsSpan.className = 'col-xl-3 col-lg-3 col-md-3 col-xs-6 mb-2 mb-md-0';


        // Create The date  Text
        let u = repo.updated_at;
        let x =  u.toString();    
        const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        const d = new Date(x);
        const date1 = d.getDate();
        const date2 = d.getMonth();
        const date3 = d.getFullYear();
        let date = date1+ "-" +months[date2]+ "-" +date3;
        let starsText = document.createTextNode(`Last Update: ${date}`);

        dates.push(date);
        projects.push(repo.name);

        // Add Stars Count Text To Stars Span
        starsSpan.appendChild(starsText);

        // Append Stars Count Span To Main Div
        mainDiv.appendChild(starsSpan);

        // Add Class On Main Div
        mainDiv.className = 'repo-box row';
        // mainDiv.className = '';
        mainDiv.appendChild(theUrl);

        // Append The Main Div To Container
        reposData.appendChild(mainDiv);

      });
});

//   }

}    

});