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
        //create quad table
        $(".feed-column").html('<table><tr><td id="feed1">1</td><td id="feed2">2</td></tr><tr><td id="feed3">3</td><td id="feed4">4</td></tr></table>')
        //set feed defaults
        var feedHeight=360;
        var feedWidth=600;
        var controlsHeight = 380; //default 404
 
        var feed1='<div class="live-feeds__iframe-container"><div ng-show="feedDisabled" class="live-feeds__disabled ng-hide"><img src="/assets/img/live-feeds/feed-disabled.jpg" class="live-feeds__disabled-image"></div><iframe id="live-feeds-iframe" ng-hide="feedDisabled" bbcan-iframe-resize="" ng-src="https://new.livestream.com/accounts/6388794/events/3744338/player?pre_event_poster=https://cdn.livestream.com/events/bigbrothercanada/bbc_pre.jpg&amp;post_event_poster=https://cdn.livestream.com/events/bigbrothercanada/bbc_post.jpg&amp;width=' + feedWidth + '&amp;height=' + feedHeight + '&amp;autoPlay=false&amp;mute=false" frameborder="0" scrolling="no" class="live-feeds__iframe" src="https://new.livestream.com/accounts/6388794/events/3744338/player?pre_event_poster=https://cdn.livestream.com/events/bigbrothercanada/bbc_pre.jpg&amp;post_event_poster=https://cdn.livestream.com/events/bigbrothercanada/bbc_post.jpg&amp;width=' + feedWidth + '&amp;height=' + feedHeight + '&amp;autoPlay=false&amp;mute=false" style="width: 100%; height: ' + controlsHeight + 'px;"></iframe></div>'
        var feed2='<div class="live-feeds__iframe-container"><div ng-show="feedDisabled" class="live-feeds__disabled ng-hide"><img src="/assets/img/live-feeds/feed-disabled.jpg" class="live-feeds__disabled-image"></div><iframe id="live-feeds-iframe" ng-hide="feedDisabled" bbcan-iframe-resize="" ng-src="https://new.livestream.com/accounts/6388794/events/3744354/player?pre_event_poster=https://cdn.livestream.com/events/bigbrothercanada/bbc_pre.jpg&amp;post_event_poster=https://cdn.livestream.com/events/bigbrothercanada/bbc_post.jpg&amp;width=' + feedWidth + '&amp;height=' + feedHeight + '&amp;autoPlay=false&amp;mute=false" frameborder="0" scrolling="no" class="live-feeds__iframe" src="https://new.livestream.com/accounts/6388794/events/3744354/player?pre_event_poster=https://cdn.livestream.com/events/bigbrothercanada/bbc_pre.jpg&amp;post_event_poster=https://cdn.livestream.com/events/bigbrothercanada/bbc_post.jpg&amp;width=' + feedWidth + '&amp;height=' + feedHeight + '&amp;autoPlay=false&amp;mute=false" style="width: 100%; height: ' + controlsHeight + 'px;"></iframe></div>'
        var feed3='<div class="live-feeds__iframe-container"><div ng-show="feedDisabled" class="live-feeds__disabled ng-hide"><img src="/assets/img/live-feeds/feed-disabled.jpg" class="live-feeds__disabled-image"></div><iframe id="live-feeds-iframe" ng-hide="feedDisabled" bbcan-iframe-resize="" ng-src="https://new.livestream.com/accounts/6388794/events/3744360/player?pre_event_poster=https://cdn.livestream.com/events/bigbrothercanada/bbc_pre.jpg&amp;post_event_poster=https://cdn.livestream.com/events/bigbrothercanada/bbc_post.jpg&amp;width=' + feedWidth + '&amp;height=' + feedHeight + '&amp;autoPlay=false&amp;mute=false" frameborder="0" scrolling="no" class="live-feeds__iframe" src="https://new.livestream.com/accounts/6388794/events/3744360/player?pre_event_poster=https://cdn.livestream.com/events/bigbrothercanada/bbc_pre.jpg&amp;post_event_poster=https://cdn.livestream.com/events/bigbrothercanada/bbc_post.jpg&amp;width=' + feedWidth + '&amp;height=' + feedHeight + '&amp;autoPlay=false&amp;mute=false" style="width: 100%; height: ' + controlsHeight + 'px;"></iframe></div>'
        var feed4='<div class="live-feeds__iframe-container"><div ng-show="feedDisabled" class="live-feeds__disabled ng-hide"><img src="/assets/img/live-feeds/feed-disabled.jpg" class="live-feeds__disabled-image"></div><iframe id="live-feeds-iframe" ng-hide="feedDisabled" bbcan-iframe-resize="" ng-src="https://new.livestream.com/accounts/6388794/events/3744365/player?pre_event_poster=https://cdn.livestream.com/events/bigbrothercanada/bbc_pre.jpg&amp;post_event_poster=https://cdn.livestream.com/events/bigbrothercanada/bbc_post.jpg&amp;width=' + feedWidth + '&amp;height=' + feedHeight + '&amp;autoPlay=false&amp;mute=false" frameborder="0" scrolling="no" class="live-feeds__iframe" src="https://new.livestream.com/accounts/6388794/events/3744365/player?pre_event_poster=https://cdn.livestream.com/events/bigbrothercanada/bbc_pre.jpg&amp;post_event_poster=https://cdn.livestream.com/events/bigbrothercanada/bbc_post.jpg&amp;width=' + feedWidth + '&amp;height=' + feedHeight + '&amp;autoPlay=false&amp;mute=false" style="width: 100%; height: ' + controlsHeight + 'px;"></iframe></div>'
 
 
        $('#feed1').html(feed1).width(feedWidth).height(controlsHeight-30);
        $('#feed2').html(feed2).width(feedWidth).height(controlsHeight-30);
        $('#feed3').html(feed3).width(feedWidth).height(controlsHeight+60);
        $('#feed4').html(feed4).width(feedWidth).height(controlsHeight+60);
}
