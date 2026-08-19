__d("WAWebPhoneNumberWrapperMutatorComponent.react", [
	"fbt",
	"WALogger",
	"WAWebChatRefreshedIcon.react",
	"WAWebCopyPasteSelectable.react",
	"WAWebDropdownItem.react",
	"WAWebFlex.react",
	"WAWebGetOrQueryUsyncInfoContactAction",
	"WAWebPhoneNumberContactAction",
	"WAWebPhoneUtils",
	"WAWebSpinner.react",
	"WAWebText.react",
	"WAWebUimUie.react",
	"WAWebUimUieMenu.react",
	"WDSIconIcContentCopy.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u.useState, m = {
		spinnerContainer: {
			width: "xc5o50y",
			height: "x6hvgyk",
			$$css: !0
		},
		spinnerText: {
			marginTop: "xcxhlts",
			paddingInlineStart: "x1gx403c",
			paddingInlineEnd: "x1q3ajuy",
			textAlign: "x2b8uid",
			$$css: !0
		},
		menuItem: {
			paddingInlineStart: "x1iw51ew",
			paddingInlineEnd: "xde1mab",
			$$css: !0
		},
		textualLinkRefreshed: {
			color: "xo1mcw5",
			fontWeight: "x1xlr1w8",
			textDecoration: "x1hl2dhg",
			":hover_textDecoration": "xt0b8zv",
			":focus-visible_textDecoration": "xbvygy2",
			":focus-visible_color": "x17f7hit",
			":focus-visible_backgroundColor": "xp30eni",
			":focus-visible_textUnderlineOffset": "xhmieyt",
			$$css: !0
		}
	};
	function p(t) {
		var n = t.fromMe, a = t.phoneNumber, i = t.selectable, l = d(null), u = l[0], p = l[1], _ = d(null), f = _[0], g = _[1], h = d(null), y = h[0], C = h[1], b = d(null), v = b[0], S = b[1];
		function R(t) {
			var n;
			y && y.isCached(a) ? n = y : (n = o("WAWebGetOrQueryUsyncInfoContactAction").usyncContactCached(), C(n));
			async function r(t, r) {
				try {
					var a = await n.getOrRun(t);
					E(a, r);
				} catch (t) {
					E(null, r), S(null), o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["handlePhoneClick getUsync failed with exceptions ", ""])), t).sendLogs("handlePhoneClick-getUsync");
				}
			}
			n.isCached(a) || L(t), r(a, t);
		}
		function L(e) {
			var t = c.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: m.spinnerContainer,
				align: "center",
				justify: "center",
				children: [c.jsx(o("WAWebSpinner.react").Spinner, {
					size: 50,
					stroke: 4,
					color: "highlight"
				}), c.jsx(o("WAWebText.react").WAWebTextSmall, {
					as: "span",
					xstyle: m.spinnerText,
					children: s._(
						/*BTDS*/
						""
					)
				}, "phone_number_wrapper_loading_text")]
			});
			g({
				menu: t,
				event: e
			}), p(null);
		}
		function E(e, t) {
			var i = [];
			if (e != null && e.wid) {
				var l = o("WAWebPhoneUtils").formatPhone(a);
				i.push(c.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					testid: "mi-message-on-whatsapp",
					xstyle: m.menuItem,
					action: function(r) {
						return o("WAWebPhoneNumberContactAction").handleOpenChat(r, e.wid, n);
					},
					icon: c.jsx(o("WAWebChatRefreshedIcon.react").ChatRefreshedIcon, {}),
					children: s._(
						/*BTDS*/
						"",
						[s._param("chat-with-phoneNumber", c.jsx("span", {
							dir: "ltr",
							children: l
						}))]
					)
				}, "message-on-whatsapp"));
			}
			i.push(c.jsx(o("WAWebDropdownItem.react").DropdownItem, {
				testid: "mi-copy-phone-number",
				xstyle: m.menuItem,
				action: function() {
					return o("WAWebPhoneNumberContactAction").handleCopyPhoneNumber(a, e == null ? void 0 : e.wid, n);
				},
				icon: c.jsx(r("WDSIconIcContentCopy.react"), {}),
				children: s._(
					/*BTDS*/
					""
				)
			}, "copy-phone-number")), g(null), p({
				menu: i,
				event: t
			}), S(e == null ? void 0 : e.wid), o("WAWebPhoneNumberContactAction").logClickOnPhoneNumber(e == null ? void 0 : e.wid, n);
		}
		var k = null, I = null;
		return u && (k = c.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "ContextMenu",
			escapable: !0,
			popable: !0,
			dismissOnWindowResize: !0,
			requestDismiss: function() {
				p(null), o("WAWebPhoneNumberContactAction").logCloseDialog(v, n);
			},
			children: c.jsx(r("WAWebUimUieMenu.react"), { contextMenu: u })
		})), f && (I = c.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "ContextSpinner",
			escapable: !0,
			popable: !0,
			dismissOnWindowResize: !0,
			requestDismiss: function() {
				g(null);
			},
			children: c.jsx(r("WAWebUimUieMenu.react"), { contextMenu: f })
		})), c.jsxs(c.Fragment, { children: [
			c.jsx(o("WAWebCopyPasteSelectable.react").SelectableLink, {
				onClick: R,
				selectable: i,
				xstyle: m.textualLinkRefreshed,
				style: { cursor: "pointer" },
				children: a
			}),
			k,
			I
		] });
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
