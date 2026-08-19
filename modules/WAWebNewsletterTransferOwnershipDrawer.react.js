__d("WAWebNewsletterTransferOwnershipDrawer.react", [
	"fbt",
	"WAWebButton.react",
	"WAWebCheckBox.react",
	"WAWebCommonNewsletterStrings",
	"WAWebDrawer.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebFlex.react",
	"WAWebModalManager",
	"WAWebName.react",
	"WAWebNewsletterDrawerBodyParagraph.react",
	"WAWebNewsletterImageWithAction.react",
	"WAWebNewsletterTransferOwnershipConfirmationModal.react",
	"WAWebPersonArrowIcon.react",
	"WAWebText_DONOTUSE.react",
	"WAWebUserShieldIcon.react",
	"WAWebWarningIcon.react",
	"WDSMargins.stylex",
	"react",
	"react-compiler-runtime",
	"useWAWebToggle"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e = ["ref"], u, c = u || (u = o("react")), d = { marginInlineStart3: {
		marginInlineStart: "x7phf20",
		$$css: !0
	} }, m = {
		container: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			alignItems: "x6s0dn4",
			justifyContent: "x1nhvcw1",
			paddingTop: "xijc0j3",
			paddingInlineEnd: "x15zmtp0",
			paddingBottom: "xq1608w",
			paddingInlineStart: "x1oiqv2n",
			flexGrow: "x1iyjqo2",
			$$css: !0
		},
		buttonContainer: {
			textAlign: "x2b8uid",
			$$css: !0
		},
		header: {
			textAlign: "x2b8uid",
			lineHeight: "x1evy7pa",
			overflowWrap: "xj0a0fe",
			$$css: !0
		},
		icon: {
			color: "xhslqc4",
			$$css: !0
		}
	};
	function p(t) {
		var n = o("react-compiler-runtime").c(41), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l = a, u = l.chat, p = l.contact, f = r("useWAWebToggle")(!1), g = f[0], h = f[1];
		if (p == null) return null;
		var y;
		n[3] !== u || n[4] !== p || n[5] !== a.onTransferCompletion || n[6] !== g ? (y = function() {
			o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebNewsletterTransferOwnershipConfirmationModal.react"), {
				chat: u,
				contact: p,
				onTransferCompletion: a.onTransferCompletion,
				shouldDismissSelfAsAdmin: g
			}));
		}, n[3] = u, n[4] = p, n[5] = a.onTransferCompletion, n[6] = g, n[7] = y) : y = n[7];
		var C = y, b;
		n[8] !== p ? (b = s._(
			/*BTDS*/
			"",
			[s._param("channel-name", c.jsx(o("WAWebName.react").ContactName, { contact: p }))]
		), n[8] = p, n[9] = b) : b = n[9];
		var v = b, S;
		n[10] === Symbol.for("react.memo_cache_sentinel") ? (S = [{
			title: s._(
				/*BTDS*/
				""
			),
			description: s._(
				/*BTDS*/
				""
			),
			Icon: o("WAWebWarningIcon.react").WarningIcon,
			key: "no-longer-owner"
		}, {
			title: s._(
				/*BTDS*/
				""
			),
			description: s._(
				/*BTDS*/
				""
			),
			Icon: o("WAWebUserShieldIcon.react").UserShieldIcon,
			key: "remain-admin"
		}], n[10] = S) : S = n[10];
		var R = S, L;
		n[11] !== g || n[12] !== h ? (L = c.jsx(o("WAWebCheckBox.react").CheckBox, {
			id: "transfer-ownership-dismiss-self-as-admin-checkbox",
			testid: "transfer-ownership-dismiss-self-as-admin-checkbox",
			checked: g,
			onChange: h
		}), n[11] = g, n[12] = h, n[13] = L) : L = n[13];
		var E;
		n[14] === Symbol.for("react.memo_cache_sentinel") ? (E = c.jsx(o("WAWebText_DONOTUSE.react").TextLabel, {
			htmlFor: "transfer-ownership-dismiss-self-as-admin-checkbox",
			testid: "transfer-ownership-dismiss-self-as-admin-label",
			size: "16",
			className: "x1hm9lzh x1sa5p1d",
			children: s._(
				/*BTDS*/
				""
			)
		}), n[14] = E) : E = n[14];
		var k;
		n[15] !== L ? (k = c.jsxs(o("WAWebFlex.react").FlexRow, {
			columnGap: 8,
			paddingTop: 16,
			paddingBottom: 16,
			xstyle: d.marginInlineStart3,
			alignSelf: "start",
			align: "center",
			children: [L, E]
		}), n[15] = L, n[16] = k) : k = n[16];
		var I = k, T;
		n[17] === Symbol.for("react.memo_cache_sentinel") ? (T = {
			surface: "unknown",
			viewName: "newsletter-transfer"
		}, n[17] = T) : T = n[17];
		var D;
		n[18] === Symbol.for("react.memo_cache_sentinel") ? (D = o("WAWebCommonNewsletterStrings").getNewsletterTransferOwnershipText(), n[18] = D) : D = n[18];
		var x;
		n[19] !== a.onBack || n[20] !== a.onCancel ? (x = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: D,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			onBack: a.onBack,
			onCancel: a.onCancel
		}), n[19] = a.onBack, n[20] = a.onCancel, n[21] = x) : x = n[21];
		var $;
		n[22] !== a.chat ? ($ = c.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			children: c.jsx(r("WAWebNewsletterImageWithAction.react"), {
				chat: a.chat,
				actionTheme: "primary",
				Icon: o("WAWebPersonArrowIcon.react").PersonArrowIcon
			})
		}), n[22] = a.chat, n[23] = $) : $ = n[23];
		var P;
		n[24] === Symbol.for("react.memo_cache_sentinel") ? (P = [
			m.header,
			o("WDSMargins.stylex").wdsMargins.marginTop16,
			o("WDSMargins.stylex").wdsMargins.marginBottom16
		], n[24] = P) : P = n[24];
		var N;
		n[25] !== v ? (N = c.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			children: c.jsx(o("WAWebText_DONOTUSE.react").TextHeader, {
				xstyle: P,
				size: "24",
				color: "dark",
				weight: "medium",
				children: v
			})
		}), n[25] = v, n[26] = N) : N = n[26];
		var M;
		n[27] === Symbol.for("react.memo_cache_sentinel") ? (M = R.map(_), n[27] = M) : M = n[27];
		var w;
		n[28] === Symbol.for("react.memo_cache_sentinel") ? (w = [m.buttonContainer, o("WDSMargins.stylex").wdsMargins.marginTop16], n[28] = w) : w = n[28];
		var A;
		n[29] === Symbol.for("react.memo_cache_sentinel") ? (A = s._(
			/*BTDS*/
			""
		), n[29] = A) : A = n[29];
		var F;
		n[30] !== C ? (F = c.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: w,
			children: c.jsx(o("WAWebButton.react").Button, {
				testid: "newsletter-transfer-ownership-button",
				type: "primary",
				onClick: C,
				children: A
			})
		}), n[30] = C, n[31] = F) : F = n[31];
		var O;
		n[32] !== I || n[33] !== $ || n[34] !== N || n[35] !== F ? (O = c.jsxs(r("WAWebDrawerSection.react"), {
			animation: !1,
			xstyle: m.container,
			children: [
				$,
				N,
				M,
				I,
				F
			]
		}), n[32] = I, n[33] = $, n[34] = N, n[35] = F, n[36] = O) : O = n[36];
		var B;
		return n[37] !== i || n[38] !== O || n[39] !== x ? (B = c.jsxs(r("WAWebDrawer.react"), {
			ref: i,
			testid: "newsletter-transfer-ownership-drawer",
			tsNavigationData: T,
			children: [x, O]
		}), n[37] = i, n[38] = O, n[39] = x, n[40] = B) : B = n[40], B;
	}
	function _(e) {
		var t = e.Icon, n = e.description, o = e.key, a = e.title;
		return c.jsx(r("WAWebNewsletterDrawerBodyParagraph.react"), {
			icon: c.jsx(t, {
				width: 24,
				height: 24,
				xstyle: m.icon
			}),
			title: a,
			description: n
		}, o);
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = p;
}), 226);
