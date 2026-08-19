__d("WAWebModal.react", [
	"$InternalEnum",
	"WAWebCopyPasteCopyableArea.react",
	"WAWebDragAndDrop.react",
	"WAWebL10NFbtTypeUtils",
	"WAWebModalManager",
	"WAWebTimeSpentLoggingNavigation",
	"WAWebVoipPopoutModalManager",
	"WAWebVoipUiPopoutWindowContext",
	"justknobx",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s, u, c = u || (u = o("react")), d = u, m = d.useContext, p = d.useId, _ = d.useRef, f = n("$InternalEnum").Mirrored([
		"Box",
		"BoxLarge",
		"Flex",
		"Guide",
		"Tower",
		"Auto",
		"AutoWrap",
		"Invite",
		"InviteNew",
		"ColumnButtons",
		"Multiline",
		"Upgrade",
		"Promote",
		"CommandPalette",
		"CommandPaletteV2",
		"QuickReplies",
		"StatusViewerList",
		"LinkPopup",
		"StatusReport",
		"ChatAssignment",
		"TowerLarge",
		"HistorySyncProgress",
		"MessageEdit",
		"ForwardMediaWithCaption",
		"MessageActionsModal",
		"DataSharing",
		"UpdatedDataSharing",
		"DeleteNewsletter",
		"Small",
		"ListsAssignModal",
		"LabelList",
		"LabelEdit",
		"LabelChooseColor",
		"Comments",
		"BotNut",
		"EventCreation",
		"AdAccountRecovery",
		"MusicAttribution",
		"BusinessHours",
		"BusinessCategories",
		"BusinessProfile",
		"MediaHub",
		"GroupSafetyCheck",
		"ReachoutTimelock",
		"AddOrUpdatePix",
		"IndividualNewChatMessageCapped",
		"CDS",
		"Questions",
		"GalaxyFlowResponsePopup",
		"BusinessBroadcastUploadModal",
		"PaymentsFlow",
		"PaymentsConfirmDialog",
		"BizToolsAdCreationNux",
		"BizToolsAdCreationEmailOnboarding",
		"BizToolsAdCreationSuccess",
		"BillingWizardDialog",
		"PdfEdit",
		"PdfEditError",
		"HardRefresh",
		"EditAbout",
		"ChannelCreation",
		"ExportChat",
		"AiContentInfo"
	]), g = {
		overlay: {
			position: "xixxii4",
			top: "x13vifvy",
			insetInlineStart: "x1o0tod",
			left: null,
			right: null,
			boxSizing: "x9f619",
			width: "xh8yej3",
			height: "x5yr21d",
			$$css: !0
		},
		backdrop: {
			zIndex: "xjhb59c",
			overflowX: "xw2csxc",
			overflowY: "x1odjw0f",
			backgroundColor: "x1honnu5",
			$$css: !0
		},
		backdropRefreshed: {
			backgroundColor: "x1honnu5",
			$$css: !0
		},
		backdropMediaHub: {
			zIndex: "xtsfpqs",
			$$css: !0
		},
		popupVoipPopoutWindowFix: {
			maxWidth: "x16xn7b0",
			maxHeight: "x1bwycvy",
			$$css: !0
		},
		popup: {
			boxSizing: "x9f619",
			display: "x78zum5",
			flexGrow: "x1c4vz4f",
			flexShrink: "x2lah0s",
			flexBasis: "xdl72j9",
			flexDirection: "xdt5ytf",
			width: "xvue9z",
			paddingTop: "x1xy6bms",
			paddingInlineEnd: "x64bnmy",
			paddingBottom: "xx6bls6",
			paddingInlineStart: "x13jy36j",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			backgroundColor: "x16w0wmm",
			borderStartStartRadius: "xrlxcrs",
			borderStartEndRadius: "x7g1fbw",
			borderEndEndRadius: "xxl59ln",
			borderEndStartRadius: "xmw6rta",
			boxShadow: "x1shw4ur",
			$$css: !0
		},
		popupMaterial: {
			borderStartStartRadius: "x1xn7y0n",
			borderStartEndRadius: "x1uxb8k9",
			borderEndEndRadius: "x1vmbcc8",
			borderEndStartRadius: "x16xm01d",
			boxShadow: "xs2e80n",
			$$css: !0
		},
		popupSmall: {
			width: "x1l2rt3b",
			$$css: !0
		},
		popupChannelCreation: {
			position: "x1n2onr6",
			width: "x1fwfoet",
			height: "xrlp1an",
			paddingTop: "xexx8yu",
			$$css: !0
		},
		popupAutoWrap: {
			minWidth: "x1htk8sl",
			width: "x14atkfc",
			$$css: !0
		},
		popupAutoWrapContents: {
			maxWidth: "x1m189uc",
			minWidth: "xgqtt45",
			$$css: !0
		},
		popupBody: {
			position: "x1n2onr6",
			flexGrow: "x1iyjqo2",
			flexShrink: "xs83m0k",
			flexBasis: "x1l7klhg",
			overflowWrap: "x1mzt3pk",
			whiteSpace: "xeaf4i8",
			$$css: !0
		},
		popupTitle: {
			marginBottom: "xdqhqc9",
			fontSize: "x1603h9y",
			fontWeight: "xo1l8bm",
			lineHeight: "x132q4wb",
			textAlign: "x1yc453h",
			$$css: !0
		},
		backdropCover: {
			backgroundColor: "x14zpict",
			$$css: !0
		},
		showOverStatus: {
			zIndex: "xc9l9hb",
			$$css: !0
		},
		popupContents: {
			fontSize: "x12lqup9",
			lineHeight: "x1o1kx08",
			$$css: !0
		},
		popupBox: {
			position: "x1n2onr6",
			width: "xvue9z",
			height: "x1egiwwb",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			$$css: !0
		},
		popupBoxLarge: {
			position: "x1n2onr6",
			width: "x1qfffx7",
			height: "xjr88my",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			$$css: !0
		},
		popupFlex: {
			width: "x14atkfc",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			backgroundColor: "x16w0wmm",
			$$css: !0
		},
		popupAuto: {
			width: "x14atkfc",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			transform: "x15j3iad",
			$$css: !0
		},
		popupAutoTitle: {
			marginTop: "xdj266r",
			marginInlineEnd: "x14z9mp",
			marginBottom: "xat24cr",
			marginInlineStart: "x1lziwak",
			$$css: !0
		},
		popupAutoBody: {
			position: "x1uhb9sk",
			$$css: !0
		},
		popupAutoContents: {
			backgroundColor: "x1280gxy",
			$$css: !0
		},
		popupAutoControls: {
			paddingTop: "x889kno",
			paddingInlineEnd: "x1gabggj",
			paddingBottom: "xs9asl8",
			paddingInlineStart: "xaso8d8",
			backgroundColor: "x1280gxy",
			$$css: !0
		},
		popupFlexInvite: {
			height: "x1ad3yod",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			backgroundColor: "x16w0wmm",
			$$css: !0
		},
		popupFlexInviteNew: {
			width: "xr6pica",
			paddingTop: "x1p5oq8j",
			paddingInlineEnd: "x194u5oj",
			paddingBottom: "x84yb8i",
			paddingInlineStart: "x1mfogq2",
			$$css: !0
		},
		popupFlexInviteNewControls: {
			paddingTop: "x1p57kb1",
			justifyContent: "xl56j7k",
			$$css: !0
		},
		popupFlexUpgradeControls: {
			paddingTop: "x10lzpyj",
			paddingInlineEnd: "x1gabggj",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "xaso8d8",
			$$css: !0
		},
		popupFlexControls: {
			paddingTop: "x123j3cw",
			paddingInlineEnd: "xfo0vy5",
			paddingBottom: "x156go17",
			paddingInlineStart: "x1lyran6",
			$$css: !0
		},
		popupTower: {
			position: "x1n2onr6",
			flexGrow: "x1iyjqo2",
			flexShrink: "xs83m0k",
			flexBasis: "x1l7klhg",
			width: "xs8rnei",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			marginTop: "x1coevs8",
			marginInlineEnd: "x14z9mp",
			marginBottom: "xui9b5u",
			marginInlineStart: "x1lziwak",
			"@media screen and (min-height: 1000px)_marginTop": "xg3pqpk",
			"@media screen and (min-height: 1000px)_marginInlineEnd": "xusj4dd",
			"@media screen and (min-height: 1000px)_marginBottom": "x1a6k631",
			"@media screen and (min-height: 1000px)_marginInlineStart": "x1fwmvtr",
			"@media screen and (max-height: 700px)_marginTop": "x1n7bigs",
			"@media screen and (max-height: 700px)_marginInlineEnd": "x6ln8mz",
			"@media screen and (max-height: 700px)_marginBottom": "x12v3509",
			"@media screen and (max-height: 700px)_marginInlineStart": "xf35npv",
			$$css: !0
		},
		popupTowerLarge: {
			width: "x1qfffx7",
			$$css: !0
		},
		popupControls: {
			display: "x78zum5",
			flexWrap: "x8hhl5t",
			justifyContent: "x13a6bvl",
			paddingTop: "x13crsa5",
			paddingInlineEnd: "x1gabggj",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "xaso8d8",
			textAlign: "xp4054r",
			whiteSpace: "xuxw1ft",
			$$css: !0
		},
		popupGuideBackdrop: {
			backgroundColor: "xglhzf2",
			$$css: !0
		},
		popupGuidePopup: {
			width: "x14atkfc",
			maxWidth: "x65f84u",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			backgroundColor: "xjbqb8w",
			boxShadow: "x1gnnqk1",
			$$css: !0
		},
		popupColumnButtonsControls: {
			flexDirection: "xdt5ytf",
			flexWrap: "x1a02dak",
			alignItems: "xuk3077",
			$$css: !0
		},
		popupMultilineContents: {
			whiteSpace: "x1fj9vlw",
			$$css: !0
		},
		popupStatusViewerList: {
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			$$css: !0
		},
		popupGalaxyFlowResponse: {
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			$$css: !0
		},
		popupGalaxyFlowResponseControls: {
			paddingTop: "xyamay9",
			paddingInlineEnd: "xv54qhq",
			paddingBottom: "x1l90r2v",
			paddingInlineStart: "xf7dkkf",
			$$css: !0
		},
		popupPromote: {
			width: "x3p9ev8",
			$$css: !0
		},
		popupPromoteControls: {
			justifyContent: "xl56j7k",
			textAlign: "x2b8uid",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			$$css: !0
		},
		popupForwardMediaWithCaption: {
			width: "x1l895tw",
			$$css: !0
		},
		popupForwardMediaWithCaptionControls: {
			textAlign: "x2b8uid",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			$$css: !0
		},
		popupMessageActionsModal: {
			width: "x1l2rt3b",
			$$css: !0
		},
		popupMessageActionsModalControls: {
			textAlign: "x2b8uid",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			$$css: !0
		},
		popupCommandPalette: {
			position: "xixxii4",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			width: "x3p9ev8",
			maxHeight: "x179dxpb",
			top: "x15nb5xm",
			borderStartStartRadius: "xd0qcmr",
			borderStartEndRadius: "xsh6knr",
			borderEndEndRadius: "x1n13l81",
			borderEndStartRadius: "xv8lwpf",
			overflowX: "x1plvlek",
			overflowY: "xryxfnj",
			backgroundColor: null,
			$$css: !0
		},
		popupCommandPaletteV2: {
			width: "xvue9z",
			borderStartStartRadius: "xlr9sxt",
			borderStartEndRadius: "xvvg52n",
			borderEndEndRadius: "xwd4zgb",
			borderEndStartRadius: "xq8v1ta",
			$$css: !0
		},
		popupQuickReplies: {
			width: "xvue9z",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			transform: "x15j3iad",
			$$css: !0
		},
		popupQuickRepliesTitle: {
			marginTop: "xdj266r",
			marginInlineEnd: "x14z9mp",
			marginBottom: "xat24cr",
			marginInlineStart: "x1lziwak",
			$$css: !0
		},
		popupQuickRepliesBody: {
			position: "x1uhb9sk",
			$$css: !0
		},
		popupQuickRepliesContents: {
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xx281p9",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x67w97k",
			backgroundColor: "x1280gxy",
			$$css: !0
		},
		popupQuickRepliesControls: {
			paddingTop: "xyamay9",
			paddingInlineEnd: "xx281p9",
			paddingBottom: "xx6bls6",
			paddingInlineStart: "x67w97k",
			backgroundColor: "x1280gxy",
			$$css: !0
		},
		popupChatAssignment: {
			width: "x1l2rt3b",
			$$css: !0
		},
		popupHistorySyncProgress: {
			width: "x1l2rt3b",
			$$css: !0
		},
		popupDataSharing: {
			paddingTop: "xl7twdi",
			paddingInlineEnd: "xyo0t3i",
			paddingBottom: "xvg22vi",
			paddingInlineStart: "xb0esv5",
			width: "x1l2rt3b",
			$$css: !0
		},
		popupUpdatedDataSharing: {
			paddingTop: "xl7twdi",
			paddingInlineEnd: "xyo0t3i",
			paddingBottom: "xvg22vi",
			paddingInlineStart: "xb0esv5",
			width: "xbstwhj",
			$$css: !0
		},
		popupMessageEdit: {
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			position: "x1n2onr6",
			width: "x1c4ky7w",
			maxHeight: "x179dxpb",
			$$css: !0
		},
		popupMessageEditBody: {
			minHeight: "x2lwn1j",
			$$css: !0
		},
		popupMessageEditContents: {
			height: "x5yr21d",
			$$css: !0
		},
		popupDeleteNewsletter: {
			width: "x1l2rt3b",
			paddingTop: "xl7twdi",
			paddingInlineEnd: "xyo0t3i",
			paddingBottom: "xvg22vi",
			paddingInlineStart: "xb0esv5",
			$$css: !0
		},
		popupDeleteNewsletterBody: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			$$css: !0
		},
		popupDeleteNewsletterContents: {
			flexGrow: "x1iyjqo2",
			$$css: !0
		},
		popupListsAssignModal: {
			width: "x3p9ev8",
			paddingTop: "x889kno",
			paddingInlineEnd: "x2vl965",
			paddingBottom: "x1a8lsjc",
			paddingInlineStart: "x1c1uobl",
			backgroundColor: "x1280gxy",
			$$css: !0
		},
		popupListsAssignModalTitle: {
			paddingTop: "xz9dl7a",
			paddingInlineStart: "x162tt16",
			paddingBottom: "xx6bls6",
			marginTop: "xdj266r",
			marginInlineEnd: "x14z9mp",
			marginBottom: "xat24cr",
			marginInlineStart: "x1lziwak",
			$$css: !0
		},
		popupListsAssignModalContents: {
			maxHeight: "xubnuyq",
			overflowY: "x1odjw0f",
			$$css: !0
		},
		popupListsAssignModalControls: {
			paddingTop: "x1cnzs8",
			paddingInlineEnd: "xv54qhq",
			paddingBottom: "xx6bls6",
			paddingInlineStart: "x106a9eq",
			$$css: !0
		},
		popupLabelList: {
			width: "x1l2rt3b",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			backgroundColor: "x1280gxy",
			$$css: !0
		},
		popupLabelListControls: {
			paddingTop: "x1p5oq8j",
			paddingBottom: "xwxc41k",
			paddingInlineEnd: "xv54qhq",
			$$css: !0
		},
		popupLabelListContents: {
			maxHeight: "xubnuyq",
			overflowY: "x1odjw0f",
			$$css: !0
		},
		popupLabelEdit: {
			width: "x1l2rt3b",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			transform: "x15j3iad",
			$$css: !0
		},
		popupLabelEditTitle: {
			marginTop: "xdj266r",
			marginInlineEnd: "x14z9mp",
			marginBottom: "xat24cr",
			marginInlineStart: "x1lziwak",
			$$css: !0
		},
		popupLabelEditControls: {
			paddingTop: "x1h678fw",
			paddingInlineEnd: "xvtqlqk",
			paddingBottom: "xv6tirj",
			paddingInlineStart: "xdx6fka",
			backgroundColor: "x1280gxy",
			$$css: !0
		},
		popupLabelEditContents: {
			backgroundColor: "x1280gxy",
			$$css: !0
		},
		popupLabelChooseColor: {
			width: "x14atkfc",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			transform: "x15j3iad",
			$$css: !0
		},
		popupLabelChooseColorTitle: {
			marginTop: "xdj266r",
			marginInlineEnd: "x14z9mp",
			marginBottom: "xat24cr",
			marginInlineStart: "x1lziwak",
			$$css: !0
		},
		popupLabelChooseColorControls: {
			paddingTop: "x1h678fw",
			paddingInlineEnd: "xvtqlqk",
			paddingBottom: "xv6tirj",
			paddingInlineStart: "xdx6fka",
			$$css: !0
		},
		popupComments: {
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			maxHeight: "x12f24lm",
			backgroundColor: "xntdpzj",
			$$css: !0
		},
		popupQuestions: {
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			minHeight: "x1xybu8v",
			maxHeight: "x12f24lm",
			width: "x1c4ky7w",
			$$css: !0
		},
		popupBotNut: {
			width: "xht4xr3",
			$$css: !0
		},
		popupEventCreation: {
			width: "x1peuizl",
			maxHeight: "xqbnct6",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			$$css: !0
		},
		popupAdAccountRecovery: {
			width: "x14rvwrp",
			$$css: !0
		},
		popupBusinessHoursControls: {
			paddingTop: "x1h678fw",
			paddingInlineEnd: "xvtqlqk",
			paddingBottom: "xv6tirj",
			paddingInlineStart: "xdx6fka",
			$$css: !0
		},
		popupBusinessCategoriesControls: {
			paddingTop: "xyinxu5",
			paddingInlineEnd: "xv54qhq",
			paddingBottom: "xx6bls6",
			paddingInlineStart: "xf7dkkf",
			$$css: !0
		},
		popupBusinessProfile: {
			maxHeight: "x9c89tr",
			overflowX: "x1plvlek",
			overflowY: "xryxfnj",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			$$css: !0
		},
		popupBusinessProfileTitle: {
			paddingTop: "x1xrf6ya",
			paddingInlineEnd: "xde1mab",
			paddingBottom: "xscbp6u",
			paddingInlineStart: "x1iw51ew",
			marginTop: "xdj266r",
			marginBottom: "xat24cr",
			marginInlineEnd: "x1trhqq4",
			marginInlineStart: "x18xomjl",
			$$css: !0
		},
		popupBusinessProfileBody: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			maxHeight: "xmz0i5r",
			minHeight: "x2lwn1j",
			$$css: !0
		},
		popupBusinessProfileContents: {
			flexGrow: "x1iyjqo2",
			overflowY: "x1odjw0f",
			backgroundColor: "x1280gxy",
			$$css: !0
		},
		popupBusinessProfileControls: {
			paddingInlineStart: "xb0esv5",
			paddingInlineEnd: "xyo0t3i",
			paddingLeft: null,
			paddingRight: null,
			paddingTop: "x1h678fw",
			paddingBottom: "xv6tirj",
			rowGap: "x1b8z93w",
			$$css: !0
		},
		popupMediaHub: {
			position: "x1n2onr6",
			maxWidth: "x15o75uv",
			width: "x8fmnwm",
			minWidth: "xu9qebc",
			minHeight: "x5mc7k8",
			maxHeight: "xjd8us4",
			height: "xkdlbmv",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			$$css: !0
		},
		popupMediaHubContents: {
			minHeight: "x5mc7k8",
			maxHeight: "xjd8us4",
			height: "x1id935b",
			$$css: !0
		},
		popupFlexGroupSafetyCheckCenterControls: {
			justifyContent: "xl56j7k",
			$$css: !0
		},
		popupReachoutTimelock: {
			width: "x3p9ev8",
			$$css: !0
		},
		popupIndividualNewChatMessageCapped: {
			width: "xvue9z",
			$$css: !0
		},
		popupAddOrUpdatePix: {
			marginTop: "xdj266r",
			marginInlineEnd: "x14z9mp",
			marginBottom: "xat24cr",
			marginInlineStart: "x1lziwak",
			width: "xtm0smt",
			height: "xt7dq6l",
			$$css: !0
		},
		popupPaymentsFlow: {
			width: "xr6pica",
			height: "xt7dq6l",
			$$css: !0
		},
		popupPaymentsConfirmDialog: {
			backgroundColor: "x1od0jb8",
			width: "x1l2rt3b",
			$$css: !0
		},
		popupCDS: {
			marginTop: "xdj266r",
			marginInlineEnd: "x14z9mp",
			marginBottom: "xat24cr",
			marginInlineStart: "x1lziwak",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			height: "xt7dq6l",
			$$css: !0
		},
		popupBBUpload: {
			boxSizing: "x1afcbsf",
			$$css: !0
		},
		popupBizToolsAdCreationNux: {
			width: "x1n2tayp",
			height: "x1shxdc5",
			paddingTop: "x1xrf6ya",
			paddingBottom: "xscbp6u",
			paddingInlineStart: "xb0esv5",
			paddingInlineEnd: "xyo0t3i",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		popupBizToolsAdCreationNuxControls: {
			rowGap: "x1b8z93w",
			paddingTop: "x1cnzs8",
			paddingBottom: "xx6bls6",
			$$css: !0
		},
		popupBizToolsAdCreationEmailOnboarding: {
			width: "x4onevt",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			$$css: !0
		},
		popupBizToolsAdCreationSuccess: {
			width: "x1n2tayp",
			paddingTop: "xl7twdi",
			paddingInlineEnd: "xyo0t3i",
			paddingBottom: "xvg22vi",
			paddingInlineStart: "xb0esv5",
			$$css: !0
		},
		popupBizToolsAdCreationSuccessControls: {
			paddingTop: "x14a8spa",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			paddingInlineEnd: "xyri2b",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		popupBillingWizard: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			maxHeight: "xqbnct6",
			width: "xw3w31c",
			paddingTop: "x1xrf6ya",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "xv6tirj",
			paddingInlineStart: "x1c1uobl",
			overflowY: "x1odjw0f",
			$$css: !0
		},
		popupPdfEdit: {
			backgroundColor: "x1od0jb8",
			width: "x1l2rt3b",
			height: "xpdbtf9",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			$$css: !0
		},
		popupPdfEditError: {
			backgroundColor: "x1od0jb8",
			width: "x1l2rt3b",
			minHeight: "x9l5fec",
			maxHeight: "x1p6zaud",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			$$css: !0
		},
		hardRefreshDialog: {
			width: "x1l2rt3b",
			height: "x1m3v4wt",
			borderStartStartRadius: "xuqqiot",
			borderStartEndRadius: "x1lkg3h2",
			borderEndEndRadius: "x17mbzc4",
			borderEndStartRadius: "xcouhex",
			$$css: !0
		},
		hardRefreshDialogControls: {
			paddingTop: "x1p57kb1",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			$$css: !0
		},
		popupEditAbout: {
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			maxHeight: "xqbnct6",
			$$css: !0
		},
		popupEditAboutBody: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			minHeight: "x2lwn1j",
			maxHeight: "xmz0i5r",
			$$css: !0
		},
		popupEditAboutContents: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			flexGrow: "x1iyjqo2",
			minHeight: "x2lwn1j",
			$$css: !0
		}
	}, h = {
		hidden: {
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		visible: {
			overflowX: "x1plvlek",
			overflowY: "xryxfnj",
			$$css: !0
		}
	};
	function y(t) {
		var n, a, i, l = t.ref, u = babelHelpers.objectWithoutPropertiesLoose(t, e), d = u.onDragChange, y = u.onDrop, C = u.overflow, b = C === void 0 ? "hidden" : C, v = m(r("WAWebVoipUiPopoutWindowContext")), S = v.isDocPip || v.isContextInPopoutWindow, R = _(null), L = _(null), E = _(), k = p(), I = r("justknobx")._("2976"), T = function(t) {
			var e;
			(e = R.current) == null || e.onDragOver(t);
		}, D = function(t) {
			var e;
			(e = R.current) == null || e.onDragStart(t);
		}, x = function(t) {
			var e;
			(e = R.current) == null || e.onDragEnd(t);
		}, $ = u.type === f.StatusViewerList && u.dimensions ? {
			height: u.dimensions.height + "px",
			width: u.dimensions.width + "px"
		} : null, P = [
			g.popup,
			h[b],
			g.popupMaterial,
			S && g.popupVoipPopoutWindowFix
		], N = [
			g.overlay,
			g.backdrop,
			g.backdropRefreshed,
			u.type === f.MediaHub && g.backdropMediaHub
		];
		u.cover === !0 && N.push(g.backdropCover), o("WAWebTimeSpentLoggingNavigation").useTsNavigation((n = u.tsNavigationData) != null ? n : { surface: "unknown" });
		var M, w, A, F;
		if (u.type != null) switch (u.type) {
			case f.Invite: {
				P.push(g.popupFlexInvite);
				break;
			}
			case f.InviteNew: {
				P.push(g.popupFlexInviteNew), F = g.popupFlexInviteNewControls;
				break;
			}
			case f.Upgrade: {
				F = g.popupFlexUpgradeControls;
				break;
			}
			case f.Box: {
				P.push(g.popupBox);
				break;
			}
			case f.BoxLarge: {
				P.push(g.popupBoxLarge);
				break;
			}
			case f.Flex: {
				P.push(g.popupFlex), F = g.popupFlexControls;
				break;
			}
			case f.Tower: {
				P.push(g.popupTower);
				break;
			}
			case f.TowerLarge: {
				P.push(g.popupTower, g.popupTowerLarge);
				break;
			}
			case f.Auto: {
				P.push(g.popupAuto), M = g.popupAutoTitle, w = g.popupAutoBody, A = g.popupAutoContents, F = g.popupAutoControls;
				break;
			}
			case f.ColumnButtons: {
				F = g.popupColumnButtonsControls;
				break;
			}
			case f.Multiline: {
				A = g.popupMultilineContents;
				break;
			}
			case f.StatusViewerList: {
				P.push(g.popupStatusViewerList), N.push(g.showOverStatus);
				break;
			}
			case f.Promote:
			case f.BotNut: {
				P.push(g.popupPromote), u.type === f.BotNut && P.push(g.popupBotNut), F = g.popupPromoteControls;
				break;
			}
			case f.CommandPalette: {
				P.push(g.popupCommandPalette);
				break;
			}
			case f.CommandPaletteV2: {
				P.push(g.popupCommandPalette), P.push(g.popupCommandPaletteV2);
				break;
			}
			case f.QuickReplies: {
				P.push(g.popupQuickReplies), M = g.popupQuickRepliesTitle, w = g.popupQuickRepliesBody, A = g.popupQuickRepliesContents, F = g.popupQuickRepliesControls;
				break;
			}
			case f.ChatAssignment: {
				P.push(g.popupChatAssignment);
				break;
			}
			case f.HistorySyncProgress: {
				P.push(g.popupHistorySyncProgress);
				break;
			}
			case f.DataSharing: {
				P.push(g.popupDataSharing);
				break;
			}
			case f.UpdatedDataSharing: {
				P.push(g.popupUpdatedDataSharing);
				break;
			}
			case f.GalaxyFlowResponsePopup: {
				P.push(g.popupGalaxyFlowResponse), F = g.popupGalaxyFlowResponseControls;
				break;
			}
			case f.MessageEdit: {
				P.push(g.popupMessageEdit), w = g.popupMessageEditBody, A = g.popupMessageEditContents;
				break;
			}
			case f.Guide: {
				P.push(g.popupGuidePopup), N.push(g.popupGuideBackdrop);
				break;
			}
			case f.StatusReport: {
				N.push(g.showOverStatus);
				break;
			}
			case f.MusicAttribution: {
				N.push(g.showOverStatus);
				break;
			}
			case f.LinkPopup: {
				N.push(g.showOverStatus);
				break;
			}
			case f.AiContentInfo: {
				N.push(g.showOverStatus);
				break;
			}
			case f.ListsAssignModal: {
				P.push(g.popupListsAssignModal), M = g.popupListsAssignModalTitle, A = g.popupListsAssignModalContents, F = g.popupListsAssignModalControls;
				break;
			}
			case f.LabelList: {
				P.push(g.popupLabelList), A = g.popupLabelListContents, F = g.popupLabelListControls;
				break;
			}
			case f.LabelEdit: {
				P.push(g.popupLabelEdit), M = g.popupLabelEditTitle, F = g.popupLabelEditControls, A = g.popupLabelEditContents;
				break;
			}
			case f.LabelChooseColor: {
				P.push(g.popupLabelChooseColor), M = g.popupLabelChooseColorTitle, F = g.popupLabelChooseColorControls;
				break;
			}
			case f.ForwardMediaWithCaption: {
				P.push(g.popupForwardMediaWithCaption), F = g.popupForwardMediaWithCaptionControls;
				break;
			}
			case f.MessageActionsModal: {
				P.push(g.popupMessageActionsModal), F = g.popupMessageActionsModalControls;
				break;
			}
			case f.DeleteNewsletter: {
				P.push(g.popupDeleteNewsletter), w = g.popupDeleteNewsletterBody, A = g.popupDeleteNewsletterContents;
				break;
			}
			case f.Questions: {
				P.push(g.popupQuestions);
				break;
			}
			case f.Comments: {
				P.push(g.popupComments);
				break;
			}
			case f.EventCreation: {
				P.push(g.popupEventCreation);
				break;
			}
			case f.Small: {
				P.push(g.popupSmall);
				break;
			}
			case f.ChannelCreation: {
				P.push(g.popupChannelCreation);
				break;
			}
			case f.ExportChat: break;
			case f.AutoWrap: {
				P.push(g.popupAutoWrap), A = g.popupAutoWrapContents;
				break;
			}
			case f.AdAccountRecovery: {
				P.push(g.popupAdAccountRecovery);
				break;
			}
			case f.BusinessHours: {
				P.push(g.popupAuto), M = g.popupAutoTitle, w = g.popupAutoBody, A = g.popupAutoContents, F = g.popupBusinessHoursControls;
				break;
			}
			case f.BusinessCategories: {
				P.push(g.popupAuto), M = g.popupAutoTitle, w = g.popupAutoBody, A = g.popupAutoContents, F = g.popupBusinessCategoriesControls;
				break;
			}
			case f.BusinessProfile: {
				P.push(g.popupBusinessProfile), M = g.popupBusinessProfileTitle, w = g.popupBusinessProfileBody, A = g.popupBusinessProfileContents, F = g.popupBusinessProfileControls;
				break;
			}
			case f.MediaHub: {
				P.push(g.popupMediaHub), A = g.popupMediaHubContents;
				break;
			}
			case f.GroupSafetyCheck: {
				F = g.popupFlexGroupSafetyCheckCenterControls;
				break;
			}
			case f.ReachoutTimelock: {
				P.push(g.popupReachoutTimelock);
				break;
			}
			case f.IndividualNewChatMessageCapped: {
				P.push(g.popupIndividualNewChatMessageCapped);
				break;
			}
			case f.AddOrUpdatePix: {
				P.push(g.popupAddOrUpdatePix);
				break;
			}
			case f.CDS: {
				P.push(g.popupCDS);
				break;
			}
			case f.BusinessBroadcastUploadModal: {
				P.push(g.popupBBUpload);
				break;
			}
			case f.PaymentsFlow: {
				P.push(g.popupPaymentsFlow);
				break;
			}
			case f.PaymentsConfirmDialog: {
				P.push(g.popupPaymentsConfirmDialog);
				break;
			}
			case f.BizToolsAdCreationNux: {
				P.push(g.popupBizToolsAdCreationNux), F = g.popupBizToolsAdCreationNuxControls;
				break;
			}
			case f.BizToolsAdCreationEmailOnboarding: {
				P.push(g.popupBizToolsAdCreationEmailOnboarding);
				break;
			}
			case f.BizToolsAdCreationSuccess: {
				P.push(g.popupBizToolsAdCreationSuccess), F = g.popupBizToolsAdCreationSuccessControls;
				break;
			}
			case f.BillingWizardDialog: {
				P.push(g.popupBillingWizard);
				break;
			}
			case f.PdfEdit: {
				P.push(g.popupPdfEdit);
				break;
			}
			case f.PdfEditError: {
				P.push(g.popupPdfEditError);
				break;
			}
			case f.HardRefresh: {
				P.push(g.hardRefreshDialog), F = g.hardRefreshDialogControls;
				break;
			}
			case f.EditAbout: {
				P.push(g.popupEditAbout), w = g.popupEditAboutBody, A = g.popupEditAboutContents;
				break;
			}
		}
		var O = u.actions != null ? c.jsx("div", babelHelpers.extends({}, (s || (s = r("stylex"))).props(g.popupControls, F, u.controlsStyle), { children: u.actions })) : null, B = u.title != null ? c.jsx("h1", {
			id: I ? k : void 0,
			"data-testid": "popup-title",
			className: (s || (s = r("stylex")))(g.popupTitle, M),
			children: u.title
		}) : null, W = function(t) {
			E.current = t.target;
		}, q = function(t) {
			t.target !== L.current || E.current !== L.current || (S ? (u.onOverlayClick == null || u.onOverlayClick(t), o("WAWebVoipPopoutModalManager").VoipPopoutModalManager.close()) : u.onOverlayClick ? u.onOverlayClick == null || u.onOverlayClick(t) : o("WAWebModalManager").ModalManager.getRef(function(e) {
				e != null && e.contains(L.current) && o("WAWebModalManager").ModalManager.close();
			}));
		}, U = function(t) {
			return o("WAWebL10NFbtTypeUtils").isStringOrFbt(t) ? t.toString() : "";
		}, V = (U(u.title) + " " + U(u.children)).trim(), H = (a = u.ariaLabel) != null ? a : V || void 0, G = I && u.title != null ? k : void 0, z = I && u.title == null ? H : void 0, j = I ? void 0 : H, K = c.jsx("div", babelHelpers.extends({
			ref: L,
			onClick: q,
			onMouseDown: W
		}, {
			0: { className: "x9f619 x78zum5 xdt5ytf x6s0dn4 xl56j7k xh8yej3 x1otje77 x1jn0hjm x1us19tq x1t137rt" },
			2: { className: "x9f619 x78zum5 xdt5ytf x6s0dn4 xl56j7k x1t137rt xh8yej3 x5yr21d xaaagfd x1t4djm1" },
			1: { className: "x9f619 x78zum5 xdt5ytf x6s0dn4 xl56j7k xh8yej3 x1otje77 x1us19tq x1t137rt xt7dq6l" },
			3: { className: "x9f619 x78zum5 xdt5ytf x6s0dn4 xl56j7k x1t137rt xh8yej3 xaaagfd x1t4djm1 xt7dq6l" }
		}[!!S << 1 | (u.type === f.EditAbout) << 0], {
			tabIndex: I ? -1 : void 0,
			role: "dialog",
			"aria-modal": "true",
			"aria-labelledby": G,
			"aria-label": z,
			children: c.jsx("div", {
				className: (s || (s = r("stylex")))(P),
				"data-animate-modal-popup": !0,
				style: $,
				ref: u.contentRef,
				"aria-label": j,
				"data-testid": (i = u.testid) != null ? i : "confirm-popup",
				children: c.jsxs("div", babelHelpers.extends({}, s.props(g.popupBody, w), {
					"data-animate-modal-body": !0,
					children: [
						B,
						c.jsx("div", babelHelpers.extends({ "data-testid": "popup-contents" }, s.props(g.popupContents, A), { children: u.children })),
						O
					]
				}))
			})
		}));
		return c.jsxs(r("WAWebCopyPasteCopyableArea.react"), {
			className: s(N),
			onDragOver: T,
			onDragStart: D,
			onDragEnd: x,
			ref: l,
			"data-animate-modal-backdrop": !0,
			children: [y && c.jsx(r("WAWebDragAndDrop.react"), {
				ref: R,
				disableFromWithin: !0,
				onDragChange: d,
				onDrop: y
			}), K]
		});
	}
	y.displayName = y.name + " [from " + i.id + "]", l.ModalTheme = f, l.Modal = y;
}), 98);
