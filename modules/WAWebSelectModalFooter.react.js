__d("WAWebSelectModalFooter.react", [
	"fbt",
	"WAWebChatModel",
	"WAWebContactModel",
	"WAWebEmojiText.react",
	"WAWebFbtIntlList",
	"WAWebFrontendContactGetters",
	"WAWebGroupHistoryGating",
	"WAWebGroupHistorySelectModalFooter.react",
	"WAWebProductModel",
	"WAWebRound.react",
	"WAWebSelectModal.react",
	"WAWebStatusPostingUtils",
	"WAWebText_DONOTUSE.react",
	"WAWebVelocityTransitionGroup",
	"WAWebWdsIcSendFilledIcon.react",
	"WAWebWebIcCheckIcon.react",
	"WDSIconIcArrowForward.react",
	"compactMap",
	"react",
	"stylex",
	"useWAWebDebouncedCallback",
	"useWAWebListener",
	"useWAWebStatusPrivacySettingConfig"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useMemo, _ = d.useRef, f = d.useState, g = {
		container: {
			zIndex: "x12xzxwr",
			flexGrow: "x1c4vz4f",
			flexShrink: "x2lah0s",
			flexBasis: "xdl72j9",
			$$css: !0
		},
		footer: {
			zIndex: "xfo81ep",
			boxSizing: "x9f619",
			display: "x78zum5",
			alignItems: "x6s0dn4",
			width: "xh8yej3",
			paddingInlineEnd: "x15fo07t",
			paddingInlineStart: "xb0esv5",
			backgroundColor: "x1od0jb8",
			$$css: !0
		},
		footerWithSummary: {
			height: "x1x0gksc",
			$$css: !0
		},
		footerWithoutSummary: {
			height: "xqtp20y",
			$$css: !0
		},
		summaryText: {
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			fontSize: "x1jchvi3",
			textOverflow: "xlyipyv",
			whiteSpace: "xuxw1ft",
			$$css: !0
		},
		btn: {
			position: "x10l6tqk",
			insetInlineEnd: "x145d82y",
			left: null,
			right: null,
			bottom: "x3h4tne",
			$$css: !0
		},
		btnSend: {
			position: "x10l6tqk",
			insetInlineEnd: "x11dcrhx",
			left: null,
			right: null,
			$$css: !0
		},
		hideFooter: {
			opacity: "xg01cxk",
			transform: "x1f85oc2",
			$$css: !0
		},
		paragraph: {
			paddingInlineEnd: "xyo0t3i",
			fontSize: "x1f6kntn",
			lineHeight: "x37zpob",
			textAlign: "x1yc453h",
			color: "xhslqc4",
			overflowWrap: "x1mzt3pk",
			$$css: !0
		},
		sendButtonRefresh: {
			color: "x1pse0pq",
			backgroundColor: "xfn3atn",
			$$css: !0
		}
	}, h = {
		CONFIRM: "CONFIRM",
		NEXT: "NEXT",
		SEND: "SEND"
	};
	function y(t) {
		var n = t.getSelectionSummary, a = t.getAnnouncementSummary, i = t.selections, l = t.additionalSelectedCount, u = l === void 0 ? 0 : l, d = t.activeWithoutSelection, y = t.onForward, b = t.startActive, v = t.singleSelectionType, S = v === void 0 ? h.SEND : v, R = t.multipleSelectionType, L = R === void 0 ? h.SEND : R, E = t.shouldShowSelectionSummary, k = E === void 0 ? !0 : E, I = t.disclaimer, T = t.xstyle, D = t.sendButtonAriaLabel, x = t.listType, $ = t.groupWid, P = _(d === !0 || b === !0), N = r("useWAWebDebouncedCallback")(y, 1e3, { leading: !0 }), M = f([]), w = M[0], A = M[1];
		o("useWAWebListener").useListener(i, "all", function() {
			A(i.getSelected());
		}), m(function() {
			var e = i.getSelected();
			A(e);
		}, []);
		var F = function() {
			N();
		}, O = p(function() {
			return d === !0 || w.length > 0 || u > 0;
		}, [
			d,
			u,
			w
		]), B = D != null ? D : s._(
			/*BTDS*/
			""
		);
		m(function() {
			O || (P.current = !1);
		}, [O]);
		var W;
		if (O) {
			var q = w.length + u === 1 ? S : L, U, V;
			switch (q) {
				case h.CONFIRM:
					U = c.jsx(o("WAWebWebIcCheckIcon.react").WebIcCheckIcon, {}), V = s._(
						/*BTDS*/
						""
					);
					break;
				case h.NEXT:
					U = c.jsx(r("WDSIconIcArrowForward.react"), { directional: !0 }), V = s._(
						/*BTDS*/
						""
					);
					break;
				case h.SEND:
				default: U = c.jsx(o("WAWebWdsIcSendFilledIcon.react").WdsIcSendFilledIcon, {
					width: 30,
					directional: !0
				}), V = B;
			}
			var H = c.jsx(o("WAWebRound.react").Round, {
				label: V,
				theme: k ? o("WAWebRound.react").RoundTheme.Default : o("WAWebRound.react").RoundTheme.Large,
				xstyle: g.sendButtonRefresh,
				onClick: F,
				children: U
			});
			if (I != null) return c.jsx(r("WAWebVelocityTransitionGroup"), {
				transitionName: "slide-up-down-footer",
				children: x === o("WAWebSelectModal.react").ListType.ParticipantManageModal && o("WAWebGroupHistoryGating").isGroupHistorySenderEnabled($) ? c.jsx(r("WAWebGroupHistorySelectModalFooter.react"), {
					actionLabel: s._(
						/*BTDS*/
						"",
						[s._plural(w.length + u)]
					),
					onActionPress: F,
					disclaimer: I,
					memberCount: w.length,
					selectedContacts: w.filter(function(e) {
						return e instanceof r("WAWebContactModel");
					})
				}) : c.jsxs("div", {
					className: "xhtitgo x78zum5 x2lah0s x6s0dn4 x1p57kb1 xyo0t3i xvg22vi xb0esv5 x1l1ennw",
					children: [c.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
						xstyle: g.paragraph,
						children: I
					}), c.jsx("div", {
						"data-animate-btn": !0,
						children: H
					})]
				})
			});
			var G = k ? c.jsx(C, {
				items: w,
				getSelectionSummary: n,
				getAnnouncementSummary: a
			}) : null, z = k ? g.btnSend : g.btn, j = c.jsx("div", babelHelpers.extends({ "data-animate-btn": !0 }, (e || (e = r("stylex"))).props(z, !P.current && g.hideFooter), { children: H }));
			W = c.jsxs("div", babelHelpers.extends({}, e.props(g.footer, k ? g.footerWithSummary : g.footerWithoutSummary, T), { children: [G, j] }));
		}
		return c.jsx(r("WAWebVelocityTransitionGroup"), {
			transitionName: "slide-up-down-footer",
			xstyle: g.container,
			children: W
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		for (var t, n = e.getAnnouncementSummary, a = e.getSelectionSummary, i = e.items, l = o("useWAWebStatusPrivacySettingConfig").useWAWebStatusPrivacySettingConfig(), u = l.statusPostingPrivacyConfig, d = r("compactMap")(i, function(e) {
			return e instanceof o("WAWebChatModel").Chat ? e.id.isStatus() ? u != null ? o("WAWebStatusPostingUtils").formatStatusSetting(u) : null : e.formattedTitle : e instanceof o("WAWebProductModel").Product ? e.name : o("WAWebFrontendContactGetters").getFormattedShortNameWithNonBreakingSpaces(e) || o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone(e);
		}), m = [], p = d.length - 1; p >= 0; p--) m.push(c.jsx(o("WAWebEmojiText.react").EmojiText, {
			className: "x1rg5ohu x4gbaf0",
			text: d[p]
		}, p));
		var _ = (t = r("WAWebFbtIntlList"))(m, t.CONJUNCTIONS.NONE, t.DELIMITERS.COMMA), f = t(d, t.CONJUNCTIONS.NONE, t.DELIMITERS.COMMA), h = s.isFbtInstance(f) ? f : null, y = c.jsx("span", {
			"aria-live": "polite",
			"aria-label": n == null ? void 0 : n(i),
			title: h,
			children: a == null ? _ : a(i)
		});
		return c.jsx(r("WAWebVelocityTransitionGroup"), {
			transitionName: "pop",
			xstyle: g.summaryText,
			children: y
		});
	}
	C.displayName = C.name + " [from " + i.id + "]", l.FooterType = h, l.SelectModalFooter = y;
}), 226);
