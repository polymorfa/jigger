__d("WAWebBizBroadcastTosReviewBanner.react", [
	"fbt",
	"WAWebBizBroadcastTosModal.react",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebFlex.react",
	"WAWebModalManager",
	"WAWebWamEnumEntryPoint",
	"WDSText.react",
	"WDSTextualLink.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useEffect;
	function d(e) {
		var t = o("react-compiler-runtime").c(7), n = e.broadcastJid, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = [], t[0] = a) : a = t[0], c(m, a);
		var i;
		t[1] !== n ? (i = function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.tosReviewBannerClicked(), o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebBizBroadcastTosModal.react"), {
				entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD,
				onAccept: o("WAWebModalManager").closeModalManager,
				onDismiss: o("WAWebModalManager").closeModalManager,
				broadcastJid: n
			}), { transition: "modal-flow" });
		}, t[1] = n, t[2] = i) : i = t[2];
		var l = i, d;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (d = s._(
			/*BTDS*/
			""
		), t[3] = d) : d = t[3];
		var p;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (p = s._(
			/*BTDS*/
			""
		), t[4] = p) : p = t[4];
		var _;
		return t[5] !== l ? (_ = u.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			children: u.jsxs(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				textAlign: "center",
				children: [
					d,
					" ",
					u.jsx(r("WDSTextualLink.react"), {
						onClick: l,
						children: p
					})
				]
			})
		}), t[5] = l, t[6] = _) : _ = t[6], _;
	}
	function m() {
		o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.tosReviewBannerViewed();
	}
	l.default = d;
}), 226);
