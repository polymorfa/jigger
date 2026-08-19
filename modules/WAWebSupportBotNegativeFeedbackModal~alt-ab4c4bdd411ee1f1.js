__d("WAWebSupportBotNegativeFeedbackModal", [
	"fbt",
	"WAWebCheckBox.react",
	"WAWebConfirmPopup.react",
	"WAWebModalManager",
	"WAWebSupportAiSessionWamEvent",
	"WAWebSupportBotFeedbackKind",
	"WAWebText.react",
	"WAWebWamEnumSupportAiEventType",
	"WDSMargins.stylex",
	"asyncToGeneratorRuntime",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useState, _ = { option: {
		display: "x78zum5",
		fontSize: "x1f6kntn",
		lineHeight: "x1fc57z9",
		$$css: !0
	} };
	function f(t) {
		var a = t.msgKey, i = t.onSubmit, l = p([]), u = l[0], d = l[1];
		m(function() {
			new (o("WAWebSupportAiSessionWamEvent")).SupportAiSessionWamEvent({ supportAiEventType: o("WAWebWamEnumSupportAiEventType").SUPPORT_AI_EVENT_TYPE.NEGATIVE_FEEDBACK_OPTIONS_SCREEN_SHOWN }).commit();
		}, []);
		var f = function(t) {
			switch (t) {
				case "negative_irrelevant": return s._(
					/*BTDS*/
					""
				);
				case "negative_inaccurate": return s._(
					/*BTDS*/
					""
				);
				case "negative_repetitive": return s._(
					/*BTDS*/
					""
				);
				case "negative_harmful": return s._(
					/*BTDS*/
					""
				);
				case "negative_other": return s._(
					/*BTDS*/
					""
				);
				default: return "";
			}
		}, g = function() {
			return o("WAWebSupportBotFeedbackKind").getNegativeSupportFeedbackKinds().map(function(e) {
				return {
					value: e,
					label: f(e)
				};
			});
		}, h = function(t) {
			u.includes(t) ? d(u.filter(function(e) {
				return e !== t;
			})) : d([].concat(u, [t]));
		}, y = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				u.length > 0 && (yield i(a, u));
			});
			return function() {
				return e.apply(this, arguments);
			};
		})();
		return c.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "support-negative-feedback"
			},
			title: s._(
				/*BTDS*/
				""
			),
			okText: s._(
				/*BTDS*/
				""
			),
			onOK: y,
			okDisabled: u.length < 1,
			onCancel: function() {
				new (o("WAWebSupportAiSessionWamEvent")).SupportAiSessionWamEvent({ supportAiEventType: o("WAWebWamEnumSupportAiEventType").SUPPORT_AI_EVENT_TYPE.NEGATIVE_FEEDBACK_OPTIONS_SCREEN_CANCELLED }).commit(), o("WAWebModalManager").ModalManager.close();
			},
			children: [c.jsx(o("WAWebText.react").WAWebTextSmall, {
				paddingBottom: 12,
				children: s._(
					/*BTDS*/
					""
				)
			}), g().map(function(t, n) {
				return c.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(_.option, o("WDSMargins.stylex").wdsMargins.marginTop12, o("WDSMargins.stylex").wdsMargins.marginEnd0), { children: [c.jsx("div", {
					className: "x1rg5ohu xxymvpz x1sa5p1d",
					children: c.jsx(o("WAWebCheckBox.react").CheckBox, {
						checked: u.includes(t.value),
						onChange: function() {
							return h(t.value);
						},
						testid: "feedback-option-" + n
					}, t.value)
				}), c.jsx("label", { children: t.label })] }), t.value);
			})]
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 226);
