__d("WAWebAGMSignupMessage.react", [
	"fbt",
	"WAWebBizAGMSignupHeader.react",
	"WAWebMessageBubbleActions.react",
	"WAWebMessageBubbleHiddenText.react",
	"WAWebMessageMeta.react",
	"WAWebMessageSpacerText.react",
	"WAWebMessageTextBody.react",
	"WAWebMessageTextBubble.react",
	"WAWebMsgGetters",
	"WAWebMsgModelPropUtils",
	"WAWebSendSignupResponseAction",
	"WAWebSignupCTAExperiment",
	"WAWebStateUtils",
	"WDSIconIcReply.react",
	"react",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t, n = e.chat, a = e.displayAuthor, i = e.displayType, l = e.msg, c = e.privacyPolicyUrl, d = o("WAWebStateUtils").unproxy(l), m = o("WAWebMsgModelPropUtils").isTrusted(d.unsafe()), p = o("useWAWebMsgValues").useMsgValues(l.id, [o("WAWebMsgGetters").getSignupCtaTapped]), _ = p[0], f = o("WAWebSignupCTAExperiment").getSignupCTAExperiment(), g = u.jsx(r("WAWebMessageTextBody.react"), {
			msg: d,
			displayType: i,
			handleLinkClick: null,
			trusted: m
		}), h = u.jsx("div", {
			className: "x78zum5 x13a6bvl",
			"data-testid": "signup-agm-tag",
			children: u.jsx(o("WAWebMessageMeta.react").Meta, {
				msg: d,
				agmTag: o("WAWebMessageMeta.react").getAGMTag()
			})
		}), y = u.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, { items: [{
			label: f === o("WAWebSignupCTAExperiment").SignupCTAExperiment.GetOffers ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			),
			onClick: function() {
				return void o("WAWebSendSignupResponseAction").sendSignupResponse(n, l);
			},
			Icon: r("WDSIconIcReply.react"),
			disabled: _ === !0
		}] });
		return u.jsx(r("WAWebMessageTextBubble.react"), {
			msg: d,
			displayType: i,
			displayAuthor: a,
			hideMeta: !0,
			useFixedWidth: d.isDynamicReplyButtonsMsg,
			children: u.jsxs(r("WAWebMessageBubbleHiddenText.react"), {
				className: "x1gxa6cn",
				contact: d.senderObj,
				msg: d.unsafe(),
				children: [
					u.jsx(r("WAWebBizAGMSignupHeader.react"), {
						businessWid: n.id,
						chatTimestamp: n.t,
						contact: n.contact,
						experiment: f,
						privacyPolicyUrl: c,
						signupId: (t = l.signupContext) == null ? void 0 : t.signupId
					}),
					u.jsxs(r("WAWebMessageSpacerText.react"), {
						msg: d.unsafe(),
						spacer: !1,
						"data-id": d.id,
						children: [g, h]
					}),
					y
				]
			})
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
