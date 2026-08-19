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
		var t = e.onClose, n = e.threadKey, o = r("usePushPage")(r("MAWEndToEndEncryptionKeysDialog.entrypoint"), { threadKey: n }), a = o[0], i = o[1], l = i.onHoverIn, c = i.onHoverOut, d = i.onPressIn;
		return u.jsx(r("MWXListCellPressable.react"), {
			addOnEnd: u.jsx(r("MWChatEncryptedBackupsChevronRightIconMedium.react"), {}),
			content: u.jsx(r("MWXTextPairing.react"), {
				headline: s._(
					/*BTDS*/
					""
				),
				isSemanticHeading: !0,
				level: 4,
				testid: void 0
			}),
			onHoverIn: l,
			onHoverOut: c,
			onPress: function() {
				return a({
					onClose: t,
					threadKey: n
				});
			},
			onPressIn: d
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		var t, n = e.props, a = n.onClose, i = n.threadKey, l = o("useEndToEndEncryptionKeysVerification").useE2EEKeyVerification(i), c = l.result, d = l.runKeyVerification, m = function() {
			switch (c.status) {
				case o("useEndToEndEncryptionKeysVerification").KeyVerificationStatus.PENDING: return g;
				case o("useEndToEndEncryptionKeysVerification").KeyVerificationStatus.FAILED: return _;
				case o("useEndToEndEncryptionKeysVerification").KeyVerificationStatus.SUCCESS: return h(c.timestamp, d);
				case o("useEndToEndEncryptionKeysVerification").KeyVerificationStatus.VERIFYING: return f;
			}
		}, p = "https://www.facebook.com/help/messenger-app/440669631343608", C = m(), b = C.icon, v = C.subtitle, S = C.title;
		return u.jsxs(r("MWXDialog.react"), {
			disableClosingWithMask: !0,
			footer: null,
			header: u.jsx(r("MWXDialogHeader.react"), {
				onClose: a,
				title: s._(
					/*BTDS*/
					""
				),
				withCloseButton: !0,
				withoutDivider: !0
			}),
			onClose: a,
			size: "small",
			children: [
				u.jsxs(r("MWXColumn.react"), {
					align: "center",
					paddingVertical: 16,
					spacing: 24,
					children: [
						u.jsx(t = r("MWXColumnItem.react"), { children: b }, c.status),
						u.jsx(t, { children: u.jsx(r("MWXText.react"), {
							align: "center",
							isSemanticHeading: !1,
							type: "headlineEmphasized2",
							children: S
						}) }),
						u.jsx(t, { children: u.jsx(r("MWXText.react"), {
							align: "center",
							color: "secondary",
							type: "body3",
							children: v
						}) })
					]
				}),
				u.jsx(t, { children: u.jsx(y, {
					onClose: a,
					threadKey: i
				}) }),
				u.jsx(t, {
					paddingTop: 12,
					paddingVertical: 8,
					children: u.jsxs(r("MWXText.react"), {
						color: "tertiary",
						type: "body3",
						children: [
							s._(
								/*BTDS*/
								""
							),
							" ",
							u.jsx(r("MWXLink.react"), {
								"aria-label": s._(
									/*BTDS*/
									""
								),
								href: p,
								rel: "noreferrer",
								target: "_blank",
								children: u.jsx("b", { children: s._(
									/*BTDS*/
									""
								) })
							})
						]
					})
				})
			]
		});
	}
	C.displayName = C.name + " [from " + i.id + "]", l.default = C;
}), 226);
