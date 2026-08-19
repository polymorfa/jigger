__d("WAWebChatInfoDescriptionSection.react", [
	"fbt",
	"WAAbortError",
	"WALogger",
	"WAPromiseRaceAbort",
	"WAWebChatInfoDrawerSection.react",
	"WAWebConfirmPopup.react",
	"WAWebFbtCommon",
	"WAWebFormatConfiguration",
	"WAWebGroupGatingUtils",
	"WAWebLinkify",
	"WAWebModalManager",
	"WAWebNoop",
	"WAWebRichTextField.react",
	"WAWebText.react",
	"WDSPaddings.stylex",
	"react",
	"useWAWebPrevious",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useRef, p = d.useState, _ = 100, f = { paddingBlock10: {
		paddingTop: "x889kno",
		paddingBottom: "x1a8lsjc",
		$$css: !0
	} }, g = {
		containerRefreshed: {
			background: "xsm26vf",
			$$css: !0
		},
		textAlign: {
			textAlign: "x1yc453h",
			$$css: !0
		}
	};
	function h(t) {
		var n = t.bulletPointsEnabled, a = t.chat, i = t.containerTestId, l = t.editRestrictionText, u = t.emptyValuePlaceholder, d = t.expandedFormattingEnabled, h = t.focusOnMount, y = t.inputPlaceholder, C = t.preventBlankDescription, b = C === void 0 ? !1 : C, v = t.setIsEditing, S = t.testid, R = m(), L = p(t.description), E = L[0], k = L[1], I = p(!1), T = I[0], D = I[1], x = p(t.showFullDescription || !(E && E.length > 30)), $ = x[0], P = x[1], N = r("useWAWebUnmountSignal")(), M = r("useWAWebPrevious")(t.description);
		M !== t.description && E !== t.description && k(t.description);
		var w = function() {
			P(!0);
		}, A = function(n) {
			k(n), t.onChange == null || t.onChange(n);
		}, F = function() {
			k(t.description), t.onCancel == null || t.onCancel();
		}, O = function() {
			if (t.canSetDescription) {
				var n = E || "", i = n.match(/\r\n/gm) ? "\r\n" : "\n", l = new RegExp("^(" + i + "{2,})([^\n])", "gm"), s = n.replace(l, i + "$2").trim(), u = n.trim().length === 0 && /\s/.test(n);
				if (s === t.description || s === "" && t.description == null) return k(b && u ? t.description : s);
				D(!0), r("WAPromiseRaceAbort")(t.setDescriptionAction(a, s), N).then(r("WAWebNoop")).catch(o("WAAbortError").catchAbort(r("WAWebNoop"))).catch(function(n) {
					o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["description_input:onSetDescription failed"]))), k(t.description);
				}).finally(function() {
					D(!1), t.onSave == null || t.onSave();
				});
			}
		}, B = l != null ? function() {
			o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				tsNavigationData: {
					surface: "unknown",
					viewName: "chat-info-description"
				},
				onOK: o("WAWebModalManager").closeModalManager,
				okText: r("WAWebFbtCommon")("OK"),
				children: l
			}));
		} : null, W = function() {
			return t.creationString == null ? null : c.jsx("div", {
				className: "x1anpbxc",
				children: c.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, {
					color: "wdsContentDeemphasized",
					children: t.creationString
				})
			});
		};
		if (o("WAWebGroupGatingUtils").getGroupDescriptionLength() <= 0) return null;
		var q = {
			textLimit: $ ? 1 / 0 : _,
			readMoreText: s._(
				/*BTDS*/
				""
			),
			onReadMore: w,
			ellipsify: !0,
			multiline: !0,
			breakWord: !0,
			direction: "auto",
			inferLinesDirection: !0,
			formatters: a.isTrusted() ? o("WAWebFormatConfiguration").TrustedGroupDesc({
				links: o("WAWebLinkify").findLinks(E),
				bulletPointsEnabled: n,
				expandedFormattingEnabled: d
			}) : o("WAWebFormatConfiguration").UntrustedGroupDesc({
				bulletPointsEnabled: n,
				expandedFormattingEnabled: d
			})
		}, U = [o("WAWebRichTextField.react").TextInputCustomStyleThemes.GroupInfoName, o("WAWebRichTextField.react").TextInputCustomStyleThemes.ChatInfoDefaultText], V = c.jsx("div", {
			className: "x126k92a",
			children: c.jsx(o("WAWebRichTextField.react").RichTextField, {
				ref: R,
				testid: S,
				containerXstyle: g.textAlign,
				value: E,
				emptyValuePlaceholder: u,
				inputPlaceholder: y,
				emojiTextSettingsInLockMode: q,
				editable: t.canSetDescription,
				pending: T,
				showRemaining: !0,
				maxLength: o("WAWebGroupGatingUtils").getGroupDescriptionLength(),
				onChange: function(t) {
					var e = t.text;
					return A(e);
				},
				onSave: O,
				isRefresh: !0,
				onCancel: F,
				multiline: !0,
				editRestrictionInfo: !t.canSetDescription && !a.isSuspendedOrTerminated() ? B : void 0,
				emojiBtnPosition: "side",
				lockable: !0,
				lowProfile: !0,
				customStyleThemes: U,
				theme: "small",
				showEditOnHover: !0,
				constrainedWidth: !0,
				textFormatEnabled: !0,
				bulletPointsEnabled: n != null ? n : d,
				numberedListEnabled: d,
				blockQuoteEnabled: d,
				inlineCodeEnabled: d,
				textFormatShortcutsEnabled: !0,
				linksEnabled: !0,
				internLinksEnabled: !0,
				floatingToolbarEnabled: !0,
				onBlur: t.onBlur,
				startActive: h,
				focusOnMount: h,
				setIsEditing: v,
				placeholderClickToEditEnabled: !0,
				fieldName: s._(
					/*BTDS*/
					""
				),
				ariaLabel: s._(
					/*BTDS*/
					""
				)
			})
		});
		!E && !t.canSetDescription && (V = null);
		var H = W();
		return !V && !H ? null : c.jsxs(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection, {
			testid: i,
			xstyle: [
				o("WDSPaddings.stylex").wdsPaddings.paddingHor20,
				f.paddingBlock10,
				g.containerRefreshed
			],
			children: [V, H]
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 226);
