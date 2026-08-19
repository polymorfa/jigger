/** <iq type="set" xmlns="md">. Replies with one of: NotifyCompanion, Error. */
export function buildMdCompanionHello(jid: string, shouldShowPushNotification?: string): BinaryNode {
  return { tag: 'iq', attrs: { xmlns: 'md', to: 's.whatsapp.net', type: 'set' }, content: [
      { tag: 'link_code_companion_reg', attrs: { jid: jid, stage: 'companion_hello', should_show_push_notification: shouldShowPushNotification } },
    ] }
}