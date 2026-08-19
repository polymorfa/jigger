__d("WAWebBizQuickRepliesModal.react", [
	"fbt",
	"$InternalEnum",
	"WAWebAddQuickReplyAction",
	"WAWebEditQuickReplyAction",
	"WAWebFlex.react",
	"WAWebModal.react",
	"WAWebQuickReplyCollection",
	"WAWebQuickReplyLogging",
	"WAWebQuickReplyShortcutRegex",
	"WAWebRichTextField.react",
	"WAWebSavePopup.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"asyncToGeneratorRuntime",
	"err",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useState, d = n("$InternalEnum").Mirrored([
		"ShortcutAlreadyInUse",
		"ShortcutEmpty",
		"ShortcutInvalid",
		"MessageEmpty",
		"SaveFailed"
	]), m = 25;
	function p(e) {
		return e.trim() === "" ? d.ShortcutEmpty : r("WAWebQuickReplyShortcutRegex").test(e) ? null : d.ShortcutInvalid;
	}
	function _(e) {
		return e.trim() === "" ? d.MessageEmpty : null;
	}
	function f(e) {
		switch (e) {
			case d.ShortcutAlreadyInUse: return s._(
				/*BTDS*/
				""
			);
			case d.ShortcutEmpty: return s._(
				/*BTDS*/
				""
			);
			case d.ShortcutInvalid: return s._(
				/*BTDS*/
				""
			);
			case d.MessageEmpty: return s._(
				/*BTDS*/
				""
			);
			case d.SaveFailed: return s._(
				/*BTDS*/
				""
			);
		}
	}
	function g(e) {
		var t, a, i = e.quickReply, l = c((t = i == null ? void 0 : i.shortcut) != null ? t : ""), g = l[0], y = l[1], C = c((a = i == null ? void 0 : i.message) != null ? a : ""), b = C[0], v = C[1], S = c(null), R = S[0], L = S[1], E = c(null), k = E[0], I = E[1], T = function(t) {
			var e = p(t);
			y(t), L(e ? f(e) : null);
		}, D = function(t) {
			var e = _(t);
			v(t), I(e ? f(e) : null);
		}, x = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				if (g !== (i == null ? void 0 : i.shortcut) && o("WAWebQuickReplyCollection").QuickReplyCollection.some(function(e) {
					return g === e.shortcut;
				})) throw r("err")(d.ShortcutAlreadyInUse);
				i ? yield o("WAWebEditQuickReplyAction").editQuickReplyAction({
					count: i.count,
					id: i.id,
					keywords: i.keywords,
					message: b,
					shortcut: g
				}) : yield o("WAWebAddQuickReplyAction").addQuickReplyAction(g, b);
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), $ = function() {
			o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
				/*BTDS*/
				""
			) }));
		}, P = function(t) {
			var e, n = (e = d.cast(t.message)) != null ? e : d.SaveFailed;
			o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: f(n) }));
		}, N = function() {
			var e = [g, b], t = [R, k];
			return e.every(function(e) {
				return e;
			}) && !t.some(function(e) {
				return e;
			});
		};
		return u.jsx(r("WAWebSavePopup.react"), {
			title: s._(
				/*BTDS*/
				""
			),
			onCancel: h,
			doSave: x,
			afterSave: $,
			onError: P,
			isValid: N(),
			modalConfig: { type: o("WAWebModal.react").ModalTheme.QuickReplies },
			tsNavigationData: e.tsNavigationData,
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "stretch",
				children: [u.jsx(o("WAWebRichTextField.react").RichTextField, {
					maxLength: m,
					placeholder: s._(
						/*BTDS*/
						""
					),
					value: g,
					error: R,
					onChange: function(t) {
						var e = t.text;
						return T(e);
					},
					showRemaining: !0,
					focusOnMount: !0,
					testid: "quick-replies-modal-shortcut"
				}), u.jsx(o("WAWebRichTextField.react").RichTextField, {
					placeholder: s._(
						/*BTDS*/
						""
					),
					value: b,
					error: k,
					multiline: !0,
					emojiBtnPosition: "side",
					onChange: function(t) {
						var e = t.text;
						return D(e);
					},
					theme: "contact-us",
					testid: "quick-replies-modal-message"
				})]
			})
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h() {
		o("WAWebQuickReplyLogging").logQuickReplyAddAbandonEvent();
	}
	l.default = g;
}), 226);
