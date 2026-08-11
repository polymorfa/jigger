/** <iq type="set" xmlns="w:comms">. Replies with one of: Success, Error. */
export function buildInAppCommsEvent(promotionId: string, type: string, timestampSec: number, logdata: string): BinaryNode {
  return { tag: 'iq', attrs: { xmlns: 'w:comms', to: 's.whatsapp.net', type: 'set' }, content: [
      { tag: 'event', attrs: { promotion_id: promotionId, type: type, timestamp_sec: timestampSec, logdata: logdata } },
    ] }
}