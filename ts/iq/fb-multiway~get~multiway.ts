/** <iq type="get" xmlns="fb:multiway">. Replies with one of: Success, Error. */
export function buildMultiwaydMultiway(flowId?: string, binaryVersion: number, conferenceName?: string, serverInfoData?: string, transactionId?: number, messageType?: string): BinaryNode {
  return { tag: 'iq', attrs: { to: 's.whatsapp.net', xmlns: 'fb:multiway', type: 'get' }, content: [
      { tag: 'multiway', attrs: { flow_id: flowId, binary_version: binaryVersion, conference_name: conferenceName, server_info_data: serverInfoData, transaction_id: transactionId, message_type: messageType } },
    ] }
}