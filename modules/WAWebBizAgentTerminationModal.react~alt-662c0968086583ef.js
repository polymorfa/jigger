__d("WAWebBizAgentTerminationModal.react", [
	"fbt",
	"WALogger",
	"WAWebAuthAgentConsumerJourneyLogger",
	"WAWebChatEntryPoint",
	"WAWebCmd",
	"WAWebConfirmPopup.react",
	"WAWebFindChatAction",
	"WAWebModalManager",
	"WAWebWidFactory",
	"getErrorSafe",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d = c || (c = o("react")), m = c.useEffect;
	function p(e, t, n) {
		m(function() {
			o("WAWebAuthAgentConsumerJourneyLogger").logBottomSheetImpression(e, t, null, n);
		}, [
			e,
			t,
			n
		]);
	}
	function _(t) {
		var n = t.businessJid, a = t.obaPhoneNumber, i = t.offboardingType, l = t.parentCompanyName;
		p(n, l, i);
		var c = function() {
			var t;
			try {
				t = o("WAWebWidFactory").createUserWidOrThrow(a);
			} catch (t) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["agent-termination-modal: invalid obaPhoneNumber"]))).catching(r("getErrorSafe")(t)).sendLogs("agent-termination-invalid-oba");
				return;
			}
			o("WAWebModalManager").ModalManager.close(), o("WAWebFindChatAction").findOrCreateLatestChat(t, "agentOffboardTermination").then(function(e) {
				var t = e.chat;
				return o("WAWebCmd").Cmd.openChatFromUnread({
					chat: t,
					chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.ContactInfo
				});
			}).catch(function(e) {
				o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["agent-termination-modal: failed to navigate to company chat"]))).catching(r("getErrorSafe")(e)).sendLogs("agent-termination-nav-failed");
			});
		}, m = l !== "", _ = m ? s._(
			/*BTDS*/
			"",
			[s._param("companyName", l)]
		) : s._(
			/*BTDS*/
			""
		), f = m ? s._(
			/*BTDS*/
			"",
			[s._param("companyName", l)]
		) : s._(
			/*BTDS*/
			""
		), g = m ? s._(
			/*BTDS*/
			"",
			[s._param("companyName", l)]
		) : s._(
			/*BTDS*/
			""
		), h = s._(
			/*BTDS*/
			""
		), y = d.jsxs(d.Fragment, { children: [d.jsx("div", {
			"data-testid": "agent-termination-modal-title",
			className: "x2b8uid",
			children: d.jsx("strong", { children: f })
		}), d.jsxs("div", {
			"data-testid": "agent-termination-modal-bullets",
			className: "x78zum5 xdt5ytf xp1r0qw xw7yly9 x1yc453h",
			children: [d.jsxs("div", {
				"data-testid": "agent-termination-modal-bullet-1",
				className: "x1cy8zhl x78zum5 x1q0g3np xtqikln",
				children: [d.jsx("span", {
					className: "x2lah0s xr9ek0c",
					children: "⊘"
				}), d.jsx("span", {
					className: "x1iyjqo2 xs83m0k x1t1x2f9",
					children: g
				})]
			}), d.jsxs("div", {
				"data-testid": "agent-termination-modal-bullet-2",
				className: "x1cy8zhl x78zum5 x1q0g3np xtqikln",
				children: [d.jsx("span", {
					className: "x2lah0s xr9ek0c",
					children: "✕"
				}), d.jsx("span", {
					className: "x1iyjqo2 xs83m0k x1t1x2f9",
					children: h
				})]
			})]
		})] });
		return d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			testid: "agent-termination-modal",
			onOK: o("WAWebModalManager").closeModalManager,
			okText: s._(
				/*BTDS*/
				""
			),
			cancelText: _,
			onCancel: c,
			children: y
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 226);
