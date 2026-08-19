__d("WAWebBizTemplateButtons.react", [
	"fbt",
	"WALogger",
	"WAWebApiParse",
	"WAWebBizMessageOpenCallModal",
	"WAWebCouponCodeHelper",
	"WAWebExecApiCmd",
	"WAWebExternalLink.react",
	"WAWebFrontendMsgGetters",
	"WAWebLaunchIcon.react",
	"WAWebMessageBubbleActions.react",
	"WAWebOTPHelper",
	"WAWebPhoneIcon.react",
	"WAWebPopoverContext.react",
	"WAWebProductCatalogMetaLinkingGatingUtils",
	"WAWebSendTextMsgChatAction",
	"WAWebStateUtils",
	"WAWebTemplateButtonSubtype",
	"WAWebTooltip.react",
	"WDSIconIcContentCopy.react",
	"react",
	"useWAWebForceUpdate",
	"useWAWebListener",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useMemo, p = d.useRef;
	function _(t) {
		"use no forget";
		var n = t.chat, a = t.msg, i = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(), l = o("useWAWebMsgValues").useMsgValues(t.msg.id, [o("WAWebFrontendMsgGetters").getButtons]), u = l[0];
		o("useWAWebListener").useListeners((u != null ? u : []).map(function(e) {
			return {
				source: e,
				eventOrEvents: "change:selected",
				callback: i
			};
		}));
		var d = function(i) {
			var t = i.displayText, l = i.id, s = i.selectionId, u = i.subtype, c = i.url;
			if (u === o("WAWebTemplateButtonSubtype").TEMPLATE_BUTTON_SUBTYPE.CALL) r("WAWebBizMessageOpenCallModal")();
			else if (u === o("WAWebTemplateButtonSubtype").TEMPLATE_BUTTON_SUBTYPE.URL && c != null) {
				if (o("WAWebOTPHelper").isOTPCopyCodeButton(i)) {
					o("WAWebOTPHelper").copyOTPCode(i, a);
					return;
				}
				if (o("WAWebCouponCodeHelper").isCouponCodeButton(i)) {
					o("WAWebCouponCodeHelper").copyCouponCode(i);
					return;
				}
				var d = o("WAWebApiParse").parseAPICmd(c);
				if (d.resultType === "OPEN_CATALOG" || d.resultType === "CTWA_ADS_DATA_SHARING" || d.resultType === "BIZ_AGENTS_ONBOARDING" || d.resultType === "BIZ_BROADCAST_AUDIENCE_MODAL" || d.resultType === "BIZ_BROADCAST_HOME") {
					r("WAWebExecApiCmd")({
						cmdData: d,
						isExternal: !1
					});
					return;
				}
				d.resultType, o("WAWebExternalLink.react").openExternalLink(c);
			} else u === o("WAWebTemplateButtonSubtype").TEMPLATE_BUTTON_SUBTYPE.QUICK_REPLY && (o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["handleClick inside WAWebBizTemplateButtons"]))), o("WAWebSendTextMsgChatAction").sendTextMsgToChat(n, t, {
				quotedMsg: o("WAWebStateUtils").unproxy(a),
				selectedIndex: parseInt(l, 10),
				selectedId: s
			}).then(function() {
				i.selected = !0;
			}));
		}, _ = p(null), f = m(function() {
			return u == null ? [] : u.map(function(e) {
				if (e.selected) return "selected";
				if (e.subtype !== o("WAWebTemplateButtonSubtype").TEMPLATE_BUTTON_SUBTYPE.URL) return null;
				var t = e.url;
				if (t == null) return null;
				var n = o("WAWebApiParse").parseAPICmd(t);
				if (n.resultType === "OPEN_CATALOG") {
					if (o("WAWebProductCatalogMetaLinkingGatingUtils").shouldDisableCatalogDueToMetaLinkingForSelf()) return "meta-linked-catalog";
				} else n.resultType;
				return null;
			});
		}, [u]), g = (u != null ? u : []).map(function(e, t) {
			var n;
			switch (e.subtype) {
				case o("WAWebTemplateButtonSubtype").TEMPLATE_BUTTON_SUBTYPE.CALL:
					n = o("WAWebPhoneIcon.react").PhoneIcon;
					break;
				case o("WAWebTemplateButtonSubtype").TEMPLATE_BUTTON_SUBTYPE.URL:
					n = o("WAWebOTPHelper").isOTPCopyCodeButton(e) || o("WAWebCouponCodeHelper").isCouponCodeButton(e) ? r("WDSIconIcContentCopy.react") : o("WAWebLaunchIcon.react").LaunchIcon;
					break;
			}
			var a = f[t], i = a != null, l = babelHelpers.extends({}, n == null ? {} : { Icon: n }, {
				disabled: i,
				label: e.displayText,
				onClick: i ? null : function() {
					return d(e);
				},
				testid: "biz-template-button-" + t
			}), u = null;
			if (a === "meta-linked-catalog" && o("WAWebProductCatalogMetaLinkingGatingUtils").linkedCatalogDisabledTooltipEnabled()) {
				var m = s._(
					/*BTDS*/
					""
				);
				u = c.jsx(o("WAWebPopoverContext.react").WAWebPopoverController, {
					targetRef: _,
					popover: c.jsx(o("WAWebTooltip.react").WAWebHoverTooltip, {
						targetRef: "context",
						alignment: o("WAWebTooltip.react").PopoverAlignment.Center,
						position: o("WAWebTooltip.react").PopoverPosition.Top,
						openingDelay: 350,
						children: m
					})
				}, e.id);
			}
			return {
				action: l,
				tooltip: u
			};
		});
		return c.jsxs(c.Fragment, { children: [c.jsx("div", {
			ref: _,
			className: "x9otpla xwib8y2 x1bjonze x7coems",
			children: c.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
				direction: "vertical",
				items: g.map(function(e) {
					return e.action;
				})
			})
		}), g.map(function(e) {
			return e.tooltip;
		})] });
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 226);
