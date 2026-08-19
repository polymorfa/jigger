__d("WAWebMediaStickerPack.react", [
	"fbt",
	"WAWebDisplayType",
	"WAWebDrawerManager",
	"WAWebFlex.react",
	"WAWebKeyboardTabUtils",
	"WAWebMessageBubbleActions.react",
	"WAWebMessageCaption.react",
	"WAWebMessageMeta.react",
	"WAWebMessageTextBubble.react",
	"WAWebMsgGetters",
	"WAWebStateUtils",
	"WAWebStickerPackDetailsFlow.react",
	"WAWebStickerPackPreview",
	"WAWebStickerPackUtils",
	"WAWebWamEnumWebcRmrReasonCode",
	"WDSPaddings.stylex",
	"asyncToGeneratorRuntime",
	"react",
	"stylex",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = {
		paddingTop6: {
			paddingTop: "x1yrsyyn",
			$$css: !0
		},
		paddingInlineStart6: {
			paddingInlineStart: "x25sj25",
			$$css: !0
		}
	}, m = { caption: {
		boxSizing: "x9f619",
		maxWidth: "x1xtabgy",
		$$css: !0
	} };
	function p(t) {
		var a = t.displayAuthor, i = t.displayType, l = t.msg, u = o("useWAWebMsgValues").useMsgValues(l.id, [o("WAWebMsgGetters").getIsCaptionByUser]), p = u[0], _ = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				yield l.downloadMedia({
					downloadEvenIfExpensive: !0,
					rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.DOCUMENT_DOWNLOAD,
					isUserInitiated: !0
				});
				var e = o("WAWebStateUtils").unproxy(l.unsafe()).mediaData.mediaBlob, t = yield o("WAWebStickerPackUtils").decompressStickerPackMedia(e, l);
				g(t);
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), f = function() {
			_();
		}, g = function(t) {
			o("WAWebDrawerManager").DrawerManager.openDrawerRight(c.jsx(r("WAWebStickerPackDetailsFlow.react"), {
				msg: l,
				stickers: t
			}), { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE });
		}, h = p ? c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(m.caption, d.paddingTop6, o("WDSPaddings.stylex").wdsPaddings.paddingEnd4, d.paddingInlineStart6), { children: c.jsx(r("WAWebMessageCaption.react"), {
			msg: l.unsafe(),
			testId: "document-caption"
		}) })) : null, y = c.jsx(r("WAWebMessageTextBubble.react"), {
			displayType: i,
			msg: l,
			displayAuthor: a,
			hideMeta: !0,
			children: c.jsxs("div", {
				className: "xdvlbce",
				children: [
					c.jsx(r("WAWebStickerPackPreview"), { msg: l }),
					c.jsx(o("WAWebFlex.react").FlexRow, { children: h }),
					c.jsx(o("WAWebFlex.react").FlexRow, { children: c.jsx("div", {
						className: "x10l6tqk x1inkcgm",
						children: c.jsx(o("WAWebMessageMeta.react").Meta, { msg: l })
					}) })
				]
			})
		}), C = s._(
			/*BTDS*/
			""
		);
		return c.jsxs(c.Fragment, { children: [c.jsxs("div", babelHelpers.extends({}, {
			0: { className: "x9f619 x3orp4s xyqdw3p x1im30kd xg8j3zb x1djpfga" },
			1: { className: "x9f619 x4blvmq xyqdw3p x1im30kd xg8j3zb x1djpfga" }
		}[(i === o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER) << 0], { children: [y, " "] })), c.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
			theme: o("WAWebMessageBubbleActions.react").BubbleActionsTheme.STICKER_PACK,
			items: [{
				label: C,
				title: C,
				onClick: f,
				disabled: !1,
				testid: "view-sticker-pack"
			}]
		})] });
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
