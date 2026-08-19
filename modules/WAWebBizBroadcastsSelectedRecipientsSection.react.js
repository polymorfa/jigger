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
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useEffect, p = c.useMemo, _ = c.useRef, f = { focusableSection: {
		outline: "x1a2a7pz",
		$$css: !0
	} };
	function g(e) {
		var t = o("react-compiler-runtime").c(18), n = e.selectedRecipientIds, a = e.setSelectedRecipientIds, i = e.totalRecipientCount, l = _(null), c = _(!1), d;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (d = function() {
			if (c.current) {
				var e = l.current;
				if (e != null && !e.contains(document.activeElement)) {
					c.current = !1;
					var t = e.querySelector("button, [tabindex=\"0\"]");
					t instanceof HTMLElement ? t.focus() : e.focus();
				}
			}
		}, t[0] = d) : d = t[0], m(d, void 0);
		var p;
		if (t[1] !== n) {
			p = [];
			for (var g of n) {
				var h = o("WAWebBizBroadcastsRecipientUtils").getContactByUserId(g);
				h != null && p.push(h);
			}
			t[1] = n, t[2] = p;
		} else p = t[2];
		var y = p, C;
		t[3] !== a ? (C = function(t) {
			a(function(e) {
				var n = new Set(e);
				return n.delete(t), n;
			}), c.current = !0;
		}, t[3] = a, t[4] = C) : C = t[4];
		var b = C, v;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (v = o("WAWebBizBroadcastsAudienceSelectionStrings").getRecipientsHeader(), t[5] = v) : v = t[5];
		var S;
		t[6] !== i ? (S = i != null ? i : o("WAWebBizBroadcastsRecipientUtils").getRecipientLimit(), t[6] = i, t[7] = S) : S = t[7];
		var R;
		t[8] !== n.size || t[9] !== S ? (R = o("WAWebBizBroadcastsAudienceSelectionStrings").getSelectedCountText(n.size, S), t[8] = n.size, t[9] = S, t[10] = R) : R = t[10];
		var L;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? (L = s._(
			/*BTDS*/
			""
		), t[11] = L) : L = t[11];
		var E;
		t[12] !== b || t[13] !== y ? (E = u.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			ref: l,
			tabIndex: -1,
			xstyle: f.focusableSection,
			role: "list",
			"aria-label": L,
			children: y.map(function(e, t) {
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
							return b(n);
						},
						size: "small",
						testid: "biz-broadcasts-remove-recipient-button-" + t,
						variant: "borderless"
					})]
				}, n);
			})
		}), t[12] = b, t[13] = y, t[14] = E) : E = t[14];
		var k;
		return t[15] !== R || t[16] !== E ? (k = u.jsx(r("WAWebBizCard.react"), {
			header: v,
			headerTestid: "biz-broadcasts-selected-recipients-header",
			subtitle: R,
			subtitleTestid: "biz-broadcasts-selected-recipients-count",
			children: E
		}), t[15] = R, t[16] = E, t[17] = k) : k = t[17], k;
	}
	l.default = g;
}), 226);
