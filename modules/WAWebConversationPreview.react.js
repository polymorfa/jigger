__d("WAWebConversationPreview.react", [
	"fbt",
	"WAWebAppContext.react",
	"WAWebClock",
	"WAWebConversationBackground.react",
	"WAWebConversationPanelWrapper.stylex",
	"WAWebMessageContainer.react",
	"WAWebMsgCheckIcon.react",
	"WAWebMsgDblcheckIcon.react",
	"WAWebThemeContext",
	"WDSFlex.stylex",
	"WDSText.react",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = {
		previewMessages: {
			position: "x1n2onr6",
			zIndex: "x1vjfegm",
			flexBasis: "x1r8uery",
			paddingTop: "x1p57kb1",
			paddingBottom: "xvpt6g3",
			paddingInlineStart: "x14hj8or",
			paddingInlineEnd: "xfwifpm",
			paddingLeft: null,
			paddingRight: null,
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		previewBubbleWidth: {
			maxWidth: "xggofmx",
			$$css: !0
		},
		spacerCheckIcon: {
			width: "xn6xy2s",
			$$css: !0
		},
		previewMeta: {
			position: "x1n2onr6",
			zIndex: "x1n327nk",
			float: "xtrg13t",
			marginTop: "xhsvlbd",
			marginBottom: "xz62fqu",
			marginInlineStart: "x1lziwak",
			marginInlineEnd: "x7g7pl8",
			color: "x1bvqhpb",
			fontSize: "x1ncwhqj",
			height: "xx3o462",
			lineHeight: "x152skdk",
			whiteSpace: "xuxw1ft",
			$$css: !0
		},
		ackBlue: {
			color: "x1rv0e52",
			$$css: !0
		},
		chatHeader: {
			position: "x1n2onr6",
			zIndex: "xfo81ep",
			boxSizing: "x9f619",
			display: "x78zum5",
			alignItems: "x6s0dn4",
			width: "xh8yej3",
			height: "x185czh",
			paddingTop: "x889kno",
			paddingBottom: "x1a8lsjc",
			paddingInlineStart: "xf7dkkf",
			paddingInlineEnd: "xv54qhq",
			backgroundColor: "x1280gxy",
			"::after_position": "x1j6awrg",
			"::after_bottom": "x1te75w5",
			"::after_insetInlineStart": "x1iygr5g",
			"::after_width": "x4eaejv",
			"::after_height": "xcock1l",
			"::after_content": "x100rkj9",
			"::after_backgroundColor": "xptwh4s",
			"::after_borderBottomWidth": "x1qj619r",
			"::after_borderBottomStyle": "x1r9ni5o",
			"::after_borderBottomColor": "xb1pvdl",
			$$css: !0
		},
		chatHeaderDark: {
			boxShadow: "xu306ak",
			"::after_display": "x1h1zc6f",
			$$css: !0
		},
		chatHeaderMaterial: {
			"::after_content": "x100rkj9",
			"::after_display": "x1h1zc6f",
			$$css: !0
		},
		chatTitle: {
			display: "x78zum5",
			flexGrow: "x1iyjqo2",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			fontSize: "x1jchvi3",
			fontWeight: "x1fcty0u",
			lineHeight: "xdod15v",
			color: "x14ug900",
			textAlign: "x1yc453h",
			textOverflow: "xlyipyv",
			whiteSpace: "xuxw1ft",
			$$css: !0
		},
		chatTitleDark: {
			fontWeight: "xk50ysn",
			$$css: !0
		}
	};
	function m(e, t) {
		var n = new Date();
		return n.setHours(e, t, 0, 0), o("WAWebClock").Clock.timestampStr(Math.floor(n.getTime() / 1e3));
	}
	function p(t) {
		var n = o("react-compiler-runtime").c(31), a = t.direction, i = t.icon, l = t.message, s = t.time, u;
		n[0] !== a ? (u = (e || (e = r("stylex"))).props(a === "incoming" ? o("WDSFlex.stylex").wdsFlex.selfStart : o("WDSFlex.stylex").wdsFlex.selfEnd, d.previewBubbleWidth), n[0] = a, n[1] = u) : u = n[1];
		var m = a === "outgoing", p, _;
		n[2] === Symbol.for("react.memo_cache_sentinel") ? (p = { className: "x16ovd2e x12xbjc7 x1iw51ew xde1mab" }, _ = { className: "xt0psk2" }, n[2] = p, n[3] = _) : (p = n[2], _ = n[3]);
		var f;
		n[4] === Symbol.for("react.memo_cache_sentinel") ? (f = { className: "x1ncwhqj x3nfvp2 xxymvpz xlshs6z xqtp20y xexx8yu x18d9i69 x181vq82 x1uc92m" }, n[4] = f) : f = n[4];
		var g;
		n[5] === Symbol.for("react.memo_cache_sentinel") ? (g = (e || (e = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flexGrow0, o("WDSFlex.stylex").wdsFlex.flexShrink0), n[5] = g) : g = n[5];
		var h;
		n[6] !== s ? (h = c.jsx("span", babelHelpers.extends({}, g, { children: s })), n[6] = s, n[7] = h) : h = n[7];
		var y;
		n[8] !== i ? (y = i != null && c.jsx("span", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flexGrow0, o("WDSFlex.stylex").wdsFlex.flexShrink0, d.spacerCheckIcon))), n[8] = i, n[9] = y) : y = n[9];
		var C;
		n[10] !== h || n[11] !== y ? (C = c.jsxs("span", babelHelpers.extends({}, f, {
			"aria-hidden": !0,
			children: [h, y]
		})), n[10] = h, n[11] = y, n[12] = C) : C = n[12];
		var b;
		n[13] !== l || n[14] !== C ? (b = c.jsx("div", babelHelpers.extends({}, _, { children: c.jsxs(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDefault",
			children: [l, C]
		}) })), n[13] = l, n[14] = C, n[15] = b) : b = n[15];
		var v;
		n[16] === Symbol.for("react.memo_cache_sentinel") ? (v = (e || (e = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flex, o("WDSFlex.stylex").wdsFlex.alignCenter, o("WDSFlex.stylex").wdsFlex.columnGapQuarter, d.previewMeta), n[16] = v) : v = n[16];
		var S;
		n[17] !== s ? (S = c.jsx("span", { children: s }), n[17] = s, n[18] = S) : S = n[18];
		var R;
		n[19] !== i || n[20] !== S ? (R = c.jsxs("div", babelHelpers.extends({}, v, { children: [S, i] })), n[19] = i, n[20] = S, n[21] = R) : R = n[21];
		var L;
		n[22] !== b || n[23] !== R ? (L = c.jsxs("div", babelHelpers.extends({}, p, { children: [b, R] })), n[22] = b, n[23] = R, n[24] = L) : L = n[24];
		var E;
		n[25] !== L || n[26] !== m ? (E = c.jsx(r("WAWebMessageContainer.react"), {
			isSentByMe: m,
			children: L
		}), n[25] = L, n[26] = m, n[27] = E) : E = n[27];
		var k;
		return n[28] !== u || n[29] !== E ? (k = c.jsx("div", babelHelpers.extends({}, u, { children: E })), n[28] = u, n[29] = E, n[30] = k) : k = n[30], k;
	}
	function _() {
		var t = o("react-compiler-runtime").c(5), n;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (n = (e || (e = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flexColumn, o("WDSFlex.stylex").wdsFlex.justifyEnd, o("WDSFlex.stylex").wdsFlex.rowGapSingle, o("WDSFlex.stylex").wdsFlex.flexGrow1, o("WDSFlex.stylex").wdsFlex.flexShrink1, d.previewMessages), t[0] = n) : n = t[0];
		var a;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (a = c.jsx(p, {
			direction: "incoming",
			message: s._(
				/*BTDS*/
				""
			),
			time: m(11, 30)
		}), t[1] = a) : a = t[1];
		var i;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (i = c.jsx(p, {
			direction: "outgoing",
			message: s._(
				/*BTDS*/
				""
			),
			time: m(11, 31),
			icon: c.jsx(o("WAWebMsgCheckIcon.react").MsgCheckIcon, {
				height: 11,
				width: 16
			})
		}), t[2] = i) : i = t[2];
		var l;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (l = c.jsx(p, {
			direction: "incoming",
			message: s._(
				/*BTDS*/
				""
			),
			time: m(11, 32)
		}), t[3] = l) : l = t[3];
		var u;
		return t[4] === Symbol.for("react.memo_cache_sentinel") ? (u = c.jsxs("div", babelHelpers.extends({}, n, {
			"data-testid": "conversation-preview-messages",
			children: [
				a,
				i,
				l,
				c.jsx(p, {
					direction: "outgoing",
					message: s._(
						/*BTDS*/
						""
					),
					time: m(11, 33),
					icon: c.jsx(o("WAWebMsgDblcheckIcon.react").MsgDblcheckIcon, {
						height: 11,
						width: 16,
						xstyle: d.ackBlue
					})
				})
			]
		})), t[4] = u) : u = t[4], u;
	}
	function f(t) {
		var n = o("react-compiler-runtime").c(24), a = t.previewType, i = t.showDoodle, l = t.title, s = t.wallpaper, u = o("WAWebAppContext.react").useAppContext(), m = u.rightDrawerOpen, p = o("WAWebThemeContext").useIsDarkTheme(), f;
		n[0] !== p ? (f = (e || (e = r("stylex"))).props(d.chatHeader, p && d.chatHeaderDark, d.chatHeaderMaterial, o("WAWebConversationPanelWrapper.stylex").styles.header), n[0] = p, n[1] = f) : f = n[1];
		var g;
		n[2] !== p ? (g = (e || (e = r("stylex"))).props(d.chatTitle, p && d.chatTitleDark, o("WAWebConversationPanelWrapper.stylex").styles.titleInHeader), n[2] = p, n[3] = g) : g = n[3];
		var h;
		n[4] !== g || n[5] !== l ? (h = c.jsx("span", babelHelpers.extends({}, g, { children: l })), n[4] = g, n[5] = l, n[6] = h) : h = n[6];
		var y;
		n[7] !== f || n[8] !== h ? (y = c.jsx("header", babelHelpers.extends({}, f, { children: h })), n[7] = f, n[8] = h, n[9] = y) : y = n[9];
		var C;
		n[10] !== i || n[11] !== s ? (C = c.jsx(r("WAWebConversationBackground.react"), {
			wallpaper: s,
			showDoodle: i
		}), n[10] = i, n[11] = s, n[12] = C) : C = n[12];
		var b;
		n[13] !== a ? (b = a === "theme" && c.jsx(_, {}), n[13] = a, n[14] = b) : b = n[14];
		var v;
		n[15] !== m ? (v = {
			0: {},
			1: { className: "x1lun4ml x18b5jzi xbogo7e" }
		}[!!m << 0], n[15] = m, n[16] = v) : v = n[16];
		var S;
		n[17] !== v ? (S = c.jsx("footer", babelHelpers.extends({}, v)), n[17] = v, n[18] = S) : S = n[18];
		var R;
		return n[19] !== y || n[20] !== C || n[21] !== b || n[22] !== S ? (R = c.jsxs(c.Fragment, { children: [
			y,
			C,
			b,
			S
		] }), n[19] = y, n[20] = C, n[21] = b, n[22] = S, n[23] = R) : R = n[23], R;
	}
	l.default = f;
}), 226);
