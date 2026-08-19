__d("WAWebRequestPhoneNumberMessage.react", [
	"fbt",
	"WAWebContactCollection",
	"WAWebDialpadGreenIcon.react",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebFrontendContactGetters",
	"WAWebFrontendMsgGetters",
	"WAWebMessageBubbleActions.react",
	"WAWebMessageBubbleHiddenText.react",
	"WAWebMessageMeta.react",
	"WAWebMessageSpacerText.react",
	"WAWebMessageTextBubble.react",
	"WAWebModalManager",
	"WAWebMsgGetters",
	"WAWebSharePhoneNumberModal.react",
	"WAWebWamEnumPnhEntryPointType",
	"react",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { paddingBottom5: {
		paddingBottom: "xs9asl8",
		$$css: !0
	} }, d = {
		container: {
			textAlign: "x2b8uid",
			position: "x1n2onr6",
			alignItems: "x6s0dn4",
			marginTop: "x1198e8h",
			marginInlineEnd: "x1lxpwgx",
			marginBottom: "xz62fqu",
			marginInlineStart: "xw01apr",
			borderStartStartRadius: "x13t61ll",
			borderStartEndRadius: "x1kchd1x",
			borderEndEndRadius: "x1u0fnx4",
			borderEndStartRadius: "xbxn0j6",
			backgroundColor: "x1bu39yj",
			$$css: !0
		},
		icon: {
			marginTop: "x1ok221b",
			marginInlineEnd: "xf6vk7d",
			marginBottom: "xu06os2",
			marginInlineStart: "x1hm9lzh",
			$$css: !0
		},
		text: {
			marginTop: "x1xmf6yo",
			marginInlineEnd: "x1xegmmw",
			marginBottom: "xyorhqc",
			marginInlineStart: "x1hm9lzh",
			$$css: !0
		}
	}, m = function() {
		o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebSharePhoneNumberModal.react").SharePhoneNumberRestrictedActionModal, { entryPoint: o("WAWebWamEnumPnhEntryPointType").PNH_ENTRY_POINT_TYPE.PN_REQUEST }));
	};
	function p(e) {
		var t = e.msg, n = o("useWAWebMsgValues").useMsgValues(t.id, [
			o("WAWebMsgGetters").getTo,
			o("WAWebMsgGetters").getIsSentByMe,
			o("WAWebFrontendMsgGetters").getSenderObj
		]), a = n[0], i = n[1], l = n[2], p = u.jsx(o("WAWebDialpadGreenIcon.react").DialpadGreenIcon, {});
		if (i) {
			var _ = o("WAWebContactCollection").ContactCollection.gadd(a), f = o("WAWebFrontendContactGetters").getIsMyContact(_) ? o("WAWebFrontendContactGetters").getFormattedName(_) : o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone(_), g = s._(
				/*BTDS*/
				"",
				[s._param("person-name", u.jsx("span", {
					className: "xk50ysn",
					children: f
				}))]
			);
			return u.jsx(r("WAWebMessageTextBubble.react"), {
				msg: t,
				displayAuthor: !1,
				testid: "request-phone-number-modal-sender",
				children: u.jsxs(o("WAWebFlex.react").FlexRow, {
					align: "center",
					xstyle: d.container,
					children: [u.jsx(r("WAWebFlexItem.react"), {
						xstyle: d.icon,
						children: p
					}), u.jsx(r("WAWebFlexItem.react"), {
						xstyle: d.text,
						children: u.jsx(r("WAWebMessageSpacerText.react"), {
							msg: t.unsafe(),
							children: g
						})
					})]
				})
			});
		}
		var h = o("WAWebContactCollection").ContactCollection.gadd(l), y = o("WAWebFrontendContactGetters").getIsMyContact(h) ? o("WAWebFrontendContactGetters").getFormattedName(h) : o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone(h), C = s._(
			/*BTDS*/
			"",
			[s._param("person-name", u.jsx("span", {
				className: "xk50ysn",
				children: y
			}))]
		), b = s._(
			/*BTDS*/
			""
		), v = u.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
			items: [{
				label: b,
				onClick: m,
				disabled: h.shareOwnPn || h.isContactBlocked,
				testid: "share-phone-number-button"
			}],
			theme: o("WAWebMessageBubbleActions.react").BubbleActionsTheme.NO_DIVIDER
		});
		return u.jsxs(r("WAWebMessageTextBubble.react"), {
			msg: t,
			displayAuthor: !1,
			hideMeta: !0,
			testid: "request-phone-number-modal-receiver",
			children: [u.jsxs(o("WAWebFlex.react").FlexRow, {
				xstyle: [d.container, c.paddingBottom5],
				children: [u.jsx(r("WAWebFlexItem.react"), {
					xstyle: d.icon,
					children: p
				}), u.jsxs(r("WAWebMessageBubbleHiddenText.react"), {
					xstyle: d.text,
					contact: t.senderObj,
					msg: t.unsafe(),
					children: [u.jsx("div", { children: C }), u.jsx("div", {
						className: "x10l6tqk xxx7yvo x1c7jfne",
						children: u.jsx(o("WAWebMessageMeta.react").Meta, { msg: t })
					})]
				})]
			}), v]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
