__d("MAWEndToEndEncryptionKeysVerifyDialog.react", [
	"fbt",
	"BaseSVGIcon.react",
	"MAWEndToEndEncryptionKeysDialog.entrypoint",
	"MWChatEncryptedBackupsChevronRightIconMedium.react",
	"MWXColumn.react",
	"MWXColumnItem.react",
	"MWXDialog.react",
	"MWXDialogHeader.react",
	"MWXIconCheckmark",
	"MWXIconClock",
	"MWXIconExclamationMarkCircleOutline",
	"MWXIconRefresh",
	"MWXLink.react",
	"MWXListCellPressable.react",
	"MWXText.react",
	"MWXTextPairing.react",
	"formatDate",
	"react",
	"react-compiler-runtime",
	"useEndToEndEncryptionKeysVerification",
	"usePushPage"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = "xqng64z-B", d = "x1xkg3e2-B";
	function m(e) {
		if (e == null) return "";
		var t = new Date(e);
		return r("formatDate")(t, "g:iA");
	}
	function p(e) {
		if (e == null) return "";
		var t = new Date(e), n = new Date(), o = function(t, n) {
			return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate();
		};
		if (o(t, n)) return s._(
			/*BTDS*/
			""
		);
		var a = new Date();
		return a.setDate(a.getDate() - 1), o(t, a) ? s._(
			/*BTDS*/
			""
		) : r("formatDate")(t, "M j, Y");
	}
	var _ = {
		icon: u.jsx("div", {
			className: "x4afe7t x1u6ievf x1wpzwpe xa3vuyk",
			children: u.jsx(r("BaseSVGIcon.react"), {
				alt: "",
				color: "grey",
				icon: r("MWXIconExclamationMarkCircleOutline").component.component,
				size: 80
			})
		}),
		subtitle: s._(
			/*BTDS*/
			""
		),
		title: s._(
			/*BTDS*/
			""
		)
	}, f = {
		icon: u.jsx("div", {
			className: "x4afe7t x1u6ievf x1wpzwpe xa3vuyk",
			children: u.jsx("div", {
				className: "x6s0dn4 x78zum5 xwzfr38 xl56j7k x1n2onr6 x1dmp6jm",
				children: u.jsx("div", {
					className: "x1q3qbx4 xa4qsjk x1ka1v4i x1esw782 x5yr21d x10l6tqk xh8yej3",
					children: u.jsx(r("BaseSVGIcon.react"), {
						alt: "",
						color: "grey",
						icon: r("MWXIconRefresh").component.component,
						size: 80
					})
				})
			})
		}),
		subtitle: s._(
			/*BTDS*/
			""
		),
		title: s._(
			/*BTDS*/
			""
		)
	}, g = {
		icon: u.jsx("div", {
			className: "x4afe7t x1u6ievf x1wpzwpe xa3vuyk",
			children: u.jsx(r("BaseSVGIcon.react"), {
				alt: "",
				color: "grey",
				icon: r("MWXIconClock").component.component,
				size: 80
			})
		}),
		subtitle: s._(
			/*BTDS*/
			""
		),
		title: s._(
			/*BTDS*/
			""
		)
	};
	function h(e, t) {
		var n = p(e), o = m(e);
		return {
			icon: u.jsx("div", {
				className: "x4afe7t x1u6ievf x1wpzwpe xa3vuyk",
				children: u.jsx(r("BaseSVGIcon.react"), {
					alt: "",
					color: "grey",
					icon: r("MWXIconCheckmark").component.component,
					size: 80
				})
			}),
			subtitle: u.jsxs(u.Fragment, { children: [s._(
				/*BTDS*/
				"",
				[s._param("date_text", n), s._param("time_text", o)]
			), u.jsx("div", {
				className: "xyamay9",
				children: u.jsx(r("MWXText.react"), {
					color: "highlight",
					type: "button2",
					children: u.jsx(r("MWXLink.react"), {
						onClick: t,
						children: u.jsx("b", { children: s._(
							/*BTDS*/
							""
						) })
					})
				})
			})] }),
			title: s._(
				/*BTDS*/
				""
			)
		};
	}
	function y(e) {
		var t = o("react-compiler-runtime").c(13), n = e.onClose, a = e.threadKey, i;
		t[0] !== a ? (i = { threadKey: a }, t[0] = a, t[1] = i) : i = t[1];
		var l = r("usePushPage")(r("MAWEndToEndEncryptionKeysDialog.entrypoint"), i), c = l[0], d = l[1], m = d.onHoverIn, p = d.onHoverOut, _ = d.onPressIn, f;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (f = u.jsx(r("MWChatEncryptedBackupsChevronRightIconMedium.react"), {}), t[2] = f) : f = t[2];
		var g;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (g = u.jsx(r("MWXTextPairing.react"), {
			headline: s._(
				/*BTDS*/
				""
			),
			isSemanticHeading: !0,
			level: 4,
			testid: void 0
		}), t[3] = g) : g = t[3];
		var h;
		t[4] !== n || t[5] !== c || t[6] !== a ? (h = function() {
			return c({
				onClose: n,
				threadKey: a
			});
		}, t[4] = n, t[5] = c, t[6] = a, t[7] = h) : h = t[7];
		var y;
		return t[8] !== m || t[9] !== p || t[10] !== _ || t[11] !== h ? (y = u.jsx(r("MWXListCellPressable.react"), {
			addOnEnd: f,
			content: g,
			onHoverIn: m,
			onHoverOut: p,
			onPress: h,
			onPressIn: _
		}), t[8] = m, t[9] = p, t[10] = _, t[11] = h, t[12] = y) : y = t[12], y;
	}
	function C(e) {
		var t = o("react-compiler-runtime").c(29), n = e.props, a = n.onClose, i = n.threadKey, l = o("useEndToEndEncryptionKeysVerification").useE2EEKeyVerification(i), c = l.result, d = l.runKeyVerification, m;
		if (t[0] !== d || t[1] !== c.status || t[2] !== c.timestamp) {
			var p = function() {
				switch (c.status) {
					case o("useEndToEndEncryptionKeysVerification").KeyVerificationStatus.PENDING: return g;
					case o("useEndToEndEncryptionKeysVerification").KeyVerificationStatus.FAILED: return _;
					case o("useEndToEndEncryptionKeysVerification").KeyVerificationStatus.SUCCESS: return h(c.timestamp, d);
					case o("useEndToEndEncryptionKeysVerification").KeyVerificationStatus.VERIFYING: return f;
				}
			};
			m = p(), t[0] = d, t[1] = c.status, t[2] = c.timestamp, t[3] = m;
		} else m = t[3];
		var C = m, b = C.icon, v = C.subtitle, S = C.title, R;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (R = s._(
			/*BTDS*/
			""
		), t[4] = R) : R = t[4];
		var L;
		t[5] !== a ? (L = u.jsx(r("MWXDialogHeader.react"), {
			onClose: a,
			title: R,
			withCloseButton: !0,
			withoutDivider: !0
		}), t[5] = a, t[6] = L) : L = t[6];
		var E = c.status, k;
		t[7] !== b || t[8] !== E ? (k = u.jsx(r("MWXColumnItem.react"), { children: b }, E), t[7] = b, t[8] = E, t[9] = k) : k = t[9];
		var I;
		t[10] !== S ? (I = u.jsx(r("MWXColumnItem.react"), { children: u.jsx(r("MWXText.react"), {
			align: "center",
			isSemanticHeading: !1,
			type: "headlineEmphasized2",
			children: S
		}) }), t[10] = S, t[11] = I) : I = t[11];
		var T;
		t[12] !== v ? (T = u.jsx(r("MWXColumnItem.react"), { children: u.jsx(r("MWXText.react"), {
			align: "center",
			color: "secondary",
			type: "body3",
			children: v
		}) }), t[12] = v, t[13] = T) : T = t[13];
		var D;
		t[14] !== k || t[15] !== I || t[16] !== T ? (D = u.jsxs(r("MWXColumn.react"), {
			align: "center",
			paddingVertical: 16,
			spacing: 24,
			children: [
				k,
				I,
				T
			]
		}), t[14] = k, t[15] = I, t[16] = T, t[17] = D) : D = t[17];
		var x;
		t[18] !== a || t[19] !== i ? (x = u.jsx(r("MWXColumnItem.react"), { children: u.jsx(y, {
			onClose: a,
			threadKey: i
		}) }), t[18] = a, t[19] = i, t[20] = x) : x = t[20];
		var $;
		t[21] === Symbol.for("react.memo_cache_sentinel") ? ($ = s._(
			/*BTDS*/
			""
		), t[21] = $) : $ = t[21];
		var P;
		t[22] === Symbol.for("react.memo_cache_sentinel") ? (P = s._(
			/*BTDS*/
			""
		), t[22] = P) : P = t[22];
		var N;
		t[23] === Symbol.for("react.memo_cache_sentinel") ? (N = u.jsx(r("MWXColumnItem.react"), {
			paddingTop: 12,
			paddingVertical: 8,
			children: u.jsxs(r("MWXText.react"), {
				color: "tertiary",
				type: "body3",
				children: [
					$,
					" ",
					u.jsx(r("MWXLink.react"), {
						"aria-label": P,
						href: "https://www.facebook.com/help/messenger-app/440669631343608",
						rel: "noreferrer",
						target: "_blank",
						children: u.jsx("b", { children: s._(
							/*BTDS*/
							""
						) })
					})
				]
			})
		}), t[23] = N) : N = t[23];
		var M;
		return t[24] !== a || t[25] !== x || t[26] !== L || t[27] !== D ? (M = u.jsxs(r("MWXDialog.react"), {
			disableClosingWithMask: !0,
			footer: null,
			header: L,
			onClose: a,
			size: "small",
			children: [
				D,
				x,
				N
			]
		}), t[24] = a, t[25] = x, t[26] = L, t[27] = D, t[28] = M) : M = t[28], M;
	}
	l.default = C;
}), 226);
