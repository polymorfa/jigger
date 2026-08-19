__d("WAWebNameGroupModal.react", [
	"fbt",
	"WAWebGroupGatingUtils",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebRichTextField.react",
	"WDSButtonGroup.react",
	"nullthrows",
	"react",
	"useWAWebListener",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useRef, m = c.useState;
	function p(e) {
		var t = e.chat, n = e.editable, a = e.editRestrictionInfo, i = e.onCancel, l = e.onOK, c = e.subtext, p = d(!1), _ = o("useWAWebModelValues").useModelValues(r("nullthrows")(t.groupMetadata), ["subject"]), f = m(_.subject), g = f[0], h = f[1];
		o("useWAWebListener").useListener(o("WAWebModalManager").ModalManager, "close_modal", function() {
			p.current || i();
		}, { once: !0 });
		var y = async function(n) {
			p.current = !0, n == null || n.stopPropagation(), n == null || n.preventDefault();
			try {
				await l(g, t);
			} catch (e) {
				p.current = !1;
			} finally {
				h("");
			}
		}, C = function(t) {
			p.current = !0, t.stopPropagation(), t.preventDefault(), i == null || i();
		}, b = function(t) {
			return !!(t != null && t.trim());
		}, v = function(t) {
			var e = t.text;
			h(e);
		}, S = g.trim().length > 0, R = u.jsx(r("WDSButtonGroup.react"), {
			width: "hug",
			orientation: "horizontal",
			tertiaryButtonProps: {
				variant: "outline",
				type: "default",
				onPress: C,
				testid: "popup-controls-cancel",
				label: s._(
					/*BTDS*/
					""
				)
			},
			primaryButtonProps: {
				variant: "filled",
				type: "default",
				onPress: function() {
					return void y();
				},
				testid: "popup-controls-ok",
				disabled: !S,
				label: s._(
					/*BTDS*/
					""
				)
			}
		}), L = u.jsx(o("WAWebRichTextField.react").RichTextField, {
			testid: "text-message-modal-text-unput",
			value: g,
			maxLength: o("WAWebGroupGatingUtils").getGroupMaxSubject(),
			onChange: v,
			validate: b,
			emojiBtnPosition: "side",
			multiline: !0,
			spellCheck: !0,
			showRemaining: !0,
			focusOnMount: !0,
			theme: "small",
			textFormatEnabled: !0,
			editable: n,
			editRestrictionInfo: a
		});
		return u.jsxs(o("WAWebModal.react").Modal, {
			title: s._(
				/*BTDS*/
				""
			),
			actions: R,
			children: [c, L]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
