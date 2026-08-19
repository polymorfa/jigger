__d("WAWebBizBroadcastsSelectedRecipientsSection.react", [
	"fbt",
	"WAWebBizBroadcastsAudienceSelectionStrings",
	"WAWebBizBroadcastsContactChatCell.react",
	"WAWebBizBroadcastsRecipientUtils",
	"WAWebBizCard.react",
	"WAWebFlex.react",
	"WAWebFrontendContactGetters",
	"WDSButton.react",
	"WDSIconIcDelete.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useEffect, p = c.useMemo, _ = c.useRef, f = { focusableSection: {
		outline: "x1a2a7pz",
		$$css: !0
	} };
	function g(e) {
		var t = e.selectedRecipientIds, n = e.setSelectedRecipientIds, a = e.totalRecipientCount, i = _(null), l = _(!1);
		m(function() {
			if (l.current) {
				var e = i.current;
				if (e != null && !e.contains(document.activeElement)) {
					l.current = !1;
					var t = e.querySelector("button, [tabindex=\"0\"]");
					t instanceof HTMLElement ? t.focus() : e.focus();
				}
			}
		}, void 0);
		var c = p(function() {
			var e = [];
			for (var n of t) {
				var r = o("WAWebBizBroadcastsRecipientUtils").getContactByUserId(n);
				r != null && e.push(r);
			}
			return e;
		}, [t]), g = d(function(e) {
			n(function(t) {
				var n = new Set(t);
				return n.delete(e), n;
			}), l.current = !0;
		}, [n]);
		return u.jsx(r("WAWebBizCard.react"), {
			header: o("WAWebBizBroadcastsAudienceSelectionStrings").getRecipientsHeader(),
			headerTestid: "biz-broadcasts-selected-recipients-header",
			subtitle: o("WAWebBizBroadcastsAudienceSelectionStrings").getSelectedCountText(t.size, a != null ? a : o("WAWebBizBroadcastsRecipientUtils").getRecipientLimit()),
			subtitleTestid: "biz-broadcasts-selected-recipients-count",
			children: u.jsx(o("WAWebFlex.react").FlexColumn, {
				align: "stretch",
				ref: i,
				tabIndex: -1,
				xstyle: f.focusableSection,
				role: "list",
				"aria-label": s._(
					/*BTDS*/
					""
				),
				children: c.map(function(e, t) {
					var n = e.id.user, a = o("WAWebFrontendContactGetters").getDisplayName(e);
					return u.jsxs(o("WAWebFlex.react").FlexRow, {
						role: "listitem",
						align: "center",
						justify: "all",
						testid: "biz-broadcasts-selected-recipient-row-" + t,
						children: [u.jsx(r("WAWebBizBroadcastsContactChatCell.react"), {
							contact: e,
							index: t
						}), u.jsx(r("WDSButton.react"), {
							"aria-label": s._(
								/*BTDS*/
								"",
								[s._param("name", a)]
							),
							Icon: r("WDSIconIcDelete.react"),
							onPress: function() {
								return g(n);
							},
							size: "small",
							testid: "biz-broadcasts-remove-recipient-button-" + t,
							variant: "borderless"
						})]
					}, n);
				})
			})
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 226);
