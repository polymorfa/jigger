__d("WAWebBizBroadcastTosReviewBanner.react", [
	"fbt",
	"WAWebBizBroadcastTosModal.react",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebFlex.react",
	"WAWebModalManager",
	"WAWebWamEnumEntryPoint",
	"WDSText.react",
	"WDSTextualLink.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useEffect;
	function d(e) {
		var t = e.broadcastJid;
		c(function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.tosReviewBannerViewed();
		}, []);
		var n = function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.tosReviewBannerClicked(), o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebBizBroadcastTosModal.react"), {
				entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD,
				onAccept: o("WAWebModalManager").closeModalManager,
				onDismiss: o("WAWebModalManager").closeModalManager,
				broadcastJid: t
			}), { transition: "modal-flow" });
		};
		return u.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			children: u.jsxs(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				textAlign: "center",
				children: [
					s._(
						/*BTDS*/
						""
					),
					" ",
					u.jsx(r("WDSTextualLink.react"), {
						onClick: n,
						children: s._(
							/*BTDS*/
							""
						)
					})
				]
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
