__d("WAWebAfterReadNux.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebModalManager",
	"WAWebNux",
	"WAWebText_DONOTUSE.react",
	"WAWebWdsPictoDisappearingMessagesIcon.react",
	"WDSIconIcBackHand.react",
	"WDSIconIcDuration.react",
	"WDSIconWdsIcDisappearingMessages.react",
	"react",
	"react-compiler-runtime",
	"useWAWebNux"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = {
		bold: {
			fontWeight: "xjs9k72",
			$$css: !0
		},
		header: {
			fontSize: "x1603h9y",
			fontWeight: "x117nqv4",
			lineHeight: "x1u7k74",
			marginTop: "x9u28bd",
			textAlign: "x2b8uid",
			color: "x14ug900",
			$$css: !0
		},
		subtitle: {
			marginTop: "x98l61r",
			fontSize: "x1f6kntn",
			textAlign: "x2b8uid",
			marginBottom: "xg6s713",
			$$css: !0
		},
		icon: {
			marginInlineEnd: "xviac27",
			color: "xhslqc4",
			$$css: !0
		},
		container: {
			position: "x1n2onr6",
			display: "x78zum5",
			alignItems: "x6s0dn4",
			marginTop: "x1nmyh1g",
			color: "xhslqc4",
			fontSize: "x1nxh6w3",
			$$css: !0
		},
		body: {
			marginTop: "x1rdy4ex",
			fontSize: "x1nxh6w3",
			color: "xhslqc4",
			$$css: !0
		}
	};
	function d(e) {
		var t = o("react-compiler-runtime").c(15), n = e.onOk, a = r("useWAWebNux")(o("WAWebNux").NUX.EPHEMERAL_AFTER_READ), i = a[1], l;
		t[0] !== n || t[1] !== i ? (l = function() {
			i(), o("WAWebModalManager").ModalManager.closeSupportOrModal(), n && n();
		}, t[0] = n, t[1] = i, t[2] = l) : l = t[2];
		var d = l, p;
		t[3] !== i ? (p = function() {
			i(), o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getEphemeralFaqUrl());
		}, t[3] = i, t[4] = p) : p = t[4];
		var _ = p, f;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (f = s._(
			/*BTDS*/
			""
		), t[5] = f) : f = t[5];
		var g;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (g = u.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			justify: "center",
			children: u.jsx(r("WAWebFlexItem.react"), { children: u.jsx(o("WAWebWdsPictoDisappearingMessagesIcon.react").WdsPictoDisappearingMessagesIcon, { height: 88 }) })
		}), t[6] = g) : g = t[6];
		var h;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx(o("WAWebText_DONOTUSE.react").TextHeader, {
			xstyle: c.header,
			children: s._(
				/*BTDS*/
				""
			)
		}), t[7] = h) : h = t[7];
		var y;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (y = u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
			xstyle: c.subtitle,
			children: s._(
				/*BTDS*/
				"",
				[s._param("afterReading", u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
					xstyle: c.bold,
					children: s._(
						/*BTDS*/
						""
					)
				}))]
			)
		}), t[8] = y) : y = t[8];
		var C;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (C = u.jsx(m, {
			icon: u.jsx(r("WDSIconWdsIcDisappearingMessages.react"), {
				"aria-hidden": !0,
				width: 24,
				height: 24,
				iconXstyle: c.icon
			}),
			children: s._(
				/*BTDS*/
				""
			)
		}), t[9] = C) : C = t[9];
		var b;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (b = u.jsx(m, {
			icon: u.jsx(r("WDSIconIcDuration.react"), {
				"aria-hidden": !0,
				width: 24,
				height: 24,
				iconXstyle: c.icon
			}),
			children: s._(
				/*BTDS*/
				""
			)
		}), t[10] = b) : b = t[10];
		var v;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? (v = u.jsx(m, {
			icon: u.jsx(r("WDSIconIcBackHand.react"), {
				"aria-hidden": !0,
				width: 24,
				height: 24,
				iconXstyle: c.icon
			}),
			children: s._(
				/*BTDS*/
				""
			)
		}), t[11] = v) : v = t[11];
		var S;
		return t[12] !== _ || t[13] !== d ? (S = u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			testid: "after-read-nux-modal",
			onOK: d,
			onCancel: _,
			cancelText: f,
			children: [
				g,
				h,
				y,
				C,
				b,
				v
			]
		}), t[12] = _, t[13] = d, t[14] = S) : S = t[14], S;
	}
	function m(e) {
		var t = o("react-compiler-runtime").c(5), n = e.children, r = e.icon, a;
		t[0] !== n ? (a = u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
			xstyle: c.body,
			children: u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, { children: n })
		}), t[0] = n, t[1] = a) : a = t[1];
		var i;
		return t[2] !== r || t[3] !== a ? (i = u.jsxs(o("WAWebText_DONOTUSE.react").TextDiv, {
			xstyle: c.container,
			children: [r, a]
		}), t[2] = r, t[3] = a, t[4] = i) : i = t[4], i;
	}
	l.default = d;
}), 226);
