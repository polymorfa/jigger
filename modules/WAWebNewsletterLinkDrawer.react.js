__d("WAWebNewsletterLinkDrawer.react", [
	"fbt",
	"WALogger",
	"WAWebCellFrame.react",
	"WAWebCommonNewsletterStrings",
	"WAWebCopyPasteSelectable.react",
	"WAWebDetailImage.react",
	"WAWebDrawer.react",
	"WAWebDrawerButton.react",
	"WAWebDrawerHeader.react",
	"WAWebFlex.react",
	"WAWebText.react",
	"WAWebWamEnumChannelLinkShareScreen",
	"WDSIconIcContentCopy.react",
	"WDSIconIcFastForward.react",
	"WDSMargins.stylex",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebModelValues",
	"useWAWebNewsletterInviteLink"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d = c || (c = o("react")), m = { marginInline30: {
		marginInlineStart: "xymharo",
		marginInlineEnd: "x2pibh5",
		marginLeft: null,
		marginRight: null,
		$$css: !0
	} }, p = {
		drawer: {
			backgroundColor: "x1280gxy",
			$$css: !0
		},
		optionsHeader: {
			textAlign: "x1yc453h",
			$$css: !0
		},
		mouseCursor: {
			cursor: "x1ypdohk",
			$$css: !0
		},
		link: {
			wordBreak: "x1yn0g08",
			$$css: !0
		},
		newsletterName: {
			overflowWrap: "x1mzt3pk",
			maxHeight: "x1o16irs",
			$$css: !0
		},
		secondaryColor: {
			color: "xhslqc4",
			$$css: !0
		}
	};
	function _(t) {
		var n = o("react-compiler-runtime").c(50), a = t.entryPoint, i = t.newsletter, l = t.onBack, c = t.onClose, _ = t.ref, g = a != null ? a : void 0;
		g === void 0 && o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Encountered null link share screen entry point"]))).tags("newsletter-logging").sendLogs("Null link share screen entry point in newsletter link share logging");
		var h;
		n[0] !== g ? (h = {
			linkShareScreen: o("WAWebWamEnumChannelLinkShareScreen").CHANNEL_LINK_SHARE_SCREEN.SHARE_LINK_SCREEN,
			linkShareScreenEntryPoint: g
		}, n[0] = g, n[1] = h) : h = n[1];
		var y;
		n[2] !== i || n[3] !== h ? (y = {
			chat: i,
			linkShareLoggingNavigationParams: h
		}, n[2] = i, n[3] = h, n[4] = y) : y = n[4];
		var C = o("useWAWebNewsletterInviteLink").useNewsletterInviteLink(y), b = C[0], v = C[1], S = C[2], R;
		n[5] === Symbol.for("react.memo_cache_sentinel") ? (R = ["name"], n[5] = R) : R = n[5];
		var L = o("useWAWebModelValues").useOptionalModelValues(i.newsletterMetadata, R), E;
		n[6] === Symbol.for("react.memo_cache_sentinel") ? (E = ["id", "profilePicThumb"], n[6] = E) : E = n[6];
		var k = o("useWAWebModelValues").useModelValues(i.contact, E), I;
		if (n[7] !== v || n[8] !== S || n[9] !== b) {
			if (I = [], b != null) {
				var T;
				n[11] === Symbol.for("react.memo_cache_sentinel") ? (T = d.jsx(r("WDSIconIcFastForward.react"), { iconXstyle: p.secondaryColor }), n[11] = T) : T = n[11];
				var D;
				n[12] === Symbol.for("react.memo_cache_sentinel") ? (D = s._(
					/*BTDS*/
					""
				), n[12] = D) : D = n[12];
				var x;
				if (n[13] !== S ? (x = {
					icon: T,
					onClick: S,
					testid: "newsletter-info-invite-action",
					title: D
				}, n[13] = S, n[14] = x) : x = n[14], I.push(x), document.queryCommandSupported("copy")) {
					var $;
					n[15] === Symbol.for("react.memo_cache_sentinel") ? ($ = d.jsx(r("WDSIconIcContentCopy.react"), { iconXstyle: p.secondaryColor }), n[15] = $) : $ = n[15];
					var P;
					n[16] === Symbol.for("react.memo_cache_sentinel") ? (P = o("WAWebCommonNewsletterStrings").getCopyLinkText(), n[16] = P) : P = n[16];
					var N;
					n[17] !== v ? (N = {
						icon: $,
						onClick: v,
						testid: "newsletter-info-copy-link-action",
						title: P
					}, n[17] = v, n[18] = N) : N = n[18], I.push(N);
				}
			}
			n[7] = v, n[8] = S, n[9] = b, n[10] = I;
		} else I = n[10];
		var M;
		n[19] === Symbol.for("react.memo_cache_sentinel") ? (M = { className: "x14atkfc xyi3aci xwf5gio x1p453bz x1suzm8a x1h3rtpe x6ikm8r x10wlt62 xcxhlts xjx09e3 x1fqp7bg xx6jrq6" }, n[19] = M) : M = n[19];
		var w;
		n[20] === Symbol.for("react.memo_cache_sentinel") ? (w = (u || (u = r("stylex")))(o("WDSMargins.stylex").wdsMargins.marginVer4, o("WDSMargins.stylex").wdsMargins.marginHor2), n[20] = w) : w = n[20];
		var A;
		n[21] !== k.id ? (A = d.jsx(o("WAWebDetailImage.react").DetailImage, {
			id: k.id,
			quality: o("WAWebDetailImage.react").DetailImageQuality.High,
			shape: o("WAWebDetailImage.react").DetailImageShape.Circle,
			size: 56
		}), n[21] = k.id, n[22] = A) : A = n[22];
		var F = L == null ? void 0 : L.name, O;
		n[23] !== F ? (O = d.jsx(o("WAWebText.react").WAWebTextTitle, {
			xstyle: p.newsletterName,
			children: F
		}), n[23] = F, n[24] = O) : O = n[24];
		var B;
		n[25] !== b ? (B = d.jsx(o("WAWebText.react").WAWebTextMuted, {
			color: "link",
			testid: "newsletter-link-drawer-copyable-link",
			textWrap: "wrap",
			xstyle: p.link,
			children: b
		}), n[25] = b, n[26] = B) : B = n[26];
		var W;
		n[27] !== v || n[28] !== B ? (W = d.jsx(o("WAWebCopyPasteSelectable.react").SelectableLink, {
			onClick: v,
			selectable: !0,
			xstyle: p.mouseCursor,
			children: B
		}), n[27] = v, n[28] = B, n[29] = W) : W = n[29];
		var q;
		n[30] !== W || n[31] !== A || n[32] !== O ? (q = d.jsx("div", babelHelpers.extends({}, M, { children: d.jsx(r("WAWebCellFrame.react"), {
			className: w,
			image: A,
			primary: O,
			secondary: W,
			theme: "newsletter-link-cell"
		}) })), n[30] = W, n[31] = A, n[32] = O, n[33] = q) : q = n[33];
		var U = q, V;
		n[34] === Symbol.for("react.memo_cache_sentinel") ? (V = d.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
			color: "primary",
			marginBottom: 20,
			marginEnd: 32,
			marginStart: 32,
			marginTop: 16,
			xstyle: p.optionsHeader,
			children: s._(
				/*BTDS*/
				""
			)
		}), n[34] = V) : V = n[34];
		var H = V, G;
		n[35] === Symbol.for("react.memo_cache_sentinel") ? (G = d.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: [o("WDSMargins.stylex").wdsMargins.marginVer4, m.marginInline30],
			children: d.jsx("div", { className: "xh8yej3 xjm9jq1 x3x0x6p" })
		}), n[35] = G) : G = n[35];
		var z = G, j;
		n[36] !== l || n[37] !== c ? (j = l ? { onBack: l } : { onCancel: c }, n[36] = l, n[37] = c, n[38] = j) : j = n[38];
		var K = j, Q;
		n[39] === Symbol.for("react.memo_cache_sentinel") ? (Q = { surface: "channel-link" }, n[39] = Q) : Q = n[39];
		var X;
		n[40] === Symbol.for("react.memo_cache_sentinel") ? (X = s._(
			/*BTDS*/
			""
		), n[40] = X) : X = n[40];
		var Y;
		n[41] !== K ? (Y = d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, babelHelpers.extends({
			title: X,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
		}, K, { testid: "newsletter-link-drawer-header" })), n[41] = K, n[42] = Y) : Y = n[42];
		var J;
		n[43] !== I ? (J = I.map(f), n[43] = I, n[44] = J) : J = n[44];
		var Z;
		return n[45] !== U || n[46] !== _ || n[47] !== Y || n[48] !== J ? (Z = d.jsxs(r("WAWebDrawer.react"), {
			ref: _,
			testid: "newsletter-link-drawer",
			theme: "striped",
			tsNavigationData: Q,
			xstyle: p.drawer,
			children: [
				Y,
				U,
				H,
				z,
				J
			]
		}), n[45] = U, n[46] = _, n[47] = Y, n[48] = J, n[49] = Z) : Z = n[49], Z;
	}
	function f(e, t) {
		var n = e.icon, r = e.onClick, a = e.testid, i = e.title;
		return d.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
			divider: !1,
			icon: n,
			onClick: r,
			testid: a,
			children: i
		}, a + "-" + t);
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = _;
}), 226);
