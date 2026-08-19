__d("WAWebNameGroupModal.react", [
	"fbt",
	"WAWebGroupGatingUtils",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebRichTextField.react",
	"WDSButtonGroup.react",
	"asyncToGeneratorRuntime",
	"nullthrows",
	"react",
	"useWAWebListener",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useRef, m = c.useState;
	function p(e) {
		var t = e.chat, a = e.editable, i = e.editRestrictionInfo, l = e.onCancel, c = e.onOK, p = e.subtext, _ = d(!1), f = o("useWAWebModelValues").useModelValues(r("nullthrows")(t.groupMetadata), ["subject"]), g = m(f.subject), h = g[0], y = g[1];
		o("useWAWebListener").useListener(o("WAWebModalManager").ModalManager, "close_modal", function() {
			_.current || l();
		}, { once: !0 });
		var C = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				_.current = !0, e == null || e.stopPropagation(), e == null || e.preventDefault();
				try {
					yield c(h, t);
				} catch (e) {
					_.current = !1;
				} finally {
					y("");
				}
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})(), b = function(t) {
			_.current = !0, t.stopPropagation(), t.preventDefault(), l == null || l();
		}, v = function(t) {
			return !!(t != null && t.trim());
		}, S = function(t) {
			var e = t.text;
			y(e);
		}, R = h.trim().length > 0, L = u.jsx(r("WDSButtonGroup.react"), {
			width: "hug",
			orientation: "horizontal",
			tertiaryButtonProps: {
				variant: "outline",
				type: "default",
				onPress: b,
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
					return void C();
				},
				testid: "popup-controls-ok",
				disabled: !R,
				label: s._(
					/*BTDS*/
					""
				)
			}
		}), E = u.jsx(o("WAWebRichTextField.react").RichTextField, {
			testid: "text-message-modal-text-unput",
			value: h,
			maxLength: o("WAWebGroupGatingUtils").getGroupMaxSubject(),
			onChange: S,
			validate: v,
			emojiBtnPosition: "side",
			multiline: !0,
			spellCheck: !0,
			showRemaining: !0,
			focusOnMount: !0,
			theme: "small",
			textFormatEnabled: !0,
			editable: a,
			editRestrictionInfo: i
		});
		return u.jsxs(o("WAWebModal.react").Modal, {
			title: s._(
				/*BTDS*/
				""
			),
			actions: L,
			children: [p, E]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
