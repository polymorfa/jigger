__d("MAWEndToEndEncryptionKeysDialog.react", [
	"fbt",
	"I64",
	"MAWEncryptionKeysForUserView.entrypoint",
	"MWInboxSettingsDivider.react",
	"MWPActor.react",
	"MWVerticalRhythm",
	"MWXDialogHeader.react",
	"MWXDialogPage.react",
	"MWXLink.react",
	"MWXListCellPressable.react",
	"MWXProfilePhoto.react",
	"MWXText.react",
	"MWXTextPairing.react",
	"ReQL",
	"ReQLSuspense",
	"XMessengerDotComHelpContentControllerRouteBuilder",
	"getLSMediaContactProfilePictureUrl",
	"react",
	"usePopPage",
	"usePushPage",
	"useReStore"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d = c || (c = o("react")), m = { keysSubHeaderLink: {
		color: "xz94kzr",
		marginInlineStart: "xdwrcjd",
		$$css: !0
	} };
	function p() {
		return d.jsx("div", {
			className: "x1g2khh7 xyinxu5",
			children: d.jsxs(r("MWXText.react"), {
				color: "secondary",
				numberOfLines: 3,
				type: "body4",
				children: [s._(
					/*BTDS*/
					""
				), d.jsx(r("MWXLink.react"), {
					"aria-label": s._(
						/*BTDS*/
						""
					),
					color_DEPRECATED: "highlight",
					href: r("XMessengerDotComHelpContentControllerRouteBuilder").buildUri({ cms_id: "147596532316790" }).toString(),
					target: "_blank",
					xstyle_DEPRECATED: m.keysSubHeaderLink,
					children: s._(
						/*BTDS*/
						""
					)
				})]
			})
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(t) {
		var n = t.onClose, a = t.threadKey, l = r("usePushPage")(r("MAWEncryptionKeysForUserView.entrypoint"), {}), c = l[0], m = l[1], _ = m.onHoverIn, f = m.onHoverOut, g = m.onPressIn, h = (e || (e = r("useReStore")))(), y = o("ReQLSuspense").useArray(function() {
			return o("ReQL").mergeJoin(o("ReQL").fromTableAscending(h.tables.participants).getKeyRange(a), o("ReQL").fromTableAscending(h.tables.contacts));
		}, [h, a], i.id + ":92"), C = o("MWPActor.react").useActor();
		return d.jsxs(d.Fragment, { children: [
			d.jsx(p, {}),
			d.jsx("div", {
				className: "xwqyzqf xule2z1",
				children: d.jsx(r("MWInboxSettingsDivider.react"), { marginVertical: 0 })
			}),
			d.jsxs("div", { children: [
				d.jsx(r("MWVerticalRhythm"), { height: 24 }),
				d.jsx("div", {
					className: "x135b78x x11lfxj5",
					children: d.jsx(r("MWXText.react"), {
						isSemanticHeading: !0,
						type: "headlineEmphasized4",
						children: s._(
							/*BTDS*/
							""
						)
					})
				}),
				d.jsx(r("MWVerticalRhythm"), { height: 24 }),
				y.map(function(e, t) {
					var i = e[0], l = e[1], m = (u || (u = o("I64"))).equal(l.id, C), p = m ? s._(
						/*BTDS*/
						""
					) : s._(
						/*BTDS*/
						"",
						[s._param("user_name", l.name)]
					);
					return d.jsx(r("MWXListCellPressable.react"), {
						addOnStart: d.jsx(r("MWXProfilePhoto.react"), {
							alt: "",
							shape: "circle",
							size: 36,
							source: { uri: r("getLSMediaContactProfilePictureUrl")(l) }
						}),
						content: d.jsx(r("MWXTextPairing.react"), {
							headline: p,
							headlineLineLimit: 1,
							level: 4,
							reduceEmphasis: !0
						}),
						onHoverIn: _,
						onHoverOut: f,
						onPress: function() {
							return c({
								contact: l,
								isViewer: m,
								onClose: n,
								threadKey: a,
								title: p
							});
						},
						onPressIn: g,
						testid: void 0
					}, String(t));
				})
			] }),
			d.jsx(r("MWVerticalRhythm"), { height: 24 })
		] });
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t = e.props, n = t.onClose, o = t.threadKey, a = r("usePopPage")();
		return d.jsx(r("MWXDialogPage.react"), {
			footer: null,
			header: d.jsx(r("MWXDialogHeader.react"), {
				onBack: a != null ? a : void 0,
				onClose: n,
				title: s._(
					/*BTDS*/
					""
				),
				withBackButton: a != null,
				withCloseButton: !0
			}),
			children: d.jsx("div", {
				className: "x1shn012",
				children: d.jsx(_, {
					onClose: n,
					threadKey: o
				})
			})
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 226);
