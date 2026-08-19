__d("WAWebStatusViewerFollowNewsletterButton.react", [
	"fbt",
	"WAWebFollowNewsletter",
	"WAWebNewsletterCollection",
	"WAWebStateUtils",
	"WAWebWamEnumChannelEventSurface",
	"WAWebWamEnumTsSurface",
	"WDSButton.react",
	"react",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useState;
	function p(e) {
		var t = e.statusId, n = r("WAWebNewsletterCollection").get(t), a = o("useWAWebModelValues").useOptionalModelValues(n == null ? void 0 : n.newsletterMetadata, ["membershipType"]), i = m(!1), l = i[0], c = i[1], p = d(async function() {
			if (n != null) {
				c(!0);
				try {
					await o("WAWebFollowNewsletter").followNewsletter(o("WAWebStateUtils").unproxy(n), {
						eventSurface: o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE.CHANNEL_UPDATES_HOME,
						discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE.STATUS_VIEW
					});
				} finally {
					c(!1);
				}
			}
		}, [n]);
		return n == null || !(a != null && a.iAmGuest()) ? null : u.jsx(r("WDSButton.react"), {
			variant: "outline",
			type: "media",
			size: "medium",
			onPress: function() {
				return void p();
			},
			loading: l,
			testid: "status-viewer-follow-channel-button",
			label: s._(
				/*BTDS*/
				""
			)
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
