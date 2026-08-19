__d("WAArmadilloApplication.pb", [
	"WAArmadilloXMA.pb",
	"WACommon.pb",
	"WAProtoConst"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = {
		ES_OPEN: 1,
		ES_CLOSE: 2
	}, c = {
		UNKNOWN: 0,
		NUDE: 1,
		NOT_NUDE: 2
	}, d = {
		TAKEDOWN: 0,
		RESTORE: 1
	}, m = {
		PAYMENT_UNKNOWN: -1,
		REQUEST_INITED: 4,
		REQUEST_DECLINED: 5,
		REQUEST_TRANSFER_INITED: 6,
		REQUEST_TRANSFER_COMPLETED: 7,
		REQUEST_TRANSFER_FAILED: 8,
		REQUEST_CANCELED: 9,
		REQUEST_EXPIRED: 10,
		TRANSFER_INITED: 11,
		TRANSFER_PENDING: 12,
		TRANSFER_PENDING_RECIPIENT_VERIFICATION: 13,
		TRANSFER_CANCELED: 14,
		TRANSFER_COMPLETED: 15,
		TRANSFER_NO_RECEIVER_CREDENTIAL_NO_RTS_PENDING_CANCELED: 16,
		TRANSFER_NO_RECEIVER_CREDENTIAL_NO_RTS_PENDING_OTHER: 17,
		TRANSFER_REFUNDED: 18,
		TRANSFER_PARTIAL_REFUND: 19,
		TRANSFER_CHARGED_BACK: 20,
		TRANSFER_EXPIRED: 21,
		TRANSFER_DECLINED: 22,
		TRANSFER_UNAVAILABLE: 23
	}, p = {
		SCREENSHOT_IMAGE: 1,
		SCREEN_RECORDING: 2
	}, _ = {
		PLAYED: 0,
		SCREENSHOT: 1,
		FORCE_DISABLE: 2
	}, f = {
		VIEW_ONCE: 0,
		ALLOW_REPLAY: 1,
		KEEP_IN_CHAT: 2
	}, g = {
		SMALL_LIKE: 1,
		MEDIUM_LIKE: 2,
		LARGE_LIKE: 3
	}, h = {}, y = {}, C = {}, b = {}, v = {}, S = {}, R = {}, L = {}, E = {}, k = {}, I = {}, T = {}, D = {}, x = {}, $ = {}, P = {}, N = {}, M = {}, w = {}, A = {}, F = {}, O = {}, B = {}, W = {}, q = {}, U = {}, V = {}, H = {}, G = {}, z = {}, j = {}, K = {}, Q = {};
	h.name = "Armadillo", h.internalSpec = {
		payload: [
			1,
			(e = o("WAProtoConst")).TYPES.MESSAGE,
			C
		],
		metadata: [
			2,
			e.TYPES.MESSAGE,
			y
		]
	}, y.name = "Armadillo$Metadata", y.internalSpec = {}, C.name = "Armadillo$Payload", C.internalSpec = {
		content: [
			1,
			e.TYPES.MESSAGE,
			B
		],
		applicationData: [
			2,
			e.TYPES.MESSAGE,
			L
		],
		signal: [
			3,
			e.TYPES.MESSAGE,
			v
		],
		subProtocol: [
			4,
			e.TYPES.MESSAGE,
			b
		],
		__oneofs__: { payload: [
			"content",
			"applicationData",
			"signal",
			"subProtocol"
		] }
	}, b.name = "Armadillo$SubProtocolPayload", b.internalSpec = { futureProof: [
		1,
		e.TYPES.ENUM,
		(s = o("WACommon.pb")).FUTURE_PROOF_BEHAVIOR
	] }, v.name = "Armadillo$Signal", v.internalSpec = {
		encryptedBackupsSecrets: [
			1,
			e.TYPES.MESSAGE,
			S
		],
		__oneofs__: { signal: ["encryptedBackupsSecrets"] }
	}, S.name = "Armadillo$Signal$EncryptedBackupsSecrets", S.internalSpec = {
		backupId: [1, e.TYPES.UINT64],
		serverDataId: [2, e.TYPES.UINT64],
		epoch: [
			3,
			e.FLAGS.REPEATED | e.TYPES.MESSAGE,
			R
		],
		tempOcmfClientState: [4, e.TYPES.BYTES],
		mailboxRootKey: [5, e.TYPES.BYTES],
		obliviousValidationToken: [6, e.TYPES.BYTES]
	}, R.name = "Armadillo$Signal$EncryptedBackupsSecrets$Epoch", R.internalSpec = {
		id: [1, e.TYPES.UINT64],
		anonId: [2, e.TYPES.BYTES],
		rootKey: [3, e.TYPES.BYTES],
		status: [
			4,
			e.TYPES.ENUM,
			u
		]
	}, L.name = "Armadillo$ApplicationData", L.internalSpec = {
		metadataSync: [
			1,
			e.TYPES.MESSAGE,
			O
		],
		aiBotResponse: [
			2,
			e.TYPES.MESSAGE,
			k
		],
		messageHistoryDocumentMessage: [
			3,
			e.TYPES.MESSAGE,
			E
		],
		__oneofs__: { applicationData: [
			"metadataSync",
			"aiBotResponse",
			"messageHistoryDocumentMessage"
		] }
	}, E.name = "Armadillo$ApplicationData$MessageHistoryDocumentMessage", E.internalSpec = { document: [
		1,
		e.TYPES.MESSAGE,
		s.SubProtocolSpec
	] }, k.name = "Armadillo$ApplicationData$AIBotResponseMessage", k.internalSpec = {
		summonToken: [1, e.TYPES.STRING],
		messageText: [2, e.TYPES.STRING],
		serializedExtras: [3, e.TYPES.STRING]
	}, I.name = "Armadillo$ApplicationData$MetadataSyncAction", I.internalSpec = {
		actionTimestamp: [1, e.TYPES.INT64],
		chatAction: [
			101,
			e.TYPES.MESSAGE,
			P
		],
		messageAction: [
			102,
			e.TYPES.MESSAGE,
			x
		],
		spectraAction: [
			103,
			e.TYPES.MESSAGE,
			D
		],
		attachmentInterventionAction: [
			104,
			e.TYPES.MESSAGE,
			T
		],
		__oneofs__: { actionType: [
			"chatAction",
			"messageAction",
			"spectraAction",
			"attachmentInterventionAction"
		] }
	}, T.name = "Armadillo$ApplicationData$MetadataSyncAction$SyncAttachmentInterventionAction", T.internalSpec = {
		messageKey: [
			1,
			e.TYPES.MESSAGE,
			s.MessageKeySpec
		],
		interventionType: [
			2,
			e.TYPES.ENUM,
			c
		]
	}, D.name = "Armadillo$ApplicationData$MetadataSyncAction$SyncSpectraAction", D.internalSpec = {
		key: [
			1,
			e.TYPES.MESSAGE,
			s.MessageKeySpec
		],
		actionType: [
			2,
			e.TYPES.ENUM,
			d
		],
		takedownActionId: [3, e.TYPES.INT64],
		config: [4, e.TYPES.STRING]
	}, x.name = "Armadillo$ApplicationData$MetadataSyncAction$SyncMessageAction", x.internalSpec = {
		key: [
			1,
			e.TYPES.MESSAGE,
			s.MessageKeySpec
		],
		messageDelete: [
			101,
			e.TYPES.MESSAGE,
			$
		],
		__oneofs__: { action: ["messageDelete"] }
	}, $.name = "Armadillo$ApplicationData$MetadataSyncAction$SyncMessageAction$ActionMessageDelete", $.internalSpec = {}, P.name = "Armadillo$ApplicationData$MetadataSyncAction$SyncChatAction", P.internalSpec = {
		chatId: [1, e.TYPES.STRING],
		chatArchive: [
			101,
			e.TYPES.MESSAGE,
			w
		],
		chatDelete: [
			102,
			e.TYPES.MESSAGE,
			M
		],
		chatRead: [
			103,
			e.TYPES.MESSAGE,
			N
		],
		__oneofs__: { action: [
			"chatArchive",
			"chatDelete",
			"chatRead"
		] }
	}, N.name = "Armadillo$ApplicationData$MetadataSyncAction$SyncChatAction$ActionChatRead", N.internalSpec = {
		messageRange: [
			1,
			e.TYPES.MESSAGE,
			F
		],
		read: [2, e.TYPES.BOOL]
	}, M.name = "Armadillo$ApplicationData$MetadataSyncAction$SyncChatAction$ActionChatDelete", M.internalSpec = { messageRange: [
		1,
		e.TYPES.MESSAGE,
		F
	] }, w.name = "Armadillo$ApplicationData$MetadataSyncAction$SyncChatAction$ActionChatArchive", w.internalSpec = {
		messageRange: [
			1,
			e.TYPES.MESSAGE,
			F
		],
		archived: [2, e.TYPES.BOOL]
	}, A.name = "Armadillo$ApplicationData$MetadataSyncAction$SyncActionMessage", A.internalSpec = {
		key: [
			1,
			e.TYPES.MESSAGE,
			s.MessageKeySpec
		],
		timestamp: [2, e.TYPES.INT64]
	}, F.name = "Armadillo$ApplicationData$MetadataSyncAction$SyncActionMessageRange", F.internalSpec = {
		lastMessageTimestamp: [1, e.TYPES.INT64],
		lastSystemMessageTimestamp: [2, e.TYPES.INT64],
		messages: [
			3,
			e.FLAGS.REPEATED | e.TYPES.MESSAGE,
			A
		]
	}, O.name = "Armadillo$ApplicationData$MetadataSyncNotification", O.internalSpec = { actions: [
		2,
		e.FLAGS.REPEATED | e.TYPES.MESSAGE,
		I
	] }, B.name = "Armadillo$Content", B.internalSpec = {
		commonSticker: [
			1,
			e.TYPES.MESSAGE,
			Q
		],
		screenshotAction: [
			3,
			e.TYPES.MESSAGE,
			G
		],
		extendedContentMessage: [
			4,
			e.TYPES.MESSAGE,
			o("WAArmadilloXMA.pb").ExtendedContentMessageSpec
		],
		ravenMessage: [
			5,
			e.TYPES.MESSAGE,
			K
		],
		ravenActionNotifMessage: [
			6,
			e.TYPES.MESSAGE,
			j
		],
		extendedMessageContentWithSear: [
			7,
			e.TYPES.MESSAGE,
			z
		],
		imageGalleryMessage: [
			8,
			e.TYPES.MESSAGE,
			H
		],
		paymentsTransactionMessage: [
			10,
			e.TYPES.MESSAGE,
			W
		],
		bumpExistingMessage: [
			11,
			e.TYPES.MESSAGE,
			V
		],
		noteReplyMessage: [
			13,
			e.TYPES.MESSAGE,
			U
		],
		ravenMessageMsgr: [
			14,
			e.TYPES.MESSAGE,
			K
		],
		networkVerificationMessage: [
			15,
			e.TYPES.MESSAGE,
			q
		],
		__oneofs__: { content: [
			"commonSticker",
			"screenshotAction",
			"extendedContentMessage",
			"ravenMessage",
			"ravenActionNotifMessage",
			"extendedMessageContentWithSear",
			"imageGalleryMessage",
			"paymentsTransactionMessage",
			"bumpExistingMessage",
			"noteReplyMessage",
			"ravenMessageMsgr",
			"networkVerificationMessage"
		] }
	}, W.name = "Armadillo$Content$PaymentsTransactionMessage", W.internalSpec = {
		transactionId: [1, e.TYPES.UINT64],
		amount: [2, e.TYPES.STRING],
		currency: [3, e.TYPES.STRING],
		paymentStatus: [
			4,
			e.TYPES.ENUM,
			m
		],
		extendedContentMessage: [
			5,
			e.TYPES.MESSAGE,
			o("WAArmadilloXMA.pb").ExtendedContentMessageSpec
		]
	}, q.name = "Armadillo$Content$NetworkVerificationMessage", q.internalSpec = { codeText: [1, e.TYPES.STRING] }, U.name = "Armadillo$Content$NoteReplyMessage", U.internalSpec = {
		noteId: [1, e.TYPES.STRING],
		noteText: [
			2,
			e.TYPES.MESSAGE,
			s.MessageTextSpec
		],
		noteTimestampMs: [3, e.TYPES.INT64],
		textContent: [
			4,
			e.TYPES.MESSAGE,
			s.MessageTextSpec
		],
		stickerContent: [
			5,
			e.TYPES.MESSAGE,
			s.SubProtocolSpec
		],
		videoContent: [
			6,
			e.TYPES.MESSAGE,
			s.SubProtocolSpec
		],
		__oneofs__: { noteReplyContent: [
			"textContent",
			"stickerContent",
			"videoContent"
		] }
	}, V.name = "Armadillo$Content$BumpExistingMessage", V.internalSpec = { key: [
		1,
		e.TYPES.MESSAGE,
		s.MessageKeySpec
	] }, H.name = "Armadillo$Content$ImageGalleryMessage", H.internalSpec = { images: [
		1,
		e.FLAGS.REPEATED | e.TYPES.MESSAGE,
		s.SubProtocolSpec
	] }, G.name = "Armadillo$Content$ScreenshotAction", G.internalSpec = { screenshotType: [
		1,
		e.TYPES.ENUM,
		p
	] }, z.name = "Armadillo$Content$ExtendedContentMessageWithSear", z.internalSpec = {
		searId: [1, e.TYPES.STRING],
		payload: [2, e.TYPES.BYTES],
		nativeUrl: [3, e.TYPES.STRING],
		searAssociatedMessage: [
			4,
			e.TYPES.MESSAGE,
			s.SubProtocolSpec
		],
		searSentWithMessageId: [5, e.TYPES.STRING]
	}, j.name = "Armadillo$Content$RavenActionNotifMessage", j.internalSpec = {
		key: [
			1,
			e.TYPES.MESSAGE,
			s.MessageKeySpec
		],
		actionTimestamp: [2, e.TYPES.INT64],
		actionType: [
			3,
			e.TYPES.ENUM,
			_
		]
	}, K.name = "Armadillo$Content$RavenMessage", K.internalSpec = {
		ephemeralType: [
			1,
			e.TYPES.ENUM,
			f
		],
		imageMessage: [
			2,
			e.TYPES.MESSAGE,
			s.SubProtocolSpec
		],
		videoMessage: [
			3,
			e.TYPES.MESSAGE,
			s.SubProtocolSpec
		],
		__oneofs__: { mediaContent: ["imageMessage", "videoMessage"] }
	}, Q.name = "Armadillo$Content$CommonSticker", Q.internalSpec = { stickerType: [
		1,
		e.TYPES.ENUM,
		g
	] }, l.ARMADILLO_SIGNAL_ENCRYPTED_BACKUPS_SECRETS_EPOCH_EPOCH_STATUS = u, l.ARMADILLO_APPLICATION_DATA_METADATA_SYNC_ACTION_SYNC_ATTACHMENT_INTERVENTION_ACTION_INTERVENTION_TYPE = c, l.ARMADILLO_APPLICATION_DATA_METADATA_SYNC_ACTION_SYNC_SPECTRA_ACTION_SPECTRA_ACTION_TYPE = d, l.ARMADILLO_CONTENT_PAYMENTS_TRANSACTION_MESSAGE_PAYMENT_STATUS = m, l.ARMADILLO_CONTENT_SCREENSHOT_ACTION_SCREENSHOT_TYPE = p, l.ARMADILLO_CONTENT_RAVEN_ACTION_NOTIF_MESSAGE_ACTION_TYPE = _, l.ARMADILLO_CONTENT_RAVEN_MESSAGE_EPHEMERAL_TYPE = f, l.ARMADILLO_CONTENT_COMMON_STICKER_STICKER_TYPE = g, l.ArmadilloSpec = h, l.Armadillo$MetadataSpec = y, l.Armadillo$PayloadSpec = C, l.Armadillo$SubProtocolPayloadSpec = b, l.Armadillo$SignalSpec = v, l.Armadillo$Signal$EncryptedBackupsSecretsSpec = S, l.Armadillo$Signal$EncryptedBackupsSecrets$EpochSpec = R, l.Armadillo$ApplicationDataSpec = L, l.Armadillo$ApplicationData$MessageHistoryDocumentMessageSpec = E, l.Armadillo$ApplicationData$AIBotResponseMessageSpec = k, l.Armadillo$ApplicationData$MetadataSyncActionSpec = I, l.Armadillo$ApplicationData$MetadataSyncAction$SyncAttachmentInterventionActionSpec = T, l.Armadillo$ApplicationData$MetadataSyncAction$SyncSpectraActionSpec = D, l.Armadillo$ApplicationData$MetadataSyncAction$SyncMessageActionSpec = x, l.Armadillo$ApplicationData$MetadataSyncAction$SyncMessageAction$ActionMessageDeleteSpec = $, l.Armadillo$ApplicationData$MetadataSyncAction$SyncChatActionSpec = P, l.Armadillo$ApplicationData$MetadataSyncAction$SyncChatAction$ActionChatReadSpec = N, l.Armadillo$ApplicationData$MetadataSyncAction$SyncChatAction$ActionChatDeleteSpec = M, l.Armadillo$ApplicationData$MetadataSyncAction$SyncChatAction$ActionChatArchiveSpec = w, l.Armadillo$ApplicationData$MetadataSyncAction$SyncActionMessageSpec = A, l.Armadillo$ApplicationData$MetadataSyncAction$SyncActionMessageRangeSpec = F, l.Armadillo$ApplicationData$MetadataSyncNotificationSpec = O, l.Armadillo$ContentSpec = B, l.Armadillo$Content$PaymentsTransactionMessageSpec = W, l.Armadillo$Content$NetworkVerificationMessageSpec = q, l.Armadillo$Content$NoteReplyMessageSpec = U, l.Armadillo$Content$BumpExistingMessageSpec = V, l.Armadillo$Content$ImageGalleryMessageSpec = H, l.Armadillo$Content$ScreenshotActionSpec = G, l.Armadillo$Content$ExtendedContentMessageWithSearSpec = z, l.Armadillo$Content$RavenActionNotifMessageSpec = j, l.Armadillo$Content$RavenMessageSpec = K, l.Armadillo$Content$CommonStickerSpec = Q;
}), 98);
