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
		var t, n, a = e.quickReply, i = c((t = a == null ? void 0 : a.shortcut) != null ? t : ""), l = i[0], g = i[1], y = c((n = a == null ? void 0 : a.message) != null ? n : ""), C = y[0], b = y[1], v = c(null), S = v[0], R = v[1], L = c(null), E = L[0], k = L[1], I = function(t) {
			var e = p(t);
			g(t), R(e ? f(e) : null);
		}, T = function(t) {
			var e = _(t);
			b(t), k(e ? f(e) : null);
		}, D = async function() {
			if (l !== (a == null ? void 0 : a.shortcut) && o("WAWebQuickReplyCollection").QuickReplyCollection.some(function(e) {
				return l === e.shortcut;
			})) throw r("err")(d.ShortcutAlreadyInUse);
			a ? await o("WAWebEditQuickReplyAction").editQuickReplyAction({
				count: a.count,
				id: a.id,
				keywords: a.keywords,
				message: C,
				shortcut: l
			}) : await o("WAWebAddQuickReplyAction").addQuickReplyAction(l, C);
		}, x = function() {
			o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
				/*BTDS*/
				""
			) }));
		}, $ = function(t) {
			var e, n = (e = d.cast(t.message)) != null ? e : d.SaveFailed;
			o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: f(n) }));
		}, P = function() {
			var e = [l, C], t = [S, E];
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
			doSave: D,
			afterSave: x,
			onError: $,
			isValid: P(),
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
					value: l,
					error: S,
					onChange: function(t) {
						var e = t.text;
						return I(e);
					},
					showRemaining: !0,
					focusOnMount: !0,
					testid: "quick-replies-modal-shortcut"
				}), u.jsx(o("WAWebRichTextField.react").RichTextField, {
					placeholder: s._(
						/*BTDS*/
						""
					),
					value: C,
					error: E,
					multiline: !0,
					emojiBtnPosition: "side",
					onChange: function(t) {
						var e = t.text;
						return T(e);
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
