__d("WAWebMultiSelectBar.react", [
	"fbt",
	"$InternalEnum",
	"WAWebChatEphemerality",
	"WAWebCopyUtils",
	"WAWebEnvironment",
	"WAWebForwardActionUserJourneyLogger",
	"WAWebKeepInChatMsgUtils",
	"WAWebMsgActionCapability",
	"WAWebMsgCollection",
	"WAWebMultiSelectCount.react",
	"WAWebMultiSelectDelete.react",
	"WAWebMultiSelectDownload.react",
	"WAWebMultiSelectForward.react",
	"WAWebMultiSelectKeep.react",
	"WAWebMultiSelectStar.react",
	"WAWebNewsletterMsgLinkUtils",
	"WAWebTabOrder",
	"WAWebToast.react",
	"WAWebToastManager",
	"WDSIconIcClose.react",
	"WDSIconIcContentCopy.react",
	"WDSIconIcLink.react",
	"WDSMenuBarItem.react",
	"WDSPaddings.stylex",
	"asyncToGeneratorRuntime",
	"react",
	"stylex",
	"useMergeRefs",
	"useWAWebForceUpdate",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c, d = c || (c = o("react")), m = c.useRef, p = { paddingInlineStart15: {
		paddingInlineStart: "x1gx403c",
		$$css: !0
	} }, _ = {
		multiControls: {
			position: "x10l6tqk",
			bottom: "x1ey2m1c",
			insetInlineStart: "x1o0tod",
			zIndex: "xfo81ep",
			boxSizing: "x9f619",
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			width: "xh8yej3",
			height: "x12659sl",
			backgroundColor: "x1od0jb8",
			$$css: !0
		},
		mediaGalleryTheme: {
			top: "x13vifvy",
			height: "x185czh",
			backgroundColor: "x1280gxy",
			$$css: !0
		},
		btnMargin: {
			marginInlineEnd: "xqf2s3x",
			$$css: !0
		}
	}, f = n("$InternalEnum")({
		CONVERSATION_PANEL: "conversation_panel",
		MEDIA: "media",
		DOCS: "docs",
		LINKS: "links",
		PRODUCTS: "products"
	}), g = n("$InternalEnum")({
		DEFAULT: "default",
		DELETE: "delete",
		FORWARD: "forward"
	});
	function h(t) {
		"use no forget";
		var a = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, e), l = i.selectedMessages, c = i.chat, f = i.toastPosition, h = i.onCancel, y = i.noSortOnForward, C = i.downloadButton, b = C === void 0 ? !0 : C, v = i.entryPoint, S = i.mode, R = S === void 0 ? g.DEFAULT : S, L = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(), E = m(null), k = r("useMergeRefs")(a, E), I = function() {
			var e = l.getSelected();
			o("WAWebNewsletterMsgLinkUtils").handleNewsletterMessageLinkCopyClick(e[0]);
		}, T = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e = yield o("WAWebCopyUtils").copyMessagesToClipboard(D);
				if (e != null && e > 0) {
					var t = s._(
						/*BTDS*/
						"",
						[s._plural(e, "number_of_reactions")]
					);
					o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, { msg: t })), h();
				} else o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) }));
			});
			return function() {
				return e.apply(this, arguments);
			};
		})();
		o("useWAWebListener").useListeners(l.getSelected().map(function(e) {
			return {
				source: e,
				eventOrEvents: "change:star",
				callback: L
			};
		})), o("useWAWebListener").useListener(l, "all", L), o("useWAWebListener").useListener(o("WAWebMsgCollection").MsgCollection, "change:star change:kicState", function(e) {
			l.isSelected(e) && L();
		});
		var D = i.selectedMessages.getSelected(), x = D.length, $ = x === 1 && o("WAWebMsgActionCapability").canCopyNewsletterMessageLink(D[0]), P = $ ? d.jsx(r("WDSMenuBarItem.react"), {
			tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_SELECT_BAR,
			icon: r("WDSIconIcLink.react"),
			onClick: I,
			title: s._(
				/*BTDS*/
				""
			),
			marginInlineXstyle: _.btnMargin
		}) : null, N = r("WAWebEnvironment").isWindows ? d.jsx(r("WDSMenuBarItem.react"), {
			tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_SELECT_BAR,
			icon: r("WDSIconIcContentCopy.react"),
			disabled: D.length === 0 || !D.every(function(e) {
				return o("WAWebCopyUtils").canCopyMessage(e);
			}),
			title: s._(
				/*BTDS*/
				""
			),
			onClick: T,
			marginInlineXstyle: _.btnMargin
		}) : null, M = d.jsx(r("WAWebMultiSelectForward.react"), {
			noSortOnForward: y,
			onCancel: h,
			selectedMessages: l,
			onForwardModalOpen: function() {
				o("WAWebForwardActionUserJourneyLogger").ForwardActionUserJourneyLogger.forwardButtonTappedInForwardToolbar(l.getSelected());
			}
		}), w = d.jsx(r("WAWebMultiSelectDelete.react"), {
			onCancel: h,
			selectedMessages: l,
			toastPosition: f
		}), A = x > 0, F = A, O = !1, B = !1, W = !1;
		D.forEach(function(e) {
			o("WAWebKeepInChatMsgUtils").canShowKeepOrUnkeepOption(e) ? O = !0 : (B = !0, F = !1, o("WAWebKeepInChatMsgUtils").keepIsLockedForMe(e) && (W = !0));
		});
		var q, U, V = (O || W) && B;
		if (!V) {
			var H = F || !x && o("WAWebChatEphemerality").isEphemeralSettingOn(c);
			H ? U = d.jsx(r("WAWebMultiSelectKeep.react"), {
				selectedMessages: l,
				onCancel: h,
				entryPoint: v
			}) : q = d.jsx(r("WAWebMultiSelectStar.react"), {
				selectedMessages: l,
				onCancel: h,
				toastPosition: f
			});
		}
		var G = d.jsx(r("WAWebMultiSelectDownload.react"), {
			downloadButton: b,
			onCancel: h,
			selectedMessages: l,
			tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_SELECT_BAR
		}), z = i.theme === "mediaGallery", j = [];
		switch (R) {
			case g.DELETE:
				j.push(w);
				break;
			case g.FORWARD:
				j.push(M);
				break;
			case g.DEFAULT:
				j.push(P, N, q, U, w, M, G);
				break;
		}
		var K = R === g.DELETE ? s._(
			/*BTDS*/
			""
		) : R === g.FORWARD ? s._(
			/*BTDS*/
			""
		) : R === g.DEFAULT ? s._(
			/*BTDS*/
			""
		) : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + R);
		})(), Q = d.jsx(r("WDSMenuBarItem.react"), {
			title: K,
			tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_SELECT_BAR,
			icon: r("WDSIconIcClose.react"),
			testid: "ic-close",
			onClick: i.onCancel,
			marginInlineXstyle: _.btnMargin
		});
		return d.jsxs("div", babelHelpers.extends({ ref: k }, (u || (u = r("stylex"))).props(z && _.mediaGalleryTheme, _.multiControls, p.paddingInlineStart15, o("WDSPaddings.stylex").wdsPaddings.paddingEnd16), { children: [
			Q,
			d.jsx(r("WAWebMultiSelectCount.react"), {
				selectedMsgsCount: x,
				theme: i.theme
			}),
			j
		] }));
	}
	h.displayName = h.name + " [from " + i.id + "]", l.MultiSelectBarEntryPoint = f, l.MultiSelectMode = g, l.MultiSelectBar = h;
}), 226);
