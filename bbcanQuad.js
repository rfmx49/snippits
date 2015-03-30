// ==UserScript==
// @name          QuadView_LiveFeed on BBCAN3 site
// @description   QuadView_LiveFeed on BBCAN3 site
// @include       https://bigbrothercanada.globaltv.com/live
// @license       GPL version 3 or any later version; http://www.gnu.org/copyleft/gpl.html
// @author        rfmx49
// @version       .2
// ==/UserScript==
$( document ).ready(function() {
    $(".feed__headline").after('<div id="quadButton">Quad View</div>');

    $( "#quadButton" ).click(function() {
        quadView();
    });
});

function quadView() {
        //Do not change unless feed links have changed.
		var feeds = ["3744372","3744338","3744354","3744360","3744365"];
		//Fan feed 0
		//Feed 1-4 1-4
		//SET YOUR FEEDS HERE
		var viewableFeeds = [feeds[1],feeds[2],feeds[3],feeds[4]];
		var bottomFeed = false;
		bottomFeed = feeds[0]; //comment out if you do not want to show bottom feed comment with two slasshes //
		//SET OPTIONS
		var autoPlay = "false";
        var muteStatus = "true";
        
        //Change Feed dimensions
        var feedHeight=360;
        var feedWidth=600;
        var controlsHeight = 380; //default 404
		
		
		//page cleanup
		$(".global-tv-header").remove();
        $(".site-header").remove();
        $(".feed__header").remove();
        $(".toolbar").remove();
        $(".live-feeds__vote").remove();
        $(".live-feeds__secondary").remove();
        $(".more-shows").remove();
        $(".footer__content").remove();
        $(".toolbar").remove();
        $(".live-feeds__info").remove();
        $(".player").remove();
        $(".footer__copyright").remove();
        
        //This table has 4 feeds with fan feed showing below.
        $(".feed-column").html('<table><tr><td id="feed1">1</td><td id="feed2">2</td></tr><tr><td id="feed3">3</td><td id="feed4">4</td></tr><tr><td id="feed5" colspan=2>5</td></tr></table>');
  		//This table has 3 feeds first row(fan/1/2) and feeds 3/4 on bottom.
  		//$(".feed-column").html('<table><tr><td colspan="2" id="feed5"></td><td colspan="2" id="feed1"></td><td colspan="2" id="feed2"></td></tr><tr><td colspan="6" height="25px"></td></td><tr><td colspan="3" id="feed3"></td><td colspan="3" id="feed4"></td></tr></table>');
 
        var feed1='<div class="live-feeds__iframe-container"><div ng-show="feedDisabled" class="live-feeds__disabled ng-hide"><img src="/assets/img/live-feeds/feed-disabled.jpg" class="live-feeds__disabled-image"></div><iframe id="live-feeds-iframe" ng-hide="feedDisabled" bbcan-iframe-resize="" ng-src="https://new.livestream.com/accounts/6388794/events/' + viewableFeeds[0] + '/player?pre_event_poster=https://cdn.livestream.com/events/bigbrothercanada/bbc_pre.jpg&amp;post_event_poster=https://cdn.livestream.com/events/bigbrothercanada/bbc_post.jpg&amp;width=' + feedWidth + '&amp;height=' + feedHeight + '&amp;autoPlay=' + autoPlay + '&amp;mute=' + muteStatus + '" frameborder="0" scrolling="no" class="live-feeds__iframe" src="https://new.livestream.com/accounts/6388794/events/' + viewableFeeds[0] + '/player?pre_event_poster=https://cdn.livestream.com/events/bigbrothercanada/bbc_pre.jpg&amp;post_event_poster=https://cdn.livestream.com/events/bigbrothercanada/bbc_post.jpg&amp;width=' + feedWidth + '&amp;height=' + feedHeight + '&amp;autoPlay=' + autoPlay + '&amp;mute=' + muteStatus + '" style="width: 100%; height: ' + controlsHeight + 'px;"></iframe></div>'
        var feed2='<div class="live-feeds__iframe-container"><div ng-show="feedDisabled" class="live-feeds__disabled ng-hide"><img src="/assets/img/live-feeds/feed-disabled.jpg" class="live-feeds__disabled-image"></div><iframe id="live-feeds-iframe" ng-hide="feedDisabled" bbcan-iframe-resize="" ng-src="https://new.livestream.com/accounts/6388794/events/' + viewableFeeds[1] + '/player?pre_event_poster=https://cdn.livestream.com/events/bigbrothercanada/bbc_pre.jpg&amp;post_event_poster=https://cdn.livestream.com/events/bigbrothercanada/bbc_post.jpg&amp;width=' + feedWidth + '&amp;height=' + feedHeight + '&amp;autoPlay=' + autoPlay + '&amp;mute=' + muteStatus + '" frameborder="0" scrolling="no" class="live-feeds__iframe" src="https://new.livestream.com/accounts/6388794/events/' + viewableFeeds[1] + '/player?pre_event_poster=https://cdn.livestream.com/events/bigbrothercanada/bbc_pre.jpg&amp;post_event_poster=https://cdn.livestream.com/events/bigbrothercanada/bbc_post.jpg&amp;width=' + feedWidth + '&amp;height=' + feedHeight + '&amp;autoPlay=' + autoPlay + '&amp;mute=' + muteStatus + '" style="width: 100%; height: ' + controlsHeight + 'px;"></iframe></div>'
        var feed3='<div class="live-feeds__iframe-container"><div ng-show="feedDisabled" class="live-feeds__disabled ng-hide"><img src="/assets/img/live-feeds/feed-disabled.jpg" class="live-feeds__disabled-image"></div><iframe id="live-feeds-iframe" ng-hide="feedDisabled" bbcan-iframe-resize="" ng-src="https://new.livestream.com/accounts/6388794/events/' + viewableFeeds[2] + '/player?pre_event_poster=https://cdn.livestream.com/events/bigbrothercanada/bbc_pre.jpg&amp;post_event_poster=https://cdn.livestream.com/events/bigbrothercanada/bbc_post.jpg&amp;width=' + feedWidth + '&amp;height=' + feedHeight + '&amp;autoPlay=' + autoPlay + '&amp;mute=' + muteStatus + '" frameborder="0" scrolling="no" class="live-feeds__iframe" src="https://new.livestream.com/accounts/6388794/events/' + viewableFeeds[2] + '/player?pre_event_poster=https://cdn.livestream.com/events/bigbrothercanada/bbc_pre.jpg&amp;post_event_poster=https://cdn.livestream.com/events/bigbrothercanada/bbc_post.jpg&amp;width=' + feedWidth + '&amp;height=' + feedHeight + '&amp;autoPlay=' + autoPlay + '&amp;mute=' + muteStatus + '" style="width: 100%; height: ' + controlsHeight + 'px;"></iframe></div>'
        var feed4='<div class="live-feeds__iframe-container"><div ng-show="feedDisabled" class="live-feeds__disabled ng-hide"><img src="/assets/img/live-feeds/feed-disabled.jpg" class="live-feeds__disabled-image"></div><iframe id="live-feeds-iframe" ng-hide="feedDisabled" bbcan-iframe-resize="" ng-src="https://new.livestream.com/accounts/6388794/events/' + viewableFeeds[3] + '/player?pre_event_poster=https://cdn.livestream.com/events/bigbrothercanada/bbc_pre.jpg&amp;post_event_poster=https://cdn.livestream.com/events/bigbrothercanada/bbc_post.jpg&amp;width=' + feedWidth + '&amp;height=' + feedHeight + '&amp;autoPlay=' + autoPlay + '&amp;mute=' + muteStatus + '" frameborder="0" scrolling="no" class="live-feeds__iframe" src="https://new.livestream.com/accounts/6388794/events/' + viewableFeeds[3] + '/player?pre_event_poster=https://cdn.livestream.com/events/bigbrothercanada/bbc_pre.jpg&amp;post_event_poster=https://cdn.livestream.com/events/bigbrothercanada/bbc_post.jpg&amp;width=' + feedWidth + '&amp;height=' + feedHeight + '&amp;autoPlay=' + autoPlay + '&amp;mute=' + muteStatus + '" style="width: 100%; height: ' + controlsHeight + 'px;"></iframe></div>'
 		
 
        $('#feed1').html(feed1).width(feedWidth).height(controlsHeight-30);
        $('#feed2').html(feed2).width(feedWidth).height(controlsHeight-30);
        $('#feed3').html(feed3).width(feedWidth).height(controlsHeight+60);
        $('#feed4').html(feed4).width(feedWidth).height(controlsHeight+60);
        if (bottomFeed) {
        	var feed5='<div class="live-feeds__iframe-container"><div ng-show="feedDisabled" class="live-feeds__disabled ng-hide"><img src="/assets/img/live-feeds/feed-disabled.jpg" class="live-feeds__disabled-image"></div><iframe id="live-feeds-iframe" ng-hide="feedDisabled" bbcan-iframe-resize="" ng-src="https://new.livestream.com/accounts/6388794/events/' + bottomFeed + '/player?pre_event_poster=https://cdn.livestream.com/events/bigbrothercanada/bbc_pre.jpg&amp;post_event_poster=https://cdn.livestream.com/events/bigbrothercanada/bbc_post.jpg&amp;width=' + feedWidth + '&amp;height=' + feedHeight + '&amp;autoPlay=' + autoPlay + '&amp;mute=' + muteStatus + '" frameborder="0" scrolling="no" class="live-feeds__iframe" src="https://new.livestream.com/accounts/6388794/events/' + bottomFeed + '/player?pre_event_poster=https://cdn.livestream.com/events/bigbrothercanada/bbc_pre.jpg&amp;post_event_poster=https://cdn.livestream.com/events/bigbrothercanada/bbc_post.jpg&amp;width=' + feedWidth + '&amp;height=' + feedHeight + '&amp;autoPlay=' + autoPlay + '&amp;mute=' + muteStatus + '" style="width: 100%; height: ' + controlsHeight + 'px;"></iframe></div>'
 			$('#feed5').html(feed5).width(feedWidth).height(controlsHeight+60);
        }
}
