__d("AdsVideoSpecs", [
	"AdsInstagramMediaSpecs",
	"AdsPlacementAPISpecReaderUtils",
	"AdsPlacementAPISpecReaderUtilsShared",
	"AdsThreadsMediaSpecs",
	"AdsVideoConfig.experimental",
	"adsContainsAssetCustomizationPlacement",
	"adsPlacementAPISpecReaderIsActiveFacebookPosition",
	"adsPlacementAPISpecReaderIsActivePublisherPlatform",
	"gkx"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = {
		INSTAGRAM_STORY: {
			placement: "story",
			platform: "instagram",
			position: "story",
			placementChecker: function(t) {
				return o("AdsPlacementAPISpecReaderUtils").isActiveInstagramPosition(t, "story");
			},
			assetCustomizationPlacementChecker: function(t) {
				return r("adsContainsAssetCustomizationPlacement")(t, {
					platform: "instagram",
					position: "story"
				});
			},
			maxWarningAspectRatio: (e = r("AdsInstagramMediaSpecs")).MAX_STORY_ASPECT_RATIO,
			maxWarningLength: e.MAX_STORY_VIDEO_DURATION_IN_SEC_FOR_GREATER_THAN_TWO_MIN_VIDEOS,
			minWarningWidth: e.MIN_MEDIA_WIDTH_LOW_RES,
			minWarningHeight: e.MIN_STORY_MEDIA_HEIGHT_LOW_RES,
			supportsCarousel: !1
		},
		INSTAGRAM_STORY_CAROUSEL: {
			placement: "story",
			platform: "instagram",
			position: "story",
			placementChecker: function(t) {
				return o("AdsPlacementAPISpecReaderUtils").isOnlyActiveInstagramPosition(t, "story");
			},
			assetCustomizationPlacementChecker: function(t) {
				return t.every(function(e) {
					return e.platform === "instagram" && e.position === "story";
				});
			},
			maxWarningAspectRatio: e.MAX_STORY_ASPECT_RATIO,
			maxWarningLength: e.MAX_STORY_VIDEO_DURATION_IN_SEC_FOR_CAROUSEL_VIDEOS,
			minWarningWidth: e.MIN_MEDIA_WIDTH_LOW_RES,
			minWarningHeight: e.MIN_STORY_MEDIA_HEIGHT_LOW_RES,
			supportsCarousel: !0
		},
		INSTAGRAM_REELS: {
			placement: "reels",
			platform: "instagram",
			position: "reels",
			placementChecker: function(t) {
				return o("AdsPlacementAPISpecReaderUtils").isOnlyActiveInstagramReelsPlacement(t);
			},
			assetCustomizationPlacementChecker: function(t) {
				return r("adsContainsAssetCustomizationPlacement")(t, {
					platform: "instagram",
					position: "reels"
				});
			},
			maxWarningAspectRatio: e.MAX_REELS_ASPECT_RATIO,
			minWarningAspectRatio: e.MIN_REELS_ASPECT_RATIO,
			maxWarningLength: e.MAX_REELS_VIDEO_DURATION_IN_SEC,
			minWarningWidth: e.MIN_MEDIA_WIDTH_LOW_RES,
			minWarningHeight: e.MIN_STORY_MEDIA_HEIGHT_LOW_RES,
			supportsCarousel: !1
		},
		INSTAGRAM_STREAM: {
			placement: "stream",
			platform: "instagram",
			position: "stream",
			placementChecker: function(t) {
				return o("AdsPlacementAPISpecReaderUtils").isActiveInstagramPosition(t, "stream");
			},
			assetCustomizationPlacementChecker: function(t) {
				return r("adsContainsAssetCustomizationPlacement")(t, {
					platform: "instagram",
					position: "stream"
				});
			},
			minWarningAspectRatio: e.MIN_STREAM_ASPECT_RATIO,
			maxWarningAspectRatio: e.MAX_STREAM_ASPECT_RATIO,
			maxWarningLength: e.MAX_STREAM_VIDEO_DURATION_IN_SEC_FOR_GREATER_THAN_TWO_MIN_ADS,
			minWarningWidth: e.MIN_MEDIA_WIDTH_LOW_RES,
			minWarningHeight: e.MIN_STREAM_MEDIA_HEIGHT_LOW_RES,
			supportsCarousel: !1
		},
		INSTAGRAM_STREAM_CAROUSEL: {
			placement: "stream",
			platform: "instagram",
			position: "stream",
			placementChecker: function(t) {
				return o("AdsPlacementAPISpecReaderUtils").isActiveInstagramPosition(t, "stream");
			},
			assetCustomizationPlacementChecker: function(t) {
				return r("adsContainsAssetCustomizationPlacement")(t, {
					platform: "instagram",
					position: "stream"
				});
			},
			minWarningAspectRatio: 1,
			maxWarningAspectRatio: 1,
			maxWarningLength: e.MAX_STREAM_VIDEO_DURATION_IN_SEC_FOR_CAROUSEL_ADS,
			minWarningWidth: e.MIN_MEDIA_WIDTH_LOW_RES,
			minWarningHeight: e.MIN_MEDIA_WIDTH_LOW_RES,
			supportsCarousel: !0
		},
		INSTAGRAM_PROFILE_FEED: {
			placement: "profile_feed",
			platform: "instagram",
			position: "profile_feed",
			placementChecker: function(t) {
				return o("AdsPlacementAPISpecReaderUtils").isActiveInstagramPosition(t, "profile_feed");
			},
			assetCustomizationPlacementChecker: function(t) {
				return r("adsContainsAssetCustomizationPlacement")(t, {
					platform: "instagram",
					position: "profile_feed"
				});
			},
			minWarningAspectRatio: e.MIN_PROFILE_FEED_ASPECT_RATIO,
			maxWarningAspectRatio: e.MAX_PROFILE_FEED_ASPECT_RATIO,
			maxWarningLength: e.MAX_PROFILE_FEED_VIDEO_DURATION_IN_SEC,
			minWarningWidth: e.MIN_MEDIA_WIDTH_LOW_RES,
			minWarningHeight: e.MIN_STREAM_MEDIA_HEIGHT_LOW_RES,
			supportsCarousel: !1
		},
		INSTAGRAM_PROFILE_FEED_CAROUSEL: {
			placement: "profile_feed",
			platform: "instagram",
			position: "profile_feed",
			placementChecker: function(t) {
				return o("AdsPlacementAPISpecReaderUtils").isActiveInstagramPosition(t, "profile_feed");
			},
			assetCustomizationPlacementChecker: function(t) {
				return r("adsContainsAssetCustomizationPlacement")(t, {
					platform: "instagram",
					position: "profile_feed"
				});
			},
			minWarningAspectRatio: 1,
			maxWarningAspectRatio: 1,
			maxWarningLength: e.MAX_PROFILE_FEED_VIDEO_DURATION_IN_SEC,
			minWarningWidth: e.MIN_MEDIA_WIDTH_LOW_RES,
			minWarningHeight: e.MIN_MEDIA_WIDTH_LOW_RES,
			supportsCarousel: !0
		},
		INSTAGRAM_SEARCH_FEED: {
			placement: "ig_search",
			platform: "instagram",
			position: "ig_search",
			placementChecker: function(t) {
				return o("AdsPlacementAPISpecReaderUtils").isActiveInstagramPosition(t, "ig_search");
			},
			assetCustomizationPlacementChecker: function(t) {
				return r("adsContainsAssetCustomizationPlacement")(t, {
					platform: "instagram",
					position: "ig_search"
				});
			},
			minWarningAspectRatio: e.MIN_STREAM_ASPECT_RATIO,
			maxWarningAspectRatio: e.MAX_STREAM_ASPECT_RATIO,
			maxWarningLength: e.MAX_STREAM_VIDEO_DURATION_IN_SEC_FOR_GREATER_THAN_TWO_MIN_ADS,
			minWarningWidth: e.MIN_MEDIA_WIDTH_LOW_RES,
			minWarningHeight: e.MIN_STREAM_MEDIA_HEIGHT_LOW_RES,
			supportsCarousel: !1
		},
		INSTAGRAM_SEARCH_FEED_CAROUSEL: {
			placement: "ig_search",
			platform: "instagram",
			position: "ig_search",
			placementChecker: function(t) {
				return o("AdsPlacementAPISpecReaderUtils").isActiveInstagramPosition(t, "ig_search");
			},
			assetCustomizationPlacementChecker: function(t) {
				return r("adsContainsAssetCustomizationPlacement")(t, {
					platform: "instagram",
					position: "ig_search"
				});
			},
			minWarningAspectRatio: 1,
			maxWarningAspectRatio: 1,
			maxWarningLength: e.MAX_STREAM_VIDEO_DURATION_IN_SEC_FOR_CAROUSEL_ADS,
			minWarningWidth: e.MIN_MEDIA_WIDTH_LOW_RES,
			minWarningHeight: e.MIN_MEDIA_WIDTH_LOW_RES,
			supportsCarousel: !0
		},
		INSTAGRAM_EXPLORE_HOME: {
			placement: "explore_home",
			platform: "instagram",
			position: "explore_home",
			placementChecker: function(t) {
				return o("AdsPlacementAPISpecReaderUtils").isActiveInstagramPosition(t, "explore_home");
			},
			assetCustomizationPlacementChecker: function(t) {
				return r("adsContainsAssetCustomizationPlacement")(t, {
					platform: "instagram",
					position: "explore_home"
				});
			},
			minWarningAspectRatio: e.MIN_EXPLORE_HOME_VIDEO_ASPECT_RATIO,
			maxWarningAspectRatio: e.MAX_EXPLORE_HOME_VIDEO_ASPECT_RATIO,
			maxWarningLength: e.MAX_EXPLORE_HOME_VIDEO_DURATION_IN_SEC_FOR_GREATER_THAN_TWO_MIN_ADS,
			minWarningWidth: e.MIN_MEDIA_WIDTH_LOW_RES,
			minWarningHeight: e.MIN_EXPLORE_HOME_MEDIA_HEIGHT_LOW_RES,
			supportsCarousel: !1
		},
		INSTAGRAM_EXPLORE_HOME_CAROUSEL: {
			placement: "explore_home",
			platform: "instagram",
			position: "explore_home",
			placementChecker: function(t) {
				return o("AdsPlacementAPISpecReaderUtils").isActiveInstagramPosition(t, "explore_home");
			},
			assetCustomizationPlacementChecker: function(t) {
				return r("adsContainsAssetCustomizationPlacement")(t, {
					platform: "instagram",
					position: "explore_home"
				});
			},
			minWarningAspectRatio: 1,
			maxWarningAspectRatio: 1,
			maxWarningLength: e.MAX_EXPLORE_HOME_VIDEO_DURATION_IN_SEC_FOR_CAROUSEL_ADS,
			minWarningWidth: e.MIN_MEDIA_WIDTH_LOW_RES,
			minWarningHeight: e.MIN_MEDIA_WIDTH_LOW_RES,
			supportsCarousel: !0
		},
		AUDIENCE_NETWORK_MOBILE_EXTERNAL: {
			placement: "audience_network",
			platform: "audience_network",
			position: "instream_video",
			placementChecker: function(t) {
				return r("adsPlacementAPISpecReaderIsActivePublisherPlatform")(t, "audience_network") && !o("AdsPlacementAPISpecReaderUtils").isOnlyActivePublisherPlatform(t, "audience_network");
			},
			assetCustomizationPlacementChecker: function(t) {
				var e = t.toArray().some(function(e) {
					return e.platform === "audience_network" && e.position === "instream_video";
				}), n = t.toArray().every(function(e) {
					return e.platform === "audience_network" && e.position === "instream_video";
				});
				return e && !n;
			},
			minWarningAspectRatio: .95,
			maxWarningAspectRatio: 2,
			minWarningLength: (s = r("AdsVideoConfig.experimental")).audienceNetworkInStreamVideoMinDurationInSec,
			maxWarningLength: s.audienceNetworkInStreamVideoMaxDurationInSec,
			hasSound: !0,
			hasHDQuality: !0
		},
		AUDIENCE_NETWORK_MOBILE_EXTERNAL_ONLY: {
			placement: "audience_network",
			platform: "audience_network",
			position: "instream_video",
			placementChecker: function(t) {
				return o("AdsPlacementAPISpecReaderUtils").isOnlyActivePublisherPlatform(t, "audience_network");
			},
			assetCustomizationPlacementChecker: function(t) {
				return t.toArray().every(function(e) {
					return e.platform === "audience_network" && e.position === "instream_video";
				});
			},
			minWarningAspectRatio: .95,
			maxWarningAspectRatio: 2,
			minWarningLength: s.audienceNetworkInStreamVideoMinDurationInSec,
			maxWarningLength: s.audienceNetworkOnlyInStreamVideoMaxDurationInSec,
			hasSound: !0,
			hasHDQuality: !0
		},
		INSTREAM_VIDEO: {
			placement: "instream_video",
			platform: "facebook",
			position: "instream_video",
			placementChecker: function(t) {
				return r("adsPlacementAPISpecReaderIsActiveFacebookPosition")(t, "instream_video");
			},
			assetCustomizationPlacementChecker: function() {
				return !1;
			},
			minWarningLength: s.instreamVideoMinDurationInSec,
			maxWarningLength: s.instreamVideoMaxDurationInSec,
			hasSound: !0
		},
		INSTREAM_VIDEO_PAC: {
			placement: "instream_video",
			platform: "facebook",
			position: "instream_video",
			placementChecker: function() {
				return !1;
			},
			assetCustomizationPlacementChecker: function(t) {
				return r("adsContainsAssetCustomizationPlacement")(t, {
					platform: "facebook",
					position: "instream_video"
				});
			},
			minWarningLength: s.instreamVideoMinDurationInSec,
			maxWarningLength: s.instreamVideoMaxDurationInSec
		},
		FACEBOOK_STORIES: {
			platform: "facebook",
			placement: "story",
			position: "story",
			placementChecker: function(t) {
				return r("adsPlacementAPISpecReaderIsActiveFacebookPosition")(t, "story");
			},
			assetCustomizationPlacementChecker: function(t) {
				return r("adsContainsAssetCustomizationPlacement")(t, {
					platform: "facebook",
					position: "story"
				});
			},
			minWarningWidth: 500,
			aspectRatioTolerance: .01,
			maxWarningAspectRatio: 1.91,
			minWarningAspectRatio: .5625,
			maxWarningLength: r("gkx")("14835") ? 900 : 120,
			supportsCarousel: !1
		},
		AUDIENCE_NETWORK_REWARDED_VIDEO: {
			placement: "rewarded_video",
			platform: "audience_network",
			position: "rewarded_video",
			placementChecker: function(t) {
				return o("AdsPlacementAPISpecReaderUtils").isActiveAudienceNetworkPosition(t, "rewarded_video");
			},
			assetCustomizationPlacementChecker: function(t) {
				return r("adsContainsAssetCustomizationPlacement")(t, {
					platform: "audience_network",
					position: "rewarded_video"
				});
			}
		},
		WHATSAPP_STATUS: {
			platform: "whatsapp",
			placement: "status",
			position: "status",
			placementChecker: function(t) {
				return o("AdsPlacementAPISpecReaderUtils").isActiveWhatsAppPosition(t, "status");
			},
			assetCustomizationPlacementChecker: function(t) {
				return r("adsContainsAssetCustomizationPlacement")(t, {
					platform: "whatsapp",
					position: "status"
				});
			},
			maxWarningLength: 90,
			aspectRatioTolerance: .01,
			minWarningHeight: 120,
			minWarningWidth: 120,
			maxWarningAspectRatio: 1.91
		},
		MESSENGER_STORIES: {
			platform: "messenger",
			placement: "story",
			position: "story",
			placementChecker: function(t) {
				return o("AdsPlacementAPISpecReaderUtilsShared").isActiveMessengerPosition(t, "story");
			},
			assetCustomizationPlacementChecker: function(t) {
				return r("adsContainsAssetCustomizationPlacement")(t, {
					platform: "messenger",
					position: "story"
				});
			},
			maxWarningLength: 15,
			supportsCarousel: !1
		},
		MESSENGER_INBOX: {
			platform: "messenger",
			placement: "messenger_home",
			position: "messenger_home",
			placementChecker: function(t) {
				return o("AdsPlacementAPISpecReaderUtilsShared").isActiveMessengerPosition(t, "messenger_home");
			},
			assetCustomizationPlacementChecker: function(t) {
				return r("adsContainsAssetCustomizationPlacement")(t, {
					platform: "messenger",
					position: "messenger_home"
				});
			},
			aspectRatioTolerance: .01,
			maxWarningAspectRatio: 1.91,
			minWarningAspectRatio: 1,
			maxWarningLength: 14400,
			supportsCarousel: !1
		},
		FACEBOOK_REELS: {
			platform: "facebook",
			placement: "facebook_reels",
			position: "facebook_reels",
			placementChecker: function(t) {
				return o("AdsPlacementAPISpecReaderUtils").isOnlyActiveFacebookReelsPlacement(t);
			},
			assetCustomizationPlacementChecker: function(t) {
				return r("adsContainsAssetCustomizationPlacement")(t, {
					platform: "facebook",
					position: "facebook_reels"
				});
			},
			minWarningWidth: 500,
			minWarningHeight: 889,
			maxWarningAspectRatio: .5625,
			minWarningAspectRatio: .5625,
			maxWarningLength: 30,
			supportsCarousel: !1
		},
		FACEBOOK_REELS_OVERLAY: {
			platform: "facebook",
			placement: "facebook_reels_overlay",
			position: "facebook_reels_overlay",
			placementChecker: function(t) {
				return r("adsPlacementAPISpecReaderIsActiveFacebookPosition")(t, "facebook_reels_overlay");
			},
			assetCustomizationPlacementChecker: function(t) {
				return r("adsContainsAssetCustomizationPlacement")(t, {
					platform: "facebook",
					position: "facebook_reels_overlay"
				});
			},
			maxWarningAspectRatio: 1.7778,
			minWarningAspectRatio: .5625,
			minWarningLength: 0,
			maxWarningLength: 600,
			supportsCarousel: !1
		},
		THREADS_STREAM: {
			placement: "stream",
			platform: "threads",
			position: "stream",
			placementChecker: function(t) {
				return o("AdsPlacementAPISpecReaderUtils").isActiveThreadsPosition(t, "threads_stream");
			},
			assetCustomizationPlacementChecker: function(t) {
				return r("adsContainsAssetCustomizationPlacement")(t, {
					platform: "threads",
					position: "stream"
				});
			},
			minWarningAspectRatio: r("AdsThreadsMediaSpecs").MIN_ASPECT_RATIO,
			maxWarningAspectRatio: r("AdsThreadsMediaSpecs").MAX_ASPECT_RATIO,
			maxWarningLength: r("AdsThreadsMediaSpecs").MAX_VIDEO_DURATION_IN_SEC,
			minWarningWidth: r("AdsThreadsMediaSpecs").MIN_MEDIA_WIDTH_LOW_RES,
			minWarningHeight: r("AdsThreadsMediaSpecs").MIN_STREAM_MEDIA_HEIGHT_LOW_RES,
			supportsCarousel: !1
		}
	}, c = u;
	l.default = c;
}), 98);
