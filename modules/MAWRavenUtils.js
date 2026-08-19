__d("MAWRavenUtils", [
	"EphemeralMediaViewMode",
	"MAWMsg",
	"RavenMessagingState"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = function(t) {
		switch (t) {
			case o("MAWMsg").MAWRavenMsgEphemeralMediaState.PERMANENT: return r("RavenMessagingState").PERMANENT;
			case o("MAWMsg").MAWRavenMsgEphemeralMediaState.UNSEEN: return r("RavenMessagingState").UNSEEN;
			case o("MAWMsg").MAWRavenMsgEphemeralMediaState.SEEN: return r("RavenMessagingState").SEEN;
			case o("MAWMsg").MAWRavenMsgEphemeralMediaState.REPLAYED: return r("RavenMessagingState").REPLAYED;
			case o("MAWMsg").MAWRavenMsgEphemeralMediaState.EXPIRED: return r("RavenMessagingState").EXPIRED;
		}
	}, s = function(t) {
		switch (t) {
			case o("MAWMsg").MAWRavenMsgEphemeralType.KEEP_IN_CHAT: return r("EphemeralMediaViewMode").PERMANENT;
			case o("MAWMsg").MAWRavenMsgEphemeralType.ALLOW_REPLAY: return r("EphemeralMediaViewMode").REPLAYABLE;
			case o("MAWMsg").MAWRavenMsgEphemeralType.VIEW_ONCE: return r("EphemeralMediaViewMode").READ_ONCE;
		}
	}, u = function(t, n) {
		return {
			ephemeralMediaState: n,
			ephemeralMediaViewMode: s(t)
		};
	};
	function c(t, n) {
		switch (n) {
			case o("MAWMsg").MAWRavenMsgEphemeralType.VIEW_ONCE: return t === o("MAWMsg").MAWRavenMsgEphemeralMediaState.UNSEEN ? r("RavenMessagingState").SEEN : e(t);
			case o("MAWMsg").MAWRavenMsgEphemeralType.ALLOW_REPLAY: return t === o("MAWMsg").MAWRavenMsgEphemeralMediaState.UNSEEN ? r("RavenMessagingState").SEEN : t === o("MAWMsg").MAWRavenMsgEphemeralMediaState.SEEN ? r("RavenMessagingState").REPLAYED : e(t);
			case o("MAWMsg").MAWRavenMsgEphemeralType.KEEP_IN_CHAT: return e(t);
		}
	}
	l.getEphemeralMediaState = e, l.deriveRavenSettings = u, l.getNextRavenMessageEphemeralState = c;
}), 98);
