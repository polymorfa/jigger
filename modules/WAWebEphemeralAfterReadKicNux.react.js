__d("WAWebEphemeralAfterReadKicNux.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebFormatEphemeralSetting",
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
		var t = o("react-compiler-runtime").c(21), n = e.duration, a = e.onOk, i = r("useWAWebNux")(o("WAWebNux").NUX.EPHEMERAL), l = i[1], d = r("useWAWebNux")(o("WAWebNux").NUX.EPHEMERAL_AFTER_READ), p = d[1], _;
		t[0] !== p || t[1] !== l ? (_ = function() {
			l(), p();
		}, t[0] = p, t[1] = l, t[2] = _) : _ = t[2];
		var f = _, g;
		t[3] !== f || t[4] !== a ? (g = function() {
			f(), o("WAWebModalManager").ModalManager.closeSupportOrModal(), a && a();
		}, t[3] = f, t[4] = a, t[5] = g) : g = t[5];
		var h = g, y;
		t[6] !== f ? (y = function() {
			f(), o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getEphemeralFaqUrl());
		}, t[6] = f, t[7] = y) : y = t[7];
		var C = y, b;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (b = s._(
			/*BTDS*/
			""
		), t[8] = b) : b = t[8];
		var v;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (v = u.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			justify: "center",
			children: u.jsx(r("WAWebFlexItem.react"), { children: u.jsx(o("WAWebWdsPictoDisappearingMessagesIcon.react").WdsPictoDisappearingMessagesIcon, { height: 88 }) })
		}), t[9] = v) : v = t[9];
		var S;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (S = u.jsx(o("WAWebText_DONOTUSE.react").TextHeader, {
			xstyle: c.header,
			children: s._(
				/*BTDS*/
				""
			)
		}), t[10] = S) : S = t[10];
		var R;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? (R = u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
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
		}), t[11] = R) : R = t[11];
		var L;
		t[12] === Symbol.for("react.memo_cache_sentinel") ? (L = u.jsx(r("WDSIconWdsIcDisappearingMessages.react"), {
			"aria-hidden": !0,
			width: 24,
			height: 24,
			iconXstyle: c.icon
		}), t[12] = L) : L = t[12];
		var E;
		t[13] !== n ? (E = u.jsx(m, {
			icon: L,
			children: s._(
				/*BTDS*/
				"",
				[s._param("duration", o("WAWebFormatEphemeralSetting").getDisappearingMessageDurationString(n))]
			)
		}), t[13] = n, t[14] = E) : E = t[14];
		var k;
		t[15] === Symbol.for("react.memo_cache_sentinel") ? (k = u.jsx(m, {
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
		}), t[15] = k) : k = t[15];
		var I;
		t[16] === Symbol.for("react.memo_cache_sentinel") ? (I = u.jsx(m, {
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
		}), t[16] = I) : I = t[16];
		var T;
		return t[17] !== C || t[18] !== h || t[19] !== E ? (T = u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			testid: "ephemeral-after-read-kic-nux-modal",
			onOK: h,
			onCancel: C,
			cancelText: b,
			children: [
				v,
				S,
				R,
				E,
				k,
				I
			]
		}), t[17] = C, t[18] = h, t[19] = E, t[20] = T) : T = t[20], T;
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
