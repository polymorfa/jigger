__d("WAWebNewNewsletterInfoDrawer.react", [
	"fbt",
	"JSResourceForInteraction",
	"WAWebChatGetExistingBridge",
	"WAWebChatPinBridge",
	"WAWebCmd",
	"WAWebCommonNewsletterStrings",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebFlex.react",
	"WAWebGroupGatingUtils",
	"WAWebModalManager",
	"WAWebNetworkStatus",
	"WAWebNewsletterAttributionLogging",
	"WAWebNewsletterCollection",
	"WAWebNewsletterCreateAction",
	"WAWebNewsletterCreationFailureModal.react",
	"WAWebNewsletterCreationLoadingModal.react",
	"WAWebNewsletterFollowerSelectionFlow.react",
	"WAWebNewsletterGatingUtils",
	"WAWebNoop",
	"WAWebPhotoPickerConstants",
	"WAWebPhotoPickerLoadable.react",
	"WAWebRichTextField.react",
	"WAWebStateUtils",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUnifiedSession",
	"WAWebWamEnumChannelAdminAction",
	"WAWebWamEnumChannelEntryPoint",
	"WAWebWamEnumChannelEventSurface",
	"WAWebWamEnumChannelEventType",
	"WAWebWamEnumThreadType",
	"WDSButton.react",
	"react",
	"stylex",
	"useWAWebToggle"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c, d = c || (c = o("react")), m = c, p = m.useCallback, _ = m.useEffect, f = m.useRef, g = m.useState, h = {
		channelMetadataSection: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			justifyContent: "x1qughib",
			width: "xh8yej3",
			$$css: !0
		},
		paddingHoriz32: {
			paddingInlineStart: "x1m4z3lf",
			paddingInlineEnd: "x1evaxtz",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		paddingBottom28: {
			paddingBottom: "xgb8hzy",
			$$css: !0
		},
		paddingBottom32: {
			paddingBottom: "x1ci70gm",
			$$css: !0
		},
		paddingTop28: {
			paddingTop: "xv8gdss",
			$$css: !0
		}
	};
	function y(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = g(!1), l = i[0], c = i[1], m = g(""), y = m[0], C = m[1], b = g(null), v = b[0], S = b[1], R = g(null), L = R[0], E = R[1], k = r("useWAWebToggle")(!1), I = k[0], T = a.adminFunnelLoggerRef, D = f(""), x = f(null), $ = [h.paddingHoriz32, h.paddingBottom28];
		_(function() {
			T.current.logEvent(o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION.CHANNEL_CREATE_LAUNCH_SUCCESS), o("WAWebNewsletterGatingUtils").isChannelInviteContactsToFollowCreationModalEnabled() && r("JSResourceForInteraction")("WAWebConfettiTallGreenAnimationData").__setRef("WAWebNewNewsletterInfoDrawer.react").load().catch(r("WAWebNoop"));
		}, []);
		var P = p(function(e, t) {
			T.current.logEvent(o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION.CHANNEL_ADMIN_FLOW_FAILURE), t && o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, { msg: e }));
		}, [T]), N = p(function(e) {
			T.current.logEvent(o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION.CHANNEL_ADMIN_FLOW_SUCCESS), e && o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, { msg: s._(
				/*BTDS*/
				""
			) }));
		}, [T]);
		async function M(e) {
			var t = await o("WAWebChatGetExistingBridge").getExisting(e);
			t != null && await o("WAWebChatPinBridge").getNumNewslettersPinned() < o("WAWebChatPinBridge").getPinLimit(e) && o("WAWebCmd").Cmd.pinChat(o("WAWebStateUtils").unproxy(t), !0);
		}
		var w = async function(t) {
			var e = o("WAWebNewsletterGatingUtils").isChannelInviteContactsToFollowCreationModalEnabled(), n = { current: null }, a = e ? o("WAWebModalManager").closeModalManager : r("WAWebNoop");
			c(!0), e && o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebNewsletterCreationLoadingModal.react"), {
				channelName: t.name,
				initialLoading: !0,
				loadingRef: n,
				onClose: a,
				thumbnailUrl: t.picture
			}), { blockClose: !0 });
			var i = await o("WAWebNewsletterCreateAction").createNewsletterAction(t);
			if (i != null) {
				var l, u;
				if (o("WAWebNewsletterAttributionLogging").NewsletterCoreEventLogger.log({
					channelCoreEventType: o("WAWebWamEnumChannelEventType").CHANNEL_EVENT_TYPE.CREATE,
					cid: i,
					unifiedSessionId: (l = o("WAWebUnifiedSession").UnifiedSessionManager.getSessionId()) != null ? l : void 0,
					eventSurface: o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE.CHANNEL_UPDATES_HOME,
					entryPoint: o("WAWebWamEnumChannelEntryPoint").CHANNEL_ENTRY_POINT.NEWSLETTER_CREATION_UPDATES_TAB
				}), N(!e), I && await M(i), o("WAWebNewsletterGatingUtils").isChannelInviteContactsToFollowProducerEnabled()) {
					var m = r("WAWebNewsletterCollection").get(i);
					if (m) if (e) {
						var p;
						(p = n.current) == null || p.setOnSuccess(function() {
							o("WAWebNewsletterFollowerSelectionFlow.react").startFollowerInviteFlow({ chat: m });
						});
					} else o("WAWebNewsletterFollowerSelectionFlow.react").startFollowerInviteFlow({ chat: m });
				}
				c(!1), (u = n.current) == null || u.setLoading(!1), o("WAWebCmd").Cmd.openCreatedNewsletter(i);
			} else a(), c(!1), P(s._(
				/*BTDS*/
				""
			), !e), e && o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebNewsletterCreationFailureModal.react"), { onRetry: function() {
				return void w(t);
			} }));
		}, A = function(t) {
			if (!r("WAWebNetworkStatus").online) {
				P(s._(
					/*BTDS*/
					""
				), !0);
				return;
			}
			w(t);
		}, F = p(function(e) {
			var t = e.text;
			C(t);
		}, []), O = p(function(e) {
			var t = e.text;
			S(t);
		}, []), B = p(function(e, t, n) {
			E(t), T.current.logImageSetEvent(n);
		}, [T]), W = v != null && v.trim().length === 0 && /\s/.test(v), q = y.trim().length > 0 && !W, U = function() {
			y !== D.current && (D.current = y, T.current.logEvent(o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION.CHANNEL_NAME_SET));
		}, V = function() {
			v !== x.current && (x.current = v, T.current.logEvent(o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION.CHANNEL_DESCRIPTION_SET));
		}, H = function() {
			U(), V(), T.current.logEvent(o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION.CHANNEL_ADMIN_FLOW_CONFIRMATION_TAP), A({
				name: y,
				description: v,
				picture: L
			});
		}, G = d.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			xstyle: h.paddingBottom32,
			children: d.jsx(r("WDSButton.react"), {
				testid: "create-newsletter-button",
				type: "default",
				variant: "filled",
				onPress: H,
				disabled: !q || l,
				loading: l,
				label: o("WAWebCommonNewsletterStrings").getCreateChannelText()
			})
		}), z = s._(
			/*BTDS*/
			""
		), j = s._(
			/*BTDS*/
			""
		), K = s._(
			/*BTDS*/
			""
		);
		return d.jsxs(r("WAWebDrawer.react"), {
			ref: n,
			testid: "create-newsletter-drawer",
			tsNavigationData: {
				surface: "channel-create-page",
				extras: { threadType: o("WAWebWamEnumThreadType").THREAD_TYPE.CHANNEL }
			},
			children: [d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: s._(
					/*BTDS*/
					""
				),
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				onBack: a.onBack
			}), d.jsx(r("WAWebDrawerBody.react"), { children: d.jsxs(r("WAWebDrawerSection.react"), {
				theme: "full-height",
				xstyle: h.channelMetadataSection,
				children: [d.jsxs("div", { children: [
					d.jsx("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props.apply(u, [h.paddingTop28].concat($)), { children: d.jsx(o("WAWebPhotoPickerLoadable.react").PhotoPickerLoadable, {
						type: o("WAWebPhotoPickerConstants").PhotoPickerType.NEWSLETTER,
						attachToChat: !1,
						startImage: L,
						onImageSet: B
					}) })),
					d.jsx("div", babelHelpers.extends({ "data-testid": "newsletter-name" }, u.props.apply(u, $), { children: d.jsx(o("WAWebRichTextField.react").RichTextField, {
						testid: "newsletter-name-input",
						title: z,
						value: y,
						maxLength: o("WAWebGroupGatingUtils").getGroupMaxSubject(),
						showRemaining: !0,
						onChange: F,
						onBlur: U,
						placeholder: z,
						onEnter: q ? H : r("WAWebNoop"),
						emojiBtnPosition: "side",
						focusOnMount: !0
					}) })),
					d.jsx("div", babelHelpers.extends({ "data-testid": "newsletter-description" }, u.props.apply(u, $), { children: d.jsx(o("WAWebRichTextField.react").RichTextField, {
						testid: "newsletter-description-input",
						title: j,
						value: v,
						maxLength: o("WAWebGroupGatingUtils").getGroupDescriptionLength(),
						showRemaining: !0,
						onChange: O,
						onBlur: V,
						placeholder: K,
						inputPlaceholder: j,
						onEnter: q ? H : r("WAWebNoop"),
						emojiBtnPosition: "side",
						multiline: !0,
						maxVisibleLines: 5,
						minVisibleLines: 5,
						textFormatEnabled: !0,
						bulletPointsEnabled: !0,
						numberedListEnabled: !1,
						blockQuoteEnabled: !1,
						inlineCodeEnabled: !1,
						theme: "gray-background"
					}) })),
					d.jsx("div", babelHelpers.extends({ "data-testid": "newsletter-pinning" }, u.props.apply(u, $)))
				] }), G]
			}) })]
		});
	}
	y.displayName = y.name + " [from " + i.id + "]", l.default = y;
}), 226);
