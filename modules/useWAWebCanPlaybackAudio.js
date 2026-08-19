__d("useWAWebCanPlaybackAudio", [
	"WATimeUtils",
	"WAWebMsgGetters",
	"WAWebMusicConsumptionEligibilityUpdater",
	"WAWebMusicEligibleCountriesProvider",
	"WAWebMusicGatingUtils",
	"WAWebMusicPlaybackUtils",
	"react",
	"react-compiler-runtime",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = s.useEffect, c = s.useMemo;
	function d(e) {
		var t = o("react-compiler-runtime").c(9), n;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (n = [o("WAWebMsgGetters").getIsStatus], t[0] = n) : n = t[0];
		var r = o("useWAWebMsgValues").useMsgValues(e.id, n), a = r[0], i, l;
		t[1] !== a || t[2] !== e ? (i = function() {
			e.interactiveAnnotations && !a && (o("WAWebMusicConsumptionEligibilityUpdater").updateMusicConsumptionAvailability(e.id, e.interactiveAnnotations, e.lastMusicBlocklistUpdate), e.set({ lastMusicBlocklistUpdate: o("WATimeUtils").unixTime() }));
		}, l = [e, a], t[1] = a, t[2] = e, t[3] = i, t[4] = l) : (i = t[3], l = t[4]), u(i, l);
		var s;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (s = [o("WAWebMsgGetters").getFirstMusicAnnotationEmbeddedContent, o("WAWebMsgGetters").getIsNewsletterMsg], t[5] = s) : s = t[5];
		var c = o("useWAWebMsgValues").useMsgValues(e.id, s), d = c[0], m = c[1], _ = p({
			isNewsletterMsg: m,
			isStatusMsg: a
		}), f;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (f = o("WAWebMusicEligibleCountriesProvider").provideMusicEligibleCountries(), t[6] = f) : f = t[6];
		var g = f, h;
		e: {
			if (d == null) {
				h = !0;
				break e;
			}
			if (!_) {
				h = !1;
				break e;
			}
			var y;
			t[7] !== d.countryBlocklist ? (y = o("WAWebMusicPlaybackUtils").canPlaybackMusic(d.countryBlocklist, g), t[7] = d.countryBlocklist, t[8] = y) : y = t[8], h = y;
		}
		return h;
	}
	function m(e) {
		var t = o("react-compiler-runtime").c(2), n;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (n = [o("WAWebMsgGetters").getFirstMusicAnnotationEmbeddedContent, o("WAWebMsgGetters").getIsNewsletterStatus], t[0] = n) : n = t[0];
		var r = o("useWAWebMsgValues").useMsgValues(e.id, n), a = r[0], i = r[1], l = o("WAWebMusicEligibleCountriesProvider").provideMusicEligibleCountries(), s;
		e: {
			if (a == null) {
				s = !1;
				break e;
			}
			if (!o("WAWebMusicPlaybackUtils").canPlaybackMusic(a.countryBlocklist, l)) {
				s = !1;
				break e;
			}
			if (i) {
				var u;
				t[1] === Symbol.for("react.memo_cache_sentinel") ? (u = o("WAWebMusicGatingUtils").isNewsletterStatusMusicConsumptionEnabled(), t[1] = u) : u = t[1], s = u;
				break e;
			}
			s = !0;
		}
		return s;
	}
	function p(e) {
		var t = e.isNewsletterMsg, n = e.isStatusMsg;
		return t ? n ? o("WAWebMusicGatingUtils").isStatusMusicReceiverEnabled() && o("WAWebMusicGatingUtils").isNewsletterStatusMusicConsumptionEnabled() : o("WAWebMusicGatingUtils").isStatusMusicReceiverEnabledForNewsletter() : n ? o("WAWebMusicGatingUtils").isStatusMusicReceiverEnabled() : !1;
	}
	l.useCanPlaybackAudio = d, l.useCanDisplayMusicAttribution = m;
}), 98);
