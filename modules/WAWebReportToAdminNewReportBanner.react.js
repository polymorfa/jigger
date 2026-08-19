__d("WAWebReportToAdminNewReportBanner.react", [
	"fbt",
	"WATimeUtils",
	"WAWebConversationBanner.react",
	"WAWebDrawerManager",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebKeyboardTabUtils",
	"WAWebMessageReportRefreshedIcon.react",
	"WAWebRevokeMsgConstants",
	"WAWebSendForAdminReviewUtils",
	"WAWebSentForAdminReviewFlow.react",
	"WAWebStateUtils",
	"WAWebText.react",
	"WAWebText_DONOTUSE.react",
	"WAWebUimUie.react",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime",
	"useWAWebModelValues",
	"useWAWebUIM"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react")), d = {
		marginTop6: {
			marginTop: "x1k70j0n",
			$$css: !0
		},
		marginBottom6: {
			marginBottom: "xzueoph",
			$$css: !0
		}
	}, m = {
		banner: {
			backgroundColor: "x1280gxy",
			$$css: !0
		},
		iconRefreshed: {
			color: "xhslqc4",
			$$css: !0
		}
	};
	function p(t) {
		var n = o("react-compiler-runtime").c(14), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l = a, u = l.chat, p = l.onClose, _ = r("useWAWebUIM")(), f;
		n[3] !== u || n[4] !== p || n[5] !== i || n[6] !== _ ? (f = function() {
			o("WAWebDrawerManager").DrawerManager.openDrawerRight(c.jsx(r("WAWebSentForAdminReviewFlow.react"), {
				chat: o("WAWebStateUtils").unproxy(u),
				ref: i,
				onClose: o("WAWebDrawerManager").closeDrawerRight
			}, "rta-" + u.id.toString()), {
				transition: "slide-left",
				uim: _,
				focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
			}), p();
		}, n[3] = u, n[4] = p, n[5] = i, n[6] = _, n[7] = f) : f = n[7];
		var g = f, h;
		n[8] === Symbol.for("react.memo_cache_sentinel") ? (h = c.jsx(r("WAWebFlexItem.react"), {
			xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingEnd20,
			children: c.jsx(o("WAWebMessageReportRefreshedIcon.react").MessageReportRefreshedIcon, { iconXstyle: m.iconRefreshed })
		}), n[8] = h) : h = n[8];
		var y;
		n[9] === Symbol.for("react.memo_cache_sentinel") ? (y = c.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: d.marginTop6,
			align: "center",
			children: [h, c.jsx(r("WAWebFlexItem.react"), {
				xstyle: d.marginBottom6,
				children: c.jsx(o("WAWebText.react").WAWebTextMuted, {
					as: "span",
					children: s._(
						/*BTDS*/
						"",
						[s._implicitParam("=m0", c.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
							color: "accent",
							weight: "semibold",
							children: s._(
								/*BTDS*/
								""
							)
						}))]
					)
				})
			})]
		}), n[9] = y) : y = n[9];
		var C;
		return n[10] !== g || n[11] !== p || n[12] !== i ? (C = c.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "ReportToAdminNewReportBanner",
			escapable: !0,
			children: c.jsx(r("WAWebConversationBanner.react"), {
				ref: i,
				xstyle: m.banner,
				onClick: g,
				onClose: p,
				children: y
			})
		}), n[10] = g, n[11] = p, n[12] = i, n[13] = C) : C = n[13], C;
	}
	function _(e) {
		var t = o("react-compiler-runtime").c(2), n;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (n = ["groupMetadata"], t[0] = n) : n = t[0];
		var r = o("useWAWebModelValues").useModelValues(e, n), a;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (a = ["lastReportToAdminTimestamp"], t[1] = a) : a = t[1];
		var i = o("useWAWebModelValues").useOptionalModelValues(r.groupMetadata, a), l = i == null ? void 0 : i.lastReportToAdminTimestamp;
		if (l == null) return !1;
		var s = o("WAWebRevokeMsgConstants").REVOKE_WINDOW + o("WAWebRevokeMsgConstants").REVOKE_WINDOW_RECEIVER_MARGIN, u = o("WATimeUtils").unixTime() - l <= s;
		return u;
	}
	function f(e) {
		var t = o("react-compiler-runtime").c(1), n;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (n = ["reportToAdminMode"], t[0] = n) : n = t[0];
		var r = o("useWAWebModelValues").useOptionalModelValues(e.groupMetadata, n);
		return (r == null ? void 0 : r.reportToAdminMode) === !0;
	}
	function g(e) {
		var t = o("react-compiler-runtime").c(6), n;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (n = ["id", "groupMetadata"], t[0] = n) : n = t[0];
		var r = o("useWAWebModelValues").useModelValues(e, n), a = _(r), i = f(r) && a, l;
		t[1] !== r ? (l = function() {
			o("WAWebSendForAdminReviewUtils").clearLastReportTimestamp(r);
		}, t[1] = r, t[2] = l) : l = t[2];
		var s;
		return t[3] !== i || t[4] !== l ? (s = [i, l], t[3] = i, t[4] = l, t[5] = s) : s = t[5], s;
	}
	l.ReportToAdminNewReportBanner = p, l.useReportToAdminNewReportBanner = g;
}), 226);
